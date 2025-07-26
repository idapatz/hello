'use client';

import React from 'react';
import styled from 'styled-components';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  style: ['normal', 'italic']
});

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #1a1a1a;
  position: relative;
  overflow: hidden;
  padding: 8rem 0;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 80px 200px 1fr;
  min-height: 800px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Sidebar = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  grid-row: span 4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
`;

const SidebarTitle = styled.div`
  transform: rotate(-90deg);
  white-space: nowrap;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: #ffffff;
  text-transform: uppercase;
  font-family: ${playfair.className};
`;

const UpdatedLabel = styled.div`
  transform: rotate(-90deg);
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.75rem;
  color: #9ca3af;
  white-space: nowrap;
  letter-spacing: 0.1em;
`;

const RowLabel = styled.div<{ isLast?: boolean }>`
  background-color: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: ${props => props.isLast ? 'none' : '1px solid rgba(255, 255, 255, 0.1)'};
  padding: 1rem;
  text-align: center;
  line-height: 1.4;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  height: 100%;
`;

const ContentCell = styled.div<{ isLast?: boolean }>`
  padding: 3rem;
  border-bottom: ${props => props.isLast ? 'none' : '1px solid rgba(255, 255, 255, 0.1)'};
`;

const ProjectTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1.25rem;
  line-height: 1.8;
  color: #9ca3af;
  margin-bottom: 2rem;
  font-family: ${playfair.className};

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
`;

const TaskItem = styled.li`
  font-size: 1.125rem;
  color: #ffffff;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: flex-start;
  line-height: 1.8;
  padding-left: 1.5rem;
  position: relative;
  transition: all 0.3s ease;

  &:before {
    content: "→";
    position: absolute;
    left: 0;
    color: #9ca3af;
  }

  &:hover {
    color: #9ca3af;
    transform: translateX(5px);
  }
`;

const Quote = styled.blockquote`
  font-size: 1.25rem;
  font-style: italic;
  color: #ffffff;
  margin: 2rem 0;
  padding-left: 1.5rem;
  border-left: 3px solid #3b82f6;
  font-family: ${playfair.className};
  line-height: 1.8;
  white-space: pre-line;

  .arrow {
    color: #9ca3af;
    margin: 0 0.5rem;
  }
`;

const HighlightText = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #3b82f6;
  margin-top: 1.5rem;
  font-family: ${playfair.className};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "",
      description: "Für Distart entwickle ich eine praxisnahe Weiterbildung zum Thema KI-Automatisierung für Fachkräfte",
      tasks: [
        "Inhaltliche Konzeption & didaktischer Aufbau",
        "Zeitplanung & Umsetzungslogik",
        "Durchführung & Evaluation",
        "Einbindung praxisnaher Automations-Tools (n8n, GPT, etc.)"
      ],
      quote: "Ich bin keine Entwicklerin – aber ich bringe die richtigen Tools, Inhalte und Menschen zusammen, damit echte Wirkung entsteht.",
      highlight: ""
    },
    {
      title: "",
      description: "Bei Agent Systems GmbH habe ich die interne und externe Ausrichtung in Zusammenarbeit gestaltet",
      tasks: [
        "Entwicklung der strategischen Positionierung",
        "Aufbau klarer Meeting- & Kommunikationsstrukturen",
        "Leitung der internen Projektorganisation",
        "Externe Sichtbarkeit (Website, Events, LinkedIn-Sales)"
      ],
      quote: "Ich schaffe Strukturen, in denen Teams klar arbeiten können – und Kunden klar erkennen, wofür ein Unternehmen steht.",
      highlight: ""
    },
    {
      title: "",
      description: "Ich habe die Grundlagen für Sichtbarkeit und Vertrieb gelegt – nicht über Druck oder Cold Outreach, sondern über echte Beziehungen. Online und offline.",
      tasks: [
        "Positionierung & Messaging für eine klare Außenwirkung",
        "LinkedIn-Strategie: Gespräche statt nur Inhalte",
        "Aufbau und Pflege von Kontakten auf Events",
        "Identifikation von Bedarfen im direkten Dialog",
        "Übersetzung von Gesprächen in konkrete Angebote"
      ],
      quote: "Meine Sales-Formel:\nZuhören → Verstehen → Vertrauen → Zusammenarbeit. Beziehung first",
      highlight: ""
    }
  ];

  return (
    <Section id="projects">
      <Container>
        <Grid>
          <Sidebar>
            <SidebarTitle>Projekte</SidebarTitle>
            <UpdatedLabel>Updated</UpdatedLabel>
          </Sidebar>
          
          {['Weiterbildung zu KI-Automatisierung', 'Aufbau & Strategie', 'Vertrieb & Sichtbarkeit'].map((label, index) => (
            <React.Fragment key={label}>
              <RowLabel isLast={index === 2}>{label}</RowLabel>
              <ContentCell isLast={index === 2}>
                <ProjectTitle>{projects[index].title}</ProjectTitle>
                <ProjectDescription>{projects[index].description}</ProjectDescription>
                <TaskList>
                  {projects[index].tasks.map((task, taskIndex) => (
                    <TaskItem key={taskIndex}>{task}</TaskItem>
                  ))}
                </TaskList>
                <Quote>{projects[index].quote.split('→').map((part, i, arr) => (
  <React.Fragment key={i}>
    {part}
    {i < arr.length - 1 && <span className="arrow">→</span>}
  </React.Fragment>
))}</Quote>
                {projects[index].highlight && (
                  <HighlightText>{projects[index].highlight}</HighlightText>
                )}
              </ContentCell>
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Projects; 