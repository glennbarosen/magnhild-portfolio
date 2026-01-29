import { motion } from 'framer-motion';
import type { Experience } from '@/data/cv';
import { fadeIn, fadeInUp, easeOut } from '@/lib/animations';

interface CVExperienceProps {
  experience: Experience[];
}

export function CVExperience({ experience }: CVExperienceProps) {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.1 }}
      className="mb-12"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif-title text-primary mb-8 tracking-tight capitalize font-normal">
        Arbeidserfaring
      </h2>
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.company}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.15 + index * 0.08, ease: easeOut }}
          >
            <div className="border-l-4 border-primary pl-6 pb-6">
              <h3 className="text-lg md:text-xl font-bold text-primary mb-1 font-sans">
                {exp.title}
              </h3>
              <p className="text-base font-medium mb-1">{exp.company}</p>
              
              <div className="mb-2">
                <p className="text-base text-black font-medium mb-1">{exp.period}</p>
                {exp.type && (
                  <span className="inline-block text-xs font-bold uppercase tracking-wider px-2 py-0.5 border border-primary text-primary">
                    {exp.type}
                  </span>
                )}
              </div>
              {exp.description && (
                <p className="text-base font-medium">{exp.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
