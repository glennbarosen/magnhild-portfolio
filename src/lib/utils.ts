import { type ClassValue, clsx } from 'clsx';

// Utility for conditionally joining class names
// Note: This is a simplified version. For production, consider using clsx + tailwind-merge
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

// Scroll to element by ID with smooth behavior
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
