import { motion } from 'framer-motion';
import { FullscreenSection, Icon } from '@/components/ui';
import { SOCIAL_LINKS } from '@/constants/navigation';
import { fadeInUpLarge, fadeInUp, viewportAlways, wiggleAnimation } from '@/lib/animations';

interface ContactProps {
  id?: string;
}

export function Contact({ id }: ContactProps) {
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
        KONTAKT
      </motion.h2>
    </div>
  );

  const rightContent = (
    <div className="flex justify-start lg:justify-end w-full">
      <div className="flex flex-col gap-4 w-full lg:w-auto min-w-[200px]">
        <motion.a
          href={`mailto:${SOCIAL_LINKS.EMAIL}`}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportAlways}
          transition={{ delay: 0.2 }}
          whileHover={wiggleAnimation}
          className="inline-flex items-center justify-start lg:justify-center gap-3 px-8 py-4 bg-primary text-white hover:bg-primary/90 transition-colors duration-300 font-bold text-base md:text-lg w-full"
        >
          <Icon name="mail" className="w-5 h-5" />
          E-post
        </motion.a>
        <motion.a
          href={SOCIAL_LINKS.LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportAlways}
          transition={{ delay: 0.3 }}
          whileHover={wiggleAnimation}
          className="inline-flex items-center justify-start lg:justify-center gap-3 px-8 py-4 bg-primary text-white hover:bg-primary/90 transition-colors duration-300 font-bold text-base md:text-lg w-full"
        >
          <Icon name="linkedin" className="w-5 h-5" />
          LinkedIn
        </motion.a>
      </div>
    </div>
  );

  return <FullscreenSection id={id} left={leftContent} right={rightContent} />;
}
