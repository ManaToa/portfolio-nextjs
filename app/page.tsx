import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Resume } from '@/components/Resume'
import { TechStack } from '@/components/TechStack'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TechStack />
      <Resume />
      <Footer />
    </main>
  )
}
