import React from "react";
import { Typography } from "antd";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";

const { Title: AntTitle, Text } = Typography;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-8);
  position: relative;
`;

const StyledTitle = styled(AntTitle)`
  font-family: var(--font-heading) !important;
  color: var(--color-text) !important;
  font-size: 2.5rem !important;
  font-weight: 700 !important;
  margin-bottom: var(--spacing-3) !important;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: var(--gradient-gold-diamond);
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 2rem !important;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem !important;
  }
`;

const StyledSubtitle = styled(Text)`
  display: block;
  font-size: 1.25rem;
  color: var(--color-text-light);
  font-family: var(--font-accent);
  font-weight: 500;
  max-width: 700px;
  margin: 0 auto;
  margin-top: var(--spacing-4);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SectionTitle = ({ title, subtitle, level = 2 }) => {
  const { isDarkMode } = useTheme();

  return (
    <TitleContainer>
      <StyledTitle level={level}>{title}</StyledTitle>
      {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
    </TitleContainer>
  );
};

export default SectionTitle;
