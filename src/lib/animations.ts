import type { Variants, Transition } from 'framer-motion'

// Standard easing curve for smooth animations
export const easeOut = [0.25, 0.1, 0.25, 1] as const

// Standard transitions
export const defaultTransition: Transition = {
    duration: 0.6,
    ease: easeOut,
}

export const quickTransition: Transition = {
    duration: 0.3,
    ease: easeOut,
}

// Reusable animation variants
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: defaultTransition,
    },
}

export const fadeInUpLarge: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: easeOut },
    },
}

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: defaultTransition,
    },
}

export const slideInRight: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: defaultTransition,
    },
}

export const slideInFromRight: Variants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '100%' },
}

// Viewport settings
export const viewportAlways = { once: false, margin: '0px' as const }

// Header animation
export const headerAnimation: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
}

// Backdrop fade
export const backdropAnimation: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
}
