'use client';

import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 5rem 0;
  background-color: #f9fafb;
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

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const SkillList = styled.ul`
  space-y: 0.5rem;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  color: #4a4a4a;
  font-size: 1.125rem;
`;

const CheckIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  color: #065f46;
  margin-right: 0.5rem;
  flex-shrink: 0;
`;

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"]
    },
    {
      category: "Tools & Methods",
      items: ["Git", "Agile/Scrum", "Responsive Design", "UI/UX", "Testing"]
    },
    {
      category: "Soft Skills",
      items: ["Teamarbeit", "Kommunikation", "Problemlösung", "Selbstständigkeit", "Lernbereitschaft"]
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