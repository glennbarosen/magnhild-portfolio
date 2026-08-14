import { motion } from 'framer-motion'
import type { Education } from '@/data/cv'
import { fadeIn, fadeInUp, easeOut } from '@/lib/animations'

interface CVEducationProps {
    education: Education[]
}

export function CVEducation({ education }: CVEducationProps) {
    return (
        <motion.section variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
            <h2 className="font-serif-title text-primary mb-8 text-3xl font-normal tracking-tight capitalize md:text-4xl lg:text-5xl">
                Utdanning
            </h2>
            <div className="space-y-6">
                {education.map((edu, index) => (
                    <motion.div
                        key={edu.institution + edu.period}
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.25 + index * 0.08, ease: easeOut }}
                    >
                        <div className="border-primary border-l-4 pb-6 pl-6">
                            <h3 className="text-primary mb-1 font-sans text-lg font-bold md:text-xl">{edu.degree}</h3>
                            <p className="mb-1 text-base font-medium">{edu.institution}</p>
                            <p className="text-base font-medium">{edu.period}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}
