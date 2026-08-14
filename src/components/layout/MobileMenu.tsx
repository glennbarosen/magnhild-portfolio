import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/ui'
import { NAV_LINKS, ROUTES } from '@/constants/navigation'
import { slideInFromRight, backdropAnimation, quickTransition } from '@/lib/animations'

interface MobileMenuProps {
    isOpen: boolean
    onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const menuRef = useRef<HTMLDivElement>(null)
    const closeButtonRef = useRef<HTMLButtonElement>(null)
    const previouslyFocusedRef = useRef<HTMLElement | null>(null)

    // Focus trap, escape key, and returning focus to the trigger on close
    useEffect(() => {
        if (!isOpen) return

        previouslyFocusedRef.current = document.activeElement as HTMLElement | null
        closeButtonRef.current?.focus()

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }

            // Simple focus trap
            if (e.key === 'Tab' && menuRef.current) {
                const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
                    'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                )
                const firstElement = focusableElements[0]
                const lastElement = focusableElements[focusableElements.length - 1]

                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault()
                    lastElement?.focus()
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault()
                    firstElement?.focus()
                }
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            previouslyFocusedRef.current?.focus()
        }
    }, [isOpen, onClose])

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        variants={backdropAnimation}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                        className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                        aria-hidden="true"
                    />

                    {/* Menu */}
                    <motion.div
                        id="mobile-nav-dialog"
                        ref={menuRef}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mobilmeny"
                        variants={slideInFromRight}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={quickTransition}
                        className="bg-surface fixed top-0 right-0 z-50 flex h-screen w-64 flex-col lg:hidden"
                    >
                        {/* Close button */}
                        <div className="flex justify-end p-6">
                            <button
                                ref={closeButtonRef}
                                onClick={onClose}
                                className="text-primary hover:text-primary/80 transition-colors"
                                aria-label="Lukk meny"
                            >
                                <Icon name="x" size={24} />
                            </button>
                        </div>

                        {/* Menu items */}
                        <nav aria-label="Mobilnavigasjon">
                            <ul className="flex flex-col gap-8 px-6">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            to={ROUTES.HOME}
                                            hash={link.href.split('#')[1]}
                                            className="text-primary hover:text-primary/80 text-lg font-medium capitalize transition-colors"
                                            onClick={onClose}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
