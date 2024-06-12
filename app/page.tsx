import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Resume } from '@/components/Resume'
import { Skills } from '@/components/Skills'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Skills />
      <Resume />
      <Footer />
    </main>
  )
}
