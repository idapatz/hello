'use client';

import React from 'react';
import styled from 'styled-components';
import { Instrument_Serif } from 'next/font/google';

const instrumentSerif = Instrument_Serif({ 
  weight: '400',
  subsets: ['latin']
});

const Section = styled.section`
  padding: 8rem 0;
  background-color: #f3efea;
  position: relative;
  overflow: hidden;
  z-index: 10;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
  color: #68675f;
  margin-bottom: 4rem;
  font-family: "Instrument Serif", serif;
  font-style: normal;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Content = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.4);
  padding: 3rem;
  border-radius: 0;
  border: 1px solid rgba(104, 103, 95, 0.1);
  box-shadow: 0 20px 40px rgba(104, 103, 95, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(104, 103, 95, 0.15);
  }
`;

const Text = styled.p`
  font-size: 1.25rem;
  line-height: 1.8;
  color: #68675f;
  margin-bottom: 2rem;
  font-family: "Raleway", sans-serif;
  font-weight: 400;

  &:last-child {
    margin-bottom: 0;
  }

  strong {
    color: #68675f;
    font-family: "Raleway", sans-serif;
    font-weight: 600;
  }
`;

const WhyYou = () => {
  return (
    <Section id="why-you">
      <Container>
        <Title>
          Warum ihr?
        </Title>
        <Content>
          <Card>
            <Text>
              Ich habe selten eine Sprache in einem Unternehmen gefunden, die so klar benennt, was oft nur gefühlt wird:
              Dass <strong>Wirtschaft Verantwortung trägt</strong>. Und dass <strong>Technologie nur dann wirkt, wenn Menschen darin ihren Platz finden</strong>.
            </Text>
            <Text>
              Lesharo spricht von <strong>Bindung, Wirkung, Substanz</strong>.
              Genau das reizt mich.
            </Text>
            <Text>
              Ich will keine Systeme bauen, die gut aussehen, aber nichts halten.
              Ich will mit Menschen arbeiten, die <strong>Klarheit nicht für Schwäche halten</strong>.
            </Text>
            <Text>
              Deshalb glaube ich: Das, was ihr aufbauen wollt kann mit dem, was ich mitbringe, richtig gut werden.
              Und ich würde gerne mit euch herausfinden, wie.
            </Text>
          </Card>
        </Content>
      </Container>
    </Section>
  );
};

export default WhyYou; 