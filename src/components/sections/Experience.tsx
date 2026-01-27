import { motion } from "framer-motion";
import { experience } from "../../data/cv";
import { FullscreenSection } from "../ui/FullscreenSection";

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
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "0px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary tracking-tight"
      >
        ERFARING
      </motion.h2>
    </div>
  );

  const rightContent = (
    <div className="flex justify-center md:justify-end w-full">
      <div className="flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "0px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-3 text-center md:text-right"
        >
          {experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "0px" }}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <p className="text-lg md:text-xl text-secondary font-medium">
                {exp.company}
              </p>
              <p className="text-sm text-secondary/60">{exp.period}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href="/cv"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "0px" }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white hover:bg-primary/90 transition-colors duration-300 font-bold text-base md:text-lg w-full"
        >
          Se full CV
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.a>
      </div>
    </div>
  );

  return (
    <FullscreenSection id={id} left={leftContent} right={rightContent} />
  );
}
