import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--color-secondary);
  color: #fff;
  padding: var(--spacing-md) 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-sm);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
`;

const FooterSection = styled.div`
  h4 {
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: var(--spacing-sm);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 2px;
      background-color: var(--color-primary);
    }
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 0.5rem;
  }
  
  a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--color-primary);
    }
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  
  span {
    color: var(--color-primary);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-sm);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #aaa;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h4>Elegant Jewels</h4>
          <p>Crafting elegance since 1982. Our Jaipur-based legacy continues with premium craftsmanship and timeless designs.</p>
        </FooterSection>
        
        <FooterSection>
          <h4>Quick Links</h4>
          <FooterLinks>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/collection">Our Collection</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <h4>Contact Us</h4>
          <ContactInfo>
            <span>📍</span> Elegant Jewels, Johari Bazaar, Jaipur, Rajasthan
          </ContactInfo>
          <ContactInfo>
            <span>📞</span> +91 98765 43210
          </ContactInfo>
          <ContactInfo>
            <span>✉️</span> info@elegantjewels.com
          </ContactInfo>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        &copy; {new Date().getFullYear()} Elegant Jewels. All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
