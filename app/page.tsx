import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
