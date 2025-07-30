'use client';

import { motion } from 'framer-motion';
import React, { useRef } from 'react';
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

const Separator = styled.div`
  position: absolute;
  left: 50%;
  top: 25%;
  height: 70%;
  width: 2px;
  background: rgba(104, 103, 95, 0.8);
  transform: translateX(-50%);

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8rem;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  position: relative;
  
  @media (max-width: 1400px) {
    gap: 6rem;
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const LeftColumn = styled.div`
  width: 100%;
`;

const RightColumn = styled.div`
  width: 100%;
`;

const TextContent = styled.div`
  font-family: var(--font-raleway);
  font-size: 1.125rem;
  line-height: 1.6;
  color: #68675f;

  @media (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const HighlightedText = styled(motion.span)`
  position: relative;
  display: inline-block;
  color: #68675f;
  font-weight: 400;
  font-family: var(--font-instrument);
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
  padding-left: 0;
`;

const RightTextContent = styled(TextContent)`
  margin-top: 8rem;

  @media (max-width: 1024px) {
    margin-top: 0;
  }
`;

const Drive = () => {
  const containerRef = useRef(null);

  return (
    <Section id="drive" ref={containerRef}>
      <Container>
        <Title>Innerer Kompass</Title>
        <Grid>
          <Separator />
          <LeftColumn>
            <LeftTextContent>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ marginBottom: '1.5rem' }}
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
                style={{ marginBottom: '1.5rem' }}
              >
                Ich habe Unternehmen mit aufgebaut, die nachhaltig wachsen – weil Menschen dort Klarheit finden, Verantwortung übernehmen und sich einbringen können.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                style={{ marginBottom: '1.5rem' }}
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
                style={{ marginBottom: '1.5rem' }}
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
                style={{ marginBottom: '0' }}
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
                style={{ marginBottom: '1.5rem' }}
              >
                Ich habe selten eine Sprache in einem Unternehmen gefunden, die so klar benennt, was oft nur gefühlt wird: Dass Wirtschaft Verantwortung trägt. Und dass Technologie nur dann wirkt, wenn Menschen darin ihren Platz finden.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                style={{ marginBottom: '1.5rem' }}
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
                style={{ marginBottom: '1.5rem' }}
              >
                Ich will keine Systeme bauen, die gut aussehen, aber nichts halten. Ich will mit Menschen arbeiten, die Klarheit nicht für Schwäche halten.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                style={{ marginBottom: '0' }}
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