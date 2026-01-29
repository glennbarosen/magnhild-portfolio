import { motion } from "framer-motion";
import { FullscreenSection } from "@/components/ui";
import { fadeInUpLarge, fadeInUp, viewportAlways } from "@/lib/animations";
import { aboutContent } from "@/data/about";

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
        className="text-5xl md:text-7xl lg:text-8xl font-serif-title text-primary tracking-tight font-normal"
      >
        Om meg
      </motion.h2>
    </div>
  );

  const rightContent = (
    <div className="flex justify-start lg:justify-end w-full">
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportAlways}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl max-w-md text-left lg:text-right leading-relaxed font-sans-extralight"
      >
        {aboutContent}
      </motion.p>
    </div>
  );

  return <FullscreenSection id={id} left={leftContent} right={rightContent} />;
}
