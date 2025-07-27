'use client';

import React from 'react';
import styled from 'styled-components';
import { Instrument_Serif } from 'next/font/google';

const instrumentSerif = Instrument_Serif({ 
  weight: '400',
  subsets: ['latin']
});

const Section = styled.section`
  padding: 1rem 0 8rem 0;
  background-color: #f3efea;
  position: relative;
  overflow: visible;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 1rem 0 6rem 0;
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
  margin: 0 auto 3rem;
  padding: 0;
  align-self: flex-start;
  margin-left: 6rem;

  @media (min-width: 768px) {
    font-size: 96px;
    margin-left: 6rem;
  }

  @media (max-width: 767px) {
    padding: 0 2rem;
    margin-bottom: 2rem;
    margin-left: 3rem;
    font-size: 64px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  row-gap: 8rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0 2rem 0;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 6rem;
    padding: 0 2rem 2rem 2rem;
  }
`;

const ProjectCard = styled.div`
  background-image: linear-gradient(
    145deg,
    rgba(40, 53, 44, 0.85),
    rgba(40, 53, 44, 0.65)
  ), url('/Background Hero.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 3.5rem 3.5rem 0.5rem 3.5rem;
  border-radius: 2rem;
  box-shadow: 
    20px 20px 60px rgba(32, 42, 35, 0.5),
    -20px -20px 60px rgba(55, 122, 75, 0.2),
    inset 2px 2px 4px rgba(55, 122, 75, 0.1),
    inset -2px -2px 4px rgba(32, 42, 35, 0.15);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  height: 100%;
  color: #f9fffb;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      145deg,
      rgba(55, 122, 75, 0.1),
      rgba(32, 42, 35, 0.05)
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
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.02)
    );
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 
      25px 25px 75px rgba(32, 42, 35, 0.6),
      -25px -25px 75px rgba(55, 122, 75, 0.25),
      inset 2px 2px 4px rgba(55, 122, 75, 0.1),
      inset -2px -2px 4px rgba(32, 42, 35, 0.15);

    &::before {
      opacity: 1;
    }
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: 3rem;
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  color: #f9fffb;
  font-family: "Instrument Serif", serif;
  font-style: normal;
  line-height: 1.3;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const ProjectMainTitle = styled.span`
  display: block;
`;

const ProjectLink = styled.a`
  color: #d6fea1;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0 4px;
  
  &::before {
    content: '@';
    color: #d6fea1;
    margin-right: 4px;
    font-weight: 400;
    transition: all 0.3s ease;
    display: inline-block;
    transform-origin: center;
  }
  
  span {
    color: #d6fea1;
    transition: all 0.3s ease;
    display: inline-block;
    transform-origin: left;
  }
  
  &:hover {
    &::before {
      opacity: 0.8;
      transform: scale(1.1);
    }
    
    span {
      opacity: 0.8;
      transform: scale(1.1);
    }
  }
`;

const ProjectMeta = styled.div`
  margin-bottom: 2.5rem;
`;

const MetaItem = styled.div`
  margin-bottom: 2rem;
  color: #f9fffb;
  font-family: "Raleway", sans-serif;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const MetaLabel = styled.span`
  font-weight: 500;
  display: block;
  margin-bottom: 0.25rem;
  color: #d6fea1;
  font-family: "Raleway", sans-serif;
`;

const MetaText = styled.span`
  font-size: 1rem;
  line-height: 1.6;
  color: #f9fffb;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
`;

const ProjectContent = styled.div`
  margin-top: 2rem;
`;

const ContentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
`;

const ContentItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: #f9fffb;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const USP = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(249, 255, 251, 0.1);
  color: #f9fffb;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6;
`;

