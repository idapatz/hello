'use client';

import React from 'react';
import styled from 'styled-components';
import { Instrument_Serif } from 'next/font/google';
import { SectionWrapper, SectionTitle } from '@/styles/commonStyles';

const instrumentSerif = Instrument_Serif({ 
  weight: '400',
  subsets: ['latin']
});

const Section = styled(SectionWrapper)`
  background-color: #f3efea;
  position: relative;
  overflow: visible;
  z-index: 10;
  /* Safari Mobile fixes - seamless sections */
  margin: 0;
  border: none;
  outline: none;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  
  /* Ensure no gaps on Safari Mobile */
  @media (max-width: 768px) {
    margin-bottom: 0;
    margin-top: 0;
    padding-left: 0;
    padding-right: 0;
  }
`;

// Custom container with reduced spacing for Projects section
const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 8rem;
  padding-right: 8rem;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 1400px) {
    padding-left: 6rem;
    padding-right: 6rem;
  }
  
  @media (max-width: 1200px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
  
  @media (max-width: 1024px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  
  @media (max-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  
  @media (max-width: 480px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Title = styled(SectionTitle)`
  color: #68675f;
  margin-left: -8px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  row-gap: 5rem;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  
  @media (max-width: 1400px) {
    gap: 2.5rem;
    row-gap: 4rem;
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    row-gap: 3rem;
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
  padding: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 
    12px 12px 30px rgba(20, 25, 22, 0.6),
    -8px -8px 20px rgba(60, 80, 66, 0.3),
    inset 3px 3px 6px rgba(60, 80, 66, 0.2),
    inset -3px -3px 6px rgba(20, 25, 22, 0.4);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  height: 100%;
  color: #f9fffb;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 2rem;
    box-shadow: 
      8px 8px 20px rgba(20, 25, 22, 0.5),
      -6px -6px 15px rgba(60, 80, 66, 0.25),
      inset 2px 2px 4px rgba(60, 80, 66, 0.15),
      inset -2px -2px 4px rgba(20, 25, 22, 0.3);
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
      rgba(60, 80, 66, 0.1),
      rgba(20, 25, 22, 0.05)
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
      rgba(60, 80, 66, 0.1),
      rgba(20, 25, 22, 0.02)
    );
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-3px) scale(1.01);
    box-shadow: 
      15px 15px 35px rgba(20, 25, 22, 0.7),
      -10px -10px 25px rgba(60, 80, 66, 0.4),
      inset 4px 4px 8px rgba(60, 80, 66, 0.25),
      inset -4px -4px 8px rgba(20, 25, 22, 0.5);

    &::before {
      opacity: 1;
    }
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: 2.5rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const ProjectTitle = styled.h3`
  font-family: var(--font-instrument);
  font-size: 1.875rem;
  font-weight: 400;
  font-style: normal;
  line-height: 1.3;
  color: #f9fffb;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: 1024px) {
    font-size: 1.625rem;
  }

  @media (max-width: 768px) {
    font-size: 1.375rem;
    gap: 0.5rem;
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
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const MetaItem = styled.div`
  margin-bottom: 1.5rem;
  color: #f9fffb;
  font-family: var(--font-raleway);
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 1.25rem;
  }
`;

const MetaLabel = styled.span`
  font-family: var(--font-raleway);
  font-weight: 500;
  display: block;
  margin-bottom: 0.25rem;
  color: #d6fea1;
`;

const MetaText = styled.span`
  font-family: var(--font-raleway);
  font-size: 1rem;
  line-height: 1.6;
  color: #f9fffb;
  font-weight: 400;
`;

const ProjectContent = styled.div`
  margin-top: 1.5rem;
  
  @media (max-width: 768px) {
    margin-top: 1.25rem;
  }
`;

const ContentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
`;

const ContentItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  margin-bottom: 0.625rem;
  color: #f9fffb;
  font-family: var(--font-raleway);
  font-weight: 400;
  font-size: 0.95rem;
  line-height: 1.5;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;


const Projects = () => {
  const projects = [
    {
      title: "Automatisierung weitergedacht",
      company: "Distart",
      link: "https://www.distart.de/",
      project: "Entwicklung einer beruflichen Weiterbildung zum Thema Automatisierung",
      role: "Konzeption, Inhalte, Didaktik & Umsetzung",
      achievements: [
        "Entwicklung der inhaltlichen Struktur & Lernziele",
        "Planung der Durchführungslogik (Zeiteinteilung, Methodik)",
        "Erstellung & Koordination der Inhalte",
        "Zielgruppengerechte Umsetzung – ohne Fachjargon, aber mit Tiefgang"
      ],

    },
    {
      title: "Mit Klarheit wachsen",
      company: "Agent Systems",
      link: "https://agent-systems.de/",
      project: "Strategischer Aufbau & operative Ausrichtung eines KI-Tech-Unternehmens",
      role: "COO – verantwortlich für Struktur, Kommunikation & Wachstum",
      achievements: [
        "Positionierung & Messaging (Website, Sales, LinkedIn)",
        "Aufbau der internen Struktur: Teamprozesse, Meetingformate, Projektsteuerung",
        "Kundenakquise durch echte Beziehungen statt Push-Sales",
        "Gestaltung der externen Sichtbarkeit durch Events & Community-Building"
      ],

    },
    {
      title: "Von der Idee zur Organisation",
      company: "Energieberatung Rommel",
      link: "https://www.energieberatung-rommel.de/",
      project: "Aufbau eines Beratungsunternehmens im Energiesektor",
      role: "Assistenz der Geschäftsführung / Mitaufbau",
      achievements: [
        "Entwicklung einer funktionierenden Remote-Teamstruktur",
        "Einführung sinnvoller Tools (Notion, Pipedrive, Personio)",
        "Etablierung von HR- & Meetingprozessen",
        "Controlling & Zielplanung zur wirtschaftlichen Steuerung"
      ],

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
                

              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </Section>
  );
};

export default Projects; 