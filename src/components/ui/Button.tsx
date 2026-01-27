import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Link } from '@tanstack/react-router';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonBaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: 'button';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  href?: never;
  to?: never;
  external?: never;
}

interface ButtonAsExternalLink extends ButtonBaseProps {
  as?: 'a';
  href: string;
  external?: boolean;
  to?: never;
  type?: never;
  onClick?: never;
  disabled?: never;
}

interface ButtonAsInternalLink extends ButtonBaseProps {
  as?: 'link';
  to: string;
  href?: never;
  external?: never;
  type?: never;
  onClick?: never;
  disabled?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsExternalLink | ButtonAsInternalLink;

const variantStyles = {
  primary: 'bg-primary text-white hover:bg-primary/90',
  secondary: 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white',
};

const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors duration-200';

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', className = '' } = props;
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  // Internal link using TanStack Router
  if (props.as === 'link' || ('to' in props && props.to)) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link to={(props as ButtonAsInternalLink).to} className={combinedClassName}>
          {children}
        </Link>
      </motion.div>
    );
  }

  // External link
  if (props.as === 'a' || ('href' in props && props.href)) {
    const { href, external } = props as ButtonAsExternalLink;
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </motion.a>
    );
  }

  // Button element
  const { type = 'button', onClick, disabled } = props as ButtonAsButton;
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${combinedClassName} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
