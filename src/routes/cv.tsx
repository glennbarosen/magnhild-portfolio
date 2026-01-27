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
        className="mb-12"
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
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 tracking-tight">
          ARBEIDSERFARING
        </h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
            >
              <div className="border-l-4 border-primary pl-6 pb-6">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-1">
                  {exp.title}
                </h3>
                <p className="text-sm text-secondary font-medium mb-1">
                  {exp.company}
                </p>
                <div className="mb-2">
                  <p className="text-xs text-secondary/70 mb-1">{exp.period}</p>
                  {exp.type && (
                    <span className="inline-block text-xs font-bold uppercase tracking-wider px-2 py-0.5 border border-primary text-primary">
                      {exp.type}
                    </span>
                  )}
                </div>
                {exp.description && (
                  <p className="text-xs text-secondary">{exp.description}</p>
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 tracking-tight">
          UTDANNING
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 + index * 0.08 }}
            >
              <div className="border-l-4 border-primary pl-6 pb-6">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm text-secondary font-medium mb-1">
                  {edu.institution}
                </p>
                <p className="text-xs text-secondary/70">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
