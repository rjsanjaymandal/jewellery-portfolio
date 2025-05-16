import React from "react";
import { Typography, Divider } from "antd";
import styled from "styled-components";

const { Title: AntTitle, Paragraph } = Typography;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-lg);
`;

const StyledTitle = styled(AntTitle)`
  font-family: var(--font-heading) !important;
  color: var(--color-secondary) !important;
  margin-bottom: 0.5rem !important;
  position: relative;
  display: inline-block;
  font-weight: 700 !important; /* Bolder for better visibility */
  letter-spacing: -0.01em !important; /* Slight letter spacing adjustment */
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5) !important; /* Subtle text shadow for contrast */
`;

const TitleDivider = styled(Divider)`
  width: 80px;
  min-width: 80px;
  margin: 16px auto 24px !important;
  border-top: 4px solid var(--color-primary) !important; /* Thicker divider for better visibility */
`;

const StyledSubtitle = styled(Paragraph)`
  font-size: 1.2rem !important; /* Slightly larger for better readability */
  color: var(--color-text-light) !important;
  max-width: 700px;
  margin: 0 auto !important;
  line-height: 1.6 !important; /* Improved line height for readability */
  font-weight: 400 !important; /* Regular weight for better readability */
`;

const SectionTitle = ({ title, subtitle, level = 2 }) => {
  return (
    <TitleContainer>
      <StyledTitle level={level}>{title}</StyledTitle>
      <TitleDivider />
      {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
    </TitleContainer>
  );
};

export default SectionTitle;
