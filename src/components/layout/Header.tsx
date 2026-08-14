import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from '@tanstack/react-router'
import { Icon } from '@/components/ui'

import { MobileMenu } from './MobileMenu'
import { NAV_LINKS, ROUTES } from '@/constants/navigation'
import { headerAnimation, fadeIn } from '@/lib/animations'

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()
    const currentPath = location.pathname

    const isActive = (path: string) => {
        return currentPath === path
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
                                <a
                                    href={link.href}
                                    className={`font-medium transition-colors ${
                                        isActive(ROUTES.HOME) ? 'text-primary' : 'text-primary'
                                    }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-primary hover:text-primary/80 transition-colors lg:hidden"
                        aria-label="Åpne meny"
                        aria-expanded={menuOpen}
                    >
                        <Icon name="menu" size={24} />
                    </button>
                </nav>
            </motion.header>

            {/* Mobile menu */}
            <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    )
}
