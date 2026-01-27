import { createFileRoute } from '@tanstack/react-router'
import { Hero, About, Experience, Contact } from '@/components/sections'
import { SEO } from '@/components/ui'
import { SECTIONS } from '@/constants/navigation'
import { PAGE_META } from '@/constants/seo'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <SEO 
        title={PAGE_META.home.title}
        description={PAGE_META.home.description}
      />
      <Hero />
      <About id={SECTIONS.ABOUT} />
      <Experience id={SECTIONS.EXPERIENCE} />
      <Contact id={SECTIONS.CONTACT} />
    </>
  )
}
