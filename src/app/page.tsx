import Hero from '@/components/sections/Hero';

import Skills from '@/components/sections/Skills';
import InnerCompass from '@/components/sections/InnerCompass';
import Projects from '@/components/sections/Projects';
import Vereine from '@/components/sections/Vereine';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <InnerCompass />

      <Projects />
      <Vereine />
      <Contact />
      <Footer />
    </main>
  );
}
