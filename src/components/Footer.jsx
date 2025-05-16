import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Layout,
  Row,
  Col,
  Typography,
  Divider,
  Space,
  Input,
  Button,
  Form,
  List,
  Avatar,
  Card,
} from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  GoldOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  ShoppingOutlined,
  ContactsOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  SendOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const { Footer: AntFooter } = Layout;
const { Title, Text, Link: AntLink, Paragraph } = Typography;

// Main Footer Container
const StyledFooter = styled(AntFooter)`
  padding: 0;
  background-color: transparent;
`;

// Top Footer with main content
const TopFooter = styled.div`
  background-color: var(--color-secondary);
  padding: var(--spacing-lg) 0;
  color: #fff;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-sm);
`;

// Bottom Footer with copyright
const BottomFooter = styled.div`
  background-color: #001018; /* Darker than main footer */
  padding: var(--spacing-sm) 0;
  color: rgba(255, 255, 255, 0.65);
`;

// Section Title
const FooterTitle = styled(Title)`
  color: white !important;
  margin-bottom: var(--spacing-md) !important;
  position: relative;
  font-weight: 700 !important;
  font-size: 1.3rem !important;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: var(--color-primary);
  }
`;

// Logo section
const LogoSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-md);
`;

const LogoIcon = styled(GoldOutlined)`
  font-size: 2rem;
  color: var(--color-primary);
  margin-right: 12px;
`;

const LogoText = styled(Title)`
  margin: 0 !important;
  color: white !important;
  font-size: 1.8rem !important;
  font-weight: 700 !important;

  .primary-text {
    color: var(--color-primary);
  }
`;

// Footer text
const FooterText = styled(Paragraph)`
  color: rgba(255, 255, 255, 0.85) !important;
  margin-bottom: var(--spacing-md) !important;
  font-size: 1rem !important;
  line-height: 1.6 !important;
`;

// Social icons
const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: var(--spacing-sm);
`;

const SocialIcon = styled(Button)`
  background-color: rgba(255, 255, 255, 0.1) !important;
  color: white !important;
  border: none !important;
  width: 40px !important;
  height: 40px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-size: 1.2rem !important;
  transition: all 0.3s ease !important;

  &:hover {
    background-color: var(--color-primary) !important;
    transform: translateY(-3px);
  }
`;

// Quick links
const QuickLinks = styled(List)`
  .ant-list-item {
    border-bottom: none !important;
    padding: 8px 0 !important;
  }

  .ant-list-item-meta-title {
    margin-bottom: 0 !important;
  }

  .ant-list-item-meta-avatar {
    font-size: 1.1rem;
    color: var(--color-primary);
  }
`;

// Contact info
const ContactInfo = styled(List)`
  .ant-list-item {
    border-bottom: none !important;
    padding: 8px 0 !important;
  }

  .ant-list-item-meta-avatar {
    font-size: 1.1rem;
    color: var(--color-primary);
  }

  .ant-list-item-meta-title {
    color: white !important;
    font-weight: 500 !important;
  }

  .ant-list-item-meta-description {
    color: rgba(255, 255, 255, 0.65) !important;
  }
`;

// Newsletter
const NewsletterCard = styled(Card)`
  background-color: rgba(255, 255, 255, 0.05) !important;
  border: none !important;
  border-radius: 4px !important;

  .ant-card-body {
    padding: var(--spacing-md) !important;
  }
`;

const SubscribeInput = styled(Input.Search)`
  .ant-input {
    background-color: rgba(255, 255, 255, 0.1) !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    color: white !important;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5) !important;
    }

    &:focus,
    &:hover {
      border-color: var(--color-primary) !important;
    }
  }

  .ant-input-search-button {
    background-color: var(--color-primary) !important;
    border-color: var(--color-primary) !important;

    &:hover {
      background-color: var(--color-primary-dark) !important;
      border-color: var(--color-primary-dark) !important;
    }
  }
`;

