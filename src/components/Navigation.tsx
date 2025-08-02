'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';

const Nav = styled.nav<NavProps>`
  position: fixed;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 9999;
  width: calc(100% - 2rem);
  height: 80px;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  will-change: transform;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  
  /* 3D style like project cards with #3f5645 color */
  background: linear-gradient(
    145deg,
    rgba(63, 86, 69, 0.95),
    rgba(63, 86, 69, 0.85)
  );
  border: none;
  border-radius: 1rem;
  box-shadow: ${props => props.$scrolled
    ? '8px 8px 20px rgba(20, 25, 22, 0.6), -4px -4px 12px rgba(80, 110, 90, 0.3), inset 2px 2px 4px rgba(80, 110, 90, 0.2), inset -2px -2px 4px rgba(20, 25, 22, 0.3)'
    : '6px 6px 15px rgba(20, 25, 22, 0.5), -3px -3px 8px rgba(80, 110, 90, 0.25), inset 1px 1px 3px rgba(80, 110, 90, 0.15), inset -1px -1px 3px rgba(20, 25, 22, 0.2)'};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  
  /* Hide navigation for mobile (0-760px) */
  @media (max-width: 760px) {
    display: none;
  }
  
  /* Small font for tablet range (760-993px) */
  @media (max-width: 993px) and (min-width: 761px) {
    background: linear-gradient(
      145deg,
      rgba(63, 86, 69, 0.95),
      rgba(63, 86, 69, 0.85)
    );
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    /* Ensure nav doesn't cause overflow */
    max-width: calc(100vw - 2rem);
    overflow: hidden;
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
      rgba(80, 110, 90, 0.15),
      rgba(20, 25, 22, 0.08)
    );
    border-radius: 1rem;
    pointer-events: none;
    opacity: 0.4;
  }
`;

const NavContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 1.5rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 9997; /* Explicit z-index */
  height: 100%;
`;

const Logo = styled(motion.div)`
  font-family: "Instrument Serif", serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #ffffff !important; /* White text for dark background */
  cursor: pointer;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  position: relative;
  /* Safari Mobile text rendering - CRITICAL */
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  /* Force visibility on Safari Mobile */
  opacity: 1 !important;
  visibility: visible !important;
  display: block !important;
  /* Hardware acceleration */
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  
  @media (max-width: 993px) and (min-width: 761px) {
    /* Hide logo in tablet range */
    display: none !important;
  }
`;

const NavMenu = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2.5rem;
  align-items: center;
`;

const NavItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
`;

const NavLink = styled(motion.a)`
  font-family: "Raleway", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #ffffff !important; /* White text for dark background */
  text-decoration: none;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  /* Safari Mobile text rendering - CRITICAL */
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  /* Force visibility on Safari Mobile */
  opacity: 1 !important;
  visibility: visible !important;
  display: flex !important;
  /* Hardware acceleration */
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  cursor: pointer;
  position: relative;
  padding: 0.75rem 1rem;
  border-radius: 2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  align-items: center;
  
  @media (max-width: 993px) and (min-width: 761px) {
    /* Smaller font size for tablet range */
    font-size: 0.75rem;
    padding: 0.5rem 0.75rem;
    letter-spacing: 0.15em;
  }

  &:hover {
    background: rgba(214, 254, 161, 0.08);
    box-shadow: 
      0 0 20px rgba(214, 254, 161, 0.05),
      inset 0 0 20px rgba(214, 254, 161, 0.05);
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  gap: 4px;
  padding: 0.5rem;
  /* Safari touch optimization */
  -webkit-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
`;

const MenuLine = styled(motion.div)`
  width: 25px;
  height: 2px;
  background: #ffffff;
  border-radius: 2px;
  transform-origin: center;
`;

const CTAButton = styled(motion.a)`
  font-family: var(--font-raleway);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #d6fea1;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.8rem 1.5rem;
  border: 1px solid #d6fea1;
  background: transparent;
  cursor: pointer;

  &:hover {
    background: #d6fea1;
    color: #3f5645;
    transform: translateY(-2px);
  }

  @media (max-width: 993px) and (min-width: 761px) {
    /* Smaller font size for tablet range */
    font-size: 0.75rem;
    padding: 0.6rem 1.2rem;
    letter-spacing: 0.15em;
  }
`;

interface NavProps {
  $scrolled?: boolean;
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Handle hash navigation when coming from other pages
    if (pathname === '/' && window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure page is loaded
    }
  }, [pathname]);

  const toggleMenu = (e: React.MouseEvent | React.TouchEvent) => {
    // Safari-specific event handling
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const navigateToSection = (sectionId: string) => {
    setIsOpen(false);
    
    if (pathname === '/') {
      // We're on the home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // We're on a different page, navigate to home with hash
      router.push(`/#${sectionId}`);
    }
  };

  const navigateHome = () => {
    setIsOpen(false);
    router.push('/');
  };

  return (
    <Nav $scrolled={scrolled}>
      <NavContainer>
        <Logo
          whileHover={{ scale: 1.05 }}
          onClick={navigateHome}
        >
          Ida Patzelt
        </Logo>

        <NavMenu $isOpen={isOpen}>
          <NavItem>
            <NavLink
              whileHover={{ y: -2 }}
              onClick={() => navigateToSection('skills')}
            >
              Skills
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              whileHover={{ y: -2 }}
              onClick={() => navigateToSection('innerer-kompass')}
            >
              Kompass
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              whileHover={{ y: -2 }}
              onClick={() => navigateToSection('projects')}
            >
              Projekte
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              whileHover={{ y: -2 }}
              onClick={() => navigateToSection('vereine')}
            >
              Engagement
            </NavLink>
          </NavItem>
          <CTAButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigateToSection('contact')}
          >
            Kontakt
          </CTAButton>
        </NavMenu>

        <MenuToggle 
          onClick={toggleMenu}
          onTouchStart={toggleMenu}
        >
          <MenuLine
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 6 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <MenuLine
            animate={{
              opacity: isOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <MenuLine
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -6 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </MenuToggle>
      </NavContainer>
    </Nav>
  );
};

export default Navigation; 