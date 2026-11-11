import {useCallback, useEffect, useState, type CSSProperties} from 'react'
import {useEditState, useFormValue, type FieldProps} from 'sanity'
import {styles} from './panelStyles'

/**
 * The buttons on the "Google reviews" page: a dry run (shows what the sync
 * would change, writes nothing) and a real sync. Both call the app's
 * `/api/google-reviews` route, the same one the daily cron calls.
 *
 * That route wants the sync secret in a header. The secret is deliberately not
 * in the dataset (a public dataset is readable by anyone with the project id)
 * nor in the studio bundle; the editor pastes it once and it stays in this
 * browser's localStorage.
 *
 * The route reads the PUBLISHED settings, so unpublished changes are flagged.
 */

const SECRET_KEY = 'googleReviewsSyncSecret'

type ReviewResult = {
  id: string
  author: string
  rating: number
  publishedAt: string | null
  text: string
  action: 'create' | 'update' | 'unchanged'
}

type SyncResult = {
  ok: boolean
  dryRun?: boolean
  message?: string
  place?: {name: string | null; rating: number | null; userRatingCount: number | null}
  reviews?: ReviewResult[]
  created?: number
  updated?: number
  unchanged?: number
}

const cell: CSSProperties = {
  padding: '6px 8px',
  borderBottom: '1px solid var(--card-border-color, #e5e7eb)',
  textAlign: 'left',
  verticalAlign: 'top',
}

function readSecret() {
  try {
    return window.localStorage.getItem(SECRET_KEY) ?? ''
  } catch {
    return ''
  }
}

export function GoogleReviewsSync(props: FieldProps) {
  const siteUrl = (useFormValue(['siteUrl']) as string | undefined) || process.env.SANITY_STUDIO_SITE_URL
  const {draft} = useEditState('googleReviews', 'googleReviews')
  const [secret, setSecret] = useState('')
  const [busy, setBusy] = useState<'dry' | 'sync' | null>(null)
  const [result, setResult] = useState<SyncResult | null>(null)

  useEffect(() => setSecret(readSecret()), [])

  const saveSecret = (value: string) => {
    setSecret(value)
    try {
      window.localStorage.setItem(SECRET_KEY, value)
    } catch {
      // Private mode: the secret just lasts for this page view.
    }
  }

  const run = useCallback(
    async (dryRun: boolean) => {
      if (!siteUrl) return
      setBusy(dryRun ? 'dry' : 'sync')
      setResult(null)
      try {
        const url = new URL('/api/google-reviews', siteUrl)
        url.searchParams.set('trigger', 'studio')
        if (dryRun) url.searchParams.set('dryRun', '1')
        const response = await fetch(url, {method: 'POST', headers: {'x-sync-secret': secret}})
        const body = (await response.json().catch(() => null)) as SyncResult | null
        setResult(body ?? {ok: false, message: `Unexpected response (HTTP ${response.status}).`})
      } catch (error) {
        setResult({ok: false, message: `Could not reach ${siteUrl}: ${error instanceof Error ? error.message : error}`})
      } finally {
        setBusy(null)
      }
    },
    [secret, siteUrl],
  )

  return (
    <div style={{display: 'grid', gap: 12}}>
      <div style={{fontWeight: 600, fontSize: 14}}>{props.title}</div>
      <div style={styles.intro}>
        Fetches the score, the number of reviews and the (at most 5) most relevant reviews from
        Google. New reviews are added, existing ones updated; nothing is ever deleted. A dry run
        shows what would change without saving anything.
      </div>

      <label style={{display: 'grid', gap: 6, fontSize: 13}}>
        Sync secret (GOOGLE_REVIEWS_SYNC_SECRET, kept in this browser only)
        <input
          type='password'
          value={secret}
          onChange={(event) => saveSecret(event.currentTarget.value)}
          autoComplete='off'
          style={{
            padding: 8,
            borderRadius: 4,
            border: '1px solid var(--card-border-color, #c9cdd4)',
            background: 'transparent',
            color: 'inherit',
          }}
        />
      </label>

      {!siteUrl ? <div style={styles.notice}>Fill in the website address (below) and publish first.</div> : null}
      {draft ? (
        <div style={styles.notice}>There are unpublished changes. The sync uses the published settings: publish first.</div>
      ) : null}

      <div style={{...styles.row, margin: 0}}>
        <button type='button' style={styles.secondary} disabled={!siteUrl || !secret || busy !== null} onClick={() => run(true)}>
          {busy === 'dry' ? 'Working…' : 'Dry run'}
        </button>
        <button type='button' style={styles.button} disabled={!siteUrl || !secret || busy !== null} onClick={() => run(false)}>
          {busy === 'sync' ? 'Working…' : 'Sync now'}
        </button>
      </div>

      {result ? (
        <div style={{...styles.notice, borderColor: result.ok ? 'var(--card-border-color)' : '#e5484d'}}>
          <div>
            <b>{result.ok ? (result.dryRun ? 'Dry run done' : 'Synced') : 'Failed'}</b>
            {result.message ? ` — ${result.message}` : null}
          </div>
          {result.place ? (
            <div>
              {result.place.name}: {result.place.rating ?? '–'} ★ from {result.place.userRatingCount ?? '–'} reviews.{' '}
              {result.created ?? 0} new, {result.updated ?? 0} updated, {result.unchanged ?? 0} unchanged
              {result.dryRun ? ' (nothing saved)' : ''}.
            </div>
          ) : null}
          {result.reviews?.length ? (
            <table style={{width: '100%', borderCollapse: 'collapse', marginTop: 12, fontSize: 13}}>
              <thead>
                <tr>
                  <th style={cell}>Action</th>
                  <th style={cell}>Name</th>
                  <th style={cell}>Score</th>
                  <th style={cell}>Date</th>
                  <th style={cell}>Review</th>
                </tr>
              </thead>
              <tbody>
                {result.reviews.map((review) => (
                  <tr key={review.id}>
                    <td style={cell}>{review.action}</td>
                    <td style={cell}>{review.author}</td>
                    <td style={cell}>{'★'.repeat(review.rating)}</td>
                    <td style={cell}>{review.publishedAt ? new Date(review.publishedAt).toLocaleDateString('nl-NL') : ''}</td>
                    <td style={cell}>{review.text.length > 140 ? `${review.text.slice(0, 140)}…` : review.text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
