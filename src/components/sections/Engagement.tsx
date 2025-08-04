'use client';

import React from 'react';
import styled from 'styled-components';
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 4rem;
    max-width: 1400px;
    width: 100%;
    justify-content: center;
    align-items: center;
    overflow: visible;
    min-height: 0;
    
    /* Safari Mobile fixes */
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
  opacity: 1;
  visibility: visible;
  display: flex;
  
  /* Hover effect */
  &:hover {
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
  }
  
  /* Active state for better feedback */
  &:active {
    transform: scale(1.02);
    -webkit-transform: scale(1.02);
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
  }
  
  @media (min-width: 769px) and (max-width: 1023px) {
    height: 130px;
  }
  
  /* Desktop Grid Positioning */
  @media (min-width: 1024px) {
    height: 160px;
    min-height: 0;
    
    /* Flexbox Layout - alle Logos werden gleichmäßig verteilt */
    flex: 1 1 auto;
    min-width: 200px;
    max-width: 300px;
    overflow: visible;
    
    /* Desktop-spezifische Positionierung */
    &.akb {
      order: 1;
    }
    
    &.finanzfrauen {
      order: 2;
    }
    
    &.berater {
      order: 3;
    }
    
    &.yfn {
      order: 4;
    }
    
    &.machn {
      order: 5;
    }
  }
  
  @media (min-width: 1440px) {
    height: 180px;
  }
`;

const Engagement = () => {
  const logos = [
    {
      src: '/akb.png', // Corrected to .png
      alt: 'Arbeitskreis Börse',
      name: 'Arbeitskreis Börse',
      url: 'https://akb-mainz.de/'
    },
    {
      src: '/finanzfrauen.png',
      alt: 'Finanzfrauen',
      name: 'Finanzfrauen',
      url: 'https://www.linkedin.com/company/finanzfrauen-leipzig/posts/?feedView=all'
    },
    {
      src: '/berater.jpeg',
      alt: 'Berater e.V.',
      name: 'Berater e.V.',
      url: 'https://berater-mainz.de/'
    },
    {
      src: '/young_founders_network_logo.jpeg',
      alt: 'Young Founders Network',
      name: 'Young Founders Network',
      url: 'https://youngfounders.network/'
    },
    {
      src: '/machn_festival_logo.jpeg',
      alt: 'machn Festival',
      name: 'machn Festival',
      url: 'https://machn-festival.de/'
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
              className={
                logo.name === 'Arbeitskreis Börse' ? 'akb' :
                logo.name === 'Finanzfrauen' ? 'finanzfrauen' :
                logo.name === 'Berater e.V.' ? 'berater' :
                logo.name === 'Young Founders Network' ? 'yfn' :
                logo.name === 'machn Festival' ? 'machn' : ''
              }
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ 
                  width: '140px',
                  height: '140px',
                  objectFit: 'contain',
                  maxWidth: '100%'
                }}
                onError={(e) => {
                  console.error(`Failed to load image: ${logo.src}`, e);
                }}
                onLoad={() => {
                  console.log(`Successfully loaded: ${logo.src}`);
                }}
              />
            </LogoWrapper>
          ))}
        </LogoContainer>
      </Container>
    </Section>
  );
};

export default Engagement;
