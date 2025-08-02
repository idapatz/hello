'use client';

import React from 'react';
import Image from 'next/image';
import { Instrument_Serif, Dancing_Script } from 'next/font/google';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SectionContainer } from '@/styles/commonStyles';

const instrumentSerif = Instrument_Serif({ 
  weight: '400',
  subsets: ['latin']
});

const dancingScript = Dancing_Script({ 
  subsets: ['latin'] 
});

const HeroSection = styled.section`
  min-height: var(--full-height, 100vh);
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--full-height, 100vh);
  overflow: hidden;
  background-image: url('/Background Hero.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
  padding: 2rem 0;
  
  /* Safari Mobile specific fixes */
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  
  /* Ensure proper viewport handling on mobile */
  @media (max-width: 768px) {
    min-height: 100vh;
    height: 100vh;
    /* Safari iOS viewport fix */
    height: -webkit-fill-available;
    min-height: -webkit-fill-available;
    /* Prevent address bar issues */
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
  }
  
  & > * {
    position: relative;
    z-index: 1;
  }
`;

const Container = styled(SectionContainer)`
  display: grid;
  grid-template-columns: 0.45fr 0.55fr;
  gap: 6rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 1400px) {
    gap: 4rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    gap: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    /* Ensure content fits in viewport */
    min-height: 0;
    max-height: 100vh;
    overflow: visible;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  
  /* Fallback for browsers without aspect-ratio support */
  &::before {
    content: '';
    display: block;
    padding-top: 100%; /* 1:1 aspect ratio */
  }
  
  /* Modern aspect-ratio for supported browsers */
  aspect-ratio: 1;

  @media (max-width: 1400px) {
    max-width: 450px;
  }

  @media (max-width: 1024px) {
    max-width: 400px;
    order: -1;
  }

  @media (max-width: 768px) {
    max-width: 280px;
    /* Ensure image doesn't overflow viewport */
    max-height: 40vh;
    aspect-ratio: 1;
    /* Safari mobile fixes */
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
`;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  justify-content: center;
  height: 100%;
  max-height: 500px;

  @media (max-width: 1400px) {
    max-height: 450px;
    gap: 1rem;
  }

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
    gap: 1rem;
    max-height: none;
  }

  @media (max-width: 768px) {
    gap: 0.875rem;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 1.5rem;
  box-shadow: 
    20px 20px 60px rgba(255, 255, 255, 0.1),
    -10px -10px 30px rgba(255, 255, 255, 0.05);
  
  @media (max-width: 768px) {
    border-radius: 1rem;
  }
`;

const Category = styled.div`
  font-family: var(--font-raleway);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(249, 255, 251, 0.8);
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const MainHeading = styled.h1`
  font-family: var(--font-instrument);
  font-size: 3.75rem;
  line-height: 1.05;
  color: #f9fffb;
  margin: 0;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 1400px) {
    font-size: 3.25rem;
  }

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Description = styled.p`
  font-family: var(--font-raleway);
  font-size: 1.125rem;
  line-height: 1.5;
  color: rgba(249, 255, 251, 0.9);
  margin: 0;
  max-width: 480px;

  @media (max-width: 1024px) {
    font-size: 1rem;
    max-width: 520px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin: 0 auto;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  position: relative;
  z-index: 20;
  
  @media (max-width: 1024px) {
    justify-content: center;
    margin-top: 0.75rem;
  }
`;

const CTALink = styled(motion.a)`
  font-family: var(--font-raleway);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #d6fea1;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border: 1px solid #d6fea1;
  background: transparent;
  cursor: pointer;
  display: inline-block;
  will-change: transform;

  &:hover {
    background: #d6fea1;
    color: #3f5645;
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`;

const Hero = () => {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection>
      <Container>
        <ImageColumn>
          <StyledImage
            src="/Profil.png"
            alt="Ida Patzelt"
            fill
            priority
            quality={100}
            sizes="(max-width: 768px) 320px, (max-width: 1024px) 400px, (max-width: 1400px) 450px, 500px"
          />
        </ImageColumn>
        <ContentColumn>
          <Category>
            Klar. Digital. Menschlich.
          </Category>
          <MainHeading>
            Ich baue Unternehmen mit Haltung.
          </MainHeading>
          <Description>
            Als Founder in Residence will ich mit euch gestalten, was Zukunft trägt:
            KI mit Sinn. Geschäftsmodelle mit Wirkung. Und Strukturen, die bleiben.
          </Description>
          <CTAContainer>
            <CTALink 
              href="#contact"
              onClick={handleContactClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              get in touch
            </CTALink>
          </CTAContainer>
        </ContentColumn>
      </Container>
    </HeroSection>
  );
};

export default Hero;