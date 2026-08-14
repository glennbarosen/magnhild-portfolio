export const ROUTES = {
    HOME: '/',
    CV: '/cv',
} as const

export const SECTIONS = {
    ABOUT: 'om',
    EXPERIENCE: 'erfaring',
    CONTACT: 'kontakt',
} as const

/** Set a section to false to pull it from the nav and the homepage. */
export const SECTION_VISIBILITY: Record<keyof typeof SECTIONS, boolean> = {
    ABOUT: false,
    EXPERIENCE: true,
    CONTACT: true,
}

export interface NavLink {
    label: string
    href: string
    isHash?: boolean
}

const ALL_NAV_LINKS: Array<NavLink & { section: keyof typeof SECTIONS }> = [
    { section: 'ABOUT', label: 'Om meg', href: `/#${SECTIONS.ABOUT}`, isHash: true },
    { section: 'EXPERIENCE', label: 'Erfaring', href: `/#${SECTIONS.EXPERIENCE}`, isHash: true },
    { section: 'CONTACT', label: 'Kontakt', href: `/#${SECTIONS.CONTACT}`, isHash: true },
]

export const NAV_LINKS: NavLink[] = ALL_NAV_LINKS.filter(({ section }) => SECTION_VISIBILITY[section])

export const SOCIAL_LINKS = {
    EMAIL: 'magnhild.lm@hotmail.com',
    LINKEDIN: 'https://linkedin.com/in/mmyskja',
} as const
