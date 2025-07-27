import Hero from '@/components/sections/Hero';
import Drive from '@/components/sections/Drive';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Projects from '@/components/sections/Projects';
import Vereine from '@/components/sections/Vereine';

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Drive />
      <Projects />
      <Vereine />
      <Contact />
    </main>
  );
}
