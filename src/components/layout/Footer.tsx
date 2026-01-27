export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-secondary/10">
      <div className="max-w-5xl mx-auto px-6 text-center text-secondary text-sm">
        <p>© {currentYear} Magnhild Myskja. Alle rettigheter reservert.</p>
      </div>
    </footer>
  );
}
