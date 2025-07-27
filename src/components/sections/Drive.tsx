'use client';

import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Title = styled.h2`
  font-size: 48px;
  font-weight: 400;
  font-family: "Instrument Serif", serif;
  font-style: normal;
  color: #68675f;
  margin-bottom: 4rem;
  text-align: left;
  max-width: 600px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 4rem;
  padding: 0 15%;

  @media (min-width: 768px) {
    font-size: 48px;
  }

  @media (max-width: 767px) {
    padding: 0 2rem;
    margin-bottom: 2rem;
    font-size: 36px;
  }
`;

const PalmAccent = styled.div`
  position: absolute;
  top: -400px;
  right: -200px;
  width: 1200px;
  height: 1200px;
  z-index: 0;
  opacity: 0.95;

  @media (max-width: 768px) {
    width: 800px;
    height: 800px;
    top: -250px;
    right: -100px;
  }
`;

const Section = styled.section`
  padding: 8rem 0;
  background-color: #f3efea;
  overflow: hidden;
  position: relative;
  margin-top: 0;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const Grid = styled.div`
  display: flex;
  gap: 4rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15%;
  
  @media (max-width: 968px) {
    flex-direction: column;
    gap: 3rem;
  }
  
  @media (max-width: 767px) {
    padding: 0 2rem;
    gap: 2rem;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
`;

const RightColumn = styled.div`
  flex: 1;
`;

const RightTitle = styled.h2`
  font-size: 48px;
  font-weight: 400;
  font-family: "Instrument Serif", serif;
  font-style: normal;
  color: #68675f;
  margin-bottom: 2rem;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 48px;
  }

  @media (max-width: 767px) {
    margin-bottom: 1.5rem;
    font-size: 36px;
  }
`;

const TextContent = styled.div`
  font-size: 1.25rem;
  line-height: 1.8;
  color: #68675f;
  max-width: 600px;
  font-family: "Raleway", sans-serif;
  font-weight: 400;

  p {
    margin-bottom: 2rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const HighlightedText = styled(motion.span)`
  position: relative;
  display: inline-block;
  color: #68675f;
  font-weight: 400;
  font-family: "Instrument Serif", serif;
  font-style: normal;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #68675f 0%, rgba(104,103,95,0.3) 100%);
    transform-origin: left;
  }
`;

const Drive = () => {
  const containerRef = useRef(null);

  return (
    <Section id="drive" ref={containerRef}>
      <PalmAccent>
        <Image
          src="/Palm.png"
          alt="Palm decoration"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </PalmAccent>
      <Container>
        <Title>Innerer Kompass W</Title>
        <Grid>
          <LeftColumn>
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
          </LeftColumn>
          
          <RightColumn>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <RightTitle>Warum ihr?</RightTitle>
              <TextContent>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                >
                  Ich habe selten eine Sprache in einem Unternehmen gefunden, die so klar benennt, was oft nur gefühlt wird: Dass Wirtschaft Verantwortung trägt. Und dass Technologie nur dann wirkt, wenn Menschen darin ihren Platz finden.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                >
                  Lesharo spricht von <HighlightedText
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 1.1, ease: "easeInOut" }}
                  >Bindung</HighlightedText>, <HighlightedText
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 1.3, ease: "easeInOut" }}
                  >Wirkung</HighlightedText>, <HighlightedText
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 1.5, ease: "easeInOut" }}
                  >Substanz</HighlightedText>. Genau das reizt mich.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                >
                  Ich will keine Systeme bauen, die gut aussehen, aber nichts halten. Ich will mit Menschen arbeiten, die Klarheit nicht für Schwäche halten.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                >
                  Deshalb glaube ich: Das, was ihr aufbauen wollt kann mit dem, was ich mitbringe, richtig gut werden. Und ich würde gerne mit euch herausfinden, wie.
                </motion.p>
              </TextContent>
            </motion.div>
          </RightColumn>
        </Grid>
      </Container>
    </Section>
  );
};

export default Drive; 