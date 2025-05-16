import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Row, Col, Typography, Divider, Space } from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  GoldOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  AppstoreOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const { Footer: AntFooter } = Layout;
const { Title, Text, Link: AntLink } = Typography;

const StyledFooter = styled(AntFooter)`
  background-color: var(--color-secondary);
  padding: var(--spacing-lg) var(--spacing-sm) var(--spacing-sm);
`;

const FooterTitle = styled(Title)`
  color: white !important;
  margin-bottom: var(--spacing-sm) !important;
  position: relative;
  font-weight: 700 !important; /* Bolder for better visibility */
  font-size: 1.3rem !important; /* Slightly larger */
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3) !important; /* Text shadow for better contrast on dark background */

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px; /* Thicker line for better visibility */
    background-color: var(--color-primary);
  }
`;

const FooterText = styled(Text)`
  color: #e0e0e0 !important; /* Lighter color for better contrast on dark background */
  display: block;
  font-size: 1rem !important; /* Slightly larger */
  line-height: 1.6 !important; /* Better line height for readability */
`;

const FooterLink = styled(AntLink)`
  color: #e0e0e0 !important; /* Lighter color for better contrast on dark background */
  font-size: 1rem !important; /* Slightly larger */
  display: flex !important;
  align-items: center !important;

  .anticon {
    margin-right: 8px !important;
    font-size: 1.1rem !important; /* Larger icons */
  }

  &:hover {
    color: var(
      --color-primary-light
    ) !important; /* Lighter color on hover for better visibility */
    text-decoration: underline !important; /* Underline on hover for better visibility */
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--spacing-sm); /* Slightly more space between items */

  .anticon {
    color: var(
      --color-primary-light
    ); /* Lighter color for better visibility on dark background */
    margin-right: 12px; /* More space between icon and text */
    font-size: 18px; /* Larger icon */
    margin-top: 4px;
  }
`;

const CopyrightDivider = styled(Divider)`
  border-color: rgba(
    255,
    255,
    255,
    0.2
  ) !important; /* Slightly more visible divider */
  margin: var(--spacing-md) 0 var(--spacing-sm) !important;
`;

const CopyrightText = styled(Text)`
  color: #cccccc !important; /* Lighter color for better visibility */
  display: block;
  text-align: center;
  font-size: 0.95rem !important;
`;

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <StyledFooter>
      <Row gutter={[32, 24]}>
        <Col xs={24} sm={24} md={8} lg={8}>
          <FooterTitle level={4}>Ramavatargems</FooterTitle>
          <FooterText>
            Crafting elegance since 1982. Our Jaipur-based legacy continues with
            premium craftsmanship and timeless designs.
          </FooterText>
          <Space style={{ marginTop: 16 }}>
            <GoldOutlined
              style={{ color: "var(--color-primary)", fontSize: 24 }}
            />
          </Space>
        </Col>

        <Col xs={24} sm={12} md={8} lg={8}>
          <FooterTitle level={4}>Quick Links</FooterTitle>
          <Space direction="vertical">
            <FooterLink onClick={() => handleNavigation("/")}>
              <HomeOutlined /> Home
            </FooterLink>
            <FooterLink onClick={() => handleNavigation("/about")}>
              <InfoCircleOutlined /> About Us
            </FooterLink>
            <FooterLink onClick={() => handleNavigation("/collection")}>
              <AppstoreOutlined /> Our Collection
            </FooterLink>
            <FooterLink onClick={() => handleNavigation("/contact")}>
              <ContactsOutlined /> Contact Us
            </FooterLink>
          </Space>
        </Col>

        <Col xs={24} sm={12} md={8} lg={8}>
          <FooterTitle level={4}>Contact Us</FooterTitle>
          <ContactItem>
            <EnvironmentOutlined />
            <FooterText>
              Ramavatargems, Johari Bazaar, Jaipur, Rajasthan
            </FooterText>
          </ContactItem>
          <ContactItem>
            <PhoneOutlined />
            <FooterText>+91 98765 43210</FooterText>
          </ContactItem>
          <ContactItem>
            <MailOutlined />
            <FooterText>info@ramavatargems.com</FooterText>
          </ContactItem>
        </Col>
      </Row>

      <CopyrightDivider />
      <CopyrightText>
        &copy; {new Date().getFullYear()} Ramavatargems. All Rights Reserved.
      </CopyrightText>
    </StyledFooter>
  );
};

export default Footer;
