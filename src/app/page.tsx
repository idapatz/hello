import Hero from '@/components/sections/Hero';
import Drive from '@/components/sections/Drive';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Vereine from '@/components/sections/Vereine';
import Contact from '@/components/sections/Contact';

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
