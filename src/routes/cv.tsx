import { createFileRoute } from '@tanstack/react-router'
import { AnimatedSection } from '../components/ui/AnimatedSection'

export const Route = createFileRoute('/cv')({
  component: CVPage,
})

function CVPage() {
  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            CV
          </h1>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection delay={0.1} className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">Utdanning</h2>
          <div className="space-y-4">
            <div className="border-l-2 border-accent pl-4">
              <h3 className="font-medium text-primary">[Grad/Tittel]</h3>
              <p className="text-secondary">[Institusjon]</p>
              <p className="text-sm text-secondary/70">[År - År]</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Experience */}
        <AnimatedSection delay={0.2} className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">Arbeidserfaring</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-accent pl-4">
              <h3 className="font-medium text-primary">[Stillingstittel]</h3>
              <p className="text-secondary">[Selskap]</p>
              <p className="text-sm text-secondary/70">[År - Nåværende]</p>
              <ul className="mt-2 text-secondary list-disc list-inside">
                <li>[Ansvarsområde/Oppgave]</li>
                <li>[Ansvarsområde/Oppgave]</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection delay={0.3} className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">Ferdigheter</h2>
          <div className="flex flex-wrap gap-2">
            {['Strategisk kommunikasjon', 'Innholdsproduksjon', 'Sosiale medier', 'PR', 'Tekstforfatter', 'Prosjektledelse'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* Download */}
        <AnimatedSection delay={0.4} className="text-center">
          <a
            href="/assets/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Last ned CV (PDF)
          </a>
        </AnimatedSection>
      </div>
    </div>
  )
}
