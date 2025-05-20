import React from "react";
import {
  Typography,
  Row,
  Col,
  Card,
  Carousel,
  Image,
  Statistic,
  Space,
  Tabs,
} from "antd";
import {
  ToolOutlined,
  TeamOutlined,
  HistoryOutlined,
  SafetyOutlined,
  EnvironmentOutlined,
  RightOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import Button from "../components/Button";

const { Title, Paragraph, Text } = Typography;
const { TabPane } = Tabs;

// Styled Components
const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 16px;
`;

const HeroSection = styled.div`
  position: relative;
  height: 500px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://images.unsplash.com/photo-1615810417181-d6e3f7991ef3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80");
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

const StatsCard = styled(Card)`
  text-align: center;
  height: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 8px;

  .ant-statistic-title {
    font-size: 16px;
    margin-bottom: 8px;
  }

  .ant-statistic-content {
    font-size: 28px;
    color: var(--color-primary);
  }

  .icon {
    font-size: 32px;
    color: var(--color-primary);
    margin-bottom: 16px;
  }
`;

const CraftsmanCard = styled(Card)`
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
    height: 280px;
    object-fit: cover;
  }

  .ant-card-meta-title {
    font-size: 18px;
    margin-bottom: 4px;
  }

  .ant-card-meta-description {
    color: var(--color-primary);
    font-weight: 500;
  }
`;

const StyledCarousel = styled(Carousel)`
  margin-bottom: 40px;

  .slick-dots li button {
    background: var(--color-primary) !important;
  }

  .slick-dots li.slick-active button {
    background: var(--color-primary) !important;
  }

  .carousel-item {
    height: 400px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }

    .caption {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
      padding: 20px;
      color: white;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
`;

const StyledTabs = styled(Tabs)`
  margin-top: 40px;

  .ant-tabs-tab {
    padding: 12px 16px;

    &:hover {
      color: var(--color-primary);
    }
  }

  .ant-tabs-tab-active .ant-tabs-tab-btn {
    color: var(--color-primary) !important;
  }

  .ant-tabs-ink-bar {
    background-color: var(--color-primary);
  }
`;

const Workshop = () => {
  const { isDarkMode } = useTheme();

  const workshopStats = [
    {
      title: "Years of Experience",
      value: 40,
      suffix: "+",
      icon: <HistoryOutlined className="icon" />,
    },
    {
      title: "Master Craftsmen",
      value: 25,
      suffix: "",
      icon: <TeamOutlined className="icon" />,
    },
    {
      title: "Specialized Tools",
      value: 100,
      suffix: "+",
      icon: <ToolOutlined className="icon" />,
    },
    {
      title: "Quality Certifications",
      value: 5,
      suffix: "",
      icon: <SafetyOutlined className="icon" />,
    },
  ];

  const masterCraftsmen = [
    {
      name: "Rajesh Sharma",
      position: "Master Diamond Cutter",
      experience: "30 years",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Vikram Patel",
      position: "Senior Polisher",
      experience: "25 years",
      image:
        "https://images.unsplash.com/photo-1615810417181-d6e3f7991ef3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Anita Desai",
      position: "Design Specialist",
      experience: "18 years",
      image:
        "https://images.unsplash.com/photo-1573500883495-6c9b16d88d8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];

  const workshopImages = [
    {
      image:
        "https://images.unsplash.com/photo-1615810417181-d6e3f7991ef3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      caption:
        "Our main workshop floor where rough diamonds are transformed into brilliant gems",
    },
    {
      image:
        "https://images.unsplash.com/photo-1573500883495-6c9b16d88d8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      caption:
        "Precision planning area with specialized equipment for diamond analysis",
    },
    {
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      caption:
        "Quality control department where each diamond is meticulously inspected",
    },
  ];

  return (
    <div>
      <HeroSection>
        <HeroContent>
          <HeroTitle level={1}>Our Diamond Workshop</HeroTitle>
          <HeroSubtitle>
            Step inside our state-of-the-art facility where traditional
            craftsmanship meets modern technology
          </HeroSubtitle>
          <Button to="/contact" size="large">
            Schedule a Visit
          </Button>
        </HeroContent>
      </HeroSection>

      <PageContainer>
        <Row gutter={[24, 40]}>
          <Col span={24}>
            <SectionTitle level={2}>Inside Our Workshop</SectionTitle>
            <Paragraph>
              Located in the heart of Jaipur, our workshop combines traditional
              diamond cutting techniques with state-of-the-art technology. Since
              1982, we have been perfecting the art of diamond manufacturing,
              creating pieces that showcase the natural beauty of each stone.
            </Paragraph>
            <Paragraph>
              Our facility is designed to provide the optimal environment for
              our craftsmen to work their magic. From specialized lighting that
              helps identify the natural grain of diamonds to custom-built
              workstations that ensure precision, every aspect of our workshop
              is dedicated to achieving perfection.
            </Paragraph>
          </Col>

          <Col span={24}>
            <StyledCarousel autoplay effect="fade">
              {workshopImages.map((item, index) => (
                <div key={index}>
                  <div className="carousel-item">
                    <img src={item.image} alt={`Workshop view ${index + 1}`} />
                    <div className="caption">
                      <Text strong>{item.caption}</Text>
                    </div>
                  </div>
                </div>
              ))}
            </StyledCarousel>
          </Col>

          <Col span={24}>
            <Row gutter={[24, 24]}>
              {workshopStats.map((stat, index) => (
                <Col xs={12} md={6} key={index}>
                  <StatsCard>
                    {stat.icon}
                    <Statistic
                      title={stat.title}
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  </StatsCard>
                </Col>
              ))}
            </Row>
          </Col>

          <Col span={24}>
            <SectionTitle level={2}>Our Master Craftsmen</SectionTitle>
            <Paragraph>
              The heart of our workshop is our team of master craftsmen, many of
              whom have been with us for decades. Their expertise and dedication
              to their craft ensure that each diamond reaches its full
              potential.
            </Paragraph>

            <Row gutter={[24, 24]}>
              {masterCraftsmen.map((craftsman, index) => (
                <Col xs={24} sm={12} md={8} key={index}>
                  <CraftsmanCard
                    cover={<img alt={craftsman.name} src={craftsman.image} />}
                  >
                    <Card.Meta
                      title={craftsman.name}
                      description={craftsman.position}
                    />
                    <Paragraph style={{ marginTop: 16 }}>
                      With {craftsman.experience} of experience,{" "}
                      {craftsman.name.split(" ")[0]} brings exceptional skill
                      and artistry to our workshop.
                    </Paragraph>
                  </CraftsmanCard>
                </Col>
              ))}
            </Row>
          </Col>

          <Col span={24}>
            <StyledTabs defaultActiveKey="1">
              <TabPane tab="Equipment & Technology" key="1">
                <Row gutter={[24, 24]}>
                  <Col xs={24} md={12}>
                    <Image
                      src="https://images.unsplash.com/photo-1615810417181-d6e3f7991ef3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Diamond cutting equipment"
                      style={{ borderRadius: "8px" }}
                    />
                  </Col>
                  <Col xs={24} md={12}>
                    <Title level={4}>Cutting-Edge Technology</Title>
                    <Paragraph>
                      Our workshop is equipped with the latest diamond cutting
                      and polishing technology, including laser cutting
                      machines, automated polishing wheels, and 3D scanning
                      equipment.
                    </Paragraph>
                    <Paragraph>
                      These advanced tools allow our craftsmen to achieve
                      unprecedented precision while maintaining the traditional
                      techniques that have been perfected over generations.
                    </Paragraph>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Quality Control" key="2">
                <Row gutter={[24, 24]}>
                  <Col xs={24} md={12}>
                    <Title level={4}>Rigorous Quality Standards</Title>
                    <Paragraph>
                      Every diamond that passes through our workshop undergoes a
                      rigorous quality control process. Our specialists examine
                      each stone under various lighting conditions and
                      magnifications to ensure it meets our exacting standards.
                    </Paragraph>
                    <Paragraph>
                      We use advanced spectrometers and proportion analyzers to
                      verify the cut quality, symmetry, and polish of each
                      diamond, ensuring that it achieves maximum brilliance and
                      fire.
                    </Paragraph>
                  </Col>
                  <Col xs={24} md={12}>
                    <Image
                      src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Quality control process"
                      style={{ borderRadius: "8px" }}
                    />
                  </Col>
                </Row>
              </TabPane>
            </StyledTabs>
          </Col>
        </Row>
      </PageContainer>
    </div>
  );
};

export default Workshop;
