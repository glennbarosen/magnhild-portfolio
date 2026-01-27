import { motion } from "framer-motion";
import { FullscreenSection } from "@/components/ui";
import { staggerContainer, staggerLine, letterAnimation } from "@/lib/animations";
import profileImage from "@/assets/mlm-profile.jpeg";

export function Hero() {
  const nameLines = ["MAGNHILD", "LUNDEBREKKE", "MYSKJA"];

  const leftContent = (
    <div className="flex flex-col justify-end h-full">
      {/* Name - bottom */}
      <motion.h1
        className="text-primary whitespace-nowrap"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {nameLines.map((line) => {
          const letters = line.split("");
          return (
            <motion.div
              key={line}
              className="block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9]"
              variants={staggerLine}
            >
              {letters.map((letter, letterIndex) => (
                <motion.span
                  key={`${line}-${letterIndex}`}
                  variants={letterAnimation}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          );
        })}
      </motion.h1>
    </div>
  );

  const rightContent = (
    <div className="flex flex-col justify-end items-start lg:items-end h-full w-full">
      {/* Profile image - priority loading for above-the-fold content */}
      <motion.img
        src={profileImage}
        alt="Magnhild Lundebrekke Myskja"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:max-w-[350px] object-cover"
        fetchPriority="high"
        decoding="async"
      />
    </div>
  );

  return <FullscreenSection left={leftContent} right={rightContent} />;
}
