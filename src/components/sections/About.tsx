import { motion } from 'framer-motion'
import { FullscreenSection } from '@/components/ui'
import { fadeInUpLarge, fadeInUp, viewportAlways } from '@/lib/animations'
import { aboutContent } from '@/data/about'

interface AboutProps {
    id?: string
}

export function About({ id }: AboutProps) {
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
                className="font-serif-title text-primary text-5xl font-normal tracking-tight md:text-7xl lg:text-8xl"
            >
                Om meg
            </motion.h2>
        </div>
    )

    const rightContent = (
        <div className="flex w-full justify-start lg:justify-end">
            <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportAlways}
                transition={{ delay: 0.2 }}
                className="font-sans-extralight max-w-md text-left text-lg leading-relaxed md:text-xl lg:text-right"
            >
                {aboutContent}
            </motion.p>
        </div>
    )

    return <FullscreenSection id={id} left={leftContent} right={rightContent} />
}