const Footer = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Quick links data
  const quickLinks = [
    { icon: <HomeOutlined />, title: "Home", path: "/" },
    { icon: <InfoCircleOutlined />, title: "About Us", path: "/about" },
    { icon: <ShoppingOutlined />, title: "Collection", path: "/collection" },
    { icon: <ContactsOutlined />, title: "Contact Us", path: "/contact" },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <EnvironmentOutlined />,
      title: "Our Location",
      description: "Ramavatargems, Johari Bazaar, Jaipur, Rajasthan",
    },
    {
      icon: <PhoneOutlined />,
      title: "Phone Number",
      description: "+91 98765 43210",
    },
    {
      icon: <MailOutlined />,
      title: "Email Address",
      description: "info@ramavatargems.com",
    },
    {
      icon: <ClockCircleOutlined />,
      title: "Business Hours",
      description: "Monday - Saturday: 10:00 AM - 8:00 PM",
    },
  ];

  const handleSubscribe = (value) => {
    console.log("Subscribed with email:", value);
    // In a real app, you would send this to your backend
    form.resetFields();
  };

  return (
    <StyledFooter>
      <TopFooter>
        <FooterContainer>
          <Row gutter={[32, 48]}>
            {/* About Section */}
            <Col xs={24} sm={24} md={8} lg={8}>
              <LogoSection>
                <LogoIcon />
                <LogoText level={4}>
                  Ramavatar<span className="primary-text">gems</span>
                </LogoText>
              </LogoSection>

              <FooterText>
                Crafting elegance since 1982. Our Jaipur-based legacy continues
                with premium craftsmanship and timeless designs that celebrate
                India's rich jewelry heritage.
              </FooterText>

              <SocialIcons>
                <SocialIcon shape="circle" icon={<FacebookOutlined />} />
                <SocialIcon shape="circle" icon={<InstagramOutlined />} />
                <SocialIcon shape="circle" icon={<TwitterOutlined />} />
              </SocialIcons>
            </Col>

            {/* Quick Links Section */}
            <Col xs={24} sm={12} md={8} lg={5}>
              <FooterTitle level={4}>Quick Links</FooterTitle>
              <QuickLinks
                dataSource={quickLinks}
                renderItem={(item) => (
                  <List.Item
                    onClick={() => handleNavigation(item.path)}
                    style={{ cursor: "pointer" }}
                  >
                    <List.Item.Meta
                      avatar={item.icon}
                      title={
                        <Text style={{ color: "white" }}>{item.title}</Text>
                      }
                    />
                  </List.Item>
                )}
              />
            </Col>

            {/* Contact Section */}
            <Col xs={24} sm={12} md={8} lg={6}>
              <FooterTitle level={4}>Contact Us</FooterTitle>
              <ContactInfo
                dataSource={contactInfo}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={item.icon}
                      title={item.title}
                      description={item.description}
                    />
                  </List.Item>
                )}
              />
            </Col>

            {/* Newsletter Section */}
            <Col xs={24} sm={24} md={24} lg={5}>
              <FooterTitle level={4}>Newsletter</FooterTitle>
              <NewsletterCard>
                <FooterText>
                  Subscribe to our newsletter to receive updates on new
                  collections and special offers.
                </FooterText>
                <Form form={form}>
                  <Form.Item name="email">
                    <SubscribeInput
                      placeholder="Your email address"
                      enterButton={<SendOutlined />}
                      onSearch={handleSubscribe}
                    />
                  </Form.Item>
                </Form>
              </NewsletterCard>
            </Col>
          </Row>
        </FooterContainer>
      </TopFooter>

      <BottomFooter>
        <FooterContainer>
          <Row justify="center">
            <Col>
              <Text style={{ color: "rgba(255, 255, 255, 0.65)" }}>
                &copy; {new Date().getFullYear()} Ramavatargems. All Rights
                Reserved.
              </Text>
            </Col>
          </Row>
        </FooterContainer>
      </BottomFooter>
    </StyledFooter>
  );
};

export default Footer;
