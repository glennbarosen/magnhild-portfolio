import { createFileRoute } from '@tanstack/react-router'
import { Hero, About, Experience, Contact } from '@/components/sections'
import { SEO } from '@/components/ui'
import { SECTIONS, SECTION_VISIBILITY } from '@/constants/navigation'
import { PAGE_META } from '@/constants/seo'

export const Route = createFileRoute('/')({
    component: HomePage,
})

function HomePage() {
    return (
        <>
            <SEO title={PAGE_META.home.title} description={PAGE_META.home.description} />
            <Hero />
            {SECTION_VISIBILITY.ABOUT && <About id={SECTIONS.ABOUT} />}
            {SECTION_VISIBILITY.EXPERIENCE && <Experience id={SECTIONS.EXPERIENCE} />}
            {SECTION_VISIBILITY.CONTACT && <Contact id={SECTIONS.CONTACT} />}
        </>
    )
}
