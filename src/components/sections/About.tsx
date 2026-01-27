import { AnimatedSection } from '../ui/AnimatedSection';

export function About() {
  return (
    <section id="om" className="py-24 px-6 bg-surface">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Om meg
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={0.1}>
          <div className="prose prose-lg max-w-none text-secondary">
            <p className="mb-6">
              [Her kommer en beskrivelse av Magnhild og hennes bakgrunn innen kommunikasjon. 
              Placeholder tekst som skal erstattes med faktisk innhold.]
            </p>
            
            <p className="mb-6">
              Med erfaring fra [bransje/selskap], har jeg utviklet kompetanse innen 
              strategisk kommunikasjon, innholdsproduksjon og stakeholder-engasjement.
            </p>
            
            <p>
              Jeg brenner for å skape meningsfulle budskap som treffer målgruppen 
              og bidrar til organisasjonens mål.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2} className="mt-12">
          <h3 className="text-xl font-semibold text-primary mb-4">Kompetanseområder</h3>
          <ul className="grid grid-cols-2 gap-3 text-secondary">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Strategisk kommunikasjon
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Innholdsproduksjon
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Sosiale medier
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Tekstforfatter
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              PR og medierelationer
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Intern kommunikasjon
            </li>
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
