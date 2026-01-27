import { motion } from 'framer-motion';
import { Link, useLocation } from '@tanstack/react-router';

export function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    return currentPath === path;
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-surface"
    >
      <nav className="px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold text-primary uppercase">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Magnhild Myskja
          </motion.span>
        </Link>
        <ul className="flex items-center gap-8">
          <li>
            <a 
              href="/#om" 
              className={`font-medium uppercase transition-colors ${
                isActive('/') 
                  ? 'text-primary' 
                  : 'text-secondary hover:text-primary'
              }`}
            >
              Om meg
            </a>
          </li>
          <li>
            <a 
              href="/#erfaring" 
              className={`font-medium uppercase transition-colors ${
                isActive('/') 
                  ? 'text-primary' 
                  : 'text-secondary hover:text-primary'
              }`}
            >
              Erfaring
            </a>
          </li>
          <li>
            <a 
              href="/#kontakt" 
              className={`font-medium uppercase transition-colors ${
                isActive('/') 
                  ? 'text-primary' 
                  : 'text-secondary hover:text-primary'
              }`}
            >
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
