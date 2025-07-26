'use client';

import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 5rem 0;
  background-color: white;
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

const Text = styled.div`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #4a4a4a;

  p {
    margin-bottom: 1.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Drive = () => {
  return (
    <Section id="drive">
      <Container>
        <Title>
          Was mich antreibt
        </Title>
        <Content>
          <Text>
            <p>
              Meine Leidenschaft für Webentwicklung treibt mich an, innovative und benutzerfreundliche Lösungen zu schaffen. 
              Ich strebe danach, Technologie und Design zu vereinen, um digitale Erlebnisse zu erschaffen, die Menschen begeistern.
            </p>
            <p>
              Die ständige Weiterentwicklung der Technologien motiviert mich, am Ball zu bleiben und mich kontinuierlich 
              weiterzubilden. Dabei liegt mein Fokus darauf, nicht nur funktionale, sondern auch ästhetisch ansprechende 
              Anwendungen zu entwickeln.
            </p>
          </Text>
        </Content>
      </Container>
    </Section>
  );
};

export default Drive; 