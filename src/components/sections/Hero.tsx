import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FullscreenSection } from "@/components/ui";
import {
  staggerContainer,
  staggerLine,
  letterAnimation,
} from "@/lib/animations";
import profileImage from "@/assets/mlm-profile.jpeg";

export function Hero() {
  const nameLines = ["MAGNHILD", "LUNDEBREKKE", "MYSKJA"];

  const [isScrambled, setIsScrambled] = useState(false);
  const [scrambledLines, setScrambledLines] = useState<string[]>(nameLines);

  // Profile image shake on 300ms hover

  // Name scramble on click
  const scrambleName = useCallback(() => {
    if (isScrambled) return;
    setIsScrambled(true);

    // Pick one of the three target words at random
    const targets = ["KOMMUNIKASJON", "TEKSTPRODUKSJON", "INNHOLDSPRODUKJSON"];
    const chosen = targets[Math.floor(Math.random() * targets.length)];

    // Always render the same number of lines and letters per line as the original name
    const linesCount = nameLines.length;
    // Split chosen word into lines, padding/truncating as needed
    const scrambled = [];
    let idx = 0;
    for (let i = 0; i < linesCount; i++) {
      scrambled[i] = chosen
        .slice(idx, idx + nameLines[i].length)
        .padEnd(nameLines[i].length, " ");
      idx += nameLines[i].length;
    }
    // If chosen word is too short, pad remaining lines with spaces
    for (let i = 0; i < linesCount; i++) {
      if (!scrambled[i]) scrambled[i] = " ".repeat(nameLines[i].length);
    }

    setScrambledLines(scrambled);

    // Unscramble after 1200ms
    setTimeout(() => {
      setScrambledLines(nameLines);
      setTimeout(() => setIsScrambled(false), 300);
    }, 1200);
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
      >
        {scrambledLines.map((line, lineIndex) => {
          const letters = line.split("");
          return (
            <motion.div
              key={`${nameLines[lineIndex]}-${lineIndex}`}
              className="block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] font-serif-title"
              variants={staggerLine}
            >
              {letters.map((letter, letterIndex) => (
                <motion.span
                  key={`${lineIndex}-${letterIndex}`}
                  variants={letterAnimation}
                  className="inline-block"
                  animate={
                    isScrambled
                      ? {
                          y: [0, -5, 0],
                          transition: {
                            duration: 0.2,
                            delay: letterIndex * 0.02,
                          },
                        }
                      : {}
                  }
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
      <img
        src={profileImage}
        alt="Magnhild Lundebrekke Myskja"
        className="w-full lg:max-w-[350px] object-cover"
        fetchPriority="high"
        decoding="async"
      />
    </div>
  );

  return <FullscreenSection left={leftContent} right={rightContent} />;
}
