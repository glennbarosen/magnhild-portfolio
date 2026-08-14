import { useEffect } from 'react'
import { useLocation } from '@tanstack/react-router'

/** Scrolls to the top on mount, unless the URL carries a hash (router's own
 * `handleHashScroll` owns that case). Router scroll restoration is disabled (see main.tsx), so
 * each route needs this to avoid landing mid-page after navigating from a scrolled route. */
export function useScrollToTop() {
    const { hash } = useLocation()

    useEffect(() => {
        if (hash) return
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount only
    }, [])
}
