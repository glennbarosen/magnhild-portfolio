import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { experience, education } from '@/data/cv'
import { CVExperience, CVEducation } from '@/components/sections'
import { SEO } from '@/components/ui'
import { fadeInUp } from '@/lib/animations'
import { PAGE_META, SITE_CONFIG } from '@/constants/seo'

export const Route = createFileRoute('/cv')({
  component: CVPage,
})

function CVPage() {
  return (
    <div className="bg-surface pt-24 pb-16 px-6 md:px-12 lg:px-16 min-h-screen">
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
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary tracking-tight">
          CV
        </h1>
      </motion.div>

      <CVExperience experience={experience} />
      <CVEducation education={education} />
    </div>
  )
}
