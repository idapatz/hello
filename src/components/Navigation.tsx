'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(249, 255, 251, 0.08);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(249, 255, 251, 0.08);
  box-shadow: 
    0 4px 30px rgba(0, 0, 0, 0.1),
    inset 0 0 30px rgba(249, 255, 251, 0.02);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      120deg,
      rgba(249, 255, 251, 0.1) 0%,
      rgba(249, 255, 251, 0.05) 50%,
      rgba(249, 255, 251, 0.02) 100%
    );
    pointer-events: none;
  }
`;

const NavContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const Logo = styled(motion.div)`
  font-family: var(--font-instrument);
  font-size: 1.5rem;
  font-weight: 400;
  color: #f9fffb;
  cursor: pointer;
  text-shadow: 0 0 20px rgba(249, 255, 251, 0.2);
  position: relative;
`;

const NavMenu = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.$isOpen ? '0' : '-100%'};
    width: 100%;
    height: 100vh;
    background: rgba(40, 53, 44, 0.85);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    transition: right 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    border-left: 1px solid rgba(249, 255, 251, 0.08);
  }
`;

const NavItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
`;

const NavLink = styled(motion.a)`
  font-family: var(--font-raleway);
  font-size: 0.875rem;
  font-weight: 500;
  color: #f9fffb;
  text-decoration: none;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  padding: 0.75rem 1rem;
  border-radius: 2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-shadow: 0 0 20px rgba(249, 255, 251, 0.1);
  display: flex;
  align-items: center;

  &:hover {
    background: rgba(214, 254, 161, 0.08);
    box-shadow: 
      0 0 20px rgba(214, 254, 161, 0.05),
      inset 0 0 20px rgba(214, 254, 161, 0.05);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem 2rem;
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

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuLine = styled(motion.div)`
  width: 25px;
  height: 2px;
  background: #f9fffb;
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

  @media (max-width: 768px) {
    margin-top: 2rem;
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <Nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        background: scrolled 
          ? 'rgba(40, 53, 44, 0.75)' 
          : 'rgba(249, 255, 251, 0.08)',
        borderBottom: scrolled 
          ? '1px solid rgba(214, 254, 161, 0.1)' 
          : '1px solid rgba(249, 255, 251, 0.08)'
      }}
    >
      <NavContainer>
        <Logo
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('hero')}
        >
          Ida Patzelt
        </Logo>

        <NavMenu $isOpen={isOpen}>
          <NavItem>
            <NavLink
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection('drive')}
            >
              Drive
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection('projects')}
            >
              Projekte
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection('contact')}
            >
              Kontakt
            </NavLink>
          </NavItem>
          <CTAButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('contact')}
          >
            Get in Touch
          </CTAButton>
        </NavMenu>

        <MenuToggle onClick={toggleMenu}>
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