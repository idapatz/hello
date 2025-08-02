'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionContainer, SectionWrapper, SectionTitle } from '@/styles/commonStyles';

const VereinSection = styled(SectionWrapper)`
  background-color: #f3efea;
  overflow: hidden;
  position: relative;
  z-index: 10;
  padding-top: 6rem;
  margin: 0;
  border: none;
  outline: none;
  
  /* Safari-specific fixes */
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;
  will-change: transform;
  
  /* Ensure proper rendering in Safari */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  @media (max-width: 1024px) {
    padding-top: 5rem;
  }
  
  @media (max-width: 768px) {
    padding-top: 4rem;
    /* Safari Mobile specific fixes */
    margin-bottom: 0;
    margin-top: 0;
    padding-left: 0;
    padding-right: 0;
    -webkit-overflow-scrolling: touch;
  }
`;

const Container = styled(SectionContainer)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 6rem;
  padding-right: 6rem;
  
  @media (max-width: 1400px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  
  @media (max-width: 1024px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  
  @media (max-width: 768px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

const Title = styled(SectionTitle)`
  color: #68675f;
  margin-bottom: 3rem;
  text-align: center;
  width: 100%;
  font-family: "Instrument Serif", serif;
  /* Safari Mobile fixes */
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  will-change: auto;
  
  @media (max-width: 1024px) {
    margin-bottom: 2rem;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const VereinGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;
  gap: 4rem;
  padding: 2rem 0;

  @media (min-width: 768px) {
    /* Desktop: Staggered grid layout */
    & > div:nth-child(1) { /* Young Founders */
      grid-column: 1 / 2;
      grid-row: 1;
    }
    
    & > div:nth-child(2) { /* machn Festival */
      grid-column: 2 / 4;
      grid-row: 1;
      justify-self: center;
    }
    
    & > div:nth-child(3) { /* Finanzfrauen */
      grid-column: 4 / 5;
      grid-row: 1;
    }
    
    & > div:nth-child(4) { /* Berater e.V. */
      grid-column: 1 / 3;
      grid-row: 2;
      justify-self: center;
    }
    
    & > div:nth-child(5) { /* Arbeitskreis Börse */
      grid-column: 3 / 5;
      grid-row: 2;
      justify-self: center;
    }
  }
  
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    
    & > div {
      grid-column: 1;
    }
  }
`;

const VereinCard = styled(motion.div)`
  padding: 1rem;
  background: transparent;
  border-radius: 0;
  text-align: center;
  transition: all 0.3s ease;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 250px;
  /* Safari Mobile fixes */
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  will-change: auto;
  
  &:hover {
    background: transparent;
    transform: translateY(-3px);
  }

  a {
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const LogoContainer = styled.div`
  width: 180px;
  height: 180px;
  margin-bottom: 1.5rem;
  display: block; /* Safari fix */
  position: relative; /* Safari fix */
  transition: all 0.3s ease;
  overflow: hidden;
  background: transparent;
  padding: 1rem;
  
  /* Safari-specific fixes */
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;
  
  &:hover {
    transform: translateY(-2px);
  }

  /* Ensure consistent sizing across browsers */
  & > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* Safari-specific image fixes */
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  @media (max-width: 1200px) {
    width: 160px;
    height: 160px;
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

const VereinName = styled.h3`
  font-size: 1.125rem;
  font-weight: 400;
  color: #68675f;
  margin: 0;
  font-family: "Raleway", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.4;
  transition: all 0.3s ease;
  position: relative;
  text-align: center;
  /* Safari iOS text rendering fixes */
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    width: 0;
    height: 2px;
    background: #68675f;
    transition: all 0.3s ease;
    transform: translateX(-50%);
    /* Safari iOS fix */
    will-change: width;
  }
  
  a:hover & {
    color: #68675f;
  }
  
  a:hover &::after {
    width: 100%;
  }
  
  /* Fallback for Safari iOS if pseudo-elements don't work */
  @supports not (transform: translateX(-50%)) {
    border-bottom: 2px solid transparent;
    
    a:hover & {
      border-bottom-color: #68675f;
    }
  }
`;

const Vereine = () => {
  const vereine = [
    { 
      name: 'Young Founders Network', 
      logo: '/young_founders_network_logo.jpeg',
      link: 'https://youngfounders.network/'
    },
    { 
      name: 'Machn Festival', 
      logo: '/machn_festival_logo.jpeg',
      link: 'https://machn-festival.de/'
    },
    { 
      name: 'Finanzfrauen', 
      logo: '/Finanzfrauen logo.png',
      link: 'https://www.linkedin.com/company/finanzfrauen-leipzig/'
    },
    { 
      name: 'Arbeitskreis Börse', 
      logo: '/AKB logo.png',
      link: 'https://akb-mainz.de/'
    },
    { 
      name: 'Berater e.V.', 
      logo: '/berater e.v..jpeg',
      link: 'https://berater-mainz.de/'
    }
  ];

  return (
    <VereinSection id="vereine">
      <Container>
        <Title>Engagement</Title>
        <ContentWrapper>
          <VereinGrid>
            {vereine.map((verein, index) => (
              <VereinCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
              >
                <a
                  href={verein.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    textDecoration: 'none', 
                    color: 'inherit',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%'
                  }}
                >
                  <LogoContainer>
                    <Image
                      src={verein.logo}
                      alt={`${verein.name} Logo`}
                      fill
                      style={{ 
                        objectFit: 'contain',
                        /* Safari-specific fixes */
                        WebkitTransform: 'translateZ(0)',
                        transform: 'translateZ(0)',
                        WebkitBackfaceVisibility: 'hidden',
                        backfaceVisibility: 'hidden',
                        mixBlendMode: 'multiply',
                        /* Prevent image scaling issues */
                        imageRendering: '-webkit-optimize-contrast',
                        WebkitFontSmoothing: 'antialiased'
                      }}
                      onError={(e) => {
                        console.error('Image failed to load:', verein.logo);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </LogoContainer>
                  <VereinName>{verein.name}</VereinName>
                </a>
              </VereinCard>
            ))}
          </VereinGrid>
        </ContentWrapper>
      </Container>
    </VereinSection>
  );
};

export default Vereine; 