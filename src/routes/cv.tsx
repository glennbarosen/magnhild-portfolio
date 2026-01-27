import { createFileRoute } from '@tanstack/react-router'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { experience, education } from '../data/cv'

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
          <h2 className="text-2xl font-semibold text-primary mb-6">Utdanning</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <AnimatedSection key={index} delay={0.15 + index * 0.1}>
                <div className="border-l-2 border-accent pl-4">
                  <h3 className="font-bold text-primary">{edu.degree}</h3>
                  <p className="text-secondary">{edu.institution}</p>
                  <p className="text-sm text-secondary/70">{edu.period}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Experience */}
        <AnimatedSection delay={0.2} className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6">Arbeidserfaring</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <AnimatedSection key={index} delay={0.25 + index * 0.1}>
                <div className="border-l-2 border-accent pl-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-primary">{exp.title}</h3>
                    {exp.type && <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">{exp.type}</span>}
                  </div>
                  <p className="text-secondary">{exp.company}</p>
                  <p className="text-sm text-secondary/70">{exp.period}</p>
                  {exp.description && <p className="mt-2 text-secondary text-sm">{exp.description}</p>}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Download */}
        <AnimatedSection delay={0.4} className="text-center">
          <a
            href="/assets/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-white hover:bg-primary/90 transition-colors font-bold text-base md:text-lg"
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
