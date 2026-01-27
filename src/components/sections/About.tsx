import { motion } from 'framer-motion';
import { FullscreenSection } from '@/components/ui';
import { fadeInUpLarge, viewportAlways } from '@/lib/animations';

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
        variants={fadeInUpLarge}
        initial="hidden"
        whileInView="visible"
        viewport={viewportAlways}
        className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary tracking-tight"
      >
        OM MEG
      </motion.h2>
    </div>
  );

  const rightContent = null;

  return <FullscreenSection id={id} left={leftContent} right={rightContent} />;
}
