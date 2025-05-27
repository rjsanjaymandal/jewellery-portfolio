import React from "react";
import {
  Typography,
  Row,
  Col,
  Card,
  Carousel,
  Statistic,
  Space,
  Badge,
  Button as AntButton,
} from "antd";
import {
  ArrowRightOutlined,
  CheckCircleFilled,
  HistoryOutlined,
  DollarOutlined,
  TeamOutlined,
  GlobalOutlined,
  ToolOutlined,
  DashboardOutlined,
  SafetyCertificateOutlined,
  StarFilled,
  SunOutlined,
  MoonOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import styled, { keyframes } from "styled-components";
import { useTheme } from "../context/ThemeContext";
import Button from "../components/Button";
import RamavatargemsLogo from "../components/logo/RamavatargemsLogo";

const { Title, Text, Paragraph } = Typography;

// Modern Styled Components with Dark Mode Support
const PageContainer = styled.div`
  overflow-x: hidden;
  background: var(--color-background);
  min-height: 100vh;
  transition: background-color 0.3s ease;
`;

const Section = styled.section`
  padding: 120px 0;
  position: relative;
  background: var(--color-background);

  @media (max-width: 768px) {
    padding: 80px 0;
  }

  @media (max-width: 480px) {
    padding: 60px 0;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

// Modern Hero Section
const HeroSection = styled(Section)`
  height: calc(100vh - 80px);
  min-height: 500px;
  max-height: calc(100vh - 80px);
  padding: 0;
  position: relative;
  overflow: hidden;
  margin-top: 80px;

  @media (max-width: 768px) {
    height: calc(100vh - 70px);
    min-height: 450px;
    max-height: calc(100vh - 70px);
    margin-top: 70px;
  }

  @media (max-width: 480px) {
    height: calc(100vh - 70px);
    min-height: 400px;
    max-height: calc(100vh - 70px);
  }
`;

const ModernCarousel = styled(Carousel)`
  width: 100%;
  height: 100%;

  .slick-dots {
    bottom: 60px;
    z-index: 15;
    display: flex !important;
    justify-content: center;
    gap: 20px;

    li {
      width: auto;
      height: auto;
      margin: 0;

      button {
        width: 60px;
        height: 4px;
        border-radius: 2px;
        background: rgba(255, 255, 255, 0.3);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }

      &.slick-active button {
        background: var(--color-secondary);
        transform: scaleY(2);
        box-shadow: 0 0 25px rgba(212, 175, 55, 0.8);
      }
    }
  }

  .slick-arrow {
    width: 80px;
    height: 80px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 15;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);

    &:hover {
      background: rgba(212, 175, 55, 0.3);
      border-color: var(--color-secondary);
      transform: scale(1.2);
      box-shadow: 0 15px 50px rgba(212, 175, 55, 0.5);
    }

    &::before {
      font-size: 24px;
      color: white;
      font-weight: bold;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
    }

    @media (max-width: 768px) {
      width: 60px;
      height: 60px;

      &::before {
        font-size: 18px;
      }
    }

    @media (max-width: 480px) {
      display: none;
    }
  }

  .slick-prev {
    left: 60px;

    @media (max-width: 768px) {
      left: 30px;
    }
  }

  .slick-next {
    right: 60px;

    @media (max-width: 768px) {
      right: 30px;
    }
  }

  .slick-slide {
    height: calc(100vh - 80px);
    min-height: 500px;
    max-height: calc(100vh - 80px);

    > div {
      height: 100%;
    }

    @media (max-width: 768px) {
      height: calc(100vh - 70px);
      min-height: 450px;
      max-height: calc(100vh - 70px);
    }

    @media (max-width: 480px) {
      height: calc(100vh - 70px);
      min-height: 400px;
      max-height: calc(100vh - 70px);
    }
  }
`;

const HeroSlide = styled.div`
  height: calc(100vh - 80px);
  min-height: 500px;
  max-height: calc(100vh - 80px);
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(26, 35, 126, 0.75) 30%,
      rgba(0, 0, 0, 0.85) 100%
    );
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
        circle at 30% 70%,
        rgba(212, 175, 55, 0.2) 0%,
        transparent 60%
      ),
      radial-gradient(
        circle at 70% 30%,
        rgba(212, 175, 55, 0.15) 0%,
        transparent 60%
      ),
      linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
    z-index: 2;
  }

  @media (max-width: 768px) {
    height: calc(100vh - 70px);
    min-height: 450px;
    max-height: calc(100vh - 70px);
    background-attachment: scroll;
  }

  @media (max-width: 480px) {
    height: calc(100vh - 70px);
    min-height: 400px;
    max-height: calc(100vh - 70px);
  }
