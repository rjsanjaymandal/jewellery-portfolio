import React from "react";
import { Typography, Button, Row, Col, Card } from "antd";
import { Carousel } from "antd";
import {
  ToolOutlined,
  StarFilled,
  MailOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const HomeBasic = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Hero Section */}
      <div style={{ 
        height: "100vh", 
        background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/jewelry_pieces/diamond_setting.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{
          textAlign: "center",
          color: "white",
          maxWidth: "800px",
          padding: "40px"
        }}>
          <Title level={1} style={{ color: "white", fontSize: "3rem", marginBottom: "20px" }}>
            ✨ Exquisite Diamond Jewelry Artisans ✨
          </Title>
          <Text style={{ 
            fontSize: "1.2rem", 
            color: "white", 
            display: "block", 
            marginBottom: "30px" 
          }}>
            Premier Diamond Jewelry Manufacturer in Jaipur - Crafting Timeless Masterpieces with Precision Stone Setting & Expert Craftsmanship Since 1982
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
            <ToolOutlined style={{ marginRight: 8 }} />
            Our Manufacturing Process
          </Button>
        </div>
      </div>

      {/* Services Section */}
      <div style={{ padding: "80px 20px", background: "#f8f9fa" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Title level={2} style={{ textAlign: "center", marginBottom: "50px" }}>
            Our Diamond Jewelry Services
          </Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={12} md={8}>
              <Card style={{ textAlign: "center", height: "100%" }}>
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
                <Title level={4}>Bespoke Diamond Jewelry Creation</Title>
                <Text>Custom design and manufacturing of unique diamond jewelry pieces tailored to your vision.</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card style={{ textAlign: "center", height: "100%" }}>
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
                <Title level={4}>Precision Stone Setting Artistry</Title>
                <Text>Expert stone setting techniques that maximize the brilliance and beauty of every diamond.</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card style={{ textAlign: "center", height: "100%" }}>
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
                <Title level={4}>Premium Quality Certification</Title>
                <Text>Rigorous quality control and certification ensuring every piece meets international standards.</Text>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* About Section */}
      <div style={{ padding: "80px 20px" }}>
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
              <Title level={2}>About Ramavatargems</Title>
              <Text style={{ fontSize: "1.1rem", lineHeight: "1.8", display: "block", marginBottom: "20px" }}>
                Since 1982, Ramavatargems has been at the forefront of diamond jewelry manufacturing in Jaipur. 
                Our master craftsmen combine traditional techniques with modern technology to create exquisite 
                diamond jewelry pieces that capture the essence of luxury and elegance.
              </Text>
              <Text style={{ fontSize: "1.1rem", lineHeight: "1.8", display: "block", marginBottom: "30px" }}>
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
      <div style={{ padding: "80px 20px", background: "#f8f9fa" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Title level={2} style={{ textAlign: "center", marginBottom: "50px" }}>
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
              >
                <Card.Meta title="Diamond Rings" description="Exquisite diamond ring collection" />
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
              >
                <Card.Meta title="Diamond Necklaces" description="Elegant diamond necklace designs" />
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
              >
                <Card.Meta title="Diamond Earrings" description="Stunning diamond earring collection" />
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
              >
                <Card.Meta title="Diamond Bracelets" description="Luxury diamond bracelet designs" />
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
        <Title level={2} style={{ color: "white", marginBottom: "20px" }}>
          Ready to Create Your Dream Diamond Jewelry?
        </Title>
        <Text style={{ 
          color: "white", 
          fontSize: "1.2rem", 
          display: "block", 
          marginBottom: "30px" 
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
            borderRadius: "25px"
          }}
        >
          <MailOutlined style={{ marginRight: 8 }} />
          Contact Us Today
        </Button>
      </div>
    </div>
  );
};

export default HomeBasic;
