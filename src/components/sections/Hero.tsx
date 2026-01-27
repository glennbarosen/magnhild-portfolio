import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { FullscreenSection } from "@/components/ui";
import { staggerContainer, staggerLine, letterAnimation } from "@/lib/animations";
import profileImage from "@/assets/mlm-profile.jpeg";

const shakeKeyframes = {
  rotate: [0, -3, 3, -3, 3, -2, 2, 0],
};

export function Hero() {
  const nameLines = ["MAGNHILD", "LUNDEBREKKE", "MYSKJA"];
  const [isShaking, setIsShaking] = useState(false);
  const [isScrambled, setIsScrambled] = useState(false);
  const [scrambledLines, setScrambledLines] = useState<string[]>(nameLines);
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Profile image shake on 300ms hover
  const handleMouseEnter = () => {
    hoverTimerRef.current = setTimeout(() => {
      setIsShaking(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    setIsShaking(false);
  };

  // Name scramble on click
  const scrambleName = useCallback(() => {
    if (isScrambled) return;
    setIsScrambled(true);

    // Scramble letters
    const scrambled = nameLines.map((line) =>
      line
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("")
    );
    setScrambledLines(scrambled);

    // Unscramble after 500ms
    setTimeout(() => {
      setScrambledLines(nameLines);
      setTimeout(() => setIsScrambled(false), 300);
    }, 500);
  }, [isScrambled, nameLines]);

  const leftContent = (
    <div className="flex flex-col justify-end h-full">
      {/* Name - bottom */}
      <motion.h1
        className="text-primary whitespace-nowrap cursor-pointer select-none"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        onClick={scrambleName}
        title="Click me!"
      >
        {scrambledLines.map((line, lineIndex) => {
          const letters = line.split("");
          return (
            <motion.div
              key={`${nameLines[lineIndex]}-${lineIndex}`}
              className="block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9]"
              variants={staggerLine}
            >
              {letters.map((letter, letterIndex) => (
                <motion.span
                  key={`${lineIndex}-${letterIndex}`}
                  variants={letterAnimation}
                  className="inline-block"
                  animate={isScrambled ? { 
                    y: [0, -5, 0],
                    transition: { duration: 0.2, delay: letterIndex * 0.02 }
                  } : {}}
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
        animate={isShaking ? { opacity: 1, scale: 1, ...shakeKeyframes } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:max-w-[350px] object-cover cursor-pointer"
        fetchPriority="high"
        decoding="async"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );

  return <FullscreenSection left={leftContent} right={rightContent} />;
}
