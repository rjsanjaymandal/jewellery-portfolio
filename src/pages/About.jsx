import React from "react";
import { Typography, Space } from "antd";
import styled, { keyframes } from "styled-components";
import SectionTitle from "../components/SectionTitle.jsx";
import Button from "../components/Button.jsx";
import RamavatargemsLogo from "../components/logo/RamavatargemsLogo";
import { useTheme } from "../context/ThemeContext";

const { Title, Text, Paragraph } = Typography;

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components - Matching Home Page
const PageContainer = styled.div`
  overflow: hidden;
`;

const Section = styled.section`
  padding: var(--spacing-16) 0;
  position: relative;

  @media (max-width: 768px) {
    padding: var(--spacing-8) 0;
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  position: relative;
  z-index: 2;
`;

// Hero Section - Matching Home Page
const HeroSection = styled(Section)`
  height: 70vh;
  max-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  overflow: hidden;
  background-color: var(--color-primary);
  position: relative;

  @media (max-width: 768px) {
    height: 60vh;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.7) contrast(1.1) grayscale(0.2);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  > * {
    animation: ${fadeIn} 0.8s ease-out forwards;
    opacity: 0;
  }

  > *:nth-child(1) {
    animation-delay: 0.3s;
  }

  > *:nth-child(2) {
    animation-delay: 0.6s;
  }

  > *:nth-child(3) {
    animation-delay: 0.9s;
  }
`;

const HeroLogo = styled.div`
  margin-bottom: var(--spacing-6);
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));

  svg {
    width: 220px;
    height: auto;
  }
`;

const HeroTitle = styled(Title)`
  color: white !important;
  font-size: 3.2rem !important;
  font-weight: 700 !important;
  margin-bottom: var(--spacing-4) !important;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  span {
    color: var(--color-secondary) !important;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem !important;
  }

  @media (max-width: 480px) {
    font-size: 2rem !important;
  }
`;

const HeroSubtitle = styled(Text)`
  display: block;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--spacing-8);
  max-width: 800px;
  font-family: var(--font-accent);
  font-weight: 500;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

// Story Section - Matching Home Page About Section
const StorySection = styled(Section)`
  background-color: var(--color-background);
  position: relative;
  overflow: hidden;
`;

const StoryContent = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
  position: relative;
  z-index: 1;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const StoryText = styled.div`
  flex: 1;

  h3 {
    margin-bottom: var(--spacing-md);
    color: var(--color-secondary);
    font-size: 1.8rem;
    font-weight: 700;
    position: relative;
    padding-bottom: 15px;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 3px;
      background: var(--gradient-gold);
      border-radius: 3px;
    }
  }

  p {
    margin-bottom: var(--spacing-md);
    line-height: 1.8;
    font-size: 1.05rem;
    color: var(--color-text);
  }

  button {
    margin-top: var(--spacing-md);
  }
`;

const StoryImageContainer = styled.div`
  flex: 1;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  position: relative;
  height: 500px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid var(--color-secondary);
    border-radius: var(--border-radius-md);
    pointer-events: none;
    z-index: 1;
    opacity: 0.3;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 350px;
    margin-bottom: var(--spacing-md);
  }
`;

// Timeline Section - Elegant Design
const TimelineSection = styled(Section)`
  background: linear-gradient(135deg, #2c3e50 0%, #1a1a2e 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("/images/high-quality/diamond_inspection_hq.jpg");
    background-size: cover;
    background-position: center;
    opacity: 0.15;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: 0;
  }
`;

const Timeline = styled.div`
  max-width: 1000px;
  margin: 60px auto 0;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 6px;
    background: var(--gradient-gold);
    transform: translateX(-50%);
    border-radius: 6px;
    box-shadow: 0 0 25px rgba(212, 175, 55, 0.5);
    opacity: 0.9;

    @media (max-width: 768px) {
      left: 30px;
      width: 4px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-16);
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 60px;
    margin-bottom: var(--spacing-12);
  }
