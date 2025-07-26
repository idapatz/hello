'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  style: ['normal', 'italic']
});

const CompassContainer = styled.div`
  position: absolute;
  top: -250px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 500px;
  z-index: 10;

  @media (min-width: 768px) {
    width: 800px;
    height: 800px;
    top: -400px;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #1b1a15;
  margin-bottom: 4rem;
  font-family: ${playfair.className};
  text-align: center;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Section = styled.section`
  padding: 8rem 0;
  background-color: #afaca5;
  overflow: hidden;
  position: relative;
  margin-top: 250px;

  @media (min-width: 768px) {
    margin-top: 400px;
  }
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }
`;

const TextContent = styled.div`
  font-size: 1.25rem;
  line-height: 1.8;
  color: #1b1a15;
  max-width: 600px;

  p {
    margin-bottom: 2rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const KeywordsContainer = styled(motion.div)`
  position: relative;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 767px) {
    height: 300px;
    margin-top: 2rem;
  }
`;

const Keyword = styled(motion.div)`
  font-size: 2rem;
  font-weight: 500;
  color: #1b1a15;
  position: absolute;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${playfair.className};
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &.active::after {
    opacity: 1;
  }
`;

const HighlightedText = styled(motion.span)`
  position: relative;
  display: inline-block;
  color: #1b1a15;
  font-weight: 500;
  font-family: ${playfair.className};
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #1b1a15 0%, rgba(27,26,21,0.3) 100%);
    transform-origin: left;
  }
`;

const keywords = [
  "Verantwortung",
  "Wirkung",
  "Klarheit",
  "Vertrauen",
  "Zukunft",
  "Systemverständnis",
  "Verbindung",
  "Wachstum"
];

const Drive = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <Section id="drive" ref={containerRef}>
      <CompassContainer>
        <Image
          src="/innere Kompass.png"
          alt="Innerer Kompass"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </CompassContainer>
      <Container>
        <Title>Innerer Kompass</Title>
        <Grid>
          <TextContent>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Ich glaube nicht an Innovation um der Innovation willen.
              Mich interessiert, was trägt, wenn der <HighlightedText
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
              >Hype</HighlightedText> vorbei ist.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Ich habe Unternehmen mit aufgebaut, die nachhaltig wachsen – weil Menschen dort Klarheit finden, Verantwortung übernehmen und sich einbringen können.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Mein Antrieb ist kein Produkt. Kein Pitch. Kein Trend.
              Mein Antrieb ist die Frage: Wie muss ein Unternehmen beschaffen sein, damit es langfristig <HighlightedText
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
              >Wirkung</HighlightedText> entfalten kann – für Menschen, für Systeme, für die Gesellschaft?
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              Ich denke nicht in Quartalen. Ich denke in <HighlightedText
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 1, ease: "easeInOut" }}
              >Beziehungen</HighlightedText>.
              In Strukturen, die Halt geben, und in Systemen, die Entwicklung ermöglichen.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              Deshalb reizt mich die Idee, mit euch ein Unternehmen zu bauen, das nicht nur technologisch führend ist – sondern menschlich relevant.
            </motion.p>
          </TextContent>

          <KeywordsContainer style={{ opacity }}>
            {keywords.map((word, index) => (
              <Keyword
                key={word}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ 
                  opacity: [0, 1, 1, 0],
                  scale: [0.9, 1, 1, 0.9],
                  y: [20, 0, 0, -20],
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 5,
                  times: [0, 0.1, 0.9, 1],
                  delay: index * 0.8,
                  repeat: Infinity,
                  repeatDelay: keywords.length * 0.8
                }}
                style={{
                  top: `${50 + Math.sin(index * (Math.PI / keywords.length)) * 25}%`,
                  filter: 'blur(0.5px)'
                }}
              >
                {word}
              </Keyword>
            ))}
          </KeywordsContainer>
        </Grid>
      </Container>
    </Section>
  );
};

export default Drive; 