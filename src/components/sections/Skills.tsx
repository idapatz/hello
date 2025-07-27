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
  background-color: #f9fffb;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

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

const Grid = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 15%;
  display: grid;
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
  }
  
  @media (max-width: 767px) {
    padding: 0 2rem;
    gap: 2rem;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.4);
  padding: 2.5rem 2rem;
  border: 1px solid rgba(104, 103, 95, 0.15);
  box-shadow: 0 10px 30px rgba(104, 103, 95, 0.1);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(104, 103, 95, 0.15);
    background: rgba(255, 255, 255, 0.6);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  color: #68675f;
  margin-bottom: 2rem;
  font-family: ${instrumentSerif.className};
  line-height: 1.3;
  
  @media (max-width: 767px) {
    font-size: 1.25rem;
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
  font-size: 1rem;
  line-height: 1.6;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
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