'use client';

import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 5rem 0;
  background-color: #f0f9ff;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: #1a1a1a;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Content = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const Text = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #4a4a4a;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
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
              Dass Wirtschaft Verantwortung trägt. Und dass Technologie nur dann wirkt, wenn Menschen darin ihren Platz finden.
            </Text>
            <Text>
              Lesharo spricht von Bindung, Wirkung, Substanz.
              Genau das reizt mich.
            </Text>
            <Text>
              Ich will keine Systeme bauen, die gut aussehen, aber nichts halten.
              Ich will mit Menschen arbeiten, die Klarheit nicht für Schwäche halten.
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