import { motion } from 'framer-motion';
import type { Volunteer } from '@/data/cv';
import { fadeIn, fadeInUp, easeOut } from '@/lib/animations';

interface CVVolunteerProps {
  volunteer: Volunteer[];
}

export function CVVolunteer({ volunteer }: CVVolunteerProps) {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 tracking-tight">
        FRIVILLIG
      </h2>
      <div className="space-y-6">
        {volunteer.map((vol, index) => (
          <motion.div
            key={vol.organization}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.35 + index * 0.08, ease: easeOut }}
          >
            <div className="border-l-4 border-primary pl-6 pb-6">
              <h3 className="text-lg md:text-xl font-bold text-primary mb-1">
                {vol.role}
              </h3>
              <p className="text-sm text-secondary font-medium mb-1">
                {vol.organization}
              </p>
              <p className="text-xs text-secondary/70">{vol.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
