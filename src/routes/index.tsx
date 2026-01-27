import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/sections/Hero'
import { About } from '../components/sections/About'
import { Experience } from '../components/sections/Experience'
import { Contact } from '../components/sections/Contact'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Hero />
      <About id="om" />
      <Experience id="erfaring" />
      <Contact id="kontakt" />
    </>
  )
}
