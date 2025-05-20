import React from "react";
import { Typography, Row, Col, Card, Steps, Divider, Image, Space } from "antd";
import {
  DashboardOutlined,
  ScissorOutlined,
  HighlightOutlined,
  BulbOutlined,
  SafetyCertificateOutlined,
  RightOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import Button from "../components/Button";

const { Title, Paragraph, Text } = Typography;
const { Step } = Steps;

// Styled Components
const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 16px;
`;

const HeroSection = styled.div`
  position: relative;
  height: 400px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("/images/manufacturing/diamond_cutting_1.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  border-radius: 8px;
  overflow: hidden;
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 20px;
  z-index: 2;
`;

const HeroTitle = styled(Title)`
  color: white !important;
  margin-bottom: 16px !important;
  font-size: 2.5rem !important;

  @media (max-width: 768px) {
    font-size: 2rem !important;
  }
`;

const HeroSubtitle = styled(Paragraph)`
  color: rgba(255, 255, 255, 0.9) !important;
  font-size: 1.2rem !important;
  margin-bottom: 24px !important;

  @media (max-width: 768px) {
    font-size: 1rem !important;
  }
`;

const SectionTitle = styled(Title)`
  position: relative;
  margin-bottom: 40px !important;
  padding-bottom: 16px;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: var(--color-primary);
  }
`;

const ProcessCard = styled(Card)`
  height: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  .ant-card-cover img {
    height: 200px;
    object-fit: cover;
  }

  .ant-card-meta-title {
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

const StyledSteps = styled(Steps)`
  margin: 40px 0;

  .ant-steps-item-icon {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
  }

  .ant-steps-item-title {
    font-weight: 500;
  }

  .ant-steps-item-description {
    max-width: 200px;
  }

  @media (max-width: 768px) {
    .ant-steps-item-description {
      max-width: none;
    }
  }
`;

const FactsSection = styled.div`
  background-color: ${(props) => (props.isDarkMode ? "#1f1f1f" : "#f5f5f5")};
  padding: 40px;
  border-radius: 8px;
  margin: 60px 0;
`;

const FactItem = styled.div`
  margin-bottom: 24px;

  .title {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }

  .icon {
    margin-right: 8px;
    color: var(--color-primary);
  }
`;

const Manufacturing = () => {
  const { isDarkMode } = useTheme();

  const manufacturingSteps = [
    {
      title: "Planning",
      description: "Analyzing the rough diamond to determine the optimal cut",
      icon: <DashboardOutlined />,
    },
    {
      title: "Cleaving/Sawing",
      description: "Dividing the rough diamond into separate pieces",
      icon: <ScissorOutlined />,
    },
    {
      title: "Bruting",
      description: "Creating the basic shape and girdle of the diamond",
      icon: <HighlightOutlined />,
    },
    {
      title: "Polishing",
      description: "Cutting facets and polishing the diamond to its final form",
      icon: <BulbOutlined />,
    },
    {
      title: "Inspection",
      description: "Quality control and certification of the finished diamond",
      icon: <SafetyCertificateOutlined />,
    },
  ];

  const interestingFacts = [
    {
      title: "Precision Cutting",
      content:
        "Our master cutters work with tolerances of less than a hundredth of a millimeter to ensure perfect symmetry and maximum brilliance.",
    },
    {
      title: "Advanced Technology",
      content:
        "We utilize state-of-the-art 3D scanning, laser cutting, and automated polishing technologies to achieve unprecedented precision in diamond manufacturing.",
    },
    {
      title: "Traditional Techniques",
      content:
        "While we use modern technology, many of our techniques have been passed down through generations of craftsmen since 1982.",
    },
    {
      title: "Ethical Sourcing",
      content:
        "We only work with conflict-free diamonds sourced through the Kimberley Process to ensure ethical standards.",
    },
  ];

  return (
    <div>
      <HeroSection>
        <HeroContent>
          <HeroTitle level={1}>Diamond Manufacturing Process</HeroTitle>
          <HeroSubtitle>
            Discover the artistry and precision behind our diamond cutting and
            polishing techniques
          </HeroSubtitle>
          <Button to="/workshop" size="large">
            Tour Our Workshop
          </Button>
        </HeroContent>
      </HeroSection>

      <PageContainer>
        <Row gutter={[24, 40]}>
          <Col span={24}>
            <SectionTitle level={2}>
              Our Diamond Manufacturing Process
            </SectionTitle>
            <Paragraph>
              At Ramavatargems, we transform rough diamonds into brilliant
              masterpieces through a meticulous process that combines
              traditional craftsmanship with cutting-edge technology. Each
              diamond undergoes a journey of transformation through the skilled
              hands of our master craftsmen.
            </Paragraph>

            <StyledSteps direction="horizontal" current={5} responsive={true}>
              {manufacturingSteps.map((step) => (
                <Step
                  key={step.title}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                />
              ))}
            </StyledSteps>
          </Col>

          <Col span={24}>
            <Divider />
          </Col>

          <Col xs={24} md={12}>
            <Image
              src="/images/manufacturing/diamond_microscope.jpg"
              alt="Diamond planning process"
              style={{ borderRadius: "8px" }}
            />
          </Col>

          <Col xs={24} md={12}>
            <Title level={3}>Planning & Marking</Title>
            <Paragraph>
              The manufacturing process begins with careful planning. Our
              experts analyze each rough diamond using advanced 3D scanning
              technology to determine the optimal cut that will yield the
              highest value while minimizing waste.
            </Paragraph>
            <Paragraph>
              This critical first step involves marking the diamond with ink to
              indicate where cuts should be made. Our planners consider factors
              such as clarity, potential color, and the natural grain of the
              diamond to make these decisions.
            </Paragraph>
            <Button to="/manufacturing/planning" variant="outline">
              Learn More <RightOutlined />
            </Button>
          </Col>

          <Col span={24}>
            <Divider />
          </Col>

          <Col xs={24} md={12} order={{ xs: 2, md: 1 }}>
            <Title level={3}>Cutting & Shaping</Title>
            <Paragraph>
              Once planned, the diamond is cleaved or sawn along the marked
              lines. This process requires extreme precision as any mistake
              could significantly reduce the diamond's value.
            </Paragraph>
            <Paragraph>
              Our master cutters use a combination of traditional techniques and
              laser technology to ensure perfect execution. The rough diamond is
              then bruted to create its basic shape and establish the girdle
              (the widest part of the diamond).
            </Paragraph>
            <Button to="/manufacturing/cutting" variant="outline">
              Learn More <RightOutlined />
            </Button>
          </Col>

          <Col xs={24} md={12} order={{ xs: 1, md: 2 }}>
            <Image
              src="/images/manufacturing/diamond_polishing.jpg"
              alt="Diamond cutting process"
              style={{ borderRadius: "8px" }}
            />
          </Col>

          <Col span={24}>
            <Divider />
          </Col>

          <Col xs={24} md={12}>
            <Image
              src="/images/manufacturing/diamond_inspection.jpg"
              alt="Diamond quality control process"
              style={{ borderRadius: "8px" }}
            />
          </Col>

          <Col xs={24} md={12}>
            <Title level={3}>Quality Control & Certification</Title>
            <Paragraph>
              The final stage of our manufacturing process involves rigorous
              quality control. Each diamond is carefully inspected under
              magnification to ensure it meets our exacting standards for cut,
              symmetry, and polish.
            </Paragraph>
            <Paragraph>
              Our gemologists evaluate the finished diamond for color, clarity,
              and carat weight, providing detailed certification that guarantees
              its quality and authenticity. This meticulous attention to detail
              ensures that every Ramavatargems diamond achieves its maximum
              brilliance and beauty.
            </Paragraph>
            <Button to="/manufacturing/quality" variant="outline">
              Learn More <RightOutlined />
            </Button>
          </Col>

          <Col span={24}>
            <Divider />
          </Col>

          <Col span={24}>
            <FactsSection isDarkMode={isDarkMode}>
              <Row gutter={[24, 24]}>
                <Col xs={24} md={16}>
                  <Title level={3}>Diamond Manufacturing Facts</Title>
                  <Space
                    direction="vertical"
                    size="large"
                    style={{ width: "100%" }}
                  >
                    {interestingFacts.map((fact, index) => (
                      <FactItem key={index}>
                        <div className="title">
                          <span className="icon">
                            {index < manufacturingSteps.length ? (
                              manufacturingSteps[index].icon
                            ) : (
                              <SafetyCertificateOutlined />
                            )}
                          </span>
                          {fact.title}
                        </div>
                        <Paragraph>{fact.content}</Paragraph>
                      </FactItem>
                    ))}
                  </Space>
                </Col>
                <Col xs={24} md={8}>
                  <Image
                    src="/images/manufacturing/diamond_cvd_process.jpg"
                    alt="Advanced diamond manufacturing technology"
                    style={{ borderRadius: "8px", width: "100%" }}
                  />
                </Col>
              </Row>
            </FactsSection>
          </Col>
        </Row>
      </PageContainer>
    </div>
  );
};

export default Manufacturing;
