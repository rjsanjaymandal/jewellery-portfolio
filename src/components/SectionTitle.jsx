import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-md);
`;

const Title = styled.h2`
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-secondary);
  margin-bottom: 0.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--color-primary);
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-light);
  max-width: 700px;
  margin: 1.5rem auto 0;
`;

const SectionTitle = ({ title, subtitle }) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </TitleContainer>
  );
};

export default SectionTitle;
