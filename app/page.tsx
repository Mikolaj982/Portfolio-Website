'use client'
import { AboutSection } from './components/AboutSection';
import { EmailSection } from './components/EmailSection';
import IntroductionSection from './components/IntroductionSection';
import { Navbar } from './components/Navbar'
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';

const Home = () => {
  return (<>
    <Navbar />
    <main className="flex flex-col min-h-screen overflow-x-hidden bg-[#121212] px-10 pt-32">
      <IntroductionSection />
      <AboutSection />
      <ProjectsSection />
      <EmailSection />
    </main>
    <Footer />
  </>
  )
}

export default Home;