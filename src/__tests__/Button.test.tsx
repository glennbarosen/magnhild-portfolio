import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '@/components/ui/Button';

// Mock TanStack Router Link component
vi.mock('@tanstack/react-router', () => ({
  Link: ({ children, to, className }: { children: React.ReactNode; to: string; className?: string }) => (
    <a href={to} className={className} data-testid="router-link">
      {children}
    </a>
  ),
}));

describe('Button', () => {
  describe('as button element', () => {
    it('renders a button by default', () => {
      render(<Button>Click me</Button>);
      
      const button = screen.getByRole('button', { name: /click me/i });
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('type', 'button');
    });

    it('handles click events', async () => {
      const user = userEvent.setup();
      let clicked = false;
      
      render(<Button onClick={() => { clicked = true; }}>Click me</Button>);
      
      await user.click(screen.getByRole('button'));
      expect(clicked).toBe(true);
    });

    it('can be disabled', () => {
      render(<Button disabled>Disabled</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('applies primary variant styles by default', () => {
      render(<Button>Primary</Button>);
      
      const button = screen.getByRole('button');
      expect(button.className).toContain('bg-primary');
    });

    it('applies secondary variant styles', () => {
      render(<Button variant="secondary">Secondary</Button>);
      
      const button = screen.getByRole('button');
      expect(button.className).toContain('border-primary');
    });
  });

  describe('as external link', () => {
    it('renders an anchor for external links', () => {
      render(<Button href="https://example.com">External</Button>);
      
      const link = screen.getByRole('link', { name: /external/i });
      expect(link).toHaveAttribute('href', 'https://example.com');
    });

    it('adds target="_blank" for external links', () => {
      render(<Button href="https://example.com" external>External</Button>);
      
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('as internal link', () => {
    it('uses router Link for internal navigation', () => {
      render(<Button to="/about">About</Button>);
      
      const link = screen.getByTestId('router-link');
      expect(link).toHaveAttribute('href', '/about');
    });
  });

  describe('styling', () => {
    it('applies custom className', () => {
      render(<Button className="custom-class">Styled</Button>);
      
      const button = screen.getByRole('button');
      expect(button.className).toContain('custom-class');
    });
  });
});
