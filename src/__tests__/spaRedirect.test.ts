import { describe, it, expect } from 'vitest'
import { decodeSpaRedirect } from '@/lib/spaRedirect'

describe('decodeSpaRedirect', () => {
    it('returns null when not a redirect', () => {
        expect(decodeSpaRedirect('', '')).toBeNull()
        expect(decodeSpaRedirect('?foo=bar', '')).toBeNull()
    })

    it('decodes a plain path', () => {
        expect(decodeSpaRedirect('?p=/cv', '')).toBe('/cv')
    })

    it('decodes a path with a query string', () => {
        expect(decodeSpaRedirect('?p=/cv&q=utm_source=linkedin', '')).toBe('/cv?utm_source=linkedin')
    })

    it('decodes a path with a hash', () => {
        expect(decodeSpaRedirect('?p=/', '#kontakt')).toBe('/#kontakt')
    })

    it('decodes a path with both a query string and a hash', () => {
        expect(decodeSpaRedirect('?p=/cv&q=utm_source=linkedin', '#foo')).toBe('/cv?utm_source=linkedin#foo')
    })

    it('unescapes ~and~ back into literal & in both path and query', () => {
        expect(decodeSpaRedirect('?p=/a~and~b&q=x=1~and~y=2', '')).toBe('/a&b?x=1&y=2')
    })

    it('handles a bare root redirect', () => {
        expect(decodeSpaRedirect('?p=/', '')).toBe('/')
    })
})
