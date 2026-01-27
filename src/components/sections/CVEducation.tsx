import { motion } from 'framer-motion';
import type { Education } from '@/data/cv';
import { fadeIn, fadeInUp, easeOut } from '@/lib/animations';

interface CVEducationProps {
  education: Education[];
}

export function CVEducation({ education }: CVEducationProps) {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 tracking-tight">
        UTDANNING
      </h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25 + index * 0.08, ease: easeOut }}
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
  );
}
