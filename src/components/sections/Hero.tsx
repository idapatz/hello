'use client';

import React from 'react';
import Image from 'next/image';
import { Instrument_Serif, Dancing_Script } from 'next/font/google';
import styled from 'styled-components';

const instrumentSerif = Instrument_Serif({ 
  weight: '400',
  subsets: ['latin']
});

const dancingScript = Dancing_Script({ 
  subsets: ['latin'] 
});

const HeroSection = styled.section`
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  background-image: url('/Background Hero.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
  
  & > * {
    position: relative;
    z-index: 2;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 4rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 60vh;
  max-height: 600px;
  width: 70%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    height: 40vh;
    max-height: 400px;
    width: 80%;
  }
`;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 800px;

  @media (max-width: 1024px) {
    text-align: center;
    align-items: center;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 20px 40px rgba(255, 255, 255, 0.1);
`;

const Category = styled.div`
  font-family: var(--font-raleway);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #f9fffb;
`;

const MainHeading = styled.h1`
  font-family: var(--font-instrument);
  font-size: 6rem;
  line-height: 1.1;
  color: #f9fffb;
  margin: 0;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const Description = styled.p`
  font-family: var(--font-raleway);
  font-size: 1.25rem;
  line-height: 1.8;
  color: #f9fffb;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const CTALink = styled.a`
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #d6fea1;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.8rem 1.5rem;
  border: 1px solid #d6fea1;
  background: transparent;
  font-family: "Raleway", sans-serif;

  &:hover {
    background: #d6fea1;
    color: #3f5645;
    transform: translateY(-2px);
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <ImageColumn>
          <StyledImage
            src="/Profil.png"
            alt="Ida Patzelt"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
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
            <CTALink href="#contact">
              get in touch
            </CTALink>
          </CTAContainer>
        </ContentColumn>
      </Container>
    </HeroSection>
  );
};

export default Hero;