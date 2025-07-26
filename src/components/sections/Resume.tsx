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
  max-width: 64rem;
  margin: 0 auto;
`;

const Section2 = styled.div`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TimelineItem = styled.div<{ color: string }>`
  border-left: 4px solid ${props => props.color};
  padding-left: 1rem;
`;

const Period = styled.div<{ color: string }>`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${props => props.color};
`;

const ItemTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  color: #1a1a1a;
`;

const Institution = styled.div`
  color: #4a4a4a;
`;

const Description = styled.div`
  margin-top: 0.5rem;
  color: #4a4a4a;
`;

const Resume = () => {
  const experiences = [
    {
      period: "2020 - Heute",
      title: "Frontend Entwicklerin",
      company: "Beispiel GmbH",
      description: "Entwicklung moderner Webanwendungen mit React und Next.js"
    },
    {
      period: "2018 - 2020",
      title: "Junior Webentwicklerin",
      company: "Tech AG",
      description: "Frontend-Entwicklung und UI/UX-Design"
    }
  ];

  const education = [
    {
      period: "2015 - 2018",
      title: "B.Sc. Informatik",
      institution: "Technische Universität",
      description: "Schwerpunkt: Webentwicklung und Software Engineering"
    },
    {
      period: "2014",
      title: "Abitur",
      institution: "Gymnasium",
      description: "Leistungskurse: Mathematik und Informatik"
    }
  ];

  return (
    <Section id="resume">
      <Container>
        <Title>
          Lebenslauf
        </Title>
        <Content>
          <Section2>
            <SectionTitle>Berufserfahrung</SectionTitle>
            <Timeline>
              {experiences.map((exp, index) => (
                <TimelineItem key={index} color="#065f46">
                  <Period color="#065f46">{exp.period}</Period>
                  <ItemTitle>{exp.title}</ItemTitle>
                  <Institution>{exp.company}</Institution>
                  <Description>{exp.description}</Description>
                </TimelineItem>
              ))}
            </Timeline>
          </Section2>

          <Section2>
            <SectionTitle>Ausbildung</SectionTitle>
            <Timeline>
              {education.map((edu, index) => (
                <TimelineItem key={index} color="#0891b2">
                  <Period color="#0891b2">{edu.period}</Period>
                  <ItemTitle>{edu.title}</ItemTitle>
                  <Institution>{edu.institution}</Institution>
                  <Description>{edu.description}</Description>
                </TimelineItem>
              ))}
            </Timeline>
          </Section2>
        </Content>
      </Container>
    </Section>
  );
};

export default Resume; 