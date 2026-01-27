# Magnhild Myskja - Portfolio

Minimalist portfolio website for Magnhild Myskja, communication professional.

**Live**: [magnhildmyskja.no](https://magnhildmyskja.no)

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- TanStack Router
- Framer Motion
- GitHub Pages

## Development

```bash
npm install
npm run dev
```

## Deployment

### Automatic (GitHub Actions)

Push to `main` branch automatically deploys to GitHub Pages.

### DNS Configuration (domene.shop)

To connect magnhildmyskja.no to GitHub Pages:

1. **Log in to domene.shop** and go to DNS settings for magnhildmyskja.no

2. **Add A Records** (point @ to GitHub Pages):
   ```
   Type: A    Host: @    Value: 185.199.108.153
   Type: A    Host: @    Value: 185.199.109.153
   Type: A    Host: @    Value: 185.199.110.153
   Type: A    Host: @    Value: 185.199.111.153
   ```

3. **Add CNAME Record** (for www subdomain):
   ```
   Type: CNAME    Host: www    Value: <your-github-username>.github.io
   ```

4. **In GitHub Repository**:
   - Go to Settings → Pages
   - Under "Custom domain", enter: `magnhildmyskja.no`
   - Check "Enforce HTTPS" (may take a few minutes to become available)

5. **Wait for DNS propagation** (can take up to 24-48 hours, usually faster)

### Verify DNS Configuration

```bash
# Check A records
dig magnhildmyskja.no +short

# Check CNAME
dig www.magnhildmyskja.no +short
```

## Project Structure

```
src/
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Hero, About, Contact
│   └── ui/           # Button, AnimatedSection
├── routes/           # TanStack Router pages
└── index.css         # Tailwind theme
```

## Updating Content

Replace placeholders in:
- `src/components/sections/Hero.tsx` - Name, tagline, intro
- `src/components/sections/About.tsx` - About text, skills
- `src/components/sections/Contact.tsx` - Email, LinkedIn
- `src/routes/cv.tsx` - Education, experience
- `public/assets/` - Add profile photo and CV PDF
