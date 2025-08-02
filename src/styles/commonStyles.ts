'use client';

import styled from 'styled-components';

// Wrapper für zusammenhängende Sections
export const SectionGroup = styled.div`
  position: relative;
  width: 100%;
  background-color: inherit;
  /* Safari Mobile fixes */
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  perspective: 1000;
  -webkit-perspective: 1000;
  /* Ensure sections stay connected */
  isolation: isolate;
  z-index: 1;
`;

// Common container for all sections
export const SectionContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 8rem;
  padding-right: 8rem;
  /* Safari Mobile fixes */
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  
  @media (max-width: 1600px) {
    padding-left: 7rem;
    padding-right: 7rem;
  }
  
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
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

// Common section wrapper
export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 3rem 0 6rem 0;
  margin: 0;
  /* Safari Mobile fixes */
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  /* Prevent subpixel rendering issues */
  border: none;
  outline: none;
  background-color: inherit;
  
  /* Ensure proper stacking */
  z-index: 1;
  
  /* Force GPU acceleration */
  will-change: transform;
  
  /* Prevent margin collapse */
  display: flow-root;
  
  @media (max-width: 1024px) {
    padding: 3rem 0 5.5rem 0;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 0 5rem 0;
    /* Additional Safari Mobile fixes */
    -webkit-overflow-scrolling: touch;
  }

  &:last-of-type {
    padding-bottom: 3rem;
  }
  
  /* Ensure seamless connections */
  &::before,
  &::after {
    content: '';
    display: table;
  }
`;

// Common heading styles
export const SectionTitle = styled.h2`
  font-family: var(--font-instrument);
  font-size: 4.5rem;
  font-weight: 400;
  margin: 0 0 3rem 0;
  padding: 0;
  color: inherit;
  line-height: 1.1;
  /* Safari text rendering fixes */
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  
  @media (max-width: 1400px) {
    font-size: 4rem;
    margin: 0 0 2.5rem 0;
  }
  
  @media (max-width: 1024px) {
    font-size: 3.5rem;
    margin: 0 0 2rem 0;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin: 0 0 1.5rem 0;
  }
`;