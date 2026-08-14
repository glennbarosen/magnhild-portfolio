import { SOCIAL_LINKS } from './navigation'

export const SITE_CONFIG = {
    name: 'Magnhild Myskja',
    title: 'Magnhild Myskja | Kommunikasjonsrådgiver',
    description:
        'Kommunikasjonsrådgiver og innholdsprodusent basert i Norge. Spesialisert på strategisk kommunikasjon og digitale medier.',
    url: 'https://magnhildmyskja.no',
    locale: 'nb_NO',
    ogImage: 'https://magnhildmyskja.no/og-image.jpg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    linkedin: SOCIAL_LINKS.LINKEDIN,
    email: SOCIAL_LINKS.EMAIL,
} as const

export const PAGE_META = {
    home: {
        title: SITE_CONFIG.title,
        description: SITE_CONFIG.description,
    },
    cv: {
        title: 'CV | Magnhild Myskja',
        description: 'Se Magnhild Myskjas CV med arbeidserfaring og utdanning innen kommunikasjon og digitale medier.',
    },
} as const
