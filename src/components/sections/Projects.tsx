'use client';

import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 8rem 0;
  background-color: #000;
  color: #fff;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (min-width: 768px) {
    padding: 0 4rem;
  }
`;

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  text-align: left;
  color: #fff;
  margin-bottom: 4rem;
  position: relative;
  padding-left: 2rem;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 80%;
    background: #3b82f6;
  }

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled.div`
  background: #111;
  padding: 3rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  border: 1px solid #222;

  &:hover {
    transform: translateY(-10px);
    border-color: #3b82f6;
    box-shadow: 0 20px 40px -20px rgba(59, 130, 246, 0.3);
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #60a5fa);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover:before {
    opacity: 1;
  }
`;

const ProjectEmoji = styled.span`
  font-size: 3rem;
  margin-bottom: 2rem;
  display: block;
`;

const ProjectTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.5rem;
  line-height: 1.3;
`;

const ProjectDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #9ca3af;
  margin-bottom: 2rem;
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2.5rem 0;
`;

const TaskItem = styled.li`
  font-size: 1.125rem;
  color: #d1d5db;
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  line-height: 1.6;
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: "→";
    position: absolute;
    left: 0;
    color: #3b82f6;
    font-weight: bold;
  }

  &:hover {
    color: #fff;
    transform: translateX(5px);
    transition: all 0.2s ease;
  }
`;

const Quote = styled.blockquote`
  font-size: 1.5rem;
  font-weight: 600;
  font-style: italic;
  color: #fff;
  margin: 2.5rem 0;
  padding: 0;
  position: relative;
  
  &:before {
    content: """;
    position: absolute;
    left: -1rem;
    top: -1rem;
    font-size: 4rem;
    color: #3b82f6;
    opacity: 0.5;
  }
`;

const HighlightText = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #3b82f6;
  text-align: left;
  margin-top: auto;
  padding-top: 2.5rem;
  letter-spacing: -0.02em;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Projects = () => {
  const projects = [
    {
      emoji: "✨",
      title: "Berufliche Weiterbildung zu KI-Automatisierung (D-START)",
      description: "Ich entwickle ein praxisnahes Weiterbildungsmodul zum Thema KI-Automatisierung für Fachkräfte – von der Konzeption bis zur Umsetzung.",
      tasks: [
        "Inhaltliche Konzeption & didaktischer Aufbau",
        "Zeitplanung & Umsetzungslogik",
        "Durchführung & Evaluation",
        "Einbindung praxisnaher Automations-Tools (n8n, GPT, etc.)"
      ],
      quote: "Ich bin keine Entwicklerin – aber ich bringe die richtigen Tools, Inhalte und Menschen zusammen, damit echte Wirkung entsteht."
    },
    {
      emoji: "✨",
      title: "Strategischer Aufbau & Positionierung – Agent Systems GmbH",
      description: "Ich gestalte die interne und externe Ausrichtung eines Tech-Startups mit – von Teamprozessen bis Kundengewinnung.",
      tasks: [
        "Entwicklung der strategischen Positionierung",
        "Aufbau klarer Meeting- & Kommunikationsstrukturen",
        "Leitung der internen Projektorganisation",
        "Externe Sichtbarkeit (Website, Events, LinkedIn-Sales)"
      ],
      quote: "Ich schaffe Strukturen, in denen Teams klar arbeiten können – und Kunden klar erkennen, wofür ein Unternehmen steht."
    },
    {
      emoji: "✨",
      title: "Beziehungsorientierter Vertrieb & Sichtbarkeit – Agent Systems GmbH",
      description: "Ich habe die Grundlagen für Sichtbarkeit und Vertrieb gelegt – nicht über Druck oder Cold Outreach, sondern über echte Beziehungen. Online und offline.",
      tasks: [
        "Positionierung & Messaging für eine klare Außenwirkung",
        "LinkedIn-Strategie: Gespräche statt nur Inhalte",
        "Aufbau und Pflege von Kontakten auf Events",
        "Identifikation von Bedarfen im direkten Dialog",
        "Übersetzung von Gesprächen in konkrete Angebote",
        "Mitgestaltung der Salesstruktur (CRM, Nachverfolgung, Priorisierung)"
      ],
      quote: "Ich mache kein Push-Sales – ich führe Gespräche, in denen Bedarf und Lösung sich begegnen dürfen.",
      highlight: "Beziehungen first."
    }
  ];

  return (
    <Section id="projects">
      <Container>
        <Title>
          Meine Projekte
        </Title>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectEmoji>{project.emoji}</ProjectEmoji>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TaskList>
                {project.tasks.map((task, taskIndex) => (
                  <TaskItem key={taskIndex}>{task}</TaskItem>
                ))}
              </TaskList>
              <Quote>{project.quote}</Quote>
              {project.highlight && (
                <HighlightText>{project.highlight}</HighlightText>
              )}
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Container>
    </Section>
  );
};

export default Projects; 