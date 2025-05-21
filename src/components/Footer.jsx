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
  ToolOutlined,
  ExperimentOutlined,
  RightOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import RamavatargemsLogo from "./logo/RamavatargemsLogo";
import { useTheme } from "../context/ThemeContext";

const { Footer: AntFooter } = Layout;
const { Title, Text, Link: AntLink, Paragraph } = Typography;

// Main Footer Container
const StyledFooter = styled(AntFooter)`
  padding: 0;
  background-color: transparent;
  position: relative;
  z-index: 1;
`;

// Top Footer with main content
const TopFooter = styled.div`
  background: var(--color-primary);
  padding: var(--spacing-16) 0 var(--spacing-12);
  color: #fff;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("/images/manufacturing/diamond_pattern.png");
    background-size: 300px;
    opacity: 0.05;
    z-index: 0;
  }
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  position: relative;
  z-index: 1;
`;

// Bottom Footer with copyright
const BottomFooter = styled.div`
  background-color: black;
  padding: var(--spacing-4) 0;
  color: rgba(255, 255, 255, 0.7);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--gradient-gold);
    opacity: 0.3;
  }
`;

// Section Title
const FooterTitle = styled(Title)`
  color: white !important;
  margin-bottom: var(--spacing-6) !important;
  position: relative;
  font-weight: 700 !important;
  font-size: 1.4rem !important;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--color-secondary);
    border-radius: 1px;
  }
`;

// Logo section
const LogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-6);
  filter: drop-shadow(0 3px 10px rgba(0, 0, 0, 0.3));
  background: white;
  padding: 20px;
  border-radius: var(--border-radius-md);
  border: 2px solid var(--color-secondary);
  max-width: fit-content;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

// Footer text
const FooterText = styled(Paragraph)`
  color: white !important;
  margin-bottom: var(--spacing-6) !important;
  font-size: 1rem !important;
  line-height: 1.8 !important;
  max-width: 90%;
  font-weight: 500 !important;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
  padding: 15px;
  border-radius: var(--border-radius-md);
`;

// Social icons
const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: var(--spacing-4);
`;

const SocialIcon = styled(Button)`
  background: white !important;
  color: var(--color-primary) !important;
  border: 2px solid var(--color-secondary) !important;
  width: 50px !important;
  height: 50px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-size: 1.5rem !important;
  transition: all 0.3s ease !important;
  border-radius: 50% !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
  margin: 0 5px !important;

  &:hover {
    background: var(--color-secondary) !important;
    border-color: var(--color-secondary) !important;
    color: var(--color-primary) !important;
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4) !important;
  }
`;

// Quick links
const QuickLinks = styled(List)`
  .ant-list-item {
    border-bottom: none !important;
    padding: 10px 0 !important;
    transition: all 0.3s ease;

    &:hover {
      transform: translateX(5px);
    }
  }

  .ant-list-item-meta-title {
    margin-bottom: 0 !important;
  }

  .ant-list-item-meta-avatar {
    font-size: 1.2rem;
    color: var(--color-primary);
    background: white;
    width: 35px !important;
    height: 35px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    border-radius: 50%;
    margin-right: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    border: 2px solid var(--color-secondary);
  }
