import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from '@tanstack/react-router'
import { Icon } from '@/components/ui'

import { MobileMenu } from './MobileMenu'
import { NAV_LINKS, ROUTES } from '@/constants/navigation'
import { headerAnimation, fadeIn } from '@/lib/animations'

const DESKTOP_BREAKPOINT = '(min-width: 1024px)'

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()
    const currentHash = location.hash

    const closeMenu = useCallback(() => setMenuOpen(false), [])

    // The menu panel and its trigger are lg:hidden — if the viewport crosses
    // the breakpoint while open (resize, tablet rotation), close it so the
    // body-scroll lock can't outlive the now-unmounted panel.
    useEffect(() => {
        const mq = window.matchMedia(DESKTOP_BREAKPOINT)
        const handleChange = (e: MediaQueryListEvent) => {
            if (e.matches) closeMenu()
        }
        mq.addEventListener('change', handleChange)
        return () => mq.removeEventListener('change', handleChange)
    }, [closeMenu])

    const isActive = (href: string) => {
        const [, hash] = href.split('#')
        return currentHash === hash
    }

    return (
        <>
            <motion.header
                variants={headerAnimation}
                initial="hidden"
                animate="visible"
                className="bg-surface/80 fixed top-0 right-0 left-0 z-50 backdrop-blur-sm"
            >
                <nav
                    className="flex items-center justify-between gap-4 px-6 py-4 md:px-12 lg:px-16"
                    aria-label="Hovednavigasjon"
                >
                    <Link to={ROUTES.HOME} className="text-primary font-serif-title text-lg font-normal capitalize">
                        <motion.span variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
                            Magnhild Myskja
                        </motion.span>
                    </Link>

                    {/* Desktop navigation */}
                    <ul className="hidden items-center gap-8 lg:flex">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    to={ROUTES.HOME}
                                    hash={link.href.split('#')[1]}
                                    className={`font-medium transition-colors ${
                                        isActive(link.href) ? 'text-accent' : 'text-primary'
                                    }`}
                                    aria-current={isActive(link.href) ? 'true' : undefined}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMenuOpen((open) => !open)}
                        className="text-primary hover:text-primary/80 transition-colors lg:hidden"
                        aria-label={menuOpen ? 'Lukk meny' : 'Åpne meny'}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-nav-dialog"
                    >
                        <Icon name={menuOpen ? 'x' : 'menu'} size={24} />
                    </button>
                </nav>
            </motion.header>

            {/* Mobile menu */}
            <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
        </>
    )
}
