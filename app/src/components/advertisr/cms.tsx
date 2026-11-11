import { Fragment, type ReactNode } from 'react';
import { resolveHref, type SanityLink } from '@/lib/links';
import { imageSrc, type SanityImage } from '@/sanity/image';
import { Count } from './ui';

/** Helpers that turn Sanity field values into what the design components take. */

type Span = { _key?: string; text?: string; marks?: string[] | null };
type Block = { _key?: string; children?: Span[] | null };
export type Inline = Block[] | null | undefined;

/**
 * An `inlineText` value as inline markup: `em` and `strong` marks become
 * `<em>`/`<strong>`, nothing else. Only the first paragraph is used — the
 * field is one line by design (headings, KPI lines, quotes).
 */
export function Rich({ value }: { value: Inline }) {
  const spans = value?.[0]?.children ?? [];
  return (
    <>
      {spans.map((s, i) => {
        let node: ReactNode = s.text;
        if (s.marks?.includes('strong')) node = <strong>{node}</strong>;
        if (s.marks?.includes('em')) node = <em>{node}</em>;
        return <Fragment key={s._key ?? i}>{node}</Fragment>;
      })}
    </>
  );
}

/** The plain text of an `inlineText` value, for alt text, keys and metadata. */
export function plain(value: Inline) {
  return (value?.[0]?.children ?? []).map((s) => s.text ?? '').join('');
}

export type Img = (SanityImage & { alt?: string | null }) | null | undefined;

/** A Sanity image as `{src, alt}` at `width`, or null when the field is empty. */
export function pic(image: Img, width: number) {
  const src = imageSrc(image ?? null, width);
  return src ? { src, alt: image?.alt ?? '' } : null;
}

/** A `cta` field as `{label, href}`; `fallback` fills what the editor left empty. */
export function btn(link: SanityLink, fallback?: { label?: string; href?: string }) {
  const label = link?.label || fallback?.label || '';
  const href = resolveHref(link) || fallback?.href || '';
  return label && href ? { label, href } : null;
}

/**
 * A figure like "€500K+" with its first number counting up on screen
 * (`<Count>`); "5,0" style decimals and text-only values stay as they are.
 */
export function Animated({ value }: { value?: string | null }) {
  const m = /^(\D*?)(\d+)(.*)$/.exec(value ?? '');
  if (!m || /^[.,]\d/.test(m[3])) return <>{value}</>;
  return (
    <>
      {m[1]}
      <Count to={Number(m[2])} />
      {m[3]}
    </>
  );
}
