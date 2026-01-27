import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SkipLink } from '@/components/ui/SkipLink';

describe('SkipLink', () => {
  it('renders with default text', () => {
    render(<SkipLink />);
    
    const link = screen.getByRole('link', { name: /hopp til hovedinnhold/i });
    expect(link).toBeInTheDocument();
  });

  it('links to main-content by default', () => {
    render(<SkipLink />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '#main-content');
  });

  it('accepts custom targetId', () => {
    render(<SkipLink targetId="custom-content" />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '#custom-content');
  });

  it('accepts custom text', () => {
    render(<SkipLink>Skip navigation</SkipLink>);
    
    const link = screen.getByRole('link', { name: /skip navigation/i });
    expect(link).toBeInTheDocument();
  });

  it('is visually hidden by default', () => {
    render(<SkipLink />);
    
    const link = screen.getByRole('link');
    expect(link.className).toContain('sr-only');
  });
});