`;

// Contact info
const ContactInfo = styled(List)`
  .ant-list-item {
    border-bottom: none !important;
    padding: 12px 0 !important;
    transition: all 0.3s ease;
  }

  .ant-list-item-meta-avatar {
    font-size: 1.3rem;
    width: 45px !important;
    height: 45px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    border-radius: 50%;
    background: white;
    margin-right: 15px;
    color: var(--color-primary);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    border: 2px solid var(--color-secondary);
  }

  .ant-list-item-meta-title {
    color: white !important;
    font-weight: 600 !important;
    margin-bottom: 6px !important;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  .ant-list-item-meta-description {
    color: white !important;
    background: rgba(0, 0, 0, 0.2);
    padding: 5px 10px;
    border-radius: var(--border-radius-md);
    font-weight: 500;
  }
`;

// Newsletter
const NewsletterCard = styled(Card)`
  background: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: var(--border-radius-md) !important;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .ant-card-body {
    padding: var(--spacing-6) !important;
  }
`;

const SubscribeInput = styled(Input.Search)`
  .ant-input {
    background: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    color: white !important;
    height: 44px;
    border-radius: var(--border-radius-md) 0 0 var(--border-radius-md) !important;
    padding-left: 15px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.6) !important;
    }

    &:focus,
    &:hover {
      border-color: var(--color-secondary) !important;
    }
  }

  .ant-input-search-button {
    background: var(--color-secondary) !important;
    border-color: var(--color-secondary) !important;
    color: var(--color-primary) !important;
    height: 44px !important;
    width: 44px !important;
    border-radius: 0 var(--border-radius-md) var(--border-radius-md) 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    &:hover {
      background: var(--color-secondary-light) !important;
      border-color: var(--color-secondary-light) !important;
    }

    .anticon {
      font-size: 1.2rem;
    }
  }
`;

const FooterLink = styled(Text)`
  color: white !important;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  font-weight: 500 !important;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  .anticon {
    opacity: 0;
    transform: translateX(-5px);
    transition: all 0.2s ease;
    color: var(--color-secondary);
  }

  &:hover {
    color: var(--color-secondary) !important;

    .anticon {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Footer = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { isDarkMode } = useTheme();

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Quick links data
  const quickLinks = [
    { icon: <HomeOutlined />, title: "Home", path: "/" },
    { icon: <InfoCircleOutlined />, title: "About Us", path: "/about" },
    {
      icon: <ShoppingOutlined />,
      title: "Manufacturing",
      path: "/manufacturing",
    },
    { icon: <ToolOutlined />, title: "Workshop", path: "/workshop" },
    {
      icon: <ExperimentOutlined />,
      title: "Craftsmanship",
      path: "/craftsmanship",
    },
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
      description: "94631 96935",
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginBottom: "var(--spacing-6)",
                }}
              >
                <LogoSection>
                  <RamavatargemsLogo width={240} />
                </LogoSection>
              </div>

              <FooterText>
                Diamond Manufacturing Excellence since 1982. Our Jaipur-based
                legacy continues with master craftsmanship and precision
                techniques that transform rough diamonds into brilliant
                masterpieces.
              </FooterText>

              <SocialIcons>
                <SocialIcon shape="default" icon={<FacebookOutlined />} />
                <SocialIcon shape="default" icon={<InstagramOutlined />} />
                <SocialIcon shape="default" icon={<TwitterOutlined />} />
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
                        <FooterLink>
                          {item.title}{" "}
                          <RightOutlined style={{ marginLeft: 5 }} />
                        </FooterLink>
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
          <Row justify="space-between" align="middle">
            <Col
              xs={24}
              md={12}
              style={{
                textAlign: "center",
                marginBottom: { xs: "10px", md: "0" },
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "500",
                  textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
                }}
              >
                &copy; {new Date().getFullYear()} Ramavatargems. All Rights
                Reserved.
              </Text>
            </Col>
            <Col
              xs={24}
              md={12}
              style={{ textAlign: { xs: "center", md: "right" } }}
            >
              <Space
                split={
                  <Divider
                    type="vertical"
                    style={{
                      backgroundColor: "var(--color-secondary)",
                      opacity: 0.5,
                    }}
                  />
                }
              >
                <Text
                  style={{
                    color: "white",
                    cursor: "pointer",
                    fontWeight: "500",
                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Privacy Policy
                </Text>
                <Text
                  style={{
                    color: "white",
                    cursor: "pointer",
                    fontWeight: "500",
                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Terms of Service
                </Text>
                <Text
                  style={{
                    color: "white",
                    cursor: "pointer",
                    fontWeight: "500",
                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Sitemap
                </Text>
              </Space>
            </Col>
          </Row>
        </FooterContainer>
      </BottomFooter>
    </StyledFooter>
  );
};

export default Footer;
