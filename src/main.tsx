import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { MotionConfig } from 'framer-motion'
import { NotFound } from '@/components/layout'
import { decodeSpaRedirect } from '@/lib/spaRedirect'
import './index.css'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree, defaultNotFoundComponent: NotFound })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

// Handle GitHub Pages SPA redirect
const redirectPath = decodeSpaRedirect(window.location.search, window.location.hash)
if (redirectPath !== null) {
    window.history.replaceState(null, '', redirectPath)
}

// Disable scroll restoration for snap bug on iOS
if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
}

// index.html (and the /cv shell scripts/prerender-routes.mjs writes) carries static <title>/meta/
// link tags as a non-JS baseline for crawlers and social scrapers. <SEO> (src/components/ui/SEO.tsx)
// renders the real, per-route versions via React 19's head-hoisting — but hoisting only dedupes
// against tags React itself rendered, not pre-existing static ones, so without this the two would
// coexist once hydrated, and e.g. /cv would carry both its own and the homepage's <meta
// name="description">. Removing the static baseline right before mount makes <SEO> the sole source
// for any JS-executing visitor; non-JS crawlers still see the correct static tags in the raw HTML.
document
    .querySelectorAll(
        'title, meta[name="description"], meta[name="robots"], meta[property^="og:"], meta[name^="twitter:"], link[rel="canonical"]'
    )
    .forEach((el) => el.remove())

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MotionConfig reducedMotion="user">
            <RouterProvider router={router} />
        </MotionConfig>
    </StrictMode>
)
