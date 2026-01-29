
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
  primary: 'bg-primary text-white',
  secondary: 'bg-transparent border border-primary text-primary',
};

const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors duration-200';

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', className = '' } = props;
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  // Internal link using TanStack Router
  if (props.as === 'link' || ('to' in props && props.to)) {
    return (
      <Link to={(props as ButtonAsInternalLink).to} className={combinedClassName}>
  {children}
</Link>
    );
  }

  // External link
  if (props.as === 'a' || ('href' in props && props.href)) {
    const { href, external } = props as ButtonAsExternalLink;
    return (
      <a
        href={href}
        className={combinedClassName}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  // Button element
  const { type = 'button', onClick, disabled } = props as ButtonAsButton;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${combinedClassName} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
}
