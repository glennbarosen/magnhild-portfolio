import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { experience, education, volunteer } from '@/data/cv'
import { CVExperience, CVEducation, CVVolunteer } from '@/components/sections'
import { SEO } from '@/components/ui'
import { fadeInUp } from '@/lib/animations'
import { PAGE_META, SITE_CONFIG } from '@/constants/seo'
import { useScrollToTop } from '@/hooks/useScrollToTop'

export const Route = createFileRoute('/cv')({
    component: CVPage,
})

function CVPage() {
    useScrollToTop()

    return (
        <div className="min-h-screen px-6 pt-24 pb-16 md:px-12 lg:px-16">
            <SEO
                title={PAGE_META.cv.title}
                description={PAGE_META.cv.description}
                canonical={`${SITE_CONFIG.url}/cv`}
            />

            {/* Title */}
            <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mb-12">
                <h1 className="text-primary text-5xl font-bold tracking-tight capitalize md:text-7xl lg:text-8xl">
                    CV<span className="sr-only"> — Magnhild Myskja, kommunikasjonsrådgiver</span>
                </h1>
            </motion.div>

            <CVExperience experience={experience} />
            <div className="my-16 md:my-20 lg:my-24" />
            <CVEducation education={education} />
            <div className="my-16 md:my-20 lg:my-24" />
            <CVVolunteer volunteer={volunteer} />
        </div>
    )
}
