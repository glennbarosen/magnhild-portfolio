import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from '@tanstack/react-router';
import { Icon } from '@/components/ui';
import { MobileMenu } from './MobileMenu';
import { NAV_LINKS, ROUTES } from '@/constants/navigation';
import { headerAnimation, fadeIn } from '@/lib/animations';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    return currentPath === path;
  };

  return (
    <>
      <motion.header
        variants={headerAnimation}
        initial="hidden"
        animate="visible"
        className="fixed top-0 left-0 right-0 z-50 bg-surface"
      >
        <nav 
          className="px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between"
          aria-label="Hovednavigasjon"
        >
          <Link to={ROUTES.HOME} className="text-lg font-bold text-primary uppercase">
            <motion.span
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              Magnhild Myskja
            </motion.span>
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  className={`font-medium uppercase transition-colors ${
                    isActive(ROUTES.HOME) 
                      ? 'text-primary' 
                      : 'text-secondary hover:text-primary'
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
            className="lg:hidden text-primary hover:text-primary/80 transition-colors"
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
  );
}
