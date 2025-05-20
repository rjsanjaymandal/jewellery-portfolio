import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle.jsx";
import Button from "../components/Button.jsx";
import RamavatargemsLogo from "../components/logo/RamavatargemsLogo";

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg) var(--spacing-sm);
`;

const HeroSection = styled.section`
  background-color: var(--color-background-alt);
  padding: var(--spacing-lg) 0;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-sm);
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  svg {
    filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.2));
    width: 180px;
    height: auto;
  }
`;

const StorySection = styled.section`
  padding: var(--spacing-xl) 0;
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StoryImage = styled.div`
  height: 500px;
  background-image: url("https://images.unsplash.com/photo-1581974206967-93856b25aa13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80");
  background-size: cover;
  background-position: center;
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 300px;
    margin-bottom: var(--spacing-md);
  }
`;

const StoryContent = styled.div`
  h3 {
    margin-bottom: var(--spacing-sm);
    color: var(--color-secondary);
  }

  p {
    margin-bottom: var(--spacing-sm);
    line-height: 1.8;
  }
`;

const TimelineSection = styled.section`
  padding: var(--spacing-xl) 0;
  background-color: var(--color-background-alt);
`;

const Timeline = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 3px;
    background-color: var(--color-primary);
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-lg);

  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 60px;
  }
`;

const TimelineContent = styled.div`
  width: 45%;
  padding: var(--spacing-sm);
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 20px;
    width: 20px;
    height: 20px;
    background-color: var(--color-primary);
    border-radius: 50%;

    ${({ position }) =>
      position === "left"
        ? `
      right: -40px;
    `
        : `
      left: -40px;
    `}

    @media (max-width: 768px) {
      left: -50px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TimelineYear = styled.div`
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const ValuesSection = styled.section`
  padding: var(--spacing-xl) 0;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-md);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-sm);
`;

const ValueCard = styled.div`
  padding: var(--spacing-md);
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ValueIcon = styled.div`
  font-size: 3rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
`;

const ValueTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const About = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <LogoContainer>
            <RamavatargemsLogo width={180} />
          </LogoContainer>
          <SectionTitle
            title="Our Story"
            subtitle="A legacy of diamond manufacturing excellence and precision craftsmanship since 1982"
          />
        </HeroContent>
      </HeroSection>

      <AboutContainer>
        <StorySection>
          <StoryGrid>
            <StoryImage />
            <StoryContent>
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
            </StoryContent>
          </StoryGrid>
        </StorySection>

        <TimelineSection>
          <SectionTitle
            title="Our Journey"
            subtitle="Key milestones in our four-decade legacy of diamond manufacturing excellence"
          />
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
        </TimelineSection>

        <ValuesSection>
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide our diamond manufacturing excellence"
          />
          <ValuesGrid>
            <ValueCard>
              <ValueIcon>💎</ValueIcon>
              <ValueTitle>Precision</ValueTitle>
              <p>
                We work with tolerances of less than a hundredth of a
                millimeter, ensuring perfect symmetry and maximum brilliance in
                every diamond we manufacture.
              </p>
            </ValueCard>

            <ValueCard>
              <ValueIcon>✨</ValueIcon>
              <ValueTitle>Tradition & Innovation</ValueTitle>
              <p>
                We honor traditional diamond cutting techniques passed down
                through generations while embracing cutting-edge technology that
                enhances our craftsmanship.
              </p>
            </ValueCard>

            <ValueCard>
              <ValueIcon>🤝</ValueIcon>
              <ValueTitle>Ethical Sourcing</ValueTitle>
              <p>
                We only work with conflict-free diamonds sourced through the
                Kimberley Process, ensuring our manufacturing practices uphold
                the highest ethical standards.
              </p>
            </ValueCard>
          </ValuesGrid>
        </ValuesSection>
      </AboutContainer>
    </>
  );
};

export default About;
