# AGENTS.md - Magnhild Myskja Portfolio

This file provides context for AI coding assistants working on this project.

## Project Overview

A minimalist portfolio website for Magnhild Myskja, a communication professional seeking jobs in Norway.

**Live URL**: https://magnhildmyskja.no

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 (using `@tailwindcss/vite` plugin)
- **Routing**: TanStack Router (file-based routing)
- **Animations**: Framer Motion
- **Hosting**: GitHub Pages

## Project Structure

```
src/
├── components/
│   ├── layout/       # Header, Footer, Navigation
│   ├── sections/     # Hero, About, Contact page sections
│   └── ui/           # Reusable UI components (Button, AnimatedSection)
├── routes/           # TanStack Router file-based routes
│   ├── __root.tsx    # Root layout with Header/Footer
│   ├── index.tsx     # Home page (/)
│   └── cv.tsx        # CV page (/cv)
├── index.css         # Tailwind imports and custom theme
└── main.tsx          # App entry point with router setup
```

## Design Guidelines

- **Style**: Minimalist & clean with lots of whitespace
- **Colors**: 
  - Primary: `#1a1a1a` (near black)
  - Secondary: `#6b7280` (muted gray)
  - Accent: `#3b82f6` (subtle blue)
  - Background: `#fafafa` (off-white)
- **Animations**: Subtle fade-in and slide-up effects only
- **Language**: Norwegian (primary audience is Norwegian employers)

## Key Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Coding Conventions

1. Use TypeScript for all new files
2. Use functional components with hooks
3. Use Framer Motion for animations via `AnimatedSection` wrapper
4. Use TanStack Router `Link` for internal navigation
5. Keep components small and focused
6. Use Tailwind utility classes, avoid custom CSS when possible

## Adding New Pages

1. Create a new file in `src/routes/` (e.g., `projects.tsx`)
2. Use `createFileRoute` from TanStack Router
3. The route will be automatically registered

Example:
```tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

function ProjectsPage() {
  return <div>Projects content</div>
}
```

## Deployment

- **Auto-deploy**: Push to `main` branch triggers GitHub Actions
- **Manual**: Run `npm run build` and deploy `dist/` folder
- **Domain**: CNAME configured for magnhildmyskja.no

## Content Placeholders

The following content needs to be replaced with real information:
- Profile photo (currently emoji placeholder)
- Professional tagline
- About section text
- LinkedIn URL
- Email address
- CV details (education, experience)
- CV PDF file in `public/assets/cv.pdf`

## TODO

- [ ] Replace placeholder content with real information
- [ ] Add professional photo
- [ ] Create and upload CV PDF
- [ ] Consider adding:
  - Projects/portfolio page
  - Blog/articles section
  - Testimonials
  - Dark mode toggle
