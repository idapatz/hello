'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import styled, { keyframes } from 'styled-components';

const playfair = Playfair_Display({ subsets: ['latin'] });

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(to right, #fafaf9 50%, #f5f5f4 50%);
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 2rem;
    gap: 2rem;
  }
`;

const ContentLeft = styled.div`
  max-width: 600px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.3s;

  @media (max-width: 1024px) {
    max-width: 100%;
    text-align: center;
  }
`;

const MainHeading = styled.h1`
  font-size: 4rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #1a1a1a;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Highlight = styled.span`
  display: block;
  color: #064e3b; // Waldgrün
  margin-top: 0.5rem;
  font-size: 0.9em;
`;

const SublineContainer = styled.div`
  opacity: 0;
  animation: ${slideUp} 1s ease-out forwards;
  animation-delay: 0.6s;
  margin: 2rem 0;
`;

const Subline = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: #4a4a4a;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const CTAButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 2px solid #064e3b;
  color: #064e3b;
  font-size: 1.125rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #064e3b;
    color: white;
    transform: translateY(-2px);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 80vh;
  max-height: 800px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.9s;

  @media (max-width: 1024px) {
    height: 50vh;
    max-height: 500px;
    width: 100%;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 20px;
  transition: transform 1.5s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const opacity = 1 - Math.max(0, -top / window.innerHeight);
        sectionRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeroSection>
      <Container ref={sectionRef}>
        <ContentLeft>
          <MainHeading className={playfair.className}>
            Ich baue Unternehmen mit Haltung.
            <Highlight>Klar. Digital. Menschlich.</Highlight>
          </MainHeading>

          <SublineContainer>
            <Subline>
              Als Founder in Residence will ich mit euch gestalten, was Zukunft trägt:
              <br />
              KI mit Sinn. Geschäftsmodelle mit Wirkung. Und Strukturen, die bleiben.
            </Subline>

            <CTAButton onClick={() => scrollToSection('skills')}>
              Was ich mitbringe
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M5 12h14m-6-6l6 6-6 6"/>
              </svg>
            </CTAButton>
          </SublineContainer>
        </ContentLeft>

        <ImageContainer>
          <StyledImage
            src="/ida.jpg"
            alt="Ida Patzelt"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </ImageContainer>
      </Container>
    </HeroSection>
  );
};

export default Hero; 