import { motion } from 'framer-motion'
import type { Experience } from '@/data/cv'
import { fadeIn, fadeInUp, easeOut } from '@/lib/animations'

interface CVExperienceProps {
    experience: Experience[]
}

export function CVExperience({ experience }: CVExperienceProps) {
    return (
        <motion.section
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="mb-12"
        >
            <h2 className="font-serif-title text-primary mb-8 text-3xl font-normal tracking-tight capitalize md:text-4xl lg:text-5xl">
                Arbeidserfaring
            </h2>
            <div className="space-y-6">
                {experience.map((exp, index) => (
                    <motion.div
                        key={exp.company}
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.15 + index * 0.08, ease: easeOut }}
                    >
                        <div className="border-primary border-l-4 pb-6 pl-6">
                            <h3 className="text-primary mb-1 font-sans text-lg font-bold md:text-xl">{exp.title}</h3>
                            <p className="mb-1 text-base font-medium">{exp.company}</p>

                            <div className="mb-2">
                                <p className="mb-1 text-base font-medium text-black">{exp.period}</p>
                                {exp.type && (
                                    <span className="border-primary text-primary inline-block border px-2 py-0.5 text-xs font-bold tracking-wider uppercase">
                                        {exp.type}
                                    </span>
                                )}
                            </div>
                            {exp.description && <p className="text-base font-medium">{exp.description}</p>}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}
