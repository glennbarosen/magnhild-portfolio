import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { experience } from '@/data/cv'
import { FullscreenSection, Icon } from '@/components/ui'
import { ROUTES } from '@/constants/navigation'
import { fadeInUpLarge, fadeInUp, slideInRight, viewportAlways, easeOut } from '@/lib/animations'

interface ExperienceProps {
    id?: string
}

export function Experience({ id }: ExperienceProps) {
    const leftContent = (
        <div className="flex h-full flex-col justify-between">
            {/* Spacer */}
            <div />

            {/* Title - bottom left */}
            <motion.h2
                variants={fadeInUpLarge}
                initial="hidden"
                whileInView="visible"
                viewport={viewportAlways}
                className="font-serif-title text-primary text-5xl font-normal tracking-tight capitalize md:text-7xl lg:text-8xl"
            >
                Erfaring
            </motion.h2>
        </div>
    )

    const rightContent = (
        <div className="flex w-full justify-start lg:justify-end">
            <div className="flex flex-col gap-6">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportAlways}
                    transition={{ delay: 0.2 }}
                    className="space-y-3 text-left lg:text-right"
                >
                    {experience.slice(0, 3).map((exp, index) => (
                        <motion.div
                            key={exp.company + exp.period}
                            variants={slideInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportAlways}
                            transition={{
                                duration: 0.5,
                                delay: 0.3 + index * 0.08,
                                ease: easeOut,
                            }}
                        >
                            <p className="text-lg font-medium md:text-xl">{exp.title}</p>
                            <p className="text-sm">{exp.period}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportAlways}
                    transition={{ delay: 0.6 }}
                >
                    <Link
                        to={ROUTES.CV}
                        className="bg-primary inline-flex w-full items-center justify-start gap-3 px-8 py-4 text-base font-bold text-white transition-colors duration-300 md:text-lg lg:justify-center"
                    >
                        Se full CV
                        <Icon name="arrow-right" className="h-5 w-5" />
                    </Link>
                </motion.div>
            </div>
        </div>
    )

    return <FullscreenSection id={id} left={leftContent} right={rightContent} />
}
