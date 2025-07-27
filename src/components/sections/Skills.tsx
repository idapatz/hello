'use client';

import React from 'react';
import styled from 'styled-components';
import { Instrument_Serif } from 'next/font/google';
import Image from 'next/image';

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

const Section = styled.section`
  padding: 6rem 0;
  background-color: #f3efea;
  position: relative;
  overflow: hidden;
  z-index: 10;
  margin-top: 100vh;

  @media (max-width: 768px) {
    padding: 4rem 0;
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

const Title = styled.h2`
  font-size: 96px;
  font-weight: 400;
  font-family: "Instrument Serif", serif;
  font-style: normal;
  color: #68675f;
  text-align: left;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 1.5rem;
  padding: 0;
  align-self: flex-start;
  margin-left: 6rem;

  @media (min-width: 768px) {
    font-size: 96px;
    margin-left: 6rem;
  }

  @media (max-width: 767px) {
    padding: 0 2rem;
    margin-bottom: 1rem;
    margin-left: 3rem;
    font-size: 64px;
  }
`;

const Grid = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  display: grid;
  gap: 4rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
  }
  
  @media (max-width: 767px) {
    padding: 0 2rem;
    gap: 3rem;
  }
`;

const Card = styled.div`
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.3)
  );
  padding: 2rem 3rem 3.5rem 3rem;
  border-radius: 2rem;
  box-shadow: 
    20px 20px 60px rgba(104, 103, 95, 0.2),
    -20px -20px 60px rgba(255, 255, 255, 0.4),
    inset 2px 2px 4px rgba(255, 255, 255, 0.2),
    inset -2px -2px 4px rgba(104, 103, 95, 0.1);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

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
    border-radius: 2rem;
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
    border-radius: 2rem;
    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.1)
    );
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 
      25px 25px 75px rgba(104, 103, 95, 0.25),
      -25px -25px 75px rgba(255, 255, 255, 0.5),
      inset 2px 2px 4px rgba(255, 255, 255, 0.2),
      inset -2px -2px 4px rgba(104, 103, 95, 0.1);

    &::before {
      opacity: 1;
    }
  }
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  color: #68675f;
  margin-bottom: 2rem;
  font-family: "Instrument Serif", serif;
  font-style: normal;
  line-height: 1.3;
  
  @media (max-width: 767px) {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: flex-start;
  color: #68675f;
  font-size: 1.25rem;
  line-height: 1.6;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CheckIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1.25rem;
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
    font-size: 1rem;
    font-weight: 600;
    z-index: 1;
  }
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
        <Title>
          Skills
        </Title>
        <Grid>
          {skills.map((skillSet, index) => (
            <Card key={index}>
              <CardTitle>
                {skillSet.category}
              </CardTitle>
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