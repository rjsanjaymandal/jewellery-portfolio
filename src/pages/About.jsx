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

// Hero Section - Enhanced with proper spacing
const HeroSection = styled(Section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px var(--spacing-4) var(--spacing-16);
  overflow: hidden;
  background: linear-gradient(
    135deg,
    #1a1a2e 0%,
    #16213e 30%,
    #0f3460 60%,
    #1a1a2e 100%
  );
  position: relative;

  @media (max-width: 768px) {
    min-height: 100vh;
    padding: 100px var(--spacing-4) var(--spacing-8);
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
    filter: brightness(0.6) contrast(1.2) saturate(1.1);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
        circle at 20% 80%,
        rgba(212, 175, 55, 0.3) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(212, 175, 55, 0.2) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 40% 40%,
        rgba(212, 175, 55, 0.1) 0%,
        transparent 60%
      );
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.5) 100%
    );
    z-index: 2;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
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
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6),
    0 0 20px rgba(0, 0, 0, 0.9);

  span {
    color: #d4af37 !important;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6),
      0 0 20px rgba(212, 175, 55, 0.8);
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
  color: #ffffff;
  margin-bottom: var(--spacing-8);
  max-width: 800px;
  font-family: var(--font-accent);
  font-weight: 500;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.6);
  background: rgba(0, 0, 0, 0.4);
  padding: 20px 30px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.25rem;
    padding: 15px 20px;
  }
`;

// Story Section - Enhanced with vibrant colors
const StorySection = styled(Section)`
  background: linear-gradient(
    135deg,
    #f8f9fa 0%,
    #e3f2fd 25%,
    #e8eaf6 50%,
    #f3e5f5 75%,
    #fff3e0 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
        circle at 15% 85%,
        rgba(212, 175, 55, 0.15) 0%,
        transparent 40%
      ),
      radial-gradient(
        circle at 85% 15%,
        rgba(63, 81, 181, 0.1) 0%,
        transparent 40%
      ),
      radial-gradient(
        circle at 50% 50%,
        rgba(212, 175, 55, 0.08) 0%,
        transparent 60%
      ),
      linear-gradient(45deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%);
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
      135deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0.3) 100%
    );
    z-index: 1;
  }
`;

const StoryContent = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
  position: relative;
  z-index: 10;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const StoryText = styled.div`
  flex: 1;
  position: relative;
  z-index: 1;

  h3 {
    margin-bottom: var(--spacing-md);
    color: #d4af37;
    font-size: 2.2rem;
    font-weight: 700;
    position: relative;
    padding-bottom: 15px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #d4af37, #f7e9b7);
      border-radius: 3px;
      box-shadow: 0 2px 8px rgba(212, 175, 55, 0.3);
    }
  }

  p {
    margin-bottom: var(--spacing-md);
    line-height: 1.8;
    font-size: 1.1rem;
    color: #2c3e50;
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
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

// Timeline Section - Enhanced with beautiful gradients
const TimelineSection = styled(Section)`
  background: linear-gradient(
    135deg,
    #1a1a2e 0%,
    #2c1810 25%,
    #16213e 50%,
    #1a237e 75%,
    #0f3460 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
        circle at 20% 80%,
        rgba(212, 175, 55, 0.2) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(255, 193, 7, 0.15) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 50% 50%,
        rgba(212, 175, 55, 0.1) 0%,
        transparent 70%
      ),
      linear-gradient(45deg, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
      linear-gradient(-45deg, rgba(212, 175, 55, 0.08) 0%, transparent 50%);
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
      135deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.2) 100%
    );
    z-index: 1;
  }
`;

const Timeline = styled.div`
  max-width: 1000px;
  margin: 60px auto 0;
  position: relative;
  z-index: 10;

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
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.98) 0%,
    rgba(248, 249, 250, 0.95) 100%
  );
  border-radius: var(--border-radius-md);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  position: relative;
  border: 2px solid rgba(212, 175, 55, 0.3);
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);

  p {
    color: #2c3e50;
    line-height: 1.7;
    font-size: 1.1rem;
    margin-bottom: 0;
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
  }

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3), 0 0 30px rgba(212, 175, 55, 0.4);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(248, 249, 250, 0.98) 100%
    );
    border-color: #d4af37;
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
  font-size: 2.5rem;
  font-weight: 800;
  color: #d4af37;
  margin-bottom: 0.75rem;
  display: inline-block;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50px;
    height: 4px;
    background: linear-gradient(90deg, #d4af37, #f7e9b7);
    border-radius: 3px;
    box-shadow: 0 2px 8px rgba(212, 175, 55, 0.4);
  }
`;

const TimelineTitle = styled.h3`
  margin: 1rem 0;
  font-size: 1.6rem;
  color: #2c3e50;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
`;

// Values Section - Enhanced with beautiful gradients
const ValuesSection = styled(Section)`
  background: linear-gradient(
    135deg,
    #f1f3f4 0%,
    #e8f5e8 20%,
    #e3f2fd 40%,
    #fce4ec 60%,
    #fff8e1 80%,
    #f3e5f5 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
        circle at 20% 30%,
        rgba(212, 175, 55, 0.12) 0%,
        transparent 45%
      ),
      radial-gradient(
        circle at 80% 70%,
        rgba(76, 175, 80, 0.08) 0%,
        transparent 45%
      ),
      radial-gradient(
        circle at 50% 20%,
        rgba(63, 81, 181, 0.06) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 30% 80%,
        rgba(233, 30, 99, 0.05) 0%,
        transparent 45%
      ),
      linear-gradient(45deg, rgba(255, 255, 255, 0.4) 0%, transparent 50%);
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
      135deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.4) 100%
    );
    z-index: 1;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 0 var(--spacing-4);
  position: relative;
  z-index: 10;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const ValueCard = styled.div`
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  border: 2px solid rgba(212, 175, 55, 0.2);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.98) 0%,
    rgba(248, 249, 250, 0.95) 100%
  );
  padding: var(--spacing-8) var(--spacing-6) var(--spacing-6);
  text-align: center;
  position: relative;
  z-index: 1;

  p {
    color: #2c3e50;
    line-height: 1.7;
    font-size: 1.1rem;
    margin-bottom: 0;
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
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
    transform: translateY(-15px) scale(1.02);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2), 0 0 30px rgba(212, 175, 55, 0.3);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(248, 249, 250, 1) 100%
    );
    border-color: #d4af37;

    &::before {
      opacity: 1;
    }

    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }

    p {
      color: #2c3e50;
    }
  }
