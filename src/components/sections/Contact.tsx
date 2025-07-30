'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';
import { SectionContainer, SectionWrapper, SectionTitle } from '@/styles/commonStyles';

const Section = styled(SectionWrapper)`
  background-color: #f3efea;
  position: relative;
  z-index: 10;
  
  &&& {
    padding-bottom: 12rem;
    
    @media (max-width: 1024px) {
      padding-bottom: 10rem;
    }
    
    @media (max-width: 768px) {
      padding-bottom: 8rem;
    }
  }
`;

const Container = styled(SectionContainer)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(SectionTitle)`
  color: #68675f;
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const StyledForm = styled.form`
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.4)
  );
  padding: 3rem;
  border-radius: 2rem;
  box-shadow: 
    20px 20px 60px rgba(104, 103, 95, 0.15),
    -20px -20px 60px rgba(255, 255, 255, 0.5),
    inset 2px 2px 4px rgba(255, 255, 255, 0.3),
    inset -2px -2px 4px rgba(104, 103, 95, 0.1);
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  display: block;
  font-family: var(--font-raleway);
  font-size: 1rem;
  font-weight: 500;
  color: #68675f;
  margin-bottom: 0.75rem;
  letter-spacing: 0.5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1.25rem;
  font-family: var(--font-raleway);
  font-size: 1rem;
  color: #68675f;
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid rgba(104, 103, 95, 0.2);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #d6fea1;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 0 0 3px rgba(214, 254, 161, 0.2);
  }
  
  &::placeholder {
    color: rgba(104, 103, 95, 0.6);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem 1.25rem;
  font-family: var(--font-raleway);
  font-size: 1rem;
  color: #68675f;
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid rgba(104, 103, 95, 0.2);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 120px;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #d6fea1;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 0 0 3px rgba(214, 254, 161, 0.2);
  }
  
  &::placeholder {
    color: rgba(104, 103, 95, 0.6);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const SubmitButton = styled.button`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #3f5645;
  background: transparent;
  border: 1px solid #3f5645;
  border-radius: 0;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: var(--font-raleway);
  
  &:hover:not(:disabled) {
    background: #3f5645;
    color: #f9fffb;
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    
    &:hover {
      background: transparent;
      color: #3f5645;
    }
  }
`;

const SuccessMessage = styled.div`
  text-align: center;
  padding: 3rem;
  background: linear-gradient(
    145deg,
    rgba(214, 254, 161, 0.2),
    rgba(214, 254, 161, 0.1)
  );
  border-radius: 2rem;
  border: 2px solid rgba(214, 254, 161, 0.3);
`;

const SuccessTitle = styled.h3`
  font-family: var(--font-instrument);
  font-size: 2rem;
  color: #68675f;
  margin: 0 0 1rem 0;
`;

const SuccessText = styled.p`
  font-family: var(--font-raleway);
  font-size: 1.125rem;
  color: #68675f;
  margin: 0;
  line-height: 1.6;
`;

function ContactForm() {
  const [state, handleSubmit] = useForm("xpwllayo");
  
  if (state.succeeded) {
    return (
      <FormWrapper>
        <SuccessMessage>
          <SuccessTitle>Vielen Dank!</SuccessTitle>
          <SuccessText>
            Deine Nachricht wurde erfolgreich gesendet. Ich werde mich schnellstmöglich bei dir melden.
          </SuccessText>
        </SuccessMessage>
      </FormWrapper>
    );
  }

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">E-Mail Adresse</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="deine@email.de"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Dein Name"
            required
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">Nachricht</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Erzähl mir von deinem Projekt oder deiner Idee..."
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </FormGroup>

        <FormGroup>
          <ButtonContainer>
            <SubmitButton type="submit" disabled={state.submitting}>
              {state.submitting ? 'Wird gesendet...' : 'Nachricht senden'}
            </SubmitButton>
          </ButtonContainer>
        </FormGroup>
      </StyledForm>
    </FormWrapper>
  );
}

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <Title>Kontakt</Title>
        <ContactForm />
      </Container>
    </Section>
  );
};

export default Contact;