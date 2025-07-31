import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import InnerCompass from '@/components/sections/InnerCompass';
import Projects from '@/components/sections/Projects';
import Vereine from '@/components/sections/Vereine';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

const HeroSpacer = () => <div style={{ height: '100vh' }} />;

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroSpacer />
      <Skills />
      <InnerCompass />

      <Projects />
      <Vereine />
      <Contact />
      <Footer />
    </main>
  );
}