`;

const TimelineContent = styled.div`
  width: 45%;
  padding: var(--spacing-6);
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: var(--border-radius-md);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.4s ease;
  backdrop-filter: blur(5px);

  p {
    color: var(--color-text);
    line-height: 1.7;
    font-size: 1.05rem;
    margin-bottom: 0;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.98);
  }

  &::before {
    content: "";
    position: absolute;
    top: 20px;
    width: 30px;
    height: 30px;
    background: var(--gradient-gold);
    border-radius: 50%;
    border: 4px solid white;
    box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.3), 0 5px 15px rgba(0, 0, 0, 0.2);
    z-index: 2;

    ${({ position }) =>
      position === "left"
        ? `
      right: -48px;
    `
        : `
      left: -48px;
    `}

    @media (max-width: 768px) {
      left: -60px;
      width: 26px;
      height: 26px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 25px;
    width: 20px;
    height: 20px;
    background-color: var(--color-primary);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    z-index: 1;

    ${({ position }) =>
      position === "left"
        ? `
      right: -20px;
      transform: rotate(-90deg);
    `
        : `
      left: -20px;
      transform: rotate(90deg);
    `}

    @media (max-width: 768px) {
      left: -20px;
      transform: rotate(90deg);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TimelineYear = styled.div`
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-secondary);
  margin-bottom: 0.75rem;
  display: inline-block;
  background: var(--gradient-gold);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--gradient-gold);
    border-radius: 3px;
  }
`;

const TimelineTitle = styled.h3`
  margin: 1rem 0;
  font-size: 1.4rem;
  color: var(--color-primary);
  font-weight: 600;
  letter-spacing: 0.5px;
`;

// Values Section - Matching Home Page Features Section
const ValuesSection = styled(Section)`
  background-color: var(--color-background-alt);
  position: relative;
  overflow: hidden;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 0 var(--spacing-4);
  position: relative;
  z-index: 1;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const ValueCard = styled.div`
  height: 100%;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background-color: rgba(255, 255, 255, 0.98);
  padding: var(--spacing-8) var(--spacing-6) var(--spacing-6);
  text-align: center;
  position: relative;

  p {
    color: var(--color-text);
    line-height: 1.7;
    font-size: 1.05rem;
    margin-bottom: 0;
    font-weight: 500;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: var(--gradient-gold);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--gradient-gold);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    background-color: white;

    &::before {
      opacity: 1;
    }

    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }

    p {
      color: var(--color-text);
    }
  }
`;

const ValueIcon = styled.div`
  font-size: 2.8rem;
  color: var(--color-primary);
  background: linear-gradient(135deg, var(--color-secondary) 0%, #e0c088 100%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-6);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.8);
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 50%
    );
    pointer-events: none;
  }

  .anticon {
    filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.2));
  }
`;

const ValueTitle = styled.h3`
  margin-bottom: 1.25rem;
  font-size: 1.4rem;
  color: var(--color-primary);
  font-family: var(--font-heading);
  font-weight: 700;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: var(--gradient-gold);
    border-radius: 2px;
  }
`;

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection id="about-hero">
        <HeroBackground>
          <img
            src="/images/high-quality/diamond_cutting_hq.jpg"
            alt="Diamond manufacturing process"
          />
        </HeroBackground>

        <HeroContent>
          <HeroLogo>
            <RamavatargemsLogo width={220} />
          </HeroLogo>

          <HeroTitle level={1}>
            Our <span>Story</span> & Heritage
          </HeroTitle>

          <HeroSubtitle>
            A legacy of diamond manufacturing excellence and precision
            craftsmanship since 1982
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      {/* Story Section */}
      <StorySection id="our-story">
        <Container>
          <SectionTitle level={2} style={{ marginBottom: "var(--spacing-6)" }}>
            A Heritage of <span>Excellence</span>
          </SectionTitle>

          <StoryContent>
            <StoryText>
              <h3>A Heritage of Diamond Manufacturing Excellence</h3>
              <p>
                Established in 1982 in the heart of Jaipur, Ramavatargems began
                as a specialized diamond manufacturing workshop dedicated to the
                art of transforming rough diamonds into brilliant masterpieces.
              </p>
              <p>
                For over four decades, we have been perfecting the craft of
                diamond cutting, polishing, and finishing. Our master craftsmen,
                many of whom have been with us for generations, bring decades of
                expertise to each diamond they work on.
              </p>
              <p>
                Today, we continue to honor our heritage while embracing
                cutting-edge technology that enhances our traditional
                techniques. Every diamond that passes through our workshop
                carries the legacy of Jaipur's rich diamond manufacturing
                tradition.
              </p>
              <Button to="/manufacturing">
                Explore Our Manufacturing Process
              </Button>
            </StoryText>

            <StoryImageContainer>
              <img
                src="/images/high-quality/diamond_workshop_hq.jpg"
                alt="Diamond workshop"
              />
            </StoryImageContainer>
          </StoryContent>
        </Container>
      </StorySection>

      {/* Timeline Section */}
      <TimelineSection id="our-journey">
        <Container>
          <div style={{ position: "relative", zIndex: 1 }}>
            <Title
              level={2}
              style={{
                textAlign: "center",
                color: "white",
                marginBottom: "var(--spacing-4)",
                fontSize: "2.8rem",
                fontWeight: "700",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              Our{" "}
              <span style={{ color: "var(--color-secondary)" }}>Journey</span>{" "}
              Through Time
            </Title>

            <div
              style={{
                width: "80px",
                height: "3px",
                background: "var(--gradient-gold)",
                margin: "0 auto var(--spacing-6)",
                borderRadius: "3px",
                boxShadow: "0 2px 10px rgba(212, 175, 55, 0.3)",
              }}
            />

            <Text
              style={{
                display: "block",
                textAlign: "center",
                fontSize: "1.3rem",
                color: "rgba(255, 255, 255, 0.95)",
                marginBottom: "var(--spacing-10)",
                maxWidth: "800px",
                marginLeft: "auto",
                marginRight: "auto",
                fontFamily: "var(--font-accent)",
                fontWeight: "500",
                textShadow: "0 2px 5px rgba(0, 0, 0, 0.4)",
                lineHeight: "1.6",
                background: "rgba(255, 255, 255, 0.1)",
                padding: "15px 25px",
                borderRadius: "var(--border-radius-md)",
                backdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              }}
            >
              Key milestones in our four-decade legacy of diamond manufacturing
              excellence and craftsmanship
            </Text>
          </div>

          <Timeline>
            <TimelineItem>
              <TimelineContent position="left">
                <TimelineYear>1982</TimelineYear>
                <TimelineTitle>Our Founding</TimelineTitle>
                <p>
                  Established in Jaipur by master diamond craftsman Rajendra
                  Sharma with a vision to perfect the art of diamond
                  manufacturing.
                </p>
              </TimelineContent>
              <div style={{ width: "45%" }}></div>
            </TimelineItem>

            <TimelineItem>
              <div style={{ width: "45%" }}></div>
              <TimelineContent position="right">
                <TimelineYear>1995</TimelineYear>
                <TimelineTitle>Technological Advancement</TimelineTitle>
                <p>
                  Integrated laser cutting technology into our workshop,
                  enhancing precision while maintaining our commitment to
                  traditional craftsmanship.
                </p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent position="left">
                <TimelineYear>2005</TimelineYear>
                <TimelineTitle>3D Scanning Innovation</TimelineTitle>
                <p>
                  Implemented advanced 3D scanning technology to analyze rough
                  diamonds, optimizing cutting plans and significantly reducing
                  waste.
                </p>
              </TimelineContent>
              <div style={{ width: "45%" }}></div>
            </TimelineItem>

            <TimelineItem>
              <div style={{ width: "45%" }}></div>
              <TimelineContent position="right">
                <TimelineYear>2018</TimelineYear>
                <TimelineTitle>Automated Polishing</TimelineTitle>
                <p>
                  Introduced automated polishing systems for consistent quality,
                  while preserving hand-finishing for critical facets that
                  require the human touch.
                </p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent position="left">
                <TimelineYear>Today</TimelineYear>
                <TimelineTitle>Continuing Legacy</TimelineTitle>
                <p>
                  Continuing our commitment to diamond manufacturing excellence
                  while embracing sustainable practices and ethical sourcing
                  through the Kimberley Process.
                </p>
              </TimelineContent>
              <div style={{ width: "45%" }}></div>
            </TimelineItem>
          </Timeline>
        </Container>
      </TimelineSection>

      {/* Values Section */}
      <ValuesSection id="our-values">
        <Container>
          <Title
            level={2}
            style={{
              textAlign: "center",
              marginBottom: "var(--spacing-4)",
              position: "relative",
              zIndex: 1,
            }}
          >
            Our Core{" "}
            <span style={{ color: "var(--color-secondary)" }}>Values</span>
          </Title>

          <div
            style={{
              width: "60px",
              height: "2px",
              background: "var(--gradient-gold)",
              margin: "0 auto var(--spacing-4)",
              borderRadius: "1px",
            }}
          />

          <Text
            style={{
              display: "block",
              textAlign: "center",
              fontSize: "1.2rem",
              color: "var(--color-text-light)",
              marginBottom: "var(--spacing-8)",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
              fontFamily: "var(--font-accent)",
              fontWeight: "500",
              position: "relative",
              zIndex: 1,
            }}
          >
            The principles that guide our diamond manufacturing excellence
          </Text>

          <ValuesGrid>
            <ValueCard>
              <ValueIcon>
                <i className="fas fa-gem"></i>
              </ValueIcon>
              <ValueTitle>Precision</ValueTitle>
              <p>
                We work with tolerances of less than a hundredth of a
                millimeter, ensuring perfect symmetry and maximum brilliance in
                every diamond we manufacture.
              </p>
            </ValueCard>

            <ValueCard>
              <ValueIcon>
                <i className="fas fa-history"></i>
              </ValueIcon>
              <ValueTitle>Tradition & Innovation</ValueTitle>
              <p>
                We honor traditional diamond cutting techniques passed down
                through generations while embracing cutting-edge technology that
                enhances our craftsmanship.
              </p>
            </ValueCard>

            <ValueCard>
              <ValueIcon>
                <i className="fas fa-certificate"></i>
              </ValueIcon>
              <ValueTitle>Ethical Sourcing</ValueTitle>
              <p>
                We only work with conflict-free diamonds sourced through the
                Kimberley Process, ensuring our manufacturing practices uphold
                the highest ethical standards.
              </p>
            </ValueCard>

            <ValueCard>
              <ValueIcon>
                <i className="fas fa-award"></i>
              </ValueIcon>
              <ValueTitle>Quality Assurance</ValueTitle>
              <p>
                Every diamond undergoes rigorous quality control at each stage
                of manufacturing, ensuring only the finest gems bear the
                Ramavatargems mark of excellence.
              </p>
            </ValueCard>
          </ValuesGrid>
        </Container>
      </ValuesSection>
    </PageContainer>
  );
};

export default About;
