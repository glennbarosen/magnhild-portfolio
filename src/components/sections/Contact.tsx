import { motion } from 'framer-motion'
import { FullscreenSection, Icon } from '@/components/ui'
import { SOCIAL_LINKS } from '@/constants/navigation'
import { fadeInUpLarge, viewportAlways } from '@/lib/animations'

interface ContactProps {
    id?: string
}

export function Contact({ id }: ContactProps) {
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
                Kontakt
            </motion.h2>
        </div>
    )

    const rightContent = (
        <div className="flex w-full justify-start lg:justify-end">
            <div className="flex w-full min-w-[200px] flex-col gap-4 lg:w-auto">
                <a
                    href={`mailto:${SOCIAL_LINKS.EMAIL}`}
                    className="bg-primary hover:bg-primary/90 inline-flex w-full items-center justify-start gap-3 px-8 py-4 text-base font-bold text-white transition-colors duration-300 md:text-lg lg:justify-center"
                >
                    <Icon name="mail" className="h-5 w-5" />
                    E-post
                </a>
                <a
                    href={SOCIAL_LINKS.LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-primary/90 inline-flex w-full items-center justify-start gap-3 px-8 py-4 text-base font-bold text-white transition-colors duration-300 md:text-lg lg:justify-center"
                >
                    <Icon name="linkedin" className="h-5 w-5" />
                    LinkedIn
                </a>
            </div>
        </div>
    )

    return <FullscreenSection id={id} left={leftContent} right={rightContent} />
}
