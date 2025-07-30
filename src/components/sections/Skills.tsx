'use client';

import React from 'react';
import styled from 'styled-components';
import { Instrument_Serif } from 'next/font/google';
import Image from 'next/image';
import { SectionContainer, SectionWrapper, SectionTitle } from '@/styles/commonStyles';

const instrumentSerif = Instrument_Serif({ 
  weight: '400',
  subsets: ['latin']
});

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

const Title = styled(SectionTitle)`
  color: #68675f;
  margin-left: -8px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 1200px) {
    max-width: 900px;
    gap: 2rem;
  }
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 400px;
  }
`;

const Card = styled.div`
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.3)
  );
  padding: 2rem 2.5rem 3rem 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 
    15px 15px 40px rgba(104, 103, 95, 0.15),
    -15px -15px 40px rgba(255, 255, 255, 0.4),
    inset 2px 2px 4px rgba(255, 255, 255, 0.2),
    inset -2px -2px 4px rgba(104, 103, 95, 0.08);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  height: 100%;

  @media (max-width: 768px) {
    padding: 1.5rem 2rem 2.5rem 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.1)
    );
    border-radius: 1.5rem;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    border-radius: 1.5rem;
    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.1)
    );
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-3px) scale(1.01);
    box-shadow: 
      20px 20px 50px rgba(104, 103, 95, 0.2),
      -20px -20px 50px rgba(255, 255, 255, 0.5),
      inset 2px 2px 4px rgba(255, 255, 255, 0.2),
      inset -2px -2px 4px rgba(104, 103, 95, 0.08);

    &::before {
      opacity: 1;
    }
  }
`;

const CardTitle = styled.h3`
  font-family: var(--font-instrument);
  font-size: 1.875rem;
  font-weight: 400;
  font-style: normal;
  color: #28352c;
  margin: 0 0 1.5rem 0;
  line-height: 1.3;

  @media (max-width: 1024px) {
    font-size: 1.625rem;
  }

  @media (max-width: 768px) {
    font-size: 1.375rem;
    margin: 0 0 1.25rem 0;
  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  font-family: var(--font-raleway);
  font-size: 1rem;
  line-height: 1.6;
  color: #28352c;
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 0.625rem;
  }
`;

const CheckIcon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 1rem;
  margin-top: 0.125rem;
  flex-shrink: 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #d6fea1;
    border-radius: 50%;
    opacity: 0.8;
  }
  
  &::before {
    content: '✓';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #68675f;
    font-size: 0.875rem;
    font-weight: 600;
    z-index: 1;
  }
`;

const Section = styled(SectionWrapper)`
  background-color: #f3efea;
  position: relative;
  z-index: 10;
  margin-top: 100vh;
  padding-top: 4rem;

  @media (max-width: 1024px) {
    padding-top: 3rem;
  }

  @media (max-width: 768px) {
    padding-top: 2rem;
  }
`;

const Container = styled(SectionContainer)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Skills = () => {
  const skills = [
    {
      category: "Business-Verständnis",
      items: [
        "Strategieentwicklung in der Energie- & KI-Branche",
        "Produktentwicklung & MVP-Prozesse",
        "Controlling, Positionierung, Zielplanung"
      ]
    },
    {
      category: "Team & Führung",
      items: [
        "Teamaufbau (remote & vor Ort)",
        "HR-Prozesse, Mitarbeitergespräche, Kulturformate",
        "Meetingstrukturen & Kommunikation"
      ]
    },
    {
      category: "Struktur & Umsetzung",
      items: [
        "Notion, Pipedrive, Google Workspace",
        "Websiteaufbau, Tool-Landschaft, Kampagnenentwicklung",
        "Workshops & Weiterbildungen mit Substanz"
      ]
    }
  ];

  return (
    <Section id="skills">
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
        <Title>Skills</Title>
        <Grid>
          {skills.map((skillSet, index) => (
            <Card key={index}>
              <CardTitle>{skillSet.category}</CardTitle>
              <SkillList>
                {skillSet.items.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex}>
                    <CheckIcon />
                    {skill}
                  </SkillItem>
                ))}
              </SkillList>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Skills;