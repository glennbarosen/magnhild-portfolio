import { motion } from 'framer-motion';
import { FullscreenSection } from '../ui/FullscreenSection';

interface AboutProps {
  id?: string;
}

export function About({ id }: AboutProps) {
  const leftContent = (
    <div className="flex flex-col justify-between h-full">
      {/* Spacer */}
      <div />
      
      {/* Title - bottom left */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "0px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary tracking-tight"
      >
        OM MEG
      </motion.h2>
    </div>
  );

  const rightContent = null;

  return <FullscreenSection id={id} left={leftContent} right={rightContent} />;
}
