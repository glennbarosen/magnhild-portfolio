import { SITE_CONFIG } from '@/constants/seo'

interface SEOProps {
    title?: string
    description?: string
    canonical?: string
    noIndex?: boolean
}

// React 19 hoists <title>/<meta>/<link> rendered anywhere in the tree into <head> automatically —
// no provider needed. The JSON-LD <script> isn't hoisted, but ld+json is valid anywhere in the
// document, so it renders in place.
export function SEO({
    title = SITE_CONFIG.title,
    description = SITE_CONFIG.description,
    canonical,
    noIndex = false,
}: SEOProps) {
    const url = canonical || SITE_CONFIG.url

    const personJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Magnhild Lundebrekke Myskja',
        alternateName: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        image: SITE_CONFIG.ogImage,
        jobTitle: 'Kommunikasjonsrådgiver',
        description: SITE_CONFIG.description,
        email: `mailto:${SITE_CONFIG.email}`,
        sameAs: [SITE_CONFIG.linkedin],
        knowsLanguage: ['nb-NO'],
        address: { '@type': 'PostalAddress', addressCountry: 'NO' },
    }

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            {noIndex && <meta name="robots" content="noindex,nofollow" />}

            {/* Open Graph */}
            <meta property="og:type" content="profile" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={SITE_CONFIG.name} />
            <meta property="og:locale" content={SITE_CONFIG.locale} />
            <meta property="og:image" content={SITE_CONFIG.ogImage} />
            <meta property="og:image:width" content={String(SITE_CONFIG.ogImageWidth)} />
            <meta property="og:image:height" content={String(SITE_CONFIG.ogImageHeight)} />
            <meta property="og:image:alt" content={SITE_CONFIG.name} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={SITE_CONFIG.ogImage} />

            <link rel="canonical" href={url} />

            <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
        </>
    )
}
