import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonStyles = css`
  display: inline-block;
  padding: 0.8rem 2rem;
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid;
  transition: all 0.3s ease;
  border-radius: var(--border-radius);
  
  ${({ variant }) => {
    switch (variant) {
      case 'outline':
        return css`
          background-color: transparent;
          color: var(--color-primary);
          border-color: var(--color-primary);
          
          &:hover {
            background-color: var(--color-primary);
            color: white;
          }
        `;
      case 'secondary':
        return css`
          background-color: var(--color-secondary);
          color: white;
          border-color: var(--color-secondary);
          
          &:hover {
            background-color: transparent;
            color: var(--color-secondary);
          }
        `;
      default: // primary
        return css`
          background-color: var(--color-primary);
          color: white;
          border-color: var(--color-primary);
          
          &:hover {
            background-color: transparent;
            color: var(--color-primary);
          }
        `;
    }
  }}
  
  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          padding: 0.5rem 1.5rem;
          font-size: 0.875rem;
        `;
      case 'large':
        return css`
          padding: 1rem 2.5rem;
          font-size: 1.125rem;
        `;
      default: // medium
        return css`
          padding: 0.8rem 2rem;
          font-size: 1rem;
        `;
    }
  }}
`;

const StyledButton = styled.button`
  ${ButtonStyles}
`;

const StyledLink = styled(Link)`
  ${ButtonStyles}
`;

const StyledAnchor = styled.a`
  ${ButtonStyles}
`;

const Button = ({ children, variant = 'primary', size = 'medium', to, href, ...props }) => {
  if (to) {
    return (
      <StyledLink to={to} variant={variant} size={size} {...props}>
        {children}
      </StyledLink>
    );
  }
  
  if (href) {
    return (
      <StyledAnchor href={href} variant={variant} size={size} {...props}>
        {children}
      </StyledAnchor>
    );
  }
  
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
