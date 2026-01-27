import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm"
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-lg font-medium text-primary">
          Magnhild Myskja
        </Link>
        <ul className="flex items-center gap-8">
          <li>
            <a href="/#om" className="text-secondary hover:text-primary transition-colors">
              Om meg
            </a>
          </li>
          <li>
            <Link to="/cv" className="text-secondary hover:text-primary transition-colors">
              CV
            </Link>
          </li>
          <li>
            <a href="/#kontakt" className="text-secondary hover:text-primary transition-colors">
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
