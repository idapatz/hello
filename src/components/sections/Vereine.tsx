'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Instrument_Serif } from 'next/font/google';
import { SectionContainer, SectionWrapper, SectionTitle } from '@/styles/commonStyles';

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
});

const VereinSection = styled(SectionWrapper)`
  background-color: #f3efea;
  overflow: hidden;
  position: relative;
  z-index: 10;
  padding-top: 6rem;
  /* Safari Mobile fixes - seamless sections */
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  will-change: auto;
  margin: 0;
  border: none;
  outline: none;
  
  @media (max-width: 1024px) {
    padding-top: 5rem;
  }
  
  @media (max-width: 768px) {
    padding-top: 4rem;
    /* Ensure no gaps on Safari Mobile */
    margin-bottom: 0;
    margin-top: 0;
    padding-left: 0;
    padding-right: 0;
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
  padding-left: 4rem;
  padding-right: 4rem;
  
  @media (max-width: 1400px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  
  @media (max-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  
  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  
  @media (min-width: 768px) {
    /* Desktop: create the staggered layout with flexbox */
    & > div:nth-child(1),
    & > div:nth-child(2),
    & > div:nth-child(3) {
      /* First row - 3 items */
    }
    
    & > div:nth-child(4),
    & > div:nth-child(5) {
      /* Second row - 2 items, will wrap naturally */
    }
  }
  
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 2rem;
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
  width: 160px;
  height: 160px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border-radius: 8px;
  overflow: hidden;
  
  &:hover {
    box-shadow: 0 8px 25px rgba(104, 103, 95, 0.15);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

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
                    <img
                      src={verein.logo}
                      alt={`${verein.name} Logo`}
                      style={{ 
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        borderRadius: '4px',
                        /* Safari Mobile compatibility */
                        maxWidth: '100%',
                        maxHeight: '100%',
                        display: 'block',
                        imageRendering: 'auto',
                        WebkitTransform: 'translateZ(0)',
                        transform: 'translateZ(0)'
                      }}
                      loading="eager"
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