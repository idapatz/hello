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
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-image: url('/Background Hero.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  & > * {
    position: relative;
    z-index: 2;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 2rem;
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
  justify-content: space-between;
  height: 60vh;
  max-height: 600px;
  padding: 0;
  width: 70%;
  margin-left: 0;

  @media (max-width: 1024px) {
    height: 40vh;
    max-height: 400px;
    width: 80%;
    margin: 0 auto;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 0;
  box-shadow: 0 20px 40px rgba(255, 255, 255, 0.1);
`;

const Category = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #f9fffb;
  font-family: "Raleway", sans-serif;
`;

const MainHeading = styled.h1`
  font-size: 4rem;
  line-height: 1.2;
  color: #f9fffb;
  margin: 1rem 0;
  font-family: "Instrument Serif", serif;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.8;
  color: #f9fffb;
  font-family: "Raleway", sans-serif;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
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
    color: #000000;
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