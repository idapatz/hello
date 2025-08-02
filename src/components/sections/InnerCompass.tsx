'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { SectionContainer, SectionWrapper, SectionTitle } from '@/styles/commonStyles';

const Section = styled(SectionWrapper)`
  background-color: #f3efea;
  overflow: hidden;
  position: relative;
  z-index: 10;
`;

const Container = styled(SectionContainer)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled(SectionTitle)`
  color: #68675f;
  margin-bottom: 2rem;
  margin-left: -8px;
  
  @media (max-width: 1024px) {
    margin-bottom: 1.75rem;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const TextContent = styled.div`
  font-family: "Raleway", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 1.125rem;
  line-height: 1.6;
  color: #68675f;
  max-width: 800px;
  /* Safari iOS fixes */
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  /* Force text visibility on Safari */
  opacity: 1 !important;
  visibility: visible !important;
  display: block !important;
  /* Safari mobile specific fixes */
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  /* Ensure text rendering */
  will-change: auto;
  /* Prevent Safari from hiding text */
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;

  @media (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
    /* Additional Safari mobile fixes */
    -webkit-overflow-scrolling: touch;
    /* Force text visibility on mobile Safari */
    opacity: 1 !important;
    visibility: visible !important;
  }
`;

const Paragraph = styled(motion.p)`
  margin-bottom: 1.5rem;
  /* Safari mobile text visibility fixes */
  opacity: 1 !important;
  visibility: visible !important;
  display: block !important;
  /* Force text rendering on Safari */
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  /* Safari mobile specific */
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  &:last-child {
    margin-bottom: 0;
  }
  
  /* Ensure text is always visible on Safari */
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    opacity: 1 !important;
    visibility: visible !important;
  }
`;

const UnderlinedText = styled.span`
  position: relative;
  /* Safari iOS compatibility - use inline instead of inline-block */
  display: inline;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 1px;
    width: 100%;
    height: 1px;
    background: #68675f;
    opacity: 0.5;
    transform: scaleX(0.8);
    transition: transform 0.3s ease;
    /* Safari iOS fix */
    will-change: transform;
  }

  &:hover::after {
    transform: scaleX(1);
    opacity: 0.8;
  }
  
  /* Fallback for Safari iOS without :after support issues */
  @supports not (transform: scaleX(0.8)) {
    border-bottom: 1px solid #68675f;
    opacity: 0.5;
  }
`;

const InnerCompass = () => {
  // Safari mobile text visibility fix
  useEffect(() => {
    const ensureTextVisibility = () => {
      const paragraphs = document.querySelectorAll('#innerer-kompass p');
      paragraphs.forEach(p => {
        p.style.opacity = '1';
        p.style.visibility = 'visible';
        p.style.display = 'block';
      });
    };

    // Run immediately and after a delay to ensure text is visible
    ensureTextVisibility();
    const timer = setTimeout(ensureTextVisibility, 1000);
    const timer2 = setTimeout(ensureTextVisibility, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <Section id="innerer-kompass">
      <Container>
        <Title>Innerer Kompass</Title>
        <TextContent>
          <Paragraph
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            onAnimationComplete={() => {
              // Fallback for Safari mobile - ensure text is visible
              if (typeof window !== 'undefined') {
                const paragraphs = document.querySelectorAll('#innerer-kompass p');
                paragraphs.forEach(p => {
                  p.style.opacity = '1';
                  p.style.visibility = 'visible';
                });
              }
            }}
          >
            Ich glaube an Arbeit, die <UnderlinedText>Sinn</UnderlinedText> stiftet.<br />
            An Unternehmen, die Menschen dienen, nicht umgekehrt.<br />
            Und an Strukturen, die Klarheit, Verantwortung und <UnderlinedText>Verbindung</UnderlinedText> ermöglichen.
          </Paragraph>

          <Paragraph
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            onAnimationComplete={() => {
              // Fallback for Safari mobile - ensure text is visible
              if (typeof window !== 'undefined') {
                const paragraphs = document.querySelectorAll('#innerer-kompass p');
                paragraphs.forEach(p => {
                  p.style.opacity = '1';
                  p.style.visibility = 'visible';
                });
              }
            }}
          >
            Ich komme aus der Bildungswissenschaft, arbeite an der Schnittstelle von Strategie, Kommunikation und <UnderlinedText>Technologie</UnderlinedText> und liebe es, komplexe Themen greifbar zu machen. Mein Antrieb: Strukturen schaffen, in denen Menschen gerne arbeiten und ihr <UnderlinedText>Potenzial</UnderlinedText> entfalten können.
          </Paragraph>

          <Paragraph
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            onAnimationComplete={() => {
              // Fallback for Safari mobile - ensure text is visible
              if (typeof window !== 'undefined') {
                const paragraphs = document.querySelectorAll('#innerer-kompass p');
                paragraphs.forEach(p => {
                  p.style.opacity = '1';
                  p.style.visibility = 'visible';
                });
              }
            }}
          >
            In den letzten Jahren habe ich Teams aufgebaut, <UnderlinedText>Prozesse</UnderlinedText> geschärft, Workshops konzipiert, Websites entwickelt und KI-Automationen so erklärt, dass sie verständlich und nutzbar werden. Dabei habe ich ein feines Gespür dafür entwickelt, wie Veränderung gelingt: mit Klarheit, <UnderlinedText>Haltung</UnderlinedText> und einem Blick für das, was Menschen wirklich brauchen.
          </Paragraph>

          <Paragraph
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            onAnimationComplete={() => {
              // Fallback for Safari mobile - ensure text is visible
              if (typeof window !== 'undefined') {
                const paragraphs = document.querySelectorAll('#innerer-kompass p');
                paragraphs.forEach(p => {
                  p.style.opacity = '1';
                  p.style.visibility = 'visible';
                });
              }
            }}
          >
            Ich denke strategisch, handle klar, kommuniziere ehrlich.<br />
            Mich interessieren keine Buzzwords, sondern echte <UnderlinedText>Wirkung</UnderlinedText>.
          </Paragraph>


        </TextContent>
      </Container>
    </Section>
  );
};

export default InnerCompass;