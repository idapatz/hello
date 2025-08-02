import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import InnerCompass from '@/components/sections/InnerCompass';
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
      <div 
        style={{
          position: 'relative',
          backgroundColor: '#f3efea',
          width: '100%',
          minHeight: '100vh',
          zIndex: 1,
          WebkitTransform: 'translateZ(0)',
          transform: 'translateZ(0)',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden'
        }}
      >
        <Skills />
        <InnerCompass />
        <Projects />
        <Vereine />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