const Projects = () => {
  const projects = [
    {
      title: "Automatisierung weitergedacht",
      company: "Distart",
      link: "https://www.distart.de/",
      project: "Entwicklung einer beruflichen Weiterbildung zu Automatisierungen",
      role: "Konzeption, Inhalte, Didaktik & Umsetzung",
      achievements: [
        "Entwicklung der inhaltlichen Struktur & Lernziele",
        "Planung der Durchführungslogik (Zeiteinteilung, Methodik)",
        "Erstellung & Koordination der Inhalte",
        "Zielgruppengerechte Umsetzung – ohne Fachjargon, aber mit Tiefgang"
      ],
      usp: "Ich bin keine Entwicklerin – aber ich weiß, wie man komplexe Tools so vermittelt, dass sie wirken."
    },
    {
      title: "Mit Klarheit wachsen",
      company: "Agent Systems",
      link: "https://agent-systems.de/",
      project: "Strategischer Aufbau & operative Ausrichtung eines KI-Tech-Startups",
      role: "COO – verantwortlich für Struktur, Kommunikation & Wachstum",
      achievements: [
        "Positionierung & Messaging (Website, Sales, LinkedIn)",
        "Aufbau der internen Struktur: Teamprozesse, Meetingformate, Projektsteuerung",
        "Kundenakquise durch echte Beziehungen statt Push-Sales",
        "Gestaltung der externen Sichtbarkeit durch Events & Community-Building"
      ],
      usp: "Beziehungen first. Ich höre hin, finde heraus, was gebraucht wird – und gestalte dann Lösungen, die passen."
    },
    {
      title: "Von der Idee zur Organisation",
      company: "Energieberatung Rommel",
      link: "https://www.energieberatung-rommel.de/",
      project: "Aufbau eines Beratungsunternehmens im Energiesektor",
      role: "Assistenz der Geschäftsführung / Mitaufbau",
      achievements: [
        "Entwicklung einer funktionierenden Remote-Teamstruktur",
        "Einführung sinnvoller Tools (Notion, Pipedrive, Google Workspace)",
        "Etablierung von HR- & Meetingprozessen",
        "Controlling & Zielplanung zur wirtschaftlichen Steuerung"
      ],
      usp: "Ich denke Unternehmensaufbau vom Menschen aus – aber immer mit Blick auf Wirtschaftlichkeit."
    },
    {
      title: "Sichtbar werden",
      company: "EE-Netzwerk",
      link: "https://www.eenetzwerk.de/",
      project: "Auftritt & Positionierung eines neuen Beratungsnetzwerks",
      role: "Konzeption & Umsetzung der Kommunikation",
      achievements: [
        "Design & Text der Unternehmenswebsite",
        "Konzeption & Durchführung einer zielgerichteten Mailkampagne",
        "Vorbereitung & Inhaltserstellung für Sales-Workshops"
      ],
      usp: "Kommunikation, die nicht schreit – sondern trifft. Klar. Mutig. Auf den Punkt."
    }
  ];

  return (
    <Section id="projects">
      <Container>
        <Title>Projekte</Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectHeader>
                <ProjectTitle>
                  <ProjectMainTitle>{project.project}</ProjectMainTitle>
                  <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                    <span>{project.company}</span>
                  </ProjectLink>
                </ProjectTitle>
              </ProjectHeader>
              
              <ProjectMeta>
                <MetaItem>
                  <MetaLabel>Rolle</MetaLabel>
                  <MetaText>{project.role}</MetaText>
                </MetaItem>
              </ProjectMeta>

              <ProjectContent>
                <MetaItem>
                  <MetaLabel>Was ich bewegt habe</MetaLabel>
                </MetaItem>
                <ContentList>
                  {project.achievements.map((achievement, i) => (
                    <ContentItem key={i}>
                      <span>–</span>
                      <span>{achievement}</span>
                    </ContentItem>
                  ))}
                </ContentList>
                
                <USP>
                  <MetaLabel>Mein USP</MetaLabel>
                  {project.usp}
                </USP>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </Section>
  );
};

export default Projects; 