import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0 },
  };

  const handleNavigate = () => {
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* Menu */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 h-screen w-64 bg-surface z-50 lg:hidden flex flex-col"
      >
        {/* Close button */}
        <div className="flex justify-end p-6">
          <button
            onClick={onClose}
            className="text-primary hover:text-primary/80 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu items */}
        <nav className="flex flex-col gap-8 px-6">
          <a
            href="/#om"
            className="font-medium uppercase text-primary hover:text-primary/80 transition-colors text-lg"
            onClick={handleNavigate}
          >
            Om meg
          </a>
          <a
            href="/#erfaring"
            className="font-medium uppercase text-primary hover:text-primary/80 transition-colors text-lg"
            onClick={handleNavigate}
          >
            Erfaring
          </a>
          <a
            href="/#kontakt"
            className="font-medium uppercase text-primary hover:text-primary/80 transition-colors text-lg"
            onClick={handleNavigate}
          >
            Kontakt
          </a>
        </nav>
      </motion.div>
    </>
  );
}
