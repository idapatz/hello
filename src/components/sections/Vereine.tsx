'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Instrument_Serif } from 'next/font/google';
import Image from 'next/image';

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
});

const VereinSection = styled.section`
  padding: 8rem 0;
  background-color: #f3efea;
  overflow: hidden;
  position: relative;
  z-index: 10;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 60px;
  font-weight: 400;
  font-family: "Instrument Serif", serif;
  font-style: normal;
  color: #68675f;
  margin-bottom: 4rem;
  text-align: left;
  max-width: 600px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 4rem;
  padding: 0 15%;

  @media (min-width: 768px) {
    font-size: 60px;
  }

  @media (max-width: 767px) {
    padding: 0 2rem;
    margin-bottom: 2rem;
    font-size: 44px;
  }
`;

const VereinGrid = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 3rem 6rem;
  justify-content: center;
  justify-items: center;
  
  /* First row - 3 logos */
  & > div:nth-child(1) {
    grid-column: 2;
  }
  
  & > div:nth-child(2) {
    grid-column: 4;
  }
  
  & > div:nth-child(3) {
    grid-column: 6;
  }
  
  /* Second row - 2 logos */
  & > div:nth-child(4) {
    grid-column: 3;
  }
  
  & > div:nth-child(5) {
    grid-column: 5;
  }
  
  @media (max-width: 767px) {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    
    /* Reset grid positioning for mobile */
    & > div {
      grid-column: unset !important;
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
  
  &:hover {
    background: transparent;
    transform: translateY(-3px);
  }

  a {
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const LogoContainer = styled.div`
  width: 160px;
  height: 160px;
  position: relative;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border-radius: 8px;
  
  &:hover {
    box-shadow: 0 8px 25px rgba(104, 103, 95, 0.15);
  }
`;

const VereinName = styled.h3`
  font-size: 1.125rem;
  font-weight: 400;
  color: #68675f;
  margin: 0;
  font-family: "Raleway", sans-serif;
  line-height: 1.4;
  transition: all 0.3s ease;
  position: relative;
  
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
  }
  
  a:hover & {
    color: #68675f;
  }
  
  a:hover &::after {
    width: 100%;
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
    <VereinSection>
      <Container>
        <VereinGrid>
          {vereine.map((verein, index) => (
            <VereinCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
                      borderRadius: '4px'
                    }}
                  />
                </LogoContainer>
                <VereinName>{verein.name}</VereinName>
              </a>
            </VereinCard>
          ))}
        </VereinGrid>
      </Container>
    </VereinSection>
  );
};

export default Vereine; 