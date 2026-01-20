import { Footer } from '@/components/footer/Footer'
import { AboutSection } from './home/about-section/AboutSection'
import { HeroSection } from './home/hero-section/HeroSection'
import { ProjectsSection } from './home/project-section/ProjectSection'
import { ServicesSection } from './home/services-section/ServicesSection'
import { TestimonialsSection } from './home/testimonials-section/TestimonialsSection'

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
