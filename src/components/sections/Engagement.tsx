'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { SectionWrapper, SectionContainer, SectionTitle } from '@/styles/commonStyles';

const Section = styled(SectionWrapper)`
  background-color: #f3efea;
  position: relative;
  z-index: 10;
  overflow: visible;
  
  /* Safari Mobile fixes - seamless sections */
  margin: 0;
  border: none;
  outline: none;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  
  /* Ensure no gaps on Safari Mobile */
  @media (max-width: 768px) {
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
  align-items: center;
  overflow: visible;
`;

const Title = styled(SectionTitle)`
  color: #68675f;
  text-align: center;
  margin-bottom: 4rem;
  
  @media (max-width: 1024px) {
    margin-bottom: 3rem;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  width: 100%;
  max-width: 600px;
  overflow: visible;
  
  @media (max-width: 768px) {
    gap: 5rem;
    max-width: 100%;
    padding: 0 2rem;
  }
  
  @media (min-width: 769px) and (max-width: 1023px) {
    gap: 4.5rem;
    max-width: 800px;
  }
  
  /* Desktop Grid Layout */
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto auto;
    gap: 6rem 4rem;
    max-width: 1400px;
    width: 100%;
    place-items: center;
    align-content: space-between;
    overflow: visible;
    
    /* Safari Mobile fixes */
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -webkit-overflow-scrolling: touch;
  }
  
  @media (min-width: 1440px) {
    gap: 7rem 5rem;
    max-width: 1600px;
  }
`;

const LogoWrapper = styled.a`
  position: relative;
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: visible;
  
  /* Safari Mobile fixes */
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  opacity: 1;
  visibility: visible;
  display: flex;
  
  /* Hover effect */
  &:hover {
    transform: scale(1.05) translateZ(0);
    -webkit-transform: scale(1.05) translateZ(0);
  }
  
  /* Active state for better feedback */
  &:active {
    transform: scale(1.02) translateZ(0);
    -webkit-transform: scale(1.02) translateZ(0);
  }
  
  /* Focus state for accessibility */
  &:focus {
    outline: 2px solid #d6fea1;
    outline-offset: 4px;
    border-radius: 8px;
  }
  
  @media (max-width: 768px) {
    height: 120px;
    margin-bottom: 0;
    
    /* Mobile: Einspaltige Darstellung */
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5) {
      grid-column: unset;
      grid-row: unset;
      justify-self: unset;
    }
  }
  
  @media (min-width: 769px) and (max-width: 1023px) {
    height: 130px;
  }
  
  /* Desktop Grid Positioning */
  @media (min-width: 1024px) {
    height: 160px;
    
    /* Young Founders Network - Spalte 1 */
    &:nth-child(1) {
      grid-column: 1;
      grid-row: 1;
      justify-self: center;
    }
    
    /* machn Festival - Spalte 2-3 */
    &:nth-child(2) {
      grid-column: 2 / span 2;
      grid-row: 1;
      justify-self: center;
    }
    
    /* Finanzfrauen - Spalte 4 */
    &:nth-child(3) {
      grid-column: 4;
      grid-row: 1;
      justify-self: center;
    }
    
    /* Berater e.V. - mittig unter Abstand zwischen Logo 1 und 2 */
    &:nth-child(4) {
      grid-column: 1 / span 2;
      grid-row: 2;
      justify-self: center;
    }
    
    /* Arbeitskreis Börse - mittig unter Abstand zwischen Logo 2 und 3 */
    &:nth-child(5) {
      grid-column: 3 / span 2;
      grid-row: 2;
      justify-self: center;
    }
  }
  
  @media (min-width: 1440px) {
    height: 180px;
  }
`;

const StyledImage = styled(Image)`
  max-width: 140px;
  max-height: 140px;
  width: auto;
  height: auto;
  object-fit: contain;
  
  @media (max-width: 768px) {
    max-width: 120px;
    max-height: 120px;
  }
  
  @media (min-width: 769px) and (max-width: 1023px) {
    max-width: 130px;
    max-height: 130px;
  }
  
  @media (min-width: 1024px) {
    max-width: 160px;
    max-height: 160px;
  }
  
  @media (min-width: 1440px) {
    max-width: 180px;
    max-height: 180px;
  }
`;

const Engagement = () => {
  const logos = [
    {
      src: '/young_founders_network_logo.jpeg',
      alt: 'Young Founders Network',
      name: 'Young Founders Network',
      url: 'https://youngfoundersnetwork.de/'
    },
    {
      src: '/machn_festival_logo.jpeg',
      alt: 'machn Festival',
      name: 'machn Festival',
      url: 'https://machn-festival.de/'
    },
    {
      src: '/finanzfrauen.png',
      alt: 'Finanzfrauen',
      name: 'Finanzfrauen',
      url: 'https://finanzfrauen.de/'
    },
    {
      src: '/berater.jpeg',
      alt: 'Berater e.V.',
      name: 'Berater e.V.',
      url: 'https://berater-ev.de/'
    },
    {
      src: '/akb.jpg',
      alt: 'Arbeitskreis Börse',
      name: 'Arbeitskreis Börse',
      url: 'https://arbeitskreis-boerse.de/'
    }
  ];

  return (
    <Section id="engagement">
      <Container>
        <Title>Engagement</Title>
        <LogoContainer>
          {logos.map((logo, index) => (
            <LogoWrapper 
              key={index}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Besuche ${logo.name} Website`}
            >
              <StyledImage
                src={logo.src}
                alt={logo.alt}
                width={400}
                height={120}
                priority={index < 2}
              />
            </LogoWrapper>
          ))}
        </LogoContainer>
      </Container>
    </Section>
  );
};

export default Engagement;
