'use client';

import React from 'react';
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
  font-family: var(--font-raleway);
  font-size: 1.125rem;
  line-height: 1.6;
  color: #68675f;
  max-width: 800px;

  @media (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const Paragraph = styled(motion.p)`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const UnderlinedText = styled.span`
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 3px;
    width: 100%;
    height: 1px;
    background: #68675f;
    opacity: 0.5;
    transform: scaleX(0.8);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    opacity: 0.8;
  }
`;

const InnerCompassA1B3 = () => {
  return (
    <Section>
      <Container>
        <Title>Innerer Kompass</Title>
        <TextContent>
          <Paragraph
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Ich glaube an Arbeit, die <UnderlinedText>Sinn</UnderlinedText> stiftet.<br />
            An Unternehmen, die Menschen dienen, nicht umgekehrt.<br />
            Und an Strukturen, die Klarheit, Verantwortung und <UnderlinedText>Verbindung</UnderlinedText> ermöglichen.
          </Paragraph>

          <Paragraph
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Ich komme aus der Bildungswissenschaft, arbeite an der Schnittstelle von Strategie, Kommunikation und <UnderlinedText>Technologie</UnderlinedText> und liebe es, komplexe Themen greifbar zu machen. Mein Antrieb: Strukturen schaffen, in denen Menschen gerne arbeiten und ihr <UnderlinedText>Potenzial</UnderlinedText> entfalten können.
          </Paragraph>

          <Paragraph
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            In den letzten Jahren habe ich Teams aufgebaut, <UnderlinedText>Prozesse</UnderlinedText> geschärft, Workshops konzipiert, Websites entwickelt und KI-Automationen so erklärt, dass sie verständlich und nutzbar werden. Dabei habe ich ein feines Gespür dafür entwickelt, wie Veränderung gelingt: mit Klarheit, <UnderlinedText>Haltung</UnderlinedText> und einem Blick für das, was Menschen wirklich brauchen.
          </Paragraph>

          <Paragraph
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            Ich denke strategisch, handle klar, kommuniziere ehrlich.<br />
            Mich interessieren keine Buzzwords, sondern echte <UnderlinedText>Wirkung</UnderlinedText>.
          </Paragraph>


        </TextContent>
      </Container>
    </Section>
  );
};

export default InnerCompassA1B3;