import React from "react";
import { Typography, Button, Row, Col, Card } from "antd";
import {
  ToolOutlined,
  StarFilled,
  MailOutlined,
} from "@ant-design/icons";
import { useTheme } from "../context/ThemeContext";

const { Title, Text } = Typography;

const HomeBasic = () => {
  const { isDarkMode, theme } = useTheme();

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: isDarkMode ? theme.colors.background : "#ffffff",
      color: isDarkMode ? theme.colors.text.primary : "#1a1a1a"
    }}>
      {/* Hero Section */}
      <div style={{
        height: "100vh",
        position: "relative",
        background: "url(/images/jewelry_pieces/diamond_setting.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center 20%",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        marginBottom: "0",
        borderRadius: "0"
      }}>
        {/* Dynamic Background Overlay - Adapts to Theme */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isDarkMode
            ? `linear-gradient(
                135deg,
                rgba(0, 0, 0, 0.8) 0%,
                rgba(10, 10, 10, 0.7) 25%,
                rgba(212, 175, 55, 0.15) 50%,
                rgba(10, 10, 10, 0.7) 75%,
                rgba(0, 0, 0, 0.9) 100%
              )`
            : `linear-gradient(
                135deg,
                rgba(0, 0, 0, 0.7) 0%,
                rgba(26, 26, 26, 0.6) 25%,
                rgba(212, 175, 55, 0.1) 50%,
                rgba(26, 26, 26, 0.6) 75%,
                rgba(0, 0, 0, 0.8) 100%
              )`,
          zIndex: 1
        }} />

        {/* Animated Sparkle Effects */}
        <div style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "4px",
          height: "4px",
          background: "#d4af37",
          borderRadius: "50%",
          boxShadow: "0 0 20px #d4af37",
          animation: "sparkle 3s ease-in-out infinite",
          zIndex: 2
        }} />
        <div style={{
          position: "absolute",
          top: "30%",
          right: "15%",
          width: "3px",
          height: "3px",
          background: "#f7e9b7",
          borderRadius: "50%",
          boxShadow: "0 0 15px #f7e9b7",
          animation: "sparkle 4s ease-in-out infinite 1s",
          zIndex: 2
        }} />
        <div style={{
          position: "absolute",
          bottom: "25%",
          left: "20%",
          width: "5px",
          height: "5px",
          background: "#d4af37",
          borderRadius: "50%",
          boxShadow: "0 0 25px #d4af37",
          animation: "sparkle 2.5s ease-in-out infinite 0.5s",
          zIndex: 2
        }} />

        {/* Main Content */}
        <div style={{
          textAlign: "center",
          color: "white",
          maxWidth: "900px",
          padding: "60px 40px",
          margin: "0 20px",
          position: "relative",
          zIndex: 3
        }}>
          {/* Enhanced Title with Multiple Text Effects */}
          <Title level={1} style={{
            color: "#ffffff",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            marginBottom: "30px",
            textShadow: `
              3px 3px 0px rgba(0, 0, 0, 1),
              6px 6px 20px rgba(0, 0, 0, 0.9),
              0 0 40px rgba(0, 0, 0, 0.8),
              0 0 80px rgba(212, 175, 55, 0.3)
            `,
            fontWeight: "800",
            letterSpacing: "2px",
            lineHeight: "1.2",
            WebkitTextStroke: "1px rgba(0, 0, 0, 0.5)",
            filter: "drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.9))"
          }}>
            ✨ Exquisite Diamond Jewelry Artisans ✨
          </Title>

          {/* Enhanced Description */}
          <Text style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            color: "#ffffff",
            display: "block",
            marginBottom: "50px",
            textShadow: `
              2px 2px 4px rgba(0, 0, 0, 1),
              4px 4px 12px rgba(0, 0, 0, 0.9),
              0 0 20px rgba(0, 0, 0, 0.8)
            `,
            lineHeight: "1.8",
            fontWeight: "600",
            maxWidth: "800px",
            margin: "0 auto 50px auto",
            WebkitTextStroke: "0.5px rgba(0, 0, 0, 0.3)",
            filter: "drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.9))"
          }}>
            Premier Diamond Jewelry Manufacturer in Jaipur - Crafting Timeless Masterpieces with Precision Stone Setting & Expert Craftsmanship Since 1982
          </Text>

          {/* Enhanced Button with Glow Effect */}
          <Button
            type="primary"
            size="large"
            style={{
              background: "linear-gradient(135deg, #d4af37 0%, #f7e9b7 50%, #d4af37 100%)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              color: "#000000",
              padding: "15px 40px",
              height: "auto",
              fontSize: "1.1rem",
              fontWeight: "bold",
              borderRadius: "50px",
              boxShadow: `
                0 8px 25px rgba(212, 175, 55, 0.4),
                0 0 0 1px rgba(255, 255, 255, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.3)
              `,
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: "translateY(0)",
              position: "relative",
              overflow: "hidden",
              textShadow: "none"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.color = "#000000";
              e.target.style.boxShadow = `
                0 12px 35px rgba(212, 175, 55, 0.6),
                0 0 0 1px rgba(255, 255, 255, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.4)
              `;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.color = "#000000";
              e.target.style.boxShadow = `
                0 8px 25px rgba(212, 175, 55, 0.4),
                0 0 0 1px rgba(255, 255, 255, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.3)
              `;
            }}
          >
            <ToolOutlined style={{ marginRight: 10, fontSize: "1.2rem" }} />
            Our Manufacturing Process
          </Button>
        </div>

        {/* CSS Animations */}
        <style>
          {`
            @keyframes sparkle {
              0%, 100% {
                opacity: 0.3;
                transform: scale(1);
              }
              50% {
                opacity: 1;
                transform: scale(1.5);
              }
            }

            @media (max-width: 768px) {
              .hero-title {
                font-size: 2.5rem !important;
                letter-spacing: 1px !important;
              }
              .hero-description {
                font-size: 1.1rem !important;
                margin-bottom: 40px !important;
              }
              .hero-button {
                padding: 12px 30px !important;
                font-size: 1rem !important;
              }
            }

            @media (max-width: 480px) {
              .hero-title {
                font-size: 2rem !important;
              }
              .hero-description {
                font-size: 1rem !important;
              }
            }
          `}
        </style>
      </div>

      {/* Services Section */}
      <div style={{
        padding: "80px 20px",
        background: isDarkMode ? theme.colors.surface : "#f8f9fa"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Title level={2} style={{
            textAlign: "center",
            marginBottom: "50px",
            color: isDarkMode ? theme.colors.text.primary : "#1a1a1a"
          }}>
            Our Diamond Jewelry Services
          </Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={12} md={8}>
              <Card style={{
                textAlign: "center",
                height: "100%",
                backgroundColor: isDarkMode ? theme.colors.card : "#ffffff",
                borderColor: isDarkMode ? theme.colors.border.light : "#d9d9d9"
              }}>
                <div style={{
                  width: "60px",
                  height: "60px",
                  background: "linear-gradient(135deg, #d4af37, #f7e9b7)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  fontSize: "24px"
                }}>
                  <ToolOutlined />
                </div>
                <Title level={4} style={{
                  color: isDarkMode ? theme.colors.text.primary : "#1a1a1a"
                }}>
                  Bespoke Diamond Jewelry Creation
                </Title>
                <Text style={{
                  color: isDarkMode ? theme.colors.text.secondary : "#4a4a4a"
                }}>
                  Custom design and manufacturing of unique diamond jewelry pieces tailored to your vision.
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card style={{
                textAlign: "center",
                height: "100%",
                backgroundColor: isDarkMode ? theme.colors.card : "#ffffff",
                borderColor: isDarkMode ? theme.colors.border.light : "#d9d9d9"
              }}>
                <div style={{
                  width: "60px",
                  height: "60px",
                  background: "linear-gradient(135deg, #d4af37, #f7e9b7)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  fontSize: "24px"
                }}>
                  <StarFilled />
                </div>
                <Title level={4} style={{
                  color: isDarkMode ? theme.colors.text.primary : "#1a1a1a"
                }}>
                  Precision Stone Setting Artistry
                </Title>
                <Text style={{
                  color: isDarkMode ? theme.colors.text.secondary : "#4a4a4a"
                }}>
                  Expert stone setting techniques that maximize the brilliance and beauty of every diamond.
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card style={{
                textAlign: "center",
                height: "100%",
                backgroundColor: isDarkMode ? theme.colors.card : "#ffffff",
                borderColor: isDarkMode ? theme.colors.border.light : "#d9d9d9"
              }}>
                <div style={{
                  width: "60px",
                  height: "60px",
                  background: "linear-gradient(135deg, #d4af37, #f7e9b7)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  fontSize: "24px"
                }}>
                  <MailOutlined />
                </div>
                <Title level={4} style={{
                  color: isDarkMode ? theme.colors.text.primary : "#1a1a1a"
                }}>
                  Premium Quality Certification
                </Title>
                <Text style={{
                  color: isDarkMode ? theme.colors.text.secondary : "#4a4a4a"
                }}>
                  Rigorous quality control and certification ensuring every piece meets international standards.
                </Text>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* About Section */}
      <div style={{
        padding: "80px 20px",
        backgroundColor: isDarkMode ? theme.colors.background : "#ffffff"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={12}>
              <img
                src="/images/jewelry_manufacturing/design.jpg"
                alt="Diamond Jewelry Design Process"
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </Col>
            <Col xs={24} md={12}>
              <Title level={2} style={{
                color: isDarkMode ? theme.colors.text.primary : "#1a1a1a"
              }}>
                About Ramavatargems
              </Title>
              <Text style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                display: "block",
                marginBottom: "20px",
                color: isDarkMode ? theme.colors.text.secondary : "#4a4a4a"
              }}>
                Since 1982, Ramavatargems has been at the forefront of diamond jewelry manufacturing in Jaipur.
                Our master craftsmen combine traditional techniques with modern technology to create exquisite
                diamond jewelry pieces that capture the essence of luxury and elegance.
              </Text>
              <Text style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                display: "block",
                marginBottom: "30px",
                color: isDarkMode ? theme.colors.text.secondary : "#4a4a4a"
              }}>
                We specialize in custom diamond jewelry design, precision stone setting, and premium quality
                manufacturing that meets the highest international standards.
              </Text>
              <Button
                type="primary"
                size="large"
                style={{
                  background: "linear-gradient(135deg, #d4af37 0%, #f7e9b7 50%, #d4af37 100%)",
                  border: "none",
                  color: "#000",
                  padding: "12px 30px",
                  height: "auto",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "25px"
                }}
              >
                Learn More About Us
              </Button>
            </Col>
          </Row>
        </div>
      </div>

      {/* Showcase Section */}
      <div style={{
        padding: "80px 20px",
        background: isDarkMode ? theme.colors.surface : "#f8f9fa"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Title level={2} style={{
            textAlign: "center",
            marginBottom: "50px",
            color: isDarkMode ? theme.colors.text.primary : "#1a1a1a"
          }}>
            Our Diamond Jewelry Collection
          </Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={12} md={6}>
              <Card
                cover={
                  <img
                    alt="Diamond Rings"
                    src="/images/rings/ring1.jpg"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                }
                style={{
                  backgroundColor: isDarkMode ? theme.colors.card : "#ffffff",
                  borderColor: isDarkMode ? theme.colors.border.light : "#d9d9d9"
                }}
              >
                <Card.Meta
                  title={
                    <span style={{ color: isDarkMode ? theme.colors.text.primary : "#1a1a1a" }}>
                      Diamond Rings
                    </span>
                  }
                  description={
                    <span style={{ color: isDarkMode ? theme.colors.text.secondary : "#4a4a4a" }}>
                      Exquisite diamond ring collection
                    </span>
                  }
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                cover={
                  <img
                    alt="Diamond Necklaces"
                    src="/images/jewelry_pieces/diamond_necklace.jpg"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                }
                style={{
                  backgroundColor: isDarkMode ? theme.colors.card : "#ffffff",
                  borderColor: isDarkMode ? theme.colors.border.light : "#d9d9d9"
                }}
              >
                <Card.Meta
                  title={
                    <span style={{ color: isDarkMode ? theme.colors.text.primary : "#1a1a1a" }}>
                      Diamond Necklaces
                    </span>
                  }
                  description={
                    <span style={{ color: isDarkMode ? theme.colors.text.secondary : "#4a4a4a" }}>
                      Elegant diamond necklace designs
                    </span>
                  }
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                cover={
                  <img
                    alt="Diamond Earrings"
                    src="/images/rings/ring3.jpg"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                }
                style={{
                  backgroundColor: isDarkMode ? theme.colors.card : "#ffffff",
                  borderColor: isDarkMode ? theme.colors.border.light : "#d9d9d9"
                }}
              >
                <Card.Meta
                  title={
                    <span style={{ color: isDarkMode ? theme.colors.text.primary : "#1a1a1a" }}>
                      Diamond Earrings
                    </span>
                  }
                  description={
                    <span style={{ color: isDarkMode ? theme.colors.text.secondary : "#4a4a4a" }}>
                      Stunning diamond earring collection
                    </span>
                  }
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                cover={
                  <img
                    alt="Diamond Bracelets"
                    src="/images/rings/ring5.jpg"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                }
                style={{
                  backgroundColor: isDarkMode ? theme.colors.card : "#ffffff",
                  borderColor: isDarkMode ? theme.colors.border.light : "#d9d9d9"
                }}
              >
                <Card.Meta
                  title={
                    <span style={{ color: isDarkMode ? theme.colors.text.primary : "#1a1a1a" }}>
                      Diamond Bracelets
                    </span>
                  }
                  description={
                    <span style={{ color: isDarkMode ? theme.colors.text.secondary : "#4a4a4a" }}>
                      Luxury diamond bracelet designs
                    </span>
                  }
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Contact CTA */}
      <div style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
        textAlign: "center"
      }}>
        <div style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "40px",
          background: "rgba(0, 0, 0, 0.4)",
          borderRadius: "20px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)"
        }}>
          <Title level={2} style={{
            color: "white",
            marginBottom: "20px",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.6)",
            fontWeight: "700"
          }}>
            Ready to Create Your Dream Diamond Jewelry?
          </Title>
          <Text style={{
            color: "white",
            fontSize: "1.2rem",
            display: "block",
            marginBottom: "30px",
            textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.5)",
            lineHeight: "1.6",
            fontWeight: "500"
          }}>
            Contact us today to start your custom diamond jewelry journey
          </Text>
          <Button
            type="primary"
            size="large"
            style={{
              background: "linear-gradient(135deg, #d4af37 0%, #f7e9b7 50%, #d4af37 100%)",
              border: "none",
              color: "#000",
              padding: "12px 30px",
              height: "auto",
              fontSize: "1rem",
              fontWeight: "bold",
              borderRadius: "25px",
              boxShadow: "0 4px 15px rgba(212, 175, 55, 0.3)"
            }}
          >
            <MailOutlined style={{ marginRight: 8 }} />
            Contact Us Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeBasic;
