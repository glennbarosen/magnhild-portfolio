import { motion } from 'framer-motion'
import type { Volunteer } from '@/data/cv'
import { fadeIn, fadeInUp, easeOut } from '@/lib/animations'

interface CVVolunteerProps {
    volunteer: Volunteer[]
}

export function CVVolunteer({ volunteer }: CVVolunteerProps) {
    return (
        <motion.section variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
            <h2 className="font-serif-title text-primary mb-8 text-3xl font-normal tracking-tight capitalize md:text-4xl lg:text-5xl">
                Frivillig
            </h2>
            <div className="space-y-6">
                {volunteer.map((vol, index) => (
                    <motion.div
                        key={vol.organization}
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.35 + index * 0.08, ease: easeOut }}
                    >
                        <div className="border-primary border-l-4 pb-6 pl-6">
                            <h3 className="text-primary mb-1 font-sans text-lg font-bold md:text-xl">{vol.role}</h3>
                            <p className="mb-1 text-base font-medium">{vol.organization}</p>
                            <p className="text-base font-medium">{vol.period}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}
