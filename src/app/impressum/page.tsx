'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { SectionContainer, SectionWrapper, SectionTitle } from '@/styles/commonStyles';
import Footer from '@/components/Footer';

const Section = styled(SectionWrapper)`
  background-color: #f3efea;
  min-height: 100vh;
  padding-top: 12rem;
  padding-bottom: 8rem;
`;

const Container = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1200px;
  
  @media (max-width: 1400px) {
    max-width: 1000px;
  }
`;

const Title = styled(SectionTitle)`
  color: #68675f;
  margin-bottom: 3rem;
`;

const BackLink = styled(Link)`
  font-family: var(--font-raleway);
  font-size: 1rem;
  font-weight: 500;
  color: #3f5645;
  text-decoration: none;
  margin-bottom: 2rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #68675f;
    transform: translateX(-5px);
  }
  
  &::before {
    content: '←';
    font-size: 1.25rem;
  }
`;

const Content = styled.div`
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.4)
  );
  padding: 3rem 4rem;
  border-radius: 2rem;
  box-shadow: 
    20px 20px 60px rgba(104, 103, 95, 0.15),
    -20px -20px 60px rgba(255, 255, 255, 0.5),
    inset 2px 2px 4px rgba(255, 255, 255, 0.3),
    inset -2px -2px 4px rgba(104, 103, 95, 0.1);
  backdrop-filter: blur(10px);
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const LegalSection = styled.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionHeading = styled.h2`
  font-family: var(--font-instrument);
  font-size: 1.5rem;
  font-weight: 400;
  color: #3f5645;
  margin: 0 0 1rem 0;
  line-height: 1.3;
`;

const ContactInfo = styled.div`
  font-family: var(--font-raleway);
  font-size: 1rem;
  line-height: 1.6;
  color: #68675f;
`;

const ContactLine = styled.p`
  margin: 0 0 0.5rem 0;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const EmailLink = styled.a`
  color: #3f5645;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: #68675f;
    text-decoration: underline;
  }
`;

const Impressum = () => {
  return (
    <>
      <Section>
        <Container>
          <BackLink href="/">
            Zurück zur Startseite
          </BackLink>
          
          <Title>Impressum</Title>
          
          <Content>
            <LegalSection>
              <SectionHeading>Angaben gemäß § 5 TMG:</SectionHeading>
              <ContactInfo>
                <ContactLine><strong>Ida Patzelt</strong></ContactLine>
                <ContactLine>Reichsstraße 11</ContactLine>
                <ContactLine>04109 Leipzig</ContactLine>
              </ContactInfo>
            </LegalSection>

            <LegalSection>
              <SectionHeading>Kontakt:</SectionHeading>
              <ContactInfo>
                <ContactLine>
                  E-Mail: <EmailLink href="mailto:ida.patzelt@gmail.com">ida.patzelt@gmail.com</EmailLink>
                </ContactLine>
              </ContactInfo>
            </LegalSection>

            <LegalSection>
              <SectionHeading>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</SectionHeading>
              <ContactInfo>
                <ContactLine><strong>Ida Patzelt</strong></ContactLine>
                <ContactLine>Reichsstraße 11</ContactLine>
                <ContactLine>04109 Leipzig</ContactLine>
              </ContactInfo>
            </LegalSection>
          </Content>
        </Container>
      </Section>
      <Footer />
    </>
  );
};

export default Impressum; 