/** The form documents and Form settings. No Sanity client in here, so `check:form` can import it. */
const field = (name: string, label: string, type: string, o: Record<string, unknown> = {}) => ({ name, label, type, ...o });
const hidden = [
  field('interesse', 'Interesse', 'hidden', { defaultValue: '{{interesse}}' }),
  field('page', 'Verstuurd vanaf', 'hidden', { defaultValue: '{{path}}' }),
];
const contactFields = [
  field('name', 'Naam', 'text', { width: 'half', isRequired: true, placeholder: 'Voor- en achternaam' }),
  field('company', 'Bedrijfsnaam', 'text', { width: 'half', placeholder: 'Jouw bedrijf' }),
  field('email', 'E-mailadres', 'email', { width: 'half', isRequired: true, placeholder: 'jij@bedrijf.nl' }),
  field('phone', 'Telefoonnummer', 'tel', { width: 'half', placeholder: '06 - 12345678' }),
  field('website', 'Website', 'text', { placeholder: 'www.jouwbedrijf.nl' }),
];
const message = (label: string, placeholder: string) => field('message', label, 'textarea', { placeholder });
const groeiplanCopy = {
  mode: 'simple',
  note: 'Geen spam. Je gegevens worden alleen gebruikt om je groeiplan voor te bereiden.',
  successTitle: 'Bedankt, we hebben je aanvraag.',
  successBody: 'We nemen binnen 1 werkdag contact met je op.',
  mailSubject: 'Nieuwe groeiplan-aanvraag',
};

export const forms = [
  {
    _id: 'form-groeiplan',
    title: 'Groeiplan',
    ...groeiplanCopy,
    submitButtonText: 'Ontvang mijn groeiplan',
    fields: [...contactFields, message('Grootste marketingvraag', 'Waar wil je mee groeien? Meer leads, meer omzet, meer naamsbekendheid...'), ...hidden],
  },
  {
    _id: 'form-groeiplan-landing',
    title: 'Groeiplan (landingspagina)',
    ...groeiplanCopy,
    submitButtonText: 'Ontvang mijn gratis groeiplan',
    fields: [...contactFields, message('Grootste marketingvraag', 'Waar wil je meer klanten uit halen? Meta Ads, Google Ads, SEO...'), ...hidden],
  },
  {
    _id: 'form-groeiplan-kort',
    title: 'Groeiplan kort (zonder vraag)',
    ...groeiplanCopy,
    submitButtonText: 'Ontvang mijn gratis groeiplan',
    fields: [...contactFields, ...hidden],
  },
  {
    _id: 'form-contact',
    title: 'Contact',
    ...groeiplanCopy,
    submitButtonText: 'Verstuur bericht',
    note: 'Geen spam. Je gegevens worden alleen gebruikt om contact met je op te nemen.',
    mailSubject: 'Nieuw bericht via de contactpagina',
    fields: [...contactFields, message('Waar kunnen we mee helpen?', 'Vertel kort waar je tegenaan loopt of wat je zoekt...'), ...hidden],
  },
  {
    _id: 'form-nieuwsbrief',
    title: 'Nieuwsbrief',
    mode: 'simple',
    submitButtonText: 'Aanmelden',
    successTitle: 'Bedankt, je staat op de lijst.',
    mailSubject: 'Nieuwe aanmelding nieuwsbrief',
    fields: [field('email', 'E-mailadres', 'email', { isRequired: true, placeholder: 'jij@bedrijf.nl' }), ...hidden],
  },
].map((form) => ({
  _type: 'form',
  ...form,
  fields: form.fields.map((f, i) => ({ _type: 'formField', _key: `f${i}`, width: 'full', isRequired: false, ...f })),
}));

export const formSettings = {
  _id: 'formGeneralSettings',
  _type: 'formGeneralSettings',
  adminEmail: 'info@advertisr.nl',
  fromName: 'Advertisr.',
  confirmationSubject: 'Nieuw bericht via de website',
  confirmationMessage: 'Via het formulier op de website.',
  primaryColor: '#FF3951',
  textColor: '#0E0E12',
  captchaProvider: 'none',
  formText: {
    submitButtonText: 'Versturen',
    nextButtonText: 'Volgende',
    backButtonText: 'Vorige',
    sendingText: 'Versturen…',
    stepCounter: 'Stap {{step}} van {{total}}',
    recaptchaPrompt: 'Bevestig even dat je geen robot bent.',
    recaptchaFailed: 'De spamcontrole is mislukt. Probeer het opnieuw.',
    sendFailed: 'Versturen lukt nu niet. Probeer het later opnieuw of mail ons op info@advertisr.nl.',
    requiredField: '"{{label}}" is verplicht.',
    fileTooLarge: 'Bestand "{{file}}" is groter dan 5 MB.',
    emptyForm: 'Het formulier was leeg.',
  },
};
