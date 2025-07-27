'use client';

import React from 'react';
import styled from 'styled-components';
import { Instrument_Serif } from 'next/font/google';

const instrumentSerif = Instrument_Serif({ 
  weight: '400',
  subsets: ['latin']
});

const Section = styled.section`
  padding: 5rem 0;
  background-color: #f3efea;
  position: relative;
  z-index: 10;
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
  font-weight: 400;
  text-align: center;
  color: #1a1a1a;
  margin-bottom: 3rem;
  font-family: "Instrument Serif", serif;
  font-style: normal;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Content = styled.div`
  max-width: 32rem;
  margin: 0 auto;
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  font-family: "Raleway", sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s;
  font-family: "Raleway", sans-serif;
  font-weight: 400;

  &:focus {
    outline: none;
    border-color: #065f46;
    box-shadow: 0 0 0 3px rgba(6, 95, 70, 0.1);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s;
  resize: vertical;
  min-height: 8rem;
  font-family: "Raleway", sans-serif;
  font-weight: 400;

  &:focus {
    outline: none;
    border-color: #065f46;
    box-shadow: 0 0 0 3px rgba(6, 95, 70, 0.1);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem 1.5rem;
  background-color: #065f46;
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
  font-family: "Raleway", sans-serif;

  &:hover {
    background-color: #064e3b;
  }
`;

const DirectContact = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

const DirectContactTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
  font-family: "Raleway", sans-serif;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContactItem = styled.p`
  color: #4a4a4a;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
`;

const ContactLink = styled.a`
  color: #065f46;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    text-decoration: underline;
  }
`;

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <Title>
          Kontakt
        </Title>
        <Content>
          <Form>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="email">E-Mail</Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="message">Nachricht</Label>
              <Textarea
                id="message"
                name="message"
                required
              />
            </FormGroup>
            
            <Button type="submit">
              Nachricht senden
            </Button>
          </Form>

          <DirectContact>
            <DirectContactTitle>Oder kontaktieren Sie mich direkt:</DirectContactTitle>
            <ContactList>
              <ContactItem>
                <strong>E-Mail: </strong>
                <ContactLink href="mailto:ihre.email@beispiel.de">
                  ihre.email@beispiel.de
                </ContactLink>
              </ContactItem>
              <ContactItem>
                <strong>LinkedIn: </strong>
                <ContactLink 
                  href="https://linkedin.com/in/ihr-profil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/ihr-profil
                </ContactLink>
              </ContactItem>
            </ContactList>
          </DirectContact>
        </Content>
      </Container>
    </Section>
  );
};

export default Contact; 