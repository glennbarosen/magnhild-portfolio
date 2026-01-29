import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { experience, education, volunteer } from "@/data/cv";
import { CVExperience, CVEducation, CVVolunteer } from "@/components/sections";
import { SEO } from "@/components/ui";
import { fadeInUp } from "@/lib/animations";
import { PAGE_META, SITE_CONFIG } from "@/constants/seo";

export const Route = createFileRoute("/cv")({
  component: CVPage,
});

import { useEffect } from "react";

function CVPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    <div className="pt-24 pb-16 px-6 md:px-12 lg:px-16 min-h-screen">
      <SEO
        title={PAGE_META.cv.title}
        description={PAGE_META.cv.description}
        canonical={`${SITE_CONFIG.url}/cv`}
      />

      {/* Title */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="mb-12"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary tracking-tight capitalize">
          CV
        </h1>
      </motion.div>

      <CVExperience experience={experience} />
      <div className="my-16 md:my-20 lg:my-24" />
      <CVEducation education={education} />
      <div className="my-16 md:my-20 lg:my-24" />
      <CVVolunteer volunteer={volunteer} />
    </div>
  );
}
