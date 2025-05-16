import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.header`
  background-color: var(--color-background);
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-sm);
`;

const Logo = styled(Link)`
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-secondary);
  text-decoration: none;
  
  span {
    color: var(--color-primary);
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--color-background);
    padding: 1rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
`;

const NavItem = styled(NavLink)`
  color: var(--color-text);
  font-weight: 500;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
  
  &:hover, &.active {
    color: var(--color-primary);
  }
  
  &.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-primary);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-secondary);
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <NavbarContainer>
      <NavContent>
        <Logo to="/">
          Elegant <span>Jewels</span>
        </Logo>
        
        <MenuButton onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuButton>
        
        <NavLinks isOpen={isMenuOpen}>
          <NavItem to="/" end>Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/collection">Collection</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </NavLinks>
      </NavContent>
    </NavbarContainer>
  );
};

export default Navbar;
