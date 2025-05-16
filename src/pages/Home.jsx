import React from "react";
import { Typography, Space, Card, Row, Col, Carousel } from "antd";
import {
  RightOutlined,
  HistoryOutlined,
  CrownOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import Button from "../components/Button.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

const { Title, Text, Paragraph } = Typography;

// Hero Section
const HeroSection = styled.section`
  height: 90vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 var(--spacing-sm);
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Featured Section
const FeaturedSection = styled.section`
  padding: var(--spacing-xl) 0;
  background-color: var(--color-background-alt);
`;

const FeaturedContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-sm);
`;

const StyledCard = styled(Card)`
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;

  .ant-card-cover {
    height: 250px;
    overflow: hidden;

    img {
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }

  .ant-card-body {
    text-align: center;
    padding: var(--spacing-md);
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);

    .ant-card-cover img {
      transform: scale(1.05);
    }
  }
`;

const CardTitle = styled(Title)`
  font-size: 1.5rem !important;
  margin-bottom: 0.5rem !important;
`;

const CardDescription = styled(Paragraph)`
  color: var(--color-text-light);
  margin-bottom: var(--spacing-sm) !important;
`;

// Testimonial Section
const TestimonialSection = styled.section`
  padding: var(--spacing-xl) 0;
  background-color: var(--color-background);
`;

const TestimonialContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-sm);
  text-align: center;
`;

const StyledCarousel = styled(Carousel)`
  .slick-dots li button {
    background: var(--color-primary) !important;
  }

  .slick-dots li.slick-active button {
    background: var(--color-primary) !important;
  }
`;

const TestimonialCard = styled.div`
  padding: var(--spacing-md) var(--spacing-lg);
  position: relative;
`;

const QuoteIcon = styled.div`
  font-size: 4rem;
  color: var(--color-primary-light);
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
`;

const TestimonialQuote = styled(Paragraph)`
  font-size: 1.5rem !important;
  font-style: italic;
  color: var(--color-text);
  margin: var(--spacing-md) 0 !important;
  position: relative;
  z-index: 1;
`;

const TestimonialAuthor = styled(Text)`
  font-weight: 600 !important;
  color: var(--color-secondary) !important;
  font-size: 1.1rem !important;
`;

const Home = () => {
  const testimonials = [
    {
      quote:
        "The craftsmanship and attention to detail in every piece from Ramavatargems is truly exceptional. Their traditional designs with modern touches are exactly what I was looking for.",
      author: "Priya Sharma, Delhi",
    },
    {
      quote:
        "I've been a loyal customer of Ramavatargems for over a decade. Their jewelry pieces are timeless and the quality is unmatched.",
      author: "Rajat Mehta, Mumbai",
    },
    {
      quote:
        "The gemstone collection at Ramavatargems is absolutely stunning. Each piece tells a story of Jaipur's rich heritage and craftsmanship.",
      author: "Ananya Kapoor, Bangalore",
    },
  ];

  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Crafting Elegance Since 1982</HeroTitle>
          <HeroSubtitle>
            Discover our exquisite collection of handcrafted jewelry from
            Jaipur's premier artisans
          </HeroSubtitle>
          <ButtonGroup>
            <Button to="/collection" size="large">
              Explore Collection
            </Button>
            <Button to="/about" variant="outline" size="large">
              Our Legacy
            </Button>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>

      <FeaturedSection>
        <SectionTitle
          title="Our Signature Collections"
          subtitle="Discover our most coveted pieces, each telling a story of heritage and craftsmanship"
        />
        <FeaturedContainer>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={24} md={8}>
              <StyledCard
                hoverable
                cover={
                  <img
                    alt="Traditional Jewelry"
                    src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  />
                }
              >
                <CardTitle level={4}>Traditional Jewelry</CardTitle>
                <CardDescription>
                  Timeless designs inspired by royal heritage
                </CardDescription>
                <Button to="/collection" variant="outline" size="small">
                  View Collection <RightOutlined />
                </Button>
              </StyledCard>
            </Col>

            <Col xs={24} sm={24} md={8}>
              <StyledCard
                hoverable
                cover={
                  <img
                    alt="Gemstone Treasures"
                    src="https://images.unsplash.com/photo-1589674781759-c21c37956a44?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  />
                }
              >
                <CardTitle level={4}>Gemstone Treasures</CardTitle>
                <CardDescription>
                  Vibrant gemstones set in exquisite designs
                </CardDescription>
                <Button to="/collection" variant="outline" size="small">
                  View Collection <RightOutlined />
                </Button>
              </StyledCard>
            </Col>

            <Col xs={24} sm={24} md={8}>
              <StyledCard
                hoverable
                cover={
                  <img
                    alt="Diamond Elegance"
                    src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  />
                }
              >
                <CardTitle level={4}>Diamond Elegance</CardTitle>
                <CardDescription>
                  Brilliant diamonds crafted with precision
                </CardDescription>
                <Button to="/collection" variant="outline" size="small">
                  View Collection <RightOutlined />
                </Button>
              </StyledCard>
            </Col>
          </Row>
        </FeaturedContainer>
      </FeaturedSection>

      <TestimonialSection>
        <TestimonialContainer>
          <SectionTitle
            title="Client Testimonials"
            subtitle="What our valued clients say about our craftsmanship"
          />
          <StyledCarousel autoplay dots effect="fade">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index}>
                <QuoteIcon>"</QuoteIcon>
                <TestimonialQuote>{testimonial.quote}</TestimonialQuote>
                <TestimonialAuthor>— {testimonial.author}</TestimonialAuthor>
              </TestimonialCard>
            ))}
          </StyledCarousel>
        </TestimonialContainer>
      </TestimonialSection>
    </>
  );
};

export default Home;
