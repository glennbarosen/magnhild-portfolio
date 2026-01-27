import type { Variants, Transition } from 'framer-motion';

// Standard easing curve for smooth animations
export const easeOut = [0.25, 0.1, 0.25, 1] as const;

// Standard transitions
export const defaultTransition: Transition = {
  duration: 0.6,
  ease: easeOut,
};

export const quickTransition: Transition = {
  duration: 0.3,
  ease: easeOut,
};

// Reusable animation variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeInUpLarge: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: '100%' },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: '100%' },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

// Stagger container for child animations
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

export const staggerLine: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
    },
  },
};

// Letter animation for text reveals
export const letterAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

// Viewport settings
export const viewportOnce = { once: true, margin: '-100px' as const };
export const viewportAlways = { once: false, margin: '0px' as const };

// Create staggered item variant with custom delay
export function createStaggeredItem(baseDelay: number, index: number): Variants {
  return {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: baseDelay + index * 0.08,
        ease: easeOut,
      },
    },
  };
}

// Header animation
export const headerAnimation: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Backdrop fade
export const backdropAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

// Shake animation for playful interactions
export const shakeAnimation: Variants = {
  idle: { rotate: 0 },
  shake: {
    rotate: [0, -3, 3, -3, 3, -2, 2, 0],
    transition: { duration: 0.5 },
  },
};

// Wiggle animation for buttons
export const wiggleAnimation = {
  rotate: [0, -2, 2, -2, 2, 0],
  transition: { duration: 0.4 },
};