`;

const Home = () => {
  const { isDarkMode } = useTheme();

  return (
    <PageContainer>
      {/* Modern Hero Section */}
      <HeroSection>
        <ModernCarousel
          autoplay
          dots
          effect="fade"
          autoplaySpeed={5000}
          pauseOnHover={false}
          pauseOnFocus={false}
        >
          <div>
            <HeroSlide
              style={{
                backgroundImage:
                  "url(/images/jewelry_pieces/diamond_setting.jpg)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  zIndex: 10,
                  maxWidth: "1000px",
                  margin: "60px auto",
                  padding: "40px 35px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  background: "rgba(0, 0, 0, 0.4)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "24px",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.6)",
                }}
              >
                <div
                  style={{
                    marginBottom: "15px",
                    filter: "drop-shadow(0 0 30px rgba(255, 255, 255, 0.8))",
                  }}
                >
                  <RamavatargemsLogo width={150} />
                </div>
                <Title
                  level={1}
                  style={{
                    color: "#ffffff",
                    fontSize: "2.8rem",
                    fontWeight: 900,
                    marginBottom: "15px",
                    textShadow:
                      "0 0 20px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 0, 0, 0.7), 0 4px 8px rgba(0, 0, 0, 0.8)",
                    letterSpacing: "2px",
                    lineHeight: 1.1,
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  Exquisite{" "}
                  <span style={{ color: "var(--color-secondary)" }}>
                    Diamond Jewelry
                  </span>{" "}
                  Artisans
                </Title>
                <Text
                  style={{
                    display: "block",
                    fontSize: "1.2rem",
                    color: "#ffffff",
                    marginBottom: "20px",
                    maxWidth: "900px",
                    fontWeight: 400,
                    textShadow:
                      "0 0 15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.7), 0 2px 4px rgba(0, 0, 0, 0.8)",
                    lineHeight: 1.7,
                    letterSpacing: "1px",
                    background: "rgba(255, 255, 255, 0.15)",
                    padding: "12px 20px",
                    borderRadius: "15px",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  Premier Diamond Jewelry Manufacturer in Jaipur - Crafting Timeless Masterpieces with Precision Stone Setting & Expert Craftsmanship Since 1982
                </Text>
                <div
                  style={{
                    display: "flex",
                    gap: "25px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginTop: "15px",
                  }}
                >
                  <AntButton
                    type="primary"
                    size="large"
                    href="/manufacturing"
                    style={{
                      padding: "12px 24px",
                      height: "auto",
                      fontSize: "1rem",
                      fontWeight: 700,
                      borderRadius: "50px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      minWidth: "200px",
                      background:
                        "linear-gradient(135deg, var(--color-secondary) 0%, #f7e9b7 50%, var(--color-secondary) 100%)",
                      border: "none",
                      color: "#000000",
                      boxShadow: "0 10px 30px rgba(212, 175, 55, 0.5)",
                    }}
                  >
                    <ToolOutlined style={{ marginRight: 8 }} />
                    Our Manufacturing Process
                  </AntButton>
                </div>
              </div>
            </HeroSlide>
          </div>

          <div>
            <HeroSlide
              style={{
                backgroundImage:
                  "url(/images/jewelry_pieces/diamond_necklace.jpg)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  zIndex: 10,
                  maxWidth: "1000px",
                  margin: "60px auto",
                  padding: "40px 35px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  background: "rgba(0, 0, 0, 0.4)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "24px",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.6)",
                }}
              >
                <div
                  style={{
                    marginBottom: "15px",
                    filter: "drop-shadow(0 0 30px rgba(255, 255, 255, 0.8))",
                  }}
                >
                  <RamavatargemsLogo width={150} />
                </div>
                <Title
                  level={1}
                  style={{
                    color: "#ffffff",
                    fontSize: "2.8rem",
                    fontWeight: 900,
                    marginBottom: "15px",
                    textShadow:
                      "0 0 20px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 0, 0, 0.7), 0 4px 8px rgba(0, 0, 0, 0.8)",
                    letterSpacing: "2px",
                    lineHeight: 1.1,
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  Elegant{" "}
                  <span style={{ color: "var(--color-secondary)" }}>
                    Diamond Necklaces
                  </span>{" "}
                  Collection
                </Title>
                <Text
                  style={{
                    display: "block",
                    fontSize: "1.2rem",
                    color: "#ffffff",
                    marginBottom: "20px",
                    maxWidth: "900px",
                    fontWeight: 400,
                    textShadow:
                      "0 0 15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.7), 0 2px 4px rgba(0, 0, 0, 0.8)",
                    lineHeight: 1.7,
                    letterSpacing: "1px",
                    background: "rgba(255, 255, 255, 0.15)",
                    padding: "12px 20px",
                    borderRadius: "15px",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  Stunning Diamond Necklaces Crafted with Precision and Elegance for Every Special Occasion
                </Text>
                <div
                  style={{
                    display: "flex",
                    gap: "25px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginTop: "15px",
                  }}
                >
                  <AntButton
                    type="primary"
                    size="large"
                    href="/collection"
                    style={{
                      padding: "12px 24px",
                      height: "auto",
                      fontSize: "1rem",
                      fontWeight: 700,
                      borderRadius: "50px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      minWidth: "200px",
                      background:
                        "linear-gradient(135deg, var(--color-secondary) 0%, #f7e9b7 50%, var(--color-secondary) 100%)",
                      border: "none",
                      color: "#000000",
                      boxShadow: "0 10px 30px rgba(212, 175, 55, 0.5)",
                    }}
                  >
                    <StarFilled style={{ marginRight: 8 }} />
                    View Our Collection
                  </AntButton>
                </div>
              </div>
            </HeroSlide>
          </div>

          <div>
            <HeroSlide
              style={{
                backgroundImage:
                  "url(/images/jewelry_pieces/custom_design.jpg)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  zIndex: 10,
                  maxWidth: "1000px",
                  margin: "60px auto",
                  padding: "40px 35px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  background: "rgba(0, 0, 0, 0.4)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "24px",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.6)",
                }}
              >
                <div
                  style={{
                    marginBottom: "15px",
                    filter: "drop-shadow(0 0 30px rgba(255, 255, 255, 0.8))",
                  }}
                >
                  <RamavatargemsLogo width={150} />
                </div>
                <Title
                  level={1}
                  style={{
                    color: "#ffffff",
                    fontSize: "2.8rem",
                    fontWeight: 900,
                    marginBottom: "15px",
                    textShadow:
                      "0 0 20px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 0, 0, 0.7), 0 4px 8px rgba(0, 0, 0, 0.8)",
                    letterSpacing: "2px",
                    lineHeight: 1.1,
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  Custom{" "}
                  <span style={{ color: "var(--color-secondary)" }}>
                    Diamond Jewelry
                  </span>{" "}
                  Design
                </Title>
                <Text
                  style={{
                    display: "block",
                    fontSize: "1.2rem",
                    color: "#ffffff",
                    marginBottom: "20px",
                    maxWidth: "900px",
                    fontWeight: 400,
                    textShadow:
                      "0 0 15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.7), 0 2px 4px rgba(0, 0, 0, 0.8)",
                    lineHeight: 1.7,
                    letterSpacing: "1px",
                    background: "rgba(255, 255, 255, 0.15)",
                    padding: "12px 20px",
                    borderRadius: "15px",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  Bring Your Vision to Life with Our Bespoke Diamond Jewelry Design and Manufacturing Services
                </Text>
                <div
                  style={{
                    display: "flex",
                    gap: "25px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginTop: "15px",
                  }}
                >
                  <AntButton
                    type="primary"
                    size="large"
                    href="/contact"
                    style={{
                      padding: "12px 24px",
                      height: "auto",
                      fontSize: "1rem",
                      fontWeight: 700,
                      borderRadius: "50px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      minWidth: "200px",
                      background:
                        "linear-gradient(135deg, var(--color-secondary) 0%, #f7e9b7 50%, var(--color-secondary) 100%)",
                      border: "none",
                      color: "#000000",
                      boxShadow: "0 10px 30px rgba(212, 175, 55, 0.5)",
                    }}
                  >
                    <MailOutlined style={{ marginRight: 8 }} />
                    Start Custom Design
                  </AntButton>
                </div>
              </div>
            </HeroSlide>
          </div>
        </ModernCarousel>
      </HeroSection>

      {/* About Section */}
      <Section>
        <Container>
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={12}>
              <Title
                level={2}
                style={{
                  color: "var(--color-text-primary)",
                  fontSize: "3rem",
                  fontWeight: 900,
                  marginBottom: "24px",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                About{" "}
                <span style={{ color: "var(--color-secondary)" }}>
                  Ramavatargems
                </span>
              </Title>
              <Text
                style={{
                  display: "block",
                  fontSize: "1.2rem",
                  color: "var(--color-text-secondary)",
                  marginBottom: "24px",
                  lineHeight: 1.8,
                }}
              >
                Diamond Jewelry Manufacturing Excellence Since 1982
              </Text>
              <Paragraph
                style={{
                  fontSize: "1.1rem",
                  color: "var(--color-text-primary)",
                  marginBottom: "20px",
                  lineHeight: 1.7,
                }}
              >
                As the premier Diamond Jewelry Manufacturer in Jaipur,
                Ramavatargems has been creating exceptional diamond jewelry
                pieces for over four decades. Being the most loved precious
                stone, our diamond jewelry adds prestige, royalty & class to
                your outfit. We are recognized as the best wholesale jewelry
                suppliers in India, ruling this industry through our awestruck
                diamond products that last almost forever.
              </Paragraph>
              <Space direction="vertical" size="middle">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleFilled
                    style={{
                      color: "var(--color-secondary)",
                      marginRight: "12px",
                      fontSize: "1.3rem",
                    }}
                  />
                  <Text
                    strong
                    style={{
                      color: "var(--color-text-primary)",
                      fontSize: "1.1rem",
                    }}
                  >
                    Bespoke jewelry design and creation
                  </Text>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleFilled
                    style={{
                      color: "var(--color-secondary)",
                      marginRight: "12px",
                      fontSize: "1.3rem",
                    }}
                  />
                  <Text
                    strong
                    style={{
                      color: "var(--color-text-primary)",
                      fontSize: "1.1rem",
                    }}
                  >
                    Expert diamond setting and metalwork
                  </Text>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleFilled
                    style={{
                      color: "var(--color-secondary)",
                      marginRight: "12px",
                      fontSize: "1.3rem",
                    }}
                  />
                  <Text
                    strong
                    style={{
                      color: "var(--color-text-primary)",
                      fontSize: "1.1rem",
                    }}
                  >
                    Ethical sourcing of diamonds and precious metals
                  </Text>
                </div>
              </Space>
            </Col>
            <Col xs={24} md={12}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src="/images/jewelry_manufacturing/design.jpg"
                  alt="Ramavatargems diamond jewelry design and creation process"
                  style={{ width: "100%", display: "block" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    background: "var(--color-secondary)",
                    color: "#000000",
                    padding: "12px 24px",
                    borderRadius: "25px",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                    boxShadow: "0 4px 16px rgba(212, 175, 55, 0.4)",
                  }}
                >
                  Since 1982
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section style={{ background: "var(--color-surface)" }}>
        <Container>
          <Title
            level={2}
            style={{
              textAlign: "center",
              color: "var(--color-text-primary)",
              fontSize: "3rem",
              fontWeight: 900,
              marginBottom: "60px",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Our{" "}
            <span style={{ color: "var(--color-secondary)" }}>
              Achievements
            </span>
          </Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={12} md={6}>
              <Card
                style={{
                  textAlign: "center",
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border-light)",
                  borderRadius: "16px",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    color: "var(--color-secondary)",
                    marginBottom: "16px",
                  }}
                >
                  <HistoryOutlined />
                </div>
                <Statistic
                  title={
                    <span
                      style={{
                        color: "var(--color-text-primary)",
                        fontSize: "1.2rem",
                        fontWeight: 600,
                      }}
                    >
                      Years of Excellence
                    </span>
                  }
                  value="40+"
                  valueStyle={{
                    fontSize: "3rem",
                    fontWeight: 800,
                    color: "var(--color-secondary)",
                  }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                style={{
                  textAlign: "center",
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border-light)",
                  borderRadius: "16px",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    color: "var(--color-secondary)",
                    marginBottom: "16px",
                  }}
                >
                  <TeamOutlined />
                </div>
                <Statistic
                  title={
                    <span
                      style={{
                        color: "var(--color-text-primary)",
                        fontSize: "1.2rem",
                        fontWeight: 600,
                      }}
                    >
                      Master Craftsmen
                    </span>
                  }
                  value="25+"
                  valueStyle={{
                    fontSize: "3rem",
                    fontWeight: 800,
                    color: "var(--color-secondary)",
                  }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                style={{
                  textAlign: "center",
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border-light)",
                  borderRadius: "16px",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    color: "var(--color-secondary)",
                    marginBottom: "16px",
                  }}
                >
                  <GlobalOutlined />
                </div>
                <Statistic
                  title={
                    <span
                      style={{
                        color: "var(--color-text-primary)",
                        fontSize: "1.2rem",
                        fontWeight: 600,
                      }}
                    >
                      Countries Served
                    </span>
                  }
                  value="15+"
                  valueStyle={{
                    fontSize: "3rem",
                    fontWeight: 800,
                    color: "var(--color-secondary)",
                  }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                style={{
                  textAlign: "center",
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border-light)",
                  borderRadius: "16px",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    color: "var(--color-secondary)",
                    marginBottom: "16px",
                  }}
                >
                  <StarFilled />
                </div>
                <Statistic
                  title={
                    <span
                      style={{
                        color: "var(--color-text-primary)",
                        fontSize: "1.2rem",
                        fontWeight: 600,
                      }}
                    >
                      Pieces Created
                    </span>
                  }
                  value="10000+"
                  valueStyle={{
                    fontSize: "3rem",
                    fontWeight: 800,
                    color: "var(--color-secondary)",
                  }}
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* Services Section */}
      <Section>
        <Container>
          <Title
            level={2}
            style={{
              textAlign: "center",
              color: "var(--color-text-primary)",
              fontSize: "3rem",
              fontWeight: 900,
              marginBottom: "20px",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Our{" "}
            <span style={{ color: "var(--color-secondary)" }}>Services</span>
          </Title>
          <Text
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "var(--color-text-secondary)",
              marginBottom: "60px",
              display: "block",
            }}
          >
            Comprehensive diamond jewelry manufacturing solutions
          </Text>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Card
                style={{
                  height: "100%",
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border-light)",
                  borderRadius: "16px",
                  boxShadow: "var(--shadow-lg)",
                  transition: "all 0.3s ease",
                }}
                hoverable
              >
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      background:
                        "linear-gradient(135deg, var(--color-secondary), #f7e9b7)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                      fontSize: "2.5rem",
                      color: "#000000",
                    }}
                  >
                    <ToolOutlined />
                  </div>
                  <Title
                    level={4}
                    style={{
                      color: "var(--color-text-primary)",
                      marginBottom: "16px",
                      fontWeight: 700,
                    }}
                  >
                    Bespoke Diamond Jewelry Creation
                  </Title>
                  <Paragraph
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "1rem",
                      lineHeight: 1.6,
                    }}
                  >
                    From concept to creation, we bring your unique jewelry
                    designs to life with precision craftsmanship and attention
                    to detail.
                  </Paragraph>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                style={{
                  height: "100%",
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border-light)",
                  borderRadius: "16px",
                  boxShadow: "var(--shadow-lg)",
                  transition: "all 0.3s ease",
                }}
                hoverable
              >
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      background:
                        "linear-gradient(135deg, var(--color-secondary), #f7e9b7)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                      fontSize: "2.5rem",
                      color: "#000000",
                    }}
                  >
                    <StarFilled />
                  </div>
                  <Title
                    level={4}
                    style={{
                      color: "var(--color-text-primary)",
                      marginBottom: "16px",
                      fontWeight: 700,
                    }}
                  >
                    Precision Stone Setting Artistry
                  </Title>
                  <Paragraph
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "1rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Expert diamond setting techniques and premium finishing
                    services to ensure every piece meets the highest quality
                    standards.
                  </Paragraph>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                style={{
                  height: "100%",
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border-light)",
                  borderRadius: "16px",
                  boxShadow: "var(--shadow-lg)",
                  transition: "all 0.3s ease",
                }}
                hoverable
              >
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      background:
                        "linear-gradient(135deg, var(--color-secondary), #f7e9b7)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                      fontSize: "2.5rem",
                      color: "#000000",
                    }}
                  >
                    <SafetyCertificateOutlined />
                  </div>
                  <Title
                    level={4}
                    style={{
                      color: "var(--color-text-primary)",
                      marginBottom: "16px",
                      fontWeight: 700,
                    }}
                  >
                    Premium Quality Certification
                  </Title>
                  <Paragraph
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "1rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Rigorous quality control processes and professional
                    certification to guarantee authenticity and excellence in
                    every piece.
                  </Paragraph>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* Process Section */}
      <Section style={{ background: "var(--color-surface)" }}>
        <Container>
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={12}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src="/images/jewelry_manufacturing/casting.jpg"
                  alt="Diamond jewelry casting and manufacturing process"
                  style={{ width: "100%", display: "block" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    background:
                      "linear-gradient(45deg, rgba(212, 175, 55, 0.2), transparent)",
                  }}
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <Title
                level={2}
                style={{
                  color: "var(--color-text-primary)",
                  fontSize: "3rem",
                  fontWeight: 900,
                  marginBottom: "24px",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Our{" "}
                <span style={{ color: "var(--color-secondary)" }}>
                  Diamond Jewelry
                </span>{" "}
                Crafting Journey
              </Title>
              <Paragraph
                style={{
                  fontSize: "1.1rem",
                  color: "var(--color-text-primary)",
                  marginBottom: "30px",
                  lineHeight: 1.7,
                }}
              >
                Here is a detailed description of our jewelry making process
                from the top-class Diamond Jewelry Manufacturer in Jaipur. Our
                meticulous 8-step process ensures premium quality and
                exceptional craftsmanship in every piece.
              </Paragraph>
              <Space
                direction="vertical"
                size="large"
                style={{ width: "100%" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "var(--color-secondary)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#000000",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      flexShrink: 0,
                    }}
                  >
                    1
                  </div>
                  <div>
                    <Title
                      level={5}
                      style={{
                        color: "var(--color-text-primary)",
                        marginBottom: "8px",
                      }}
                    >
                      Diamond Assorting
                    </Title>
                    <Text style={{ color: "var(--color-text-secondary)" }}>
                      Stone sorting & grading considering size, clarity, color,
                      and shape. Diamonds are measured and sifted using
                      specialized tools for precision.
                    </Text>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "var(--color-secondary)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#000000",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      flexShrink: 0,
                    }}
                  >
                    2
                  </div>
                  <div>
                    <Title
                      level={5}
                      style={{
                        color: "var(--color-text-primary)",
                        marginBottom: "8px",
                      }}
                    >
                      Designing
                    </Title>
                    <Text style={{ color: "var(--color-text-secondary)" }}>
                      Latest technology, software & tools are used by qualified
                      designers to create unique designs. 3-D visualization is
                      made with comprehensive measurements.
                    </Text>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "var(--color-secondary)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#000000",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      flexShrink: 0,
                    }}
                  >
                    3
                  </div>
                  <div>
                    <Title
                      level={5}
                      style={{
                        color: "var(--color-text-primary)",
                        marginBottom: "8px",
                      }}
                    >
                      Model Making Process
                    </Title>
                    <Text style={{ color: "var(--color-text-secondary)" }}>
                      Modern manufacturers use wax first instead of silver &
                      cast it into silver. Detailed measurements are focused
                      upon to ensure premium quality.
                    </Text>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "var(--color-secondary)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#000000",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      flexShrink: 0,
                    }}
                  >
                    4
                  </div>
                  <div>
                    <Title
                      level={5}
                      style={{
                        color: "var(--color-text-primary)",
                        marginBottom: "8px",
                      }}
                    >
                      Wax Replica & Diamond Setting
                    </Title>
                    <Text style={{ color: "var(--color-text-secondary)" }}>
                      Master mould impression is formed into rubber mould.
                      Diamonds are set to wax replica for smaller stones, larger
                      stones after casting process.
                    </Text>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "var(--color-secondary)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#000000",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      flexShrink: 0,
                    }}
                  >
                    5
                  </div>
                  <div>
                    <Title
                      level={5}
                      style={{
                        color: "var(--color-text-primary)",
                        marginBottom: "8px",
                      }}
                    >
                      Casting Process
                    </Title>
                    <Text style={{ color: "var(--color-text-secondary)" }}>
                      Wax replicas are attached to central rod like trees.
                      Gypsum-based mixture is put into flask, taken to furnace
                      where wax melts & gold goes inside.
                    </Text>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "var(--color-secondary)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#000000",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      flexShrink: 0,
                    }}
                  >
                    6
                  </div>
                  <div>
                    <Title
                      level={5}
                      style={{
                        color: "var(--color-text-primary)",
                        marginBottom: "8px",
                      }}
                    >
                      Finishing & Polishing
                    </Title>
                    <Text style={{ color: "var(--color-text-secondary)" }}>
                      Final touch is given by making wavy surfaces even.
                      Polishing wheels & brushes are used. Rhodium plating
                      achieves the luster of metals & diamonds.
                    </Text>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "var(--color-secondary)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#000000",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      flexShrink: 0,
                    }}
                  >
                    7
                  </div>
                  <div>
                    <Title
                      level={5}
                      style={{
                        color: "var(--color-text-primary)",
                        marginBottom: "8px",
                      }}
                    >
                      Quality Control
                    </Title>
                    <Text style={{ color: "var(--color-text-secondary)" }}>
                      Ensuring quality of all jewelry items follows strict
                      protocols. Multiple quality checks occur at each step by
                      industry-trained professionals.
                    </Text>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "var(--color-secondary)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#000000",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      flexShrink: 0,
                    }}
                  >
                    8
                  </div>
                  <div>
                    <Title
                      level={5}
                      style={{
                        color: "var(--color-text-primary)",
                        marginBottom: "8px",
                      }}
                    >
                      Final Inspection & Delivery
                    </Title>
                    <Text style={{ color: "var(--color-text-secondary)" }}>
                      Comprehensive final inspection ensures every piece meets
                      our highest standards before careful packaging and timely
                      delivery to clients.
                    </Text>
                  </div>
                </div>
              </Space>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section>
        <Container>
          <Title
            level={2}
            style={{
              textAlign: "center",
              color: "var(--color-text-primary)",
              fontSize: "3rem",
              fontWeight: 900,
              marginBottom: "20px",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            What Our{" "}
            <span style={{ color: "var(--color-secondary)" }}>Clients</span> Say
          </Title>
          <Text
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "var(--color-text-secondary)",
              marginBottom: "60px",
              display: "block",
            }}
          >
            Trusted by jewelry retailers and designers worldwide
          </Text>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Card
                style={{
                  height: "100%",
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border-light)",
                  borderRadius: "16px",
                  boxShadow: "var(--shadow-lg)",
                  padding: "24px",
                }}
              >
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <div
                    style={{
                      fontSize: "3rem",
                      color: "var(--color-secondary)",
                      marginBottom: "16px",
                    }}
                  >
                    ⭐⭐⭐⭐⭐
                  </div>
                  <Paragraph
                    style={{
                      fontSize: "1.1rem",
                      color: "var(--color-text-primary)",
                      fontStyle: "italic",
                      marginBottom: "20px",
                      lineHeight: 1.6,
                    }}
                  >
                    "Ramavatargems has been our trusted partner for over 5
                    years. Their attention to detail and quality craftsmanship
                    is unmatched in the industry."
                  </Paragraph>
                  <Title
                    level={5}
                    style={{
                      color: "var(--color-text-primary)",
                      marginBottom: "4px",
                    }}
                  >
                    Sarah Johnson
                  </Title>
                  <Text style={{ color: "var(--color-text-secondary)" }}>
                    Luxury Jewelry Retailer, New York
                  </Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                style={{
                  height: "100%",
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border-light)",
                  borderRadius: "16px",
                  boxShadow: "var(--shadow-lg)",
                  padding: "24px",
                }}
              >
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <div
                    style={{
                      fontSize: "3rem",
                      color: "var(--color-secondary)",
                      marginBottom: "16px",
                    }}
                  >
                    ⭐⭐⭐⭐⭐
                  </div>
                  <Paragraph
                    style={{
                      fontSize: "1.1rem",
                      color: "var(--color-text-primary)",
                      fontStyle: "italic",
                      marginBottom: "20px",
                      lineHeight: 1.6,
                    }}
                  >
                    "The precision and artistry in their work is exceptional.
                    Every piece they create exceeds our expectations and
                    delights our customers."
                  </Paragraph>
                  <Title
                    level={5}
                    style={{
                      color: "var(--color-text-primary)",
                      marginBottom: "4px",
                    }}
                  >
                    Michael Chen
                  </Title>
                  <Text style={{ color: "var(--color-text-secondary)" }}>
                    Jewelry Designer, California
                  </Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                style={{
                  height: "100%",
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border-light)",
                  borderRadius: "16px",
                  boxShadow: "var(--shadow-lg)",
                  padding: "24px",
                }}
              >
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <div
                    style={{
                      fontSize: "3rem",
                      color: "var(--color-secondary)",
                      marginBottom: "16px",
                    }}
                  >
                    ⭐⭐⭐⭐⭐
                  </div>
                  <Paragraph
                    style={{
                      fontSize: "1.1rem",
                      color: "var(--color-text-primary)",
                      fontStyle: "italic",
                      marginBottom: "20px",
                      lineHeight: 1.6,
                    }}
                  >
                    "Professional service, timely delivery, and outstanding
                    quality. Ramavatargems is our go-to partner for all custom
                    jewelry manufacturing."
                  </Paragraph>
                  <Title
                    level={5}
                    style={{
                      color: "var(--color-text-primary)",
                      marginBottom: "4px",
                    }}
                  >
                    Emma Rodriguez
                  </Title>
                  <Text style={{ color: "var(--color-text-secondary)" }}>
                    Boutique Owner, London
                  </Text>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* Gallery Section */}
      <Section style={{ background: "var(--color-surface)" }}>
        <Container>
          <Title
            level={2}
            style={{
              textAlign: "center",
              color: "var(--color-text-primary)",
              fontSize: "3rem",
              fontWeight: 900,
              marginBottom: "20px",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Our{" "}
            <span style={{ color: "var(--color-secondary)" }}>
              Masterpieces
            </span>
          </Title>
          <Text
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "var(--color-text-secondary)",
              marginBottom: "60px",
              display: "block",
            }}
          >
            A showcase of our finest diamond jewelry creations
          </Text>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} md={6}>
              <Card
                hoverable
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "none",
                  boxShadow: "var(--shadow-lg)",
                }}
                cover={
                  <div style={{ height: "250px", overflow: "hidden" }}>
                    <img
                      alt="Exquisite Diamond Ring Collection"
                      src="/images/rings/ring1.jpg"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                }
              >
                <div style={{ textAlign: "center", padding: "16px 0" }}>
                  <Title
                    level={5}
                    style={{
                      color: "var(--color-text-primary)",
                      marginBottom: "8px",
                    }}
                  >
                    Diamond Ring Manufacturers
                  </Title>
                  <Text style={{ color: "var(--color-text-secondary)" }}>
                    Rings give a wholesome look to your fingers. Get the best
                    diamond rings in varied styles like Vintage, Three Stone,
                    Channel Set Halo, Solitaire, Pavé & Sidestone.
                  </Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                hoverable
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "none",
                  boxShadow: "var(--shadow-lg)",
                }}
                cover={
                  <div style={{ height: "250px", overflow: "hidden" }}>
                    <img
                      alt="Diamond Necklace"
                      src="/images/jewelry_pieces/diamond_necklace.jpg"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                }
              >
                <div style={{ textAlign: "center", padding: "16px 0" }}>
                  <Title
                    level={5}
                    style={{
                      color: "var(--color-text-primary)",
                      marginBottom: "8px",
                    }}
                  >
                    Diamond Pendant Manufacturers
                  </Title>
                  <Text style={{ color: "var(--color-text-secondary)" }}>
                    Simple, lightweight yet elegant neck jewelry pieces.
                    Eye-catching & neck highlighting diamond pendants like
                    Talisman, Amulet, Medallion styles.
                  </Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                hoverable
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "none",
                  boxShadow: "var(--shadow-lg)",
                }}
                cover={
                  <div style={{ height: "250px", overflow: "hidden" }}>
                    <img
                      alt="Elegant Diamond Earrings Collection"
                      src="/images/rings/ring3.jpg"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                }
              >
                <div style={{ textAlign: "center", padding: "16px 0" }}>
                  <Title
                    level={5}
                    style={{
                      color: "var(--color-text-primary)",
                      marginBottom: "8px",
                    }}
                  >
                    Diamond Earring Manufacturers
                  </Title>
                  <Text style={{ color: "var(--color-text-secondary)" }}>
                    Perfect for brides & married women. Earring styles like
                    chandelier, drop, dangle, and huggie earrings work like a
                    charm with heavy dresses.
                  </Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                hoverable
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "none",
                  boxShadow: "var(--shadow-lg)",
                }}
                cover={
                  <div style={{ height: "250px", overflow: "hidden" }}>
                    <img
                      alt="Luxury Diamond Bracelets Collection"
                      src="/images/rings/ring5.jpg"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                }
              >
                <div style={{ textAlign: "center", padding: "16px 0" }}>
                  <Title
                    level={5}
                    style={{
                      color: "var(--color-text-primary)",
                      marginBottom: "8px",
                    }}
                  >
                    Diamond Bracelet Manufacturers
                  </Title>
                  <Text style={{ color: "var(--color-text-secondary)" }}>
                    Adding femininity & class to every party dress. Diamond
                    bracelets make you feel superior & confident with styles
                    like tennis, pearl, chain, beaded, cuff, slider.
                  </Text>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section
        style={{
          background:
            "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        }}
      >
        <Container>
          <div style={{ textAlign: "center", color: "#ffffff" }}>
            <Title
              level={2}
              style={{
                color: "#ffffff",
                fontSize: "3rem",
                fontWeight: 900,
                marginBottom: "20px",
                fontFamily: "'Playfair Display', serif",
                textShadow:
                  "0 4px 8px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)",
              }}
            >
              Ready to Create Something{" "}
              <span
                style={{
                  color: "#d4af37",
                  textShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)",
                }}
              >
                Extraordinary
              </span>
              ?
            </Title>
            <Paragraph
              style={{
                fontSize: "1.3rem",
                color: "#ffffff",
                marginBottom: "40px",
                maxWidth: "600px",
                margin: "0 auto 40px",
                textShadow:
                  "0 3px 6px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.6)",
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              Let's discuss your next jewelry project and bring your vision to
              life with our expert craftsmanship.
            </Paragraph>
            <Space size="large">
              <AntButton
                size="large"
                style={{
                  padding: "16px 40px",
                  height: "auto",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  borderRadius: "50px",
                  background: "#d4af37",
                  border: "none",
                  color: "#000000",
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#f7e9b7";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "#d4af37";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                <MailOutlined style={{ marginRight: 8 }} />
                Get Quote
              </AntButton>
              <AntButton
                size="large"
                style={{
                  padding: "16px 40px",
                  height: "auto",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  borderRadius: "50px",
                  background: "transparent",
                  border: "2px solid #ffffff",
                  color: "#ffffff",
                  boxShadow: "0 4px 15px rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#ffffff";
                  e.target.style.color = "#1a1a2e";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.color = "#ffffff";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                <PhoneOutlined style={{ marginRight: 8 }} />
                Call Us
              </AntButton>
            </Space>
          </div>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default Home;
