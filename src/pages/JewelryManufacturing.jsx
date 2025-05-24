import React from "react";
import { Typography, Row, Col, Card, Steps, Divider, Image, Space } from "antd";
import {
  SketchOutlined,
  ExperimentOutlined,
  FireOutlined,
  HighlightOutlined,
  DashboardOutlined,
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
  height: 450px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url("/images/jewelry_manufacturing/design.jpg");
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

const JewelryManufacturing = () => {
  const { isDarkMode } = useTheme();

  const manufacturingSteps = [
    {
      title: "Design Conceptualization",
      description: "Creating the initial design concept and sketches",
      icon: <SketchOutlined />,
    },
    {
      title: "Wax Modeling/CAD",
      description: "Developing a 3D model in wax or using CAD software",
      icon: <ExperimentOutlined />,
    },
    {
      title: "Casting",
      description: "Converting the wax model into metal through casting",
      icon: <FireOutlined />,
    },
    {
      title: "Polishing & Finishing",
      description: "Refining the metal piece to achieve the desired finish",
      icon: <HighlightOutlined />,
    },
    {
      title: "Stone Setting",
      description: "Precisely setting gemstones into the metal framework",
      icon: <DashboardOutlined />,
    },
    {
      title: "Quality Checks",
      description: "Final inspection to ensure perfection in every detail",
      icon: <SafetyCertificateOutlined />,
    },
  ];

  const craftTechnologies = [
    {
      title: "Traditional Craftsmanship",
      description:
        "Our master jewelers use time-honored techniques passed down through generations, ensuring each piece carries the legacy of traditional craftsmanship.",
    },
    {
      title: "Modern Technology",
      description:
        "We integrate cutting-edge technology like 3D printing, laser cutting, and computer-aided design to achieve precision and innovation in our designs.",
    },
    {
      title: "Sustainable Practices",
      description:
        "Our manufacturing processes incorporate sustainable practices, including recycled metals, ethical sourcing, and energy-efficient equipment.",
    },
    {
      title: "Quality Assurance",
      description:
        "Every piece undergoes rigorous quality checks at each stage of production, ensuring exceptional craftsmanship and durability.",
    },
  ];

  return (
    <div>
      <HeroSection>
        <HeroContent>
          <HeroTitle level={1}>Jewelry Manufacturing Process</HeroTitle>
          <HeroSubtitle>
            Discover the artistry and precision behind our jewelry creation
            process, from concept to completion
          </HeroSubtitle>
          <Button to="/craftsmanship" size="large">
            Explore Our Craftsmanship
          </Button>
        </HeroContent>
      </HeroSection>

      <PageContainer>
        <Row gutter={[24, 40]}>
          <Col span={24}>
            <SectionTitle level={2}>
              Our Jewelry Manufacturing Process
            </SectionTitle>
            <Paragraph>
              At Ramavatargems, we transform raw materials into exquisite
              jewelry through a meticulous process that combines traditional
              craftsmanship with modern technology. Each piece undergoes a
              journey of transformation through the skilled hands of our master
              artisans.
            </Paragraph>

            <StyledSteps direction="horizontal" current={6} responsive={true}>
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
              src="/images/jewelry_manufacturing/design.jpg"
              alt="Jewelry design process"
              style={{ borderRadius: "8px" }}
            />
          </Col>

          <Col xs={24} md={12}>
            <Title level={3}>Design Conceptualization</Title>
            <Paragraph>
              Every exquisite piece of jewelry begins with a vision. Our design
              process starts with detailed sketches that capture the essence of
              the concept. Our designers draw inspiration from various
              sources—nature, architecture, cultural motifs, and contemporary
              trends—to create unique and captivating designs.
            </Paragraph>
            <Paragraph>
              During this phase, we consider the intended wearer, the occasion,
              and the emotional significance the piece will hold. We carefully
              select the gemstones and metals that will best express the
              design's vision, ensuring harmony between all elements.
            </Paragraph>
            <Button to="/sketches" variant="outline">
              View Design Sketches <RightOutlined />
            </Button>
          </Col>

          <Col span={24}>
            <Divider />
          </Col>

          <Col xs={24} md={12} order={{ xs: 2, md: 1 }}>
            <Title level={3}>Wax Modeling & CAD Rendering</Title>
            <Paragraph>
              Once the design is finalized, we create a three-dimensional model.
              Depending on the complexity of the design, we either hand-carve a
              wax model or use Computer-Aided Design (CAD) software to create a
              digital rendering.
            </Paragraph>
            <Paragraph>
              The wax model serves as a prototype, allowing us to refine
              proportions, check the ergonomics, and make any necessary
              adjustments before proceeding to casting. For intricate designs,
              our CAD specialists create detailed digital models that can be 3D
              printed with incredible precision.
            </Paragraph>
            <Button to="/manufacturing/wax-modeling" variant="outline">
              Learn More <RightOutlined />
            </Button>
          </Col>

          <Col xs={24} md={12} order={{ xs: 1, md: 2 }}>
            <Image
              src="/images/jewelry_manufacturing/wax_model.jpg"
              alt="Wax modeling process"
              style={{ borderRadius: "8px" }}
            />
          </Col>

          <Col span={24}>
            <Divider />
          </Col>

          <Col xs={24} md={12}>
            <Image
              src="/images/jewelry_manufacturing/casting.jpg"
              alt="Jewelry casting process"
              style={{ borderRadius: "8px" }}
            />
          </Col>

          <Col xs={24} md={12}>
            <Title level={3}>Casting Process</Title>
            <Paragraph>
              The casting process transforms the wax model into metal using the
              ancient "lost wax" technique. The wax model is encased in a
              special plaster-like material to create a mold. When heated, the
              wax melts away, leaving a hollow cavity in the exact shape of the
              model.
            </Paragraph>
            <Paragraph>
              Molten metal—gold, silver, platinum, or other precious alloys—is
              then poured or forced into this cavity. Once cooled and
              solidified, the mold is broken away to reveal the metal piece.
              This process requires precise temperature control and timing to
              ensure the metal flows properly into all areas of the mold.
            </Paragraph>
            <Button to="/manufacturing/casting" variant="outline">
              Learn More <RightOutlined />
            </Button>
          </Col>

          <Col span={24}>
            <Divider />
          </Col>

          <Col xs={24} md={12} order={{ xs: 2, md: 1 }}>
            <Title level={3}>Polishing & Finishing</Title>
            <Paragraph>
              After casting, the raw metal piece undergoes extensive refinement.
              Our artisans file, sand, and polish the piece to achieve the
              desired texture and shine. This labor-intensive process requires a
              keen eye for detail and years of experience.
            </Paragraph>
            <Paragraph>
              Different finishing techniques create various effects—from
              high-gloss mirror finishes to subtle matte textures. Special
              treatments like rhodium plating may be applied to enhance
              durability and appearance. The finishing process is crucial as it
              brings out the beauty of the metal and prepares the piece for
              stone setting.
            </Paragraph>
            <Button to="/manufacturing/polishing" variant="outline">
              Learn More <RightOutlined />
            </Button>
          </Col>

          <Col xs={24} md={12} order={{ xs: 1, md: 2 }}>
            <Image
              src="/images/jewelry_manufacturing/polishing.jpg"
              alt="Jewelry polishing process"
              style={{ borderRadius: "8px" }}
            />
          </Col>

          <Col span={24}>
            <Divider />
          </Col>

          <Col xs={24} md={12}>
            <Image
              src="/images/jewelry_manufacturing/stone_setting.jpg"
              alt="Stone setting process"
              style={{ borderRadius: "8px" }}
            />
          </Col>

          <Col xs={24} md={12}>
            <Title level={3}>Stone Setting</Title>
            <Paragraph>
              Stone setting is perhaps the most delicate and precise stage of
              jewelry manufacturing. Our master setters secure gemstones into
              the metal framework using various techniques—prong, bezel, pavé,
              channel, or tension settings—each chosen to complement the design
              and showcase the stones.
            </Paragraph>
            <Paragraph>
              This process requires steady hands, specialized tools, and
              exceptional attention to detail. The setter must ensure each stone
              is secure while maximizing its brilliance and visibility. For
              pieces with multiple stones, achieving perfect alignment and
              symmetry is essential to the overall aesthetic.
            </Paragraph>
            <Button to="/manufacturing/stone-setting" variant="outline">
              Learn More <RightOutlined />
            </Button>
          </Col>

          <Col span={24}>
            <Divider />
          </Col>

          <Col xs={24} md={12} order={{ xs: 2, md: 1 }}>
            <Title level={3}>Quality Checks</Title>
            <Paragraph>
              The final stage in our manufacturing process involves
              comprehensive quality control. Each piece is meticulously
              inspected under magnification to ensure it meets our exacting
              standards for craftsmanship, durability, and beauty.
            </Paragraph>
            <Paragraph>
              We check for secure stone settings, smooth edges, consistent
              finishes, and proper functionality of any moving parts. The piece
              is cleaned ultrasonically to remove any residues from the
              manufacturing process. Only after passing these rigorous
              inspections is a piece ready to be presented to its future owner.
            </Paragraph>
            <Button to="/manufacturing/quality" variant="outline">
              Learn More <RightOutlined />
            </Button>
          </Col>

          <Col xs={24} md={12} order={{ xs: 1, md: 2 }}>
            <Image
              src="/images/jewelry_manufacturing/quality_check.jpg"
              alt="Quality control process"
              style={{ borderRadius: "8px" }}
            />
          </Col>

          <Col span={24}>
            <Divider />
          </Col>

          <Col span={24}>
            <FactsSection isDarkMode={isDarkMode}>
              <Row gutter={[24, 24]}>
                <Col xs={24} md={24}>
                  <Title level={3}>Craftsmanship & Technology</Title>
                  <Paragraph>
                    At Ramavatargems, we believe in the perfect balance between
                    traditional craftsmanship and modern technology. This
                    synergy allows us to create jewelry that honors age-old
                    techniques while embracing innovation.
                  </Paragraph>
                  <Space
                    direction="vertical"
                    size="large"
                    style={{ width: "100%" }}
                  >
                    {craftTechnologies.map((fact, index) => (
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
                        <Paragraph>{fact.description}</Paragraph>
                      </FactItem>
                    ))}
                  </Space>
                </Col>
              </Row>
            </FactsSection>
          </Col>
        </Row>
      </PageContainer>
    </div>
  );
};

export default JewelryManufacturing;
