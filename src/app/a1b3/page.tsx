import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import InnerCompassA1B3 from '@/components/sections/InnerCompassA1B3';
import Projects from '@/components/sections/Projects';
import Vereine from '@/components/sections/Vereine';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

const HeroSpacer = () => <div style={{ height: 'var(--full-height, 100vh)' }} />;

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroSpacer />
      <Skills />
      <InnerCompassA1B3 />

      <Projects />
      <Vereine />
      <Contact />
      <Footer />
    </main>
  );
}