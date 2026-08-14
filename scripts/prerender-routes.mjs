// Post-build step: GitHub Pages resolves a path by looking for a matching static file, and only
// falls back to public/404.html (the SPA-redirect shim) when nothing matches. Without this, `/cv`
// 404s on every direct hit or hard refresh — the redirect shim never even runs — so it can't be
// indexed and any shared /cv link is broken for humans too.
//
// This writes a real dist/cv/index.html: the same app shell, with the home page's <title>/
// description/canonical/og:title/og:description/og:url swapped in place for this route, so
// crawlers that don't execute JS still see correct per-route metadata. Keep ROUTES in sync with
// `PAGE_META` in src/constants/seo.ts.
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const distDir = path.join(rootDir, 'dist')

const SITE_URL = 'https://magnhildmyskja.no'

const ROUTES = {
    cv: {
        title: 'CV | Magnhild Myskja',
        description: 'Se Magnhild Myskjas CV med arbeidserfaring og utdanning innen kommunikasjon og digitale medier.',
    },
}

function replaceTag(html, matcher, replacement, label) {
    if (!matcher.test(html)) {
        throw new Error(
            `prerender-routes: expected to find ${label} in dist/index.html but didn't — did its markup change?`
        )
    }
    return html.replace(matcher, replacement)
}

const shell = await readFile(path.join(distDir, 'index.html'), 'utf8')

for (const [route, meta] of Object.entries(ROUTES)) {
    const canonical = `${SITE_URL}/${route}`

    let html = shell
    html = replaceTag(html, /<title>[^<]*<\/title>/, `<title>${meta.title}</title>`, '<title>')
    html = replaceTag(
        html,
        /<meta[^>]*name="description"[^>]*\/>/,
        `<meta name="description" content="${meta.description}" />`,
        'meta[name=description]'
    )
    html = replaceTag(
        html,
        /<link[^>]*rel="canonical"[^>]*\/>/,
        `<link rel="canonical" href="${canonical}" />`,
        'link[rel=canonical]'
    )
    html = replaceTag(
        html,
        /<meta[^>]*property="og:title"[^>]*\/>/,
        `<meta property="og:title" content="${meta.title}" />`,
        'meta[property=og:title]'
    )
    html = replaceTag(
        html,
        /<meta[^>]*property="og:description"[^>]*\/>/,
        `<meta property="og:description" content="${meta.description}" />`,
        'meta[property=og:description]'
    )
    html = replaceTag(
        html,
        /<meta[^>]*property="og:url"[^>]*\/>/,
        `<meta property="og:url" content="${canonical}" />`,
        'meta[property=og:url]'
    )

    const outDir = path.join(distDir, route)
    await mkdir(outDir, { recursive: true })
    await writeFile(path.join(outDir, 'index.html'), html)
    console.log(`Prerendered ${canonical} -> dist/${route}/index.html`)
}
