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

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 1400px) {
    padding: 0 3rem;
  }
  
  @media (max-width: 1024px) {
    padding: 0 2rem;
  }
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
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
  padding: 2.5rem;
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

const PrivacySection = styled.div`
  margin-bottom: 2rem;
  
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

const SubHeading = styled.h3`
  font-family: var(--font-instrument);
  font-size: 1.25rem;
  font-weight: 400;
  color: #68675f;
  margin: 1.5rem 0 0.75rem 0;
  line-height: 1.3;
`;

const PrivacyText = styled.p`
  font-family: var(--font-raleway);
  font-size: 0.95rem;
  line-height: 1.5;
  color: #68675f;
  margin: 0 0 0.75rem 0;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const PrivacyList = styled.ul`
  font-family: var(--font-raleway);
  font-size: 0.95rem;
  line-height: 1.5;
  color: #68675f;
  margin: 0 0 0.75rem 0;
  padding-left: 1.25rem;
`;

const PrivacyListItem = styled.li`
  margin-bottom: 0.25rem;
  
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

const LastUpdated = styled.p`
  font-family: var(--font-raleway);
  font-size: 0.875rem;
  color: rgba(104, 103, 95, 0.7);
  font-style: italic;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(104, 103, 95, 0.2);
`;

const Datenschutz = () => {
  return (
    <>
      <Section>
        <Container>
          <BackLink href="/">
            Zurück zur Startseite
          </BackLink>
          
          <Title>Datenschutzerklärung</Title>
          
          <Content>
            <PrivacySection>
              <SectionHeading>1. Verantwortliche Stelle</SectionHeading>
              <PrivacyText>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </PrivacyText>
              <PrivacyText>
                <strong>Ida Patzelt</strong><br />
                Reichsstraße 11<br />
                04109 Leipzig<br />
                E-Mail: <EmailLink href="mailto:ida.patzelt@gmail.com">ida.patzelt@gmail.com</EmailLink>
              </PrivacyText>
            </PrivacySection>

            <PrivacySection>
              <SectionHeading>2. Zweck und Rechtsgrundlage der Datenverarbeitung</SectionHeading>
              <PrivacyText>
                Personenbezogene Daten werden nur erhoben, wenn du sie freiwillig über das Kontaktformular übermittelst. Dies umfasst insbesondere deine E-Mail-Adresse sowie den Nachrichtentext.
              </PrivacyText>
              <PrivacyText>
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern die Kontaktaufnahme der Anbahnung oder Durchführung eines Vertragsverhältnisses dient. In allen anderen Fällen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
              </PrivacyText>
            </PrivacySection>

            <PrivacySection>
              <SectionHeading>3. Hosting der Website</SectionHeading>
              <PrivacyText>
                Diese Website wird über den Anbieter Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet.
              </PrivacyText>
              <PrivacyText>
                Beim Aufruf der Website erfasst Vercel automatisch Daten wie:
              </PrivacyText>
              <PrivacyList>
                <PrivacyListItem>IP-Adresse</PrivacyListItem>
                <PrivacyListItem>Datum und Uhrzeit des Zugriffs</PrivacyListItem>
                <PrivacyListItem>Browsertyp und Betriebssystem</PrivacyListItem>
                <PrivacyListItem>aufgerufene Seiten (Zugriffslogs)</PrivacyListItem>
                <PrivacyListItem>ggf. Fehlermeldungen (Error-Logs)</PrivacyListItem>
              </PrivacyList>
              <PrivacyText>
                Diese Daten werden in Server-Logfiles gespeichert und dienen der technischen Stabilität, Sicherheit und Fehleranalyse. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren Betrieb der Website).
              </PrivacyText>
              <PrivacyText>
                Vercel verarbeitet die Daten in unserem Auftrag. Mit Vercel besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO. Es kann nicht ausgeschlossen werden, dass dabei eine Datenübertragung in die USA erfolgt. Vercel sichert geeignete Garantien zu, etwa durch den Abschluss von EU-Standardvertragsklauseln.
              </PrivacyText>
              <PrivacyText>
                Mehr dazu unter: <EmailLink href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://vercel.com/legal/privacy-policy</EmailLink>
              </PrivacyText>
            </PrivacySection>

            <PrivacySection>
              <SectionHeading>4. Verwendung von Cookies</SectionHeading>
              <PrivacyText>
                Diese Website verwendet keine Cookies und keine Tracking- oder Analyse-Tools.
              </PrivacyText>
            </PrivacySection>

            <PrivacySection>
              <SectionHeading>5. Kontaktformular</SectionHeading>
              <PrivacyText>
                Wenn du uns über das Kontaktformular kontaktierst, werden deine Angaben (z. B. E-Mail-Adresse und Nachricht) an uns übermittelt und ausschließlich zur Bearbeitung deiner Anfrage verwendet.
              </PrivacyText>
              <PrivacyText>
                Dazu verwenden wir den Dienst Formspree, angeboten von Formspree Inc., USA. Die Daten werden über die Formspree-Plattform verarbeitet und an uns weitergeleitet.
              </PrivacyText>
              <PrivacyText>
                Rechtsgrundlage ist:
              </PrivacyText>
              <PrivacyList>
                <PrivacyListItem>Art. 6 Abs. 1 lit. b DSGVO (zur Durchführung vorvertraglicher Maßnahmen)</PrivacyListItem>
                <PrivacyListItem>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch Nutzung des Formulars)</PrivacyListItem>
              </PrivacyList>
              <PrivacyText>
                Weitere Informationen findest du unter: <EmailLink href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">https://formspree.io/legal/privacy-policy/</EmailLink>
              </PrivacyText>
            </PrivacySection>

            <PrivacySection>
              <SectionHeading>6. Rechte der betroffenen Personen</SectionHeading>
              <PrivacyText>
                Du hast jederzeit das Recht auf:
              </PrivacyText>
              <PrivacyList>
                <PrivacyListItem>Auskunft über die von dir gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</PrivacyListItem>
                <PrivacyListItem>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</PrivacyListItem>
                <PrivacyListItem>Löschung (Art. 17 DSGVO)</PrivacyListItem>
                <PrivacyListItem>Einschränkung der Verarbeitung (Art. 18 DSGVO)</PrivacyListItem>
                <PrivacyListItem>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</PrivacyListItem>
                <PrivacyListItem>Datenübertragbarkeit (Art. 20 DSGVO)</PrivacyListItem>
                <PrivacyListItem>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</PrivacyListItem>
              </PrivacyList>
            </PrivacySection>

            <PrivacySection>
              <SectionHeading>7. Dauer der Datenspeicherung</SectionHeading>
              <PrivacyText>
                Personenbezogene Daten werden nur so lange gespeichert, wie dies für die genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
              </PrivacyText>
            </PrivacySection>

            <PrivacySection>
              <SectionHeading>8. Beschwerderecht bei der Aufsichtsbehörde</SectionHeading>
              <PrivacyText>
                Du hast das Recht, dich bei einer Datenschutzaufsichtsbehörde zu beschweren, wenn du der Ansicht bist, dass die Verarbeitung deiner personenbezogenen Daten gegen die DSGVO verstößt.
              </PrivacyText>
              <PrivacyText>
                Zuständig ist z. B. der Landesdatenschutzbeauftragte deines Bundeslandes. Eine Übersicht findest du unter: <EmailLink href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html" target="_blank" rel="noopener noreferrer">https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html</EmailLink>
              </PrivacyText>
            </PrivacySection>

            <LastUpdated>
              Stand: {new Date().toLocaleDateString('de-DE', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </LastUpdated>
          </Content>
        </Container>
      </Section>
      <Footer />
    </>
  );
};

export default Datenschutz; 