import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { SEO } from '@/components/ui/SEO'
import { SITE_CONFIG } from '@/constants/seo'

describe('SEO', () => {
    it('hoists title, description and canonical into <head> with defaults', () => {
        render(<SEO />)

        expect(document.title).toBe(SITE_CONFIG.title)
        expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', SITE_CONFIG.description)
        expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute('href', SITE_CONFIG.url)
    })

    it('overrides title, description and canonical per route', () => {
        render(<SEO title="CV | Magnhild Myskja" description="En CV." canonical="https://magnhildmyskja.no/cv" />)

        expect(document.title).toBe('CV | Magnhild Myskja')
        expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', 'En CV.')
        expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute('href', 'https://magnhildmyskja.no/cv')
    })

    it('renders valid Person JSON-LD', () => {
        const { container } = render(<SEO />)

        const script = container.querySelector('script[type="application/ld+json"]')
        expect(script).not.toBeNull()
        const data = JSON.parse(script!.textContent!)
        expect(data['@type']).toBe('Person')
        expect(data.sameAs).toContain(SITE_CONFIG.linkedin)
    })
})
