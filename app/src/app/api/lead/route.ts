import { NextResponse } from 'next/server';
import { renderFormMail } from '@/lib/form-mail';
import { missingMailMessage, resolveMailSettings, sendMail } from '@/lib/mail';

/**
 * The Advertisr. lead form ("Ontvang je gratis groeiplan"), posted by
 * <LeadForm>. Fixed fields, so the allow-list is this table: anything else
 * the browser sends is ignored. Mail settings come from the env (see
 * `.env.example` → Forms), the same provider setup `/api/submit-form` uses.
 */
const FIELDS = [
  ['name', 'Naam', 120],
  ['company', 'Bedrijfsnaam', 160],
  ['email', 'E-mailadres', 200],
  ['phone', 'Telefoonnummer', 40],
  ['website', 'Website', 200],
  ['message', 'Grootste marketingvraag', 4000],
  ['interesse', 'Interesse', 80],
  ['page', 'Verstuurd vanaf', 200],
] as const;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  if (!form) return NextResponse.json({ error: 'Ongeldig verzoek.' }, { status: 400 });

  // Honeypot: real visitors never see or fill this field.
  if (String(form.get('fax') ?? '')) return NextResponse.json({ ok: true });

  const values = Object.fromEntries(
    FIELDS.map(([key, , max]) => [
      key,
      String(form.get(key) ?? '')
        .trim()
        .slice(0, max),
    ]),
  ) as Record<(typeof FIELDS)[number][0], string>;

  if (!values.name || !EMAIL.test(values.email)) {
    return NextResponse.json({ error: 'Vul je naam en een geldig e-mailadres in.' }, { status: 422 });
  }

  const settings = resolveMailSettings(null);
  if (!settings.transport || !settings.adminEmail || !settings.fromEmail) {
    const missing = settings.adminEmail ? settings.missing : [...settings.missing, 'CONTACT_ADMIN_EMAIL'];
    console.error(missingMailMessage(settings.provider, missing));
    return NextResponse.json({ error: 'Versturen lukt nu niet. Mail ons op info@advertisr.nl.' }, { status: 503 });
  }

  const title = `Nieuwe groeiplan-aanvraag van ${values.name}`;
  const { html, text } = renderFormMail({
    title,
    intro: 'Via het formulier op de website.',
    answers: FIELDS.filter(([key]) => values[key]).map(([key, label]) => ({ label, value: values[key] })),
    branding: { primaryColor: '#FF3951', textColor: '#0E0E12', footer: 'Advertisr.' },
  });

  try {
    await sendMail(settings.transport, {
      fromEmail: settings.fromEmail,
      fromName: settings.fromName,
      to: [settings.adminEmail],
      replyTo: values.email,
      subject: title,
      html,
      text,
      attachments: [],
    });
  } catch (error) {
    console.error('Lead mail failed', error);
    return NextResponse.json({ error: 'Versturen lukt nu niet. Mail ons op info@advertisr.nl.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