`;

const ValueIcon = styled.div`
  font-size: 3rem;
  color: #000000;
  background: linear-gradient(135deg, #d4af37 0%, #f7e9b7 50%, #d4af37 100%);
  width: 90px;
  height: 90px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-6);
  box-shadow: 0 10px 25px rgba(212, 175, 55, 0.4),
    0 0 20px rgba(212, 175, 55, 0.2);
  border: 3px solid rgba(255, 255, 255, 0.9);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

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
  font-size: 1.6rem;
  color: #2c3e50;
  font-family: var(--font-heading);
  font-weight: 700;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #d4af37, #f7e9b7);
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(212, 175, 55, 0.3);
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
            src="/images/jewelry_pieces/diamond_ring_making.jpg"
            alt="Diamond jewelry manufacturing process"
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
            Premier Diamond Jewelry Manufacturer in Jaipur - Creating Exquisite
            Diamond Jewelry Since 1982
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
              <h3>Premier Diamond Jewelry Manufacturing Excellence</h3>
              <p>
                Established in 1982 in the heart of Jaipur, Ramavatargems has
                been at the forefront of diamond jewelry manufacturing for over
                four decades. As the leading wholesale jewelry suppliers in
                India, we specialize in creating unmatched diamond ornaments
                that add prestige, royalty & class to your collection.
              </p>
              <p>
                Being the most loved precious stone, diamond jewelry adds
                elegance and sophistication to any outfit. Our expert craftsmen
                create exquisite diamond rings, necklaces, earrings, and
                bracelets using the finest diamonds and precious metals,
                ensuring each piece meets the highest quality standards.
              </p>
              <p>
                From bespoke jewelry design to precision manufacturing, we bring
                your unique vision to life. Our comprehensive services include
                custom design & manufacturing, expert diamond setting, and
                rigorous quality assurance, making us the best Diamond Jewelry
                Manufacturer in Jaipur.
              </p>
              <Button to="/collection">Explore Our Jewelry Collection</Button>
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
              Key milestones in our four-decade legacy of diamond jewelry
              manufacturing excellence and craftsmanship
            </Text>
          </div>

          <Timeline>
            <TimelineItem>
              <TimelineContent position="left">
                <TimelineYear>1982</TimelineYear>
                <TimelineTitle>Our Founding</TimelineTitle>
                <p>
                  Established in Jaipur as a specialized diamond jewelry
                  manufacturing workshop, dedicated to creating exquisite
                  diamond ornaments with traditional craftsmanship and modern
                  techniques.
                </p>
              </TimelineContent>
              <div style={{ width: "45%" }}></div>
            </TimelineItem>

            <TimelineItem>
              <div style={{ width: "45%" }}></div>
              <TimelineContent position="right">
                <TimelineYear>1995</TimelineYear>
                <TimelineTitle>Advanced Jewelry Design</TimelineTitle>
                <p>
                  Introduced CAD technology for jewelry design, enabling us to
                  create intricate diamond jewelry patterns and custom designs
                  with unprecedented precision and detail.
                </p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent position="left">
                <TimelineYear>2005</TimelineYear>
                <TimelineTitle>3D Jewelry Modeling</TimelineTitle>
                <p>
                  Implemented advanced 3D modeling and prototyping for jewelry
                  design, allowing clients to visualize their custom diamond
                  jewelry before manufacturing begins.
                </p>
              </TimelineContent>
              <div style={{ width: "45%" }}></div>
            </TimelineItem>

            <TimelineItem>
              <div style={{ width: "45%" }}></div>
              <TimelineContent position="right">
                <TimelineYear>2018</TimelineYear>
                <TimelineTitle>Precision Setting Technology</TimelineTitle>
                <p>
                  Introduced precision diamond setting technology and automated
                  quality control systems, ensuring perfect stone placement and
                  consistent excellence in every jewelry piece.
                </p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent position="left">
                <TimelineYear>Today</TimelineYear>
                <TimelineTitle>Global Jewelry Excellence</TimelineTitle>
                <p>
                  Leading as the premier Diamond Jewelry Manufacturer in Jaipur,
                  serving clients worldwide with custom jewelry designs,
                  wholesale supplies, and maintaining our commitment to ethical
                  sourcing and sustainable practices.
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
            The principles that guide our diamond jewelry manufacturing
            excellence
          </Text>

          <ValuesGrid>
            <ValueCard>
              <ValueIcon>
                <i className="fas fa-gem"></i>
              </ValueIcon>
              <ValueTitle>Exquisite Craftsmanship</ValueTitle>
              <p>
                Our master artisans create stunning diamond jewelry with
                meticulous attention to detail, ensuring perfect stone setting,
                flawless finishing, and exceptional beauty in every piece.
              </p>
            </ValueCard>

            <ValueCard>
              <ValueIcon>
                <i className="fas fa-history"></i>
              </ValueIcon>
              <ValueTitle>Custom Design Excellence</ValueTitle>
              <p>
                From concept to creation, we specialize in bespoke diamond
                jewelry design, combining traditional craftsmanship with modern
                CAD technology to bring your unique vision to life.
              </p>
            </ValueCard>

            <ValueCard>
              <ValueIcon>
                <i className="fas fa-certificate"></i>
              </ValueIcon>
              <ValueTitle>Premium Materials</ValueTitle>
              <p>
                We use only the finest diamonds and precious metals, sourced
                ethically and certified for quality, ensuring every jewelry
                piece meets international standards of excellence.
              </p>
            </ValueCard>

            <ValueCard>
              <ValueIcon>
                <i className="fas fa-award"></i>
              </ValueIcon>
              <ValueTitle>Wholesale Excellence</ValueTitle>
              <p>
                As leading wholesale jewelry suppliers in India, we provide bulk
                orders with consistent quality, competitive pricing, and timely
                delivery to retailers and designers worldwide.
              </p>
            </ValueCard>
          </ValuesGrid>
        </Container>
      </ValuesSection>
    </PageContainer>
  );
};

export default About;
