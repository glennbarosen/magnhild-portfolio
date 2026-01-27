import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { experience, education } from '../data/cv'

export const Route = createFileRoute('/cv')({
  component: CVPage,
})

function CVPage() {
  return (
    <div className="bg-surface pt-24 pb-16 px-6 md:px-12 lg:px-16 min-h-screen">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary tracking-tight">
          CV
        </h1>
      </motion.div>

      {/* Experience */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-24"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-16 tracking-tight">
          ARBEIDSERFARING
        </h2>
        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
            >
              <div className="pb-12 border-b border-secondary/20">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {exp.title}
                </h3>
                <p className="text-lg text-secondary font-medium mb-1">
                  {exp.company}
                </p>
                {exp.type && (
                  <p className="text-sm text-secondary uppercase tracking-wide mb-2">
                    {exp.type}
                  </p>
                )}
                <p className="text-sm text-secondary/70">{exp.period}</p>
                {exp.description && (
                  <p className="mt-4 text-secondary leading-relaxed">{exp.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-16 tracking-tight">
          UTDANNING
        </h2>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 + index * 0.08 }}
            >
              <div className="pb-12 border-b border-secondary/20 last:border-b-0">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {edu.degree}
                </h3>
                <p className="text-lg text-secondary font-medium mb-2">
                  {edu.institution}
                </p>
                <p className="text-sm text-secondary/70">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
