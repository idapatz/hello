import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import InnerCompass from '@/components/sections/InnerCompass';
import Projects from '@/components/sections/Projects';
import Vereine from '@/components/sections/Vereine';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import styled from 'styled-components';

const HeroSpacer = () => <div style={{ height: 'var(--full-height, 100vh)' }} />;

const SectionsBackground = styled.div`
  position: relative;
  background-color: #f3efea;
  width: 100%;
  min-height: 100vh;
  z-index: 1;
  
  /* Safari Mobile fixes */
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroSpacer />
      <SectionsBackground>
        <Skills />
        <InnerCompass />
        <Projects />
        <Vereine />
        <Contact />
      </SectionsBackground>
      <Footer />
    </main>
  );
}
