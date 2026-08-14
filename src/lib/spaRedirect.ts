/**
 * Decodes the GitHub Pages SPA-redirect scheme written by `public/404.html`:
 * `?p=<path>&q=<query>` with literal `&` escaped as `~and~` inside each part.
 * Returns the real path (+ query + hash) to restore via `history.replaceState`,
 * or null if `search` isn't in that scheme.
 */
export function decodeSpaRedirect(search: string, hash: string): string | null {
    if (!search.startsWith('?p=')) return null

    const raw = search.slice(3)
    const qIndex = raw.indexOf('&q=')
    const rawPath = qIndex === -1 ? raw : raw.slice(0, qIndex)
    const rawQuery = qIndex === -1 ? '' : raw.slice(qIndex + 3)

    const path = rawPath.replace(/~and~/g, '&')
    const query = rawQuery ? '?' + rawQuery.replace(/~and~/g, '&') : ''

    return path + query + hash
}
