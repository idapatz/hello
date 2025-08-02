'use client';

import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import InnerCompassA1B3 from '@/components/sections/InnerCompassA1B3';
import Projects from '@/components/sections/Projects';

import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import { SectionGroup } from '@/styles/commonStyles';
import styled from 'styled-components';

const HeroSpacer = () => <div style={{ height: 'var(--full-height, 100vh)' }} />;

// Beige background wrapper to prevent hero section from showing through Safari gaps
const BeigeBackgroundWrapper = styled.div`
  background-color: #f3efea; /* beige */
  position: relative;
  z-index: 0;
  width: 100%;
  /* Safari Mobile fixes */
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  isolation: isolate;
`;

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroSpacer />
      
      {/* Beige background wrapper to prevent hero section from showing through */}
      <BeigeBackgroundWrapper>
        {/* Gruppiere zusammenhängende Sections */}
        <SectionGroup>
          <Skills />
          <InnerCompassA1B3 />
          <Projects />
          <Contact />
        </SectionGroup>
      </BeigeBackgroundWrapper>
      
      <Footer />
    </main>
  );
}