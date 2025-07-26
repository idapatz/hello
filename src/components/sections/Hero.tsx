'use client';

import React from 'react';
import Image from 'next/image';
import { Playfair_Display, Dancing_Script } from 'next/font/google';
import styled from 'styled-components';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  style: ['normal', 'italic']
});

const dancingScript = Dancing_Script({ 
  subsets: ['latin'] 
});

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #1a1a1a;
  position: relative;
  overflow: hidden;
`;

const LeafDecoration = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 25%;
  height: 100%;
  background-image: url('/leaf.png');
  background-size: cover;
  background-position: left center;
  background-repeat: no-repeat;
  opacity: 1;
  pointer-events: none;
`;

const CircleDecoration = styled.div`
  position: absolute;
  bottom: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
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
  color: #ffffff;
`;

const MainHeading = styled.h1`
  font-size: 4rem;
  line-height: 1.2;
  color: #ffffff;
  margin: 1rem 0;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.8;
  color: #9ca3af;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  align-self: stretch;
`;

const CTALine = styled.div`
  height: 1px;
  flex-grow: 1;
  background: linear-gradient(to right, #ffffff, #ffffff);
`;

const CTALink = styled.a`
  font-family: ${dancingScript.style.fontFamily};
  font-size: 2rem;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    color: #3b82f6;
    transform: translateY(-2px);
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <LeafDecoration />
      <CircleDecoration />
      <Container>
        <ImageColumn>
          <StyledImage
            src="/ida.JPG"
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
          <MainHeading className={`${playfair.className}`}>
            Ich baue Unternehmen mit Haltung.
          </MainHeading>
          <Description>
            Als Founder in Residence will ich mit euch gestalten, was Zukunft trägt:
            KI mit Sinn. Geschäftsmodelle mit Wirkung. Und Strukturen, die bleiben.
          </Description>
          <CTAContainer>
            <CTALine />
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