import React from "react";
import {
  Typography,
  Row,
  Col,
  Card,
  Tabs,
  Image,
  Space,
  Tag,
  Divider,
  List,
} from "antd";
import {
  StarOutlined,
  FireOutlined,
  ExperimentOutlined,
  SafetyCertificateOutlined,
  RightOutlined,
  HeartOutlined,
  GlobalOutlined,
  EnvironmentOutlined,
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
  height: 450px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url("/images/gemstones/diamond.jpg");
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

const GemstoneCard = styled(Card)`
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
    height: 220px;
    object-fit: cover;
  }

  .ant-card-meta-title {
    font-size: 18px;
    margin-bottom: 8px;
  }

  .gemstone-icon {
    font-size: 24px;
    color: var(--color-primary);
    margin-right: 8px;
  }
`;

const StyledTabs = styled(Tabs)`
  margin: 40px 0;

  .ant-tabs-tab {
    font-size: 16px;
    padding: 12px 20px;
  }

  .ant-tabs-tab-active {
    font-weight: 500;
  }

  .ant-tabs-ink-bar {
    background-color: var(--color-primary);
  }
`;

const GradingSection = styled.div`
  background-color: ${(props) => (props.isDarkMode ? "#1f1f1f" : "#f5f5f5")};
  padding: 40px;
  border-radius: 8px;
  margin: 60px 0;
`;

const GradingItem = styled.div`
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

const GemstoneTag = styled(Tag)`
  margin: 4px;
  padding: 4px 10px;
  font-size: 14px;
  border-radius: 4px;
`;

const Gemstones = () => {
  const { isDarkMode } = useTheme();

  const gemstoneTypes = [
    {
      name: "Diamonds",
      description:
        "The hardest natural substance on Earth, diamonds are prized for their exceptional brilliance and fire. Each diamond is evaluated based on the 4Cs: cut, color, clarity, and carat weight.",
      image: "/images/gemstones/diamond.jpg",
      icon: <StarOutlined className="gemstone-icon" />,
      properties: [
        "Hardness: 10",
        "Refractive Index: 2.42",
        "Dispersion: 0.044",
      ],
      uses: ["Engagement rings", "Wedding bands", "Statement jewelry"],
    },
    {
      name: "Rubies",
      description:
        "Known for their deep red color, rubies are a variety of the mineral corundum. Their vibrant hue comes from chromium, and the finest specimens exhibit a rich, pigeon-blood red color.",
      image: "/images/gemstones/ruby.jpg",
      icon: <FireOutlined className="gemstone-icon" />,
      properties: ["Hardness: 9", "Refractive Index: 1.76-1.78", "Color: Red"],
      uses: ["Anniversary rings", "Statement necklaces", "Royal jewelry"],
    },
    {
      name: "Emeralds",
      description:
        "Emeralds are beryl crystals colored green by trace amounts of chromium and vanadium. Their lush green color symbolizes rebirth and is often associated with spring.",
      image: "/images/gemstones/emerald.jpg",
      icon: <ExperimentOutlined className="gemstone-icon" />,
      properties: [
        "Hardness: 7.5-8",
        "Refractive Index: 1.57-1.58",
        "Color: Green",
      ],
      uses: ["Cocktail rings", "Earrings", "Pendants"],
    },
    {
      name: "Sapphires",
      description:
        "Sapphires are corundum crystals that come in various colors, though blue is most common. They're known for their excellent hardness and durability, making them ideal for everyday wear.",
      image: "/images/gemstones/sapphire.jpg",
      icon: <SafetyCertificateOutlined className="gemstone-icon" />,
      properties: [
        "Hardness: 9",
        "Refractive Index: 1.76-1.78",
        "Colors: Blue, Pink, Yellow, etc.",
      ],
      uses: ["Engagement rings", "Earrings", "Bracelets"],
    },
  ];

  const gradingCriteria = [
    {
      title: "Color",
      description:
        "For diamonds, the color grading ranges from D (colorless) to Z (light yellow or brown). For colored gemstones, we evaluate the hue, tone, and saturation to determine quality.",
      icon: <HeartOutlined />,
    },
    {
      title: "Clarity",
      description:
        "Clarity measures the presence of inclusions and blemishes. For diamonds, the scale ranges from Flawless (no inclusions visible under 10x magnification) to Included (inclusions visible to the naked eye).",
      icon: <ExperimentOutlined />,
    },
    {
      title: "Cut",
      description:
        "Cut refers to how well a gemstone has been shaped and faceted. A well-cut stone reflects light internally and disperses it back through the top, creating maximum brilliance and fire.",
      icon: <StarOutlined />,
    },
    {
      title: "Carat",
      description:
        "Carat is a measure of a gemstone's weight, not size. One carat equals 200 milligrams. While larger stones are typically more valuable, quality factors often outweigh size.",
      icon: <SafetyCertificateOutlined />,
    },
  ];

  const sourcingInfo = [
    {
      region: "Africa",
      gemstones: ["Diamonds", "Emeralds", "Rubies", "Tanzanite"],
      countries: ["Botswana", "South Africa", "Zambia", "Tanzania"],
    },
    {
      region: "Asia",
      gemstones: ["Rubies", "Sapphires", "Jade", "Spinel"],
      countries: ["Myanmar", "Sri Lanka", "Thailand", "Cambodia"],
    },
    {
      region: "South America",
      gemstones: ["Emeralds", "Tourmaline", "Topaz", "Amethyst"],
      countries: ["Colombia", "Brazil", "Peru"],
    },
    {
      region: "North America",
      gemstones: ["Turquoise", "Opal", "Tourmaline", "Jade"],
      countries: ["United States", "Canada", "Mexico"],
    },
    {
      region: "Australia",
      gemstones: ["Opals", "Sapphires", "Diamonds"],
      countries: ["Australia"],
    },
  ];

  return (
    <div>
      <HeroSection>
        <HeroContent>
          <HeroTitle level={1}>Gemstones Collection</HeroTitle>
          <HeroSubtitle>
            Discover the extraordinary gemstones that bring our jewelry to life,
            from brilliant diamonds to vibrant colored stones
          </HeroSubtitle>
          <Button to="/jewelry-manufacturing" size="large">
            Explore Our Manufacturing Process
          </Button>
        </HeroContent>
      </HeroSection>

      <PageContainer>
        <Row gutter={[24, 40]}>
          <Col span={24}>
            <SectionTitle level={2}>Our Premium Gemstones</SectionTitle>
            <Paragraph>
              At Ramavatargems, we source only the finest gemstones from around
              the world. Each stone is carefully selected for its beauty,
              rarity, and quality, ensuring that every piece of jewelry we
              create showcases these natural treasures at their best.
            </Paragraph>
          </Col>

          <Col span={24}>
            <Row gutter={[24, 24]}>
              {gemstoneTypes.map((gemstone, index) => (
                <Col xs={24} sm={12} md={6} key={index}>
                  <GemstoneCard
                    cover={<img alt={gemstone.name} src={gemstone.image} />}
                  >
                    <Card.Meta
                      title={
                        <span>
                          {gemstone.icon} {gemstone.name}
                        </span>
                      }
                      description={gemstone.description}
                    />
                    <Divider style={{ margin: "16px 0" }} />
                    <Space direction="vertical" size="small">
                      <Text strong>Properties:</Text>
                      <div>
                        {gemstone.properties.map((property, i) => (
                          <GemstoneTag key={i} color="blue">
                            {property}
                          </GemstoneTag>
                        ))}
                      </div>
                      <Text strong style={{ marginTop: 8 }}>
                        Common Uses:
                      </Text>
                      <div>
                        {gemstone.uses.map((use, i) => (
                          <GemstoneTag key={i} color="green">
                            {use}
                          </GemstoneTag>
                        ))}
                      </div>
                    </Space>
                  </GemstoneCard>
                </Col>
              ))}
            </Row>
          </Col>

          <Col span={24}>
            <Divider />
          </Col>

          <Col span={24}>
            <SectionTitle level={2}>Gemstone Grading Criteria</SectionTitle>
            <Paragraph>
              The value and beauty of a gemstone are determined by several key
              factors. Understanding these criteria helps appreciate the quality
              and characteristics that make each stone unique.
            </Paragraph>

            <GradingSection isDarkMode={isDarkMode}>
              <Row gutter={[24, 24]}>
                {gradingCriteria.map((criteria, index) => (
                  <Col xs={24} sm={12} key={index}>
                    <GradingItem>
                      <div className="title">
                        <span className="icon">{criteria.icon}</span>
                        {criteria.title}
                      </div>
                      <Paragraph>{criteria.description}</Paragraph>
                    </GradingItem>
                  </Col>
                ))}
              </Row>
            </GradingSection>
          </Col>

          <Col span={24}>
            <SectionTitle level={2}>Ethical Sourcing</SectionTitle>
            <Paragraph>
              At Ramavatargems, we are committed to ethical sourcing practices.
              We work only with suppliers who adhere to responsible mining
              standards and follow the Kimberley Process for diamonds. Our
              gemstones come from mines that prioritize environmental
              sustainability and fair labor practices.
            </Paragraph>

            <Row gutter={[24, 24]} style={{ marginTop: 32 }}>
              <Col xs={24} md={12}>
                <Title level={3}>Our Sourcing Principles</Title>
                <List
                  itemLayout="horizontal"
                  dataSource={[
                    {
                      title: "Conflict-Free Guarantee",
                      description:
                        "All our diamonds are certified conflict-free and comply with the Kimberley Process.",
                      icon: <SafetyCertificateOutlined />,
                    },
                    {
                      title: "Environmental Responsibility",
                      description:
                        "We partner with mines that implement environmentally responsible practices.",
                      icon: <GlobalOutlined />,
                    },
                    {
                      title: "Fair Labor Practices",
                      description:
                        "We ensure that all gemstones come from sources that maintain fair and safe working conditions.",
                      icon: <HeartOutlined />,
                    },
                    {
                      title: "Transparency",
                      description:
                        "We maintain complete transparency about the origin of our gemstones.",
                      icon: <EnvironmentOutlined />,
                    },
                  ]}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <div
                            style={{
                              color: "var(--color-primary)",
                              fontSize: "24px",
                              marginRight: "16px",
                            }}
                          >
                            {item.icon}
                          </div>
                        }
                        title={<Text strong>{item.title}</Text>}
                        description={item.description}
                      />
                    </List.Item>
                  )}
                />
              </Col>

              <Col xs={24} md={12}>
                <Title level={3}>Sourcing Regions</Title>
                <List
                  itemLayout="horizontal"
                  dataSource={sourcingInfo}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        title={<Text strong>{item.region}</Text>}
                        description={
                          <>
                            <div style={{ marginBottom: 8 }}>
                              <Text type="secondary">Countries: </Text>
                              {item.countries.join(", ")}
                            </div>
                            <div>
                              <Text type="secondary">Gemstones: </Text>
                              {item.gemstones.map((gem, i) => (
                                <GemstoneTag key={i} color="purple">
                                  {gem}
                                </GemstoneTag>
                              ))}
                            </div>
                          </>
                        }
                      />
                    </List.Item>
                  )}
                />
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Divider />
          </Col>

          <Col span={24}>
            <SectionTitle level={2}>Gemstones in Jewelry Design</SectionTitle>
            <Paragraph>
              Gemstones are the heart of jewelry design, adding color,
              brilliance, and meaning to each piece. Different stones evoke
              different emotions and suit various styles, from classic elegance
              to bold contemporary statements.
            </Paragraph>

            <Row gutter={[24, 24]} style={{ marginTop: 32 }}>
              <Col xs={24} md={8}>
                <Card
                  cover={
                    <img
                      alt="Diamond engagement ring"
                      src="/images/rings/ring1.jpg"
                      style={{ height: 250, objectFit: "cover" }}
                    />
                  }
                  hoverable
                >
                  <Card.Meta
                    title="Classic Diamond Solitaire"
                    description="The timeless elegance of a diamond solitaire represents enduring love and commitment, making it the perfect choice for engagement rings."
                  />
                </Card>
              </Col>

              <Col xs={24} md={8}>
                <Card
                  cover={
                    <img
                      alt="Ruby and diamond necklace"
                      src="/images/rings/ring2.jpg"
                      style={{ height: 250, objectFit: "cover" }}
                    />
                  }
                  hoverable
                >
                  <Card.Meta
                    title="Vibrant Ruby Accents"
                    description="Rubies add passion and warmth to jewelry designs, creating striking contrast when paired with diamonds or white metals."
                  />
                </Card>
              </Col>

              <Col xs={24} md={8}>
                <Card
                  cover={
                    <img
                      alt="Sapphire earrings"
                      src="/images/rings/ring3.jpg"
                      style={{ height: 250, objectFit: "cover" }}
                    />
                  }
                  hoverable
                >
                  <Card.Meta
                    title="Sapphire Sophistication"
                    description="Sapphires bring a regal quality to jewelry, with their deep blue hues evoking feelings of wisdom, loyalty, and nobility."
                  />
                </Card>
              </Col>
            </Row>

            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Button to="/collection" size="large">
                Explore Our Jewelry Collection <RightOutlined />
              </Button>
            </div>
          </Col>
        </Row>
      </PageContainer>
    </div>
  );
};

export default Gemstones;
