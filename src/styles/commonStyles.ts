import styled from 'styled-components';

// Common container for all sections with much more spacing
export const SectionContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 15rem;
  padding-right: 15rem;
  
  @media (max-width: 1600px) {
    padding-left: 12rem;
    padding-right: 12rem;
  }
  
  @media (max-width: 1400px) {
    padding-left: 10rem;
    padding-right: 10rem;
  }
  
  @media (max-width: 1200px) {
    padding-left: 8rem;
    padding-right: 8rem;
  }
  
  @media (max-width: 1024px) {
    padding-left: 6rem;
    padding-right: 6rem;
  }
  
  @media (max-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  
  @media (max-width: 480px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

// Common section wrapper
export const SectionWrapper = styled.section`
  padding: 10rem 0;
  position: relative;
  width: 100%;
  
  @media (max-width: 1024px) {
    padding: 8rem 0;
  }
  
  @media (max-width: 768px) {
    padding: 6rem 0;
  }
`;

// Common heading styles
export const SectionTitle = styled.h2`
  font-family: var(--font-instrument);
  font-size: 6rem;
  font-weight: 400;
  margin: 0 0 6rem 0;
  padding: 0;
  color: inherit;
  line-height: 1.1;
  
  @media (max-width: 1400px) {
    font-size: 5rem;
    margin: 0 0 5rem 0;
  }
  
  @media (max-width: 1024px) {
    font-size: 4rem;
    margin: 0 0 4rem 0;
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin: 0 0 3rem 0;
  }
`; 