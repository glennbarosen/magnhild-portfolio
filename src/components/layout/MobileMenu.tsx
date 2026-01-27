import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Icon } from '@/components/ui';
import { NAV_LINKS } from '@/constants/navigation';
import { slideInFromRight, backdropAnimation, quickTransition } from '@/lib/animations';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap and escape key handling
  useEffect(() => {
    if (!isOpen) return;

    // Focus the close button when menu opens
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }

      // Simple focus trap
      if (e.key === 'Tab' && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
          'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            aria-hidden="true"
          />

          {/* Menu */}
          <motion.div
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigasjonsmeny"
            variants={slideInFromRight}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={quickTransition}
            className="fixed top-0 right-0 h-screen w-64 bg-surface z-50 lg:hidden flex flex-col"
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
            <nav className="flex flex-col gap-8 px-6" aria-label="Hovednavigasjon">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-medium uppercase text-primary hover:text-primary/80 transition-colors text-lg"
                  onClick={onClose}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
