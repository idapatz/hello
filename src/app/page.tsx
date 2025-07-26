import Hero from '@/components/sections/Hero';
import Drive from '@/components/sections/Drive';
import Skills from '@/components/sections/Skills';
import WhyYou from '@/components/sections/WhyYou';
import Resume from '@/components/sections/Resume';
import Contact from '@/components/sections/Contact';
import Projects from '@/components/sections/Projects';

export default function Home() {
  return (
    <main>
      <Hero />
      <Drive />
      <Skills />
      <Projects />
      <WhyYou />
      <Resume />
      <Contact />
    </main>
  );
}
