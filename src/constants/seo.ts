export const SITE_CONFIG = {
  name: 'Magnhild Myskja',
  title: 'Magnhild Myskja | Kommunikasjonsrådgiver',
  description: 'Kommunikasjonsrådgiver og innholdsprodusent basert i Norge. Spesialisert på strategisk kommunikasjon og digitale medier.',
  url: 'https://magnhildmyskja.no',
  locale: 'nb_NO',
} as const;

export const PAGE_META = {
  home: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  cv: {
    title: 'CV | Magnhild Myskja',
    description: 'Se Magnhild Myskjas CV med arbeidserfaring og utdanning innen kommunikasjon og digitale medier.',
  },
} as const;
