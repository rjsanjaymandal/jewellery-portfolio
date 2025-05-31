import React from "react";
import { Typography, Button, Row, Col, Card } from "antd";
import {
  DiamondOutlined,
  CrownOutlined,
  StarFilled,
  MailOutlined,
  GiftOutlined
} from "@ant-design/icons";

const { Title, Text } = Typography;

const LuxuryHome = () => {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#fefefe",
      color: "#1a2332",
      fontFamily: "'Poppins', sans-serif"
    }}>
      {/* Hero Section */}
      <div style={{
        height: "100vh",
        position: "relative",
        background: "linear-gradient(135deg, #1a2332 0%, #2c3e50 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }}>
        <div style={{
          textAlign: "center",
          color: "#ffffff",
          maxWidth: "1000px",
          padding: "80px 40px",
          margin: "0 20px",
          position: "relative",
          zIndex: 3,
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "20px",
          border: "1px solid #d4a574",
          backdropFilter: "blur(15px)",
          boxShadow: "0 8px 32px 0 rgba(212, 165, 116, 0.25)"
        }}>
          <div style={{
            fontSize: "3rem",
            color: "#d4a574",
            marginBottom: "20px",
            textShadow: "0 0 20px #d4a574"
          }}>
            <CrownOutlined />
          </div>

          <Title level={1} style={{
            color: "#ffffff",
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            marginBottom: "30px",
            fontFamily: "'Playfair Display', serif",
            fontWeight: "700",
            letterSpacing: "3px",
            lineHeight: "1.1",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 30px #d4a574"
          }}>
            Exquisite Diamond Jewelry Artisans
          </Title>

          <Text style={{
            fontSize: "clamp(1.2rem, 2.8vw, 1.6rem)",
            color: "#ffffff",
            display: "block",
            marginBottom: "50px",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "400",
            lineHeight: "1.8",
            maxWidth: "850px",
            margin: "0 auto 50px auto",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            opacity: 0.95
          }}>
            Premier Diamond Jewelry Manufacturer in Jaipur - Crafting Timeless Masterpieces with Precision Stone Setting & Expert Craftsmanship Since 1982
          </Text>

          <Button
            type="primary"
            size="large"
            style={{
              background: "linear-gradient(135deg, #d4a574 0%, #e6b887 50%, #d4a574 100%)",
              border: "2px solid #d4a574",
              color: "#1a2332",
              padding: "18px 50px",
              height: "auto",
              fontSize: "1.2rem",
              fontWeight: "600",
              fontFamily: "'Poppins', sans-serif",
              borderRadius: "60px",
              boxShadow: "0 8px 32px 0 rgba(212, 165, 116, 0.25)",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              letterSpacing: "1px"
            }}
          >
            <DiamondOutlined style={{ marginRight: 12, fontSize: "1.3rem" }} />
            Discover Our Craftsmanship
          </Button>
        </div>
      </div>

      {/* Services Section */}
      <div style={{
        padding: "120px 20px",
        background: "linear-gradient(135deg, #f4e4d1 0%, #f9f1e6 100%)",
        position: "relative"
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <Title level={2} style={{
              fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
              fontFamily: "'Playfair Display', serif",
              fontWeight: "600",
              color: "#1a2332",
              marginBottom: "20px",
              letterSpacing: "2px"
            }}>
              Our Diamond Jewelry Services
            </Title>
            <Text style={{
              fontSize: "1.3rem",
              color: "#4a5568",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "400",
              maxWidth: "600px",
              margin: "0 auto",
              display: "block",
              lineHeight: "1.6"
            }}>
              Exceptional craftsmanship meets timeless elegance in every piece we create
            </Text>
          </div>

          <Row gutter={[40, 40]}>
            <Col xs={24} sm={12} md={8}>
              <Card style={{
                textAlign: "center",
                height: "100%",
                backgroundColor: "#ffffff",
                borderColor: "#d4a574",
                borderWidth: "2px",
                borderRadius: "20px",
                boxShadow: "0 8px 25px 0 rgba(26, 35, 50, 0.15)",
                padding: "40px 20px",
                transition: "all 0.4s ease"
              }}>
                <div style={{
                  width: "80px",
                  height: "80px",
                  background: "linear-gradient(135deg, #d4a574 0%, #e6b887 50%, #d4a574 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 30px",
                  fontSize: "32px",
                  color: "#1a2332",
                  boxShadow: "0 8px 32px 0 rgba(212, 165, 116, 0.25)"
                }}>
                  <CrownOutlined />
                </div>
                <Title level={4} style={{
                  color: "#1a2332",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: "600",
                  fontSize: "1.5rem",
                  marginBottom: "20px"
                }}>
                  Bespoke Diamond Jewelry Creation
                </Title>
                <Text style={{
                  color: "#4a5568",
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Custom design and manufacturing of unique diamond jewelry pieces tailored to your vision.
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card style={{
                textAlign: "center",
                height: "100%",
                backgroundColor: "#ffffff",
                borderColor: "#d4a574",
                borderWidth: "2px",
                borderRadius: "20px",
                boxShadow: "0 8px 25px 0 rgba(26, 35, 50, 0.15)",
                padding: "40px 20px",
                transition: "all 0.4s ease"
              }}>
                <div style={{
                  width: "80px",
                  height: "80px",
                  background: "linear-gradient(135deg, #d4a574 0%, #e6b887 50%, #d4a574 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 30px",
                  fontSize: "32px",
                  color: "#1a2332",
                  boxShadow: "0 8px 32px 0 rgba(212, 165, 116, 0.25)"
                }}>
                  <DiamondOutlined />
                </div>
                <Title level={4} style={{
                  color: "#1a2332",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: "600",
                  fontSize: "1.5rem",
                  marginBottom: "20px"
                }}>
                  Precision Stone Setting
                </Title>
                <Text style={{
                  color: "#4a5568",
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Expert stone setting techniques that maximize the brilliance of every diamond.
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card style={{
                textAlign: "center",
                height: "100%",
                backgroundColor: "#ffffff",
                borderColor: "#d4a574",
                borderWidth: "2px",
                borderRadius: "20px",
                boxShadow: "0 8px 25px 0 rgba(26, 35, 50, 0.15)",
                padding: "40px 20px",
                transition: "all 0.4s ease"
              }}>
                <div style={{
                  width: "80px",
                  height: "80px",
                  background: "linear-gradient(135deg, #d4a574 0%, #e6b887 50%, #d4a574 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 30px",
                  fontSize: "32px",
                  color: "#1a2332",
                  boxShadow: "0 8px 32px 0 rgba(212, 165, 116, 0.25)"
                }}>
                  <StarFilled />
                </div>
                <Title level={4} style={{
                  color: "#1a2332",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: "600",
                  fontSize: "1.5rem",
                  marginBottom: "20px"
                }}>
                  Premium Quality
                </Title>
                <Text style={{
                  color: "#4a5568",
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Certified quality and craftsmanship that meets the highest international standards.
                </Text>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div style={{
        padding: "120px 20px",
        background: "linear-gradient(135deg, #f4e4d1 0%, #f9f1e6 100%)",
        textAlign: "center",
        position: "relative"
      }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "60px 40px",
          background: "#ffffff",
          borderRadius: "25px",
          border: "3px solid #d4a574",
          boxShadow: "0 12px 40px 0 rgba(26, 35, 50, 0.18), 0 0 50px rgba(212, 165, 116, 0.2)",
          position: "relative",
          zIndex: 1
        }}>
          <div style={{
            fontSize: "3.5rem",
            color: "#d4a574",
            marginBottom: "30px",
            textShadow: "0 0 20px #d4a574"
          }}>
            <DiamondOutlined />
          </div>
          
          <Title level={2} style={{
            color: "#1a2332",
            marginBottom: "25px",
            fontSize: "clamp(2.2rem, 4vw, 3rem)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: "700",
            letterSpacing: "1px",
            lineHeight: "1.2"
          }}>
            Ready to Create Your Dream Diamond Jewelry?
          </Title>
          
          <div style={{
            width: "150px",
            height: "3px",
            background: "linear-gradient(135deg, #d4a574 0%, #e6b887 50%, #d4a574 100%)",
            margin: "0 auto 35px auto",
            borderRadius: "3px"
          }} />
          
          <Text style={{
            color: "#4a5568",
            fontSize: "1.3rem",
            display: "block",
            marginBottom: "45px",
            lineHeight: "1.7",
            fontWeight: "400",
            fontFamily: "'Poppins', sans-serif",
            maxWidth: "700px",
            margin: "0 auto 45px auto"
          }}>
            Contact us today to start your custom diamond jewelry journey with our master craftsmen
          </Text>
          
          <Button
            type="primary"
            size="large"
            style={{
              background: "linear-gradient(135deg, #d4a574 0%, #e6b887 50%, #d4a574 100%)",
              border: "3px solid #d4a574",
              color: "#1a2332",
              padding: "20px 50px",
              height: "auto",
              fontSize: "1.2rem",
              fontWeight: "700",
              fontFamily: "'Poppins', sans-serif",
              borderRadius: "60px",
              boxShadow: "0 8px 32px 0 rgba(212, 165, 116, 0.25), 0 0 30px rgba(212, 165, 116, 0.3)",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: "translateY(0)",
              letterSpacing: "1px",
              textTransform: "uppercase"
            }}
          >
            <MailOutlined style={{ marginRight: 12, fontSize: "1.4rem" }} />
            Contact Us Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LuxuryHome;
