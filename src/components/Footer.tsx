'use client';

import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background-color: #28352c;
  padding: 4rem 0 2rem;
  position: relative;
  z-index: 10;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 8rem;
  
  @media (max-width: 1400px) {
    padding: 0 6rem;
  }
  
  @media (max-width: 1200px) {
    padding: 0 5rem;
  }
  
  @media (max-width: 1024px) {
    padding: 0 4rem;
  }
  
  @media (max-width: 768px) {
    padding: 0 3rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 2rem;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FooterTitle = styled.h3`
  font-family: var(--font-instrument);
  font-size: 1.5rem;
  font-weight: 400;
  color: #f9fffb;
  margin: 0;
`;

const FooterText = styled.p`
  font-family: var(--font-raleway);
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(249, 255, 251, 0.8);
  margin: 0;
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled.a`
  font-family: var(--font-raleway);
  font-size: 1rem;
  color: rgba(249, 255, 251, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: #d6fea1;
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  font-family: var(--font-raleway);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #d6fea1;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(214, 254, 161, 0.3);
  border-radius: 0.25rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(214, 254, 161, 0.1);
    border-color: #d6fea1;
    transform: translateY(-2px);
  }
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(249, 255, 251, 0.2),
    transparent
  );
  margin: 2rem 0;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-family: var(--font-raleway);
  font-size: 0.875rem;
  color: rgba(249, 255, 251, 0.6);
  margin: 0;
`;

const LegalNav = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const LegalLink = styled.a`
  font-family: var(--font-raleway);
  font-size: 0.875rem;
  color: rgba(249, 255, 251, 0.6);
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: #d6fea1;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <FooterColumn>
            <FooterTitle>Ida Patzelt</FooterTitle>
            <FooterText>
              Founder in Residence für Unternehmen mit Haltung. 
              KI mit Sinn, Geschäftsmodelle mit Wirkung und Strukturen, die bleiben.
            </FooterText>
            <SocialLinks>
              <SocialLink 
                href="https://www.linkedin.com/in/ida-patzelt/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                LinkedIn
              </SocialLink>
              <SocialLink 
                href="mailto:ida.patzelt@gmail.com"
              >
                E-Mail
              </SocialLink>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Navigation</FooterTitle>
            <FooterNav>
              <FooterLink href="#skills">Skills</FooterLink>
              <FooterLink href="#drive">Innerer Kompass</FooterLink>
              <FooterLink href="#projects">Projekte</FooterLink>
              <FooterLink href="#vereine">Engagement</FooterLink>
              <FooterLink href="#contact">Kontakt</FooterLink>
            </FooterNav>
          </FooterColumn>
        </FooterContent>
        
        <Divider />
        
        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} Ida Patzelt. Alle Rechte vorbehalten.
          </Copyright>
          <LegalNav>
            <LegalLink href="/impressum">Impressum</LegalLink>
            <LegalLink href="/datenschutz">Datenschutz</LegalLink>
          </LegalNav>
        </FooterBottom>
      </Container>
    </FooterSection>
  );
};

export default Footer; 