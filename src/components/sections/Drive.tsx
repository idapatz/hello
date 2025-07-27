'use client';

import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 96px;
  font-weight: 400;
  font-family: "Instrument Serif", serif;
  font-style: normal;
  color: #68675f;
  text-align: left;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 3rem;
  padding: 0;
  align-self: flex-start;
  margin-left: -2rem;

  @media (min-width: 768px) {
    font-size: 96px;
    margin-left: -2rem;
  }

  @media (max-width: 767px) {
    padding: 0 2rem;
    margin-bottom: 2rem;
    margin-left: 0;
    font-size: 64px;
  }
`;

const Section = styled.section`
  padding: 6rem 0 1rem 0;
  background-color: #f3efea;
  overflow: hidden;
  position: relative;
  z-index: 10;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 4rem 0 1rem 0;
  }
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Separator = styled.div`
  position: absolute;
  left: 50%;
  top: 25%;
  height: 70%;
  width: 2px;
  background: rgba(104, 103, 95, 0.8);
  transform: translateX(-50%);

  @media (max-width: 968px) {
    display: none;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  position: relative;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 0 2rem;
  }
  
  @media (max-width: 767px) {
    padding: 0 2rem;
    gap: 2rem;
  }
`;

const LeftColumn = styled.div`
  width: 100%;
`;

const RightColumn = styled.div`
  width: 100%;
`;

const TextContent = styled.div`
  font-size: 1.25rem;
  line-height: 1.8;
  color: #68675f;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  padding-left: 2rem;

  @media (max-width: 767px) {
    padding-left: 0;
  }

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

const LeftTextContent = styled(TextContent)`
  padding-left: 1rem;

  @media (max-width: 767px) {
    padding-left: 0;
  }
`;

const RightTextContent = styled(TextContent)`
  margin-top: 10rem;  // Erhöht für exakte Ausrichtung

  @media (max-width: 767px) {
    margin-top: 0;
  }
`;

const Drive = () => {
  const containerRef = useRef(null);

  return (
    <Section id="drive" ref={containerRef}>
      <Container>
        <Grid>
          <Separator />
          <LeftColumn>
            <Title>Innerer Kompass</Title>
            <LeftTextContent>
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
            </LeftTextContent>
          </LeftColumn>
          
          <RightColumn>
            <RightTextContent>
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
            </RightTextContent>
          </RightColumn>
        </Grid>
      </Container>
    </Section>
  );
};

export default Drive; 