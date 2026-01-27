import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { experience } from "@/data/cv";
import { FullscreenSection, Icon } from "@/components/ui";
import { ROUTES } from "@/constants/navigation";
import { 
  fadeInUpLarge, 
  fadeInUp, 
  slideInRight, 
  viewportAlways, 
  easeOut 
} from "@/lib/animations";

interface ExperienceProps {
  id?: string;
}

export function Experience({ id }: ExperienceProps) {
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
        ERFARING
      </motion.h2>
    </div>
  );

  const rightContent = (
    <div className="flex justify-start lg:justify-end w-full">
      <div className="flex flex-col gap-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportAlways}
          transition={{ delay: 0.2 }}
          className="space-y-3 text-left lg:text-right"
        >
          {experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportAlways}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.08,
                ease: easeOut,
              }}
            >
              <p className="text-lg md:text-xl text-secondary font-medium">
                {exp.company}
              </p>
              <p className="text-sm text-secondary/60">{exp.period}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportAlways}
          transition={{ delay: 0.6 }}
        >
          <Link
            to={ROUTES.CV}
            className="inline-flex items-center justify-start lg:justify-center gap-3 px-8 py-4 bg-primary text-white hover:bg-primary/90 transition-colors duration-300 font-bold text-base md:text-lg w-full"
          >
            Se full CV
            <Icon name="arrow-right" className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );

  return (
    <FullscreenSection id={id} left={leftContent} right={rightContent} />
  );
}
