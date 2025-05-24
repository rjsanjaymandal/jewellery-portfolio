import React from "react";
import {
  Typography,
  Row,
  Col,
  Card,
  Timeline,
  Image,
  Collapse,
  Tag,
  Space,
} from "antd";
import {
  ToolOutlined,
  FireOutlined,
  ExperimentOutlined,
  StarOutlined,
  TrophyOutlined,
  RightOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import Button from "../components/Button";

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

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
    url("https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80");
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

const TechniqueCard = styled(Card)`
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

  .technique-icon {
    font-size: 24px;
    color: var(--color-primary);
    margin-right: 8px;
  }
`;

const StyledTimeline = styled(Timeline)`
  margin: 40px 0;

  .ant-timeline-item-head {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
  }

  .ant-timeline-item-content {
    padding-bottom: 24px;
  }

  .timeline-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }
`;

const StyledCollapse = styled(Collapse)`
  margin-top: 40px;
  background-color: ${(props) => (props.isDarkMode ? "#1f1f1f" : "white")};
  border-radius: 8px;
  overflow: hidden;

  .ant-collapse-header {
    font-size: 16px;
    font-weight: 500;
    padding: 16px 24px !important;
  }

  .ant-collapse-content-box {
    padding: 16px 24px 24px !important;
  }

  .ant-collapse-arrow {
    color: var(--color-primary) !important;
  }
`;

const AwardSection = styled.div`
  background-color: ${(props) => (props.isDarkMode ? "#1f1f1f" : "#f5f5f5")};
  padding: 40px;
  border-radius: 8px;
  margin: 60px 0 40px;
`;

const AwardItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;

  .award-icon {
    font-size: 24px;
    color: var(--color-primary);
    margin-right: 16px;
    margin-top: 4px;
  }

  .award-content {
    flex: 1;
  }

  .award-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .award-year {
    display: inline-block;
    background-color: var(--color-primary);
    color: white;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 14px;
    margin-left: 8px;
  }
`;

const Craftsmanship = () => {
  const { isDarkMode } = useTheme();

  const cuttingTechniques = [
    {
      title: "Brilliant Cut",
      description:
        "The most popular diamond cut with 57 or 58 facets designed to maximize brilliance and fire.",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: <StarOutlined className="technique-icon" />,
    },
    {
      title: "Step Cut",
      description:
        "Features rectangular facets that run parallel to the girdle, creating a hall-of-mirrors effect.",
      image:
        "https://images.unsplash.com/photo-1615810417181-d6e3f7991ef3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: <ExperimentOutlined className="technique-icon" />,
    },
    {
      title: "Rose Cut",
      description:
        "A vintage cut with a flat bottom and dome-shaped crown, resembling the petals of a rose.",
      image:
        "https://images.unsplash.com/photo-1573500883495-6c9b16d88d8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: <FireOutlined className="technique-icon" />,
    },
  ];

  const craftEvolution = [
    {
      year: "1982",
      title: "Traditional Hand Cutting",
      content:
        "When we started, all diamonds were cut by hand using traditional tools and techniques passed down through generations.",
    },
    {
      year: "1995",
      title: "Introduction of Laser Technology",
      content:
        "We integrated laser cutting technology to improve precision while maintaining the artisanal quality of our work.",
    },
    {
      year: "2005",
      title: "3D Scanning & Analysis",
      content:
        "Advanced 3D scanning technology was introduced to analyze rough diamonds and optimize cutting plans.",
    },
    {
      year: "2015",
      title: "Automated Polishing Systems",
      content:
        "We implemented automated polishing systems for consistent quality while preserving hand-finishing for critical facets.",
    },
    {
      year: "Present",
      title: "Blending Tradition & Technology",
      content:
        "Today, we combine cutting-edge technology with traditional craftsmanship to create diamonds of exceptional quality.",
    },
  ];

  const craftFAQs = [
    {
      question: "What makes a diamond cut 'excellent'?",
      answer:
        "An excellent cut diamond has ideal proportions that maximize light return, creating optimal brilliance, fire, and scintillation. Our master cutters consider factors like table percentage, crown angle, pavilion depth, and symmetry to achieve this perfect balance.",
    },
    {
      question: "How long does it take to cut and polish a diamond?",
      answer:
        "The process can take anywhere from several days to several weeks depending on the size, complexity, and desired cut. A 1-carat diamond typically requires 4-7 days of work by our skilled craftsmen to complete all stages from planning to final polishing.",
    },
    {
      question: "What tools are used in diamond cutting?",
      answer:
        "We use a combination of traditional and modern tools including diamond-impregnated cutting discs, laser cutters, polishing wheels, and specialized microscopes. Each craftsman also has custom-made hand tools that they've perfected over years of practice.",
    },
    {
      question: "How do you determine how to cut a rough diamond?",
      answer:
        "We use advanced 3D scanning technology to map the internal structure of each rough diamond, identifying inclusions and grain patterns. Our planning experts then use specialized software to model different cutting options, optimizing for maximum value while respecting the diamond's natural characteristics.",
    },
  ];

  const awards = [
    {
      title: "Excellence in Diamond Craftsmanship",
      organization: "International Diamond Council",
      year: "2018",
      description:
        "Recognized for exceptional skill in diamond cutting and polishing techniques.",
    },
    {
      title: "Master Craftsman Certification",
      organization: "Gemological Institute of India",
      year: "2015",
      description:
        "Awarded to our senior craftsmen for maintaining the highest standards of diamond manufacturing.",
    },
    {
      title: "Innovation in Traditional Crafts",
      organization: "Rajasthan Heritage Conservation Society",
      year: "2012",
      description:
        "Honored for successfully blending traditional techniques with modern technology.",
    },
  ];

  return (
    <div>
      <HeroSection>
        <HeroContent>
          <HeroTitle level={1}>Diamond Craftsmanship</HeroTitle>
          <HeroSubtitle>
            Discover the artistry, precision, and tradition behind our diamond
            cutting and polishing
          </HeroSubtitle>
          <Button to="/manufacturing" size="large">
            Explore Our Process
          </Button>
        </HeroContent>
      </HeroSection>

      <PageContainer>
        <Row gutter={[24, 40]}>
          <Col span={24}>
            <SectionTitle level={2}>The Art of Diamond Cutting</SectionTitle>
            <Paragraph>
              Diamond cutting is both an art and a science, requiring years of
              training and exceptional skill. At Ramavatargems, our craftsmen
              combine traditional techniques passed down through generations
              with modern technology to create diamonds of extraordinary beauty.
            </Paragraph>
            <Paragraph>
              Each diamond presents unique challenges and opportunities. Our
              master cutters study each rough stone carefully, considering its
              natural characteristics to determine the optimal approach that
              will reveal its inner beauty and brilliance.
            </Paragraph>
          </Col>

          <Col span={24}>
            <Row gutter={[24, 24]}>
              {cuttingTechniques.map((technique, index) => (
                <Col xs={24} sm={12} md={8} key={index}>
                  <TechniqueCard
                    cover={<img alt={technique.title} src={technique.image} />}
                  >
                    <Card.Meta
                      title={
                        <span>
                          {technique.icon} {technique.title}
                        </span>
                      }
                      description={technique.description}
                    />
                  </TechniqueCard>
                </Col>
              ))}
            </Row>
          </Col>

          <Col span={24}>
            <SectionTitle level={2}>Evolution of Our Craft</SectionTitle>
            <Paragraph>
              Since our founding in 1982, we have continuously evolved our
              craftsmanship, embracing new technologies while preserving the
              traditional techniques that form the foundation of our work.
            </Paragraph>

            <StyledTimeline mode="left">
              {craftEvolution.map((item, index) => (
                <Timeline.Item key={index} label={item.year}>
                  <div className="timeline-title">{item.title}</div>
                  <Paragraph>{item.content}</Paragraph>
                </Timeline.Item>
              ))}
            </StyledTimeline>
          </Col>

          <Col span={24}>
            <Row gutter={[24, 24]} align="middle">
              <Col xs={24} md={12}>
                <Title level={3}>The Human Touch</Title>
                <Paragraph>
                  Despite technological advances, the human element remains
                  irreplaceable in diamond craftsmanship. Our master cutters
                  bring decades of experience and an intuitive understanding of
                  diamonds that no machine can replicate.
                </Paragraph>
                <Paragraph>
                  Each craftsman develops a unique relationship with the
                  diamonds they work on, making subtle adjustments based on the
                  stone's individual characteristics. This personal touch is
                  what elevates our diamonds from merely well-cut stones to true
                  works of art.
                </Paragraph>
              </Col>
              <Col xs={24} md={12}>
                <Image
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Master craftsman at work"
                  style={{ borderRadius: "8px" }}
                />
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <AwardSection isDarkMode={isDarkMode}>
              <Title level={3}>Recognition & Awards</Title>
              <Space
                direction="vertical"
                size="large"
                style={{ width: "100%" }}
              >
                {awards.map((award, index) => (
                  <AwardItem key={index}>
                    <TrophyOutlined className="award-icon" />
                    <div className="award-content">
                      <div className="award-title">
                        {award.title}
                        <span className="award-year">{award.year}</span>
                      </div>
                      <Text strong>{award.organization}</Text>
                      <Paragraph style={{ marginTop: 8 }}>
                        {award.description}
                      </Paragraph>
                    </div>
                  </AwardItem>
                ))}
              </Space>
            </AwardSection>
          </Col>

          <Col span={24}>
            <SectionTitle level={2}>Artisanal Jewelry Traditions</SectionTitle>
            <Paragraph>
              Beyond our diamond craftsmanship, we also celebrate traditional
              artisanal jewelry techniques that have been perfected over
              centuries. These intricate methods create pieces with cultural
              significance and unparalleled beauty.
            </Paragraph>

            <Row gutter={[24, 40]} style={{ marginTop: 32 }}>
              <Col xs={24} md={8}>
                <Card
                  cover={
                    <img
                      alt="Meenakari jewelry"
                      src="/images/artisanal_jewelry/meenakari.jpg"
                      style={{ height: 250, objectFit: "cover" }}
                    />
                  }
                  hoverable
                >
                  <Card.Meta
                    title="Meenakari"
                    description="An ancient enameling technique where vibrant colors are applied to the surface of metal. Each piece requires multiple firings to achieve the rich, glossy finish characteristic of this art form."
                  />
                  <div style={{ marginTop: 16 }}>
                    <Text type="secondary">Origin: Rajasthan, India</Text>
                    <br />
                    <Text type="secondary">Materials: Gold, enamel colors</Text>
                  </div>
                </Card>
              </Col>

              <Col xs={24} md={8}>
                <Card
                  cover={
                    <img
                      alt="Kundan jewelry"
                      src="/images/artisanal_jewelry/kundan.jpg"
                      style={{ height: 250, objectFit: "cover" }}
                    />
                  }
                  hoverable
                >
                  <Card.Meta
                    title="Kundan"
                    description="A traditional form of Indian gemstone jewelry involving the setting of precious stones in gold foil. This technique creates a distinctive, luxurious appearance with a smooth, seamless finish."
                  />
                  <div style={{ marginTop: 16 }}>
                    <Text type="secondary">
                      Origin: Rajasthan and Gujarat, India
                    </Text>
                    <br />
                    <Text type="secondary">
                      Materials: Gold foil, gemstones, glass
                    </Text>
                  </div>
                </Card>
              </Col>

              <Col xs={24} md={8}>
                <Card
                  cover={
                    <img
                      alt="Filigree jewelry"
                      src="/images/artisanal_jewelry/filigree.jpg"
                      style={{ height: 250, objectFit: "cover" }}
                    />
                  }
                  hoverable
                >
                  <Card.Meta
                    title="Filigree"
                    description="An intricate metalworking technique where thin threads of gold or silver are twisted and curled into delicate patterns. The resulting lace-like appearance creates jewelry of extraordinary delicacy and beauty."
                  />
                  <div style={{ marginTop: 16 }}>
                    <Text type="secondary">
                      Origin: Global tradition with strong roots in
                      Mediterranean cultures
                    </Text>
                    <br />
                    <Text type="secondary">Materials: Gold or silver wire</Text>
                  </div>
                </Card>
              </Col>
            </Row>

            <div style={{ marginTop: 40 }}>
              <Title level={3}>Cultural Significance</Title>
              <Paragraph>
                These artisanal techniques are more than just methods of
                creating beautiful jewelry—they represent cultural heritage and
                artistic traditions passed down through generations. Each
                technique tells a story of its region of origin and carries
                symbolic meanings.
              </Paragraph>
              <Paragraph>
                At Ramavatargems, we work with master artisans who have spent
                decades perfecting these traditional techniques. By
                incorporating these methods into our contemporary designs, we
                create pieces that honor cultural heritage while appealing to
                modern aesthetics.
              </Paragraph>
              <Paragraph>
                The intricate patterns and motifs used in these techniques often
                have symbolic significance, representing prosperity, protection,
                or spiritual beliefs. Understanding these meanings adds another
                dimension to the appreciation of these exquisite pieces.
              </Paragraph>
            </div>
          </Col>

          <Col span={24}>
            <Divider />
          </Col>

          <Col span={24}>
            <SectionTitle level={2}>Jewelry Design Sketches</SectionTitle>
            <Paragraph>
              Every masterpiece begins with a vision captured on paper. Our
              design process starts with detailed sketches that explore form,
              proportion, and the interplay of gemstones and metals.
            </Paragraph>

            <Row gutter={[24, 24]} style={{ marginTop: 32 }}>
              <Col xs={24} md={12}>
                <Image
                  src="/images/sketches/ring_sketch.jpg"
                  alt="Ring design sketch"
                  style={{ borderRadius: "8px" }}
                />
                <div style={{ marginTop: 16 }}>
                  <Title level={4}>Diamond Solitaire Ring Design</Title>
                  <Paragraph>
                    This sketch explores the classic elegance of a diamond
                    solitaire ring. The designer has focused on creating a
                    setting that maximizes the stone's brilliance while
                    maintaining a timeless silhouette. The proportions are
                    carefully calculated to ensure comfort and durability.
                  </Paragraph>
                  <Paragraph>
                    <Text strong>Materials:</Text> Platinum band with 18K gold
                    prongs, 1.5-carat round brilliant diamond
                  </Paragraph>
                  <Paragraph>
                    <Text strong>Manufacturing Technique:</Text> Lost wax
                    casting with hand-finished prongs and pavé setting
                  </Paragraph>
                </div>
              </Col>

              <Col xs={24} md={12}>
                <Image
                  src="/images/sketches/necklace_sketch.jpg"
                  alt="Necklace design sketch"
                  style={{ borderRadius: "8px" }}
                />
                <div style={{ marginTop: 16 }}>
                  <Title level={4}>Sapphire and Diamond Necklace</Title>
                  <Paragraph>
                    This design concept features a graduated sapphire and
                    diamond necklace. The sketch explores the rhythm and flow of
                    the piece, ensuring that it drapes elegantly around the
                    neck. The alternating pattern of gemstones creates visual
                    interest and balance.
                  </Paragraph>
                  <Paragraph>
                    <Text strong>Materials:</Text> 18K white gold, blue
                    sapphires (total 10 carats), round brilliant diamonds (total
                    5 carats)
                  </Paragraph>
                  <Paragraph>
                    <Text strong>Manufacturing Technique:</Text> Individual link
                    construction with articulated connections for flexibility
                    and comfort
                  </Paragraph>
                </div>
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Divider />
          </Col>

          <Col span={24}>
            <SectionTitle level={2}>Craftsmanship FAQ</SectionTitle>
            <StyledCollapse isDarkMode={isDarkMode}>
              {craftFAQs.map((faq, index) => (
                <Panel header={faq.question} key={index + 1}>
                  <Paragraph>{faq.answer}</Paragraph>
                </Panel>
              ))}
            </StyledCollapse>
          </Col>
        </Row>
      </PageContainer>
    </div>
  );
};

export default Craftsmanship;
