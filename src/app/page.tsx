import About from '@/components/About';
import Contact from '@/components/Contact';
import Experiences from '@/components/Experiences';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import SectionDivider from '@/components/SectionDivider';
import Skills from '@/components/Skills';
import { client } from '../../sanity/lib/client';

export default async function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Header />
      <Hero />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experiences />
      <Contact />
      <Footer />
    </main>
  );
}
