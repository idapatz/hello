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
  background-color: #1a1a1a;
  position: relative;
  overflow: hidden;
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
  color: #ffffff;
  margin-bottom: 4rem;
  font-family: "Instrument Serif", serif;
  font-style: normal;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.5rem;
  font-family: "Raleway", sans-serif;
`;

const SkillList = styled.ul`
  space-y: 1rem;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  color: #9ca3af;
  font-size: 1.125rem;
  line-height: 1.8;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
`;

const CheckIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  color: #3b82f6;
  margin-right: 1rem;
  flex-shrink: 0;
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
          Was ich mitbringe
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
                    <CheckIcon
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </CheckIcon>
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