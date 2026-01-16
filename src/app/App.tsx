import { Footer } from '@/components/footer/Footer'
import { AboutSection } from './home/AboutSection'
import { HeroSection } from './home/HeroSection'
import { ProjectsSection } from './home/ProjectSection'
import { ServicesSection } from './home/ServicesSection'
import { TestimonialsSection } from './home/TestimonialsSection'

function App() {

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ServicesSection />
      <Footer />
    </>
  )
}

export default App
