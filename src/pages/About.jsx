import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle.jsx";
import Button from "../components/Button.jsx";

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
  background-image: url("https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80");
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
          <SectionTitle
            title="Our Story"
            subtitle="A legacy of craftsmanship, heritage, and passion for jewelry making since 1982"
          />
        </HeroContent>
      </HeroSection>

      <AboutContainer>
        <StorySection>
          <StoryGrid>
            <StoryImage />
            <StoryContent>
              <h3>A Heritage of Excellence</h3>
              <p>
                Established in 1982 in the heart of Jaipur, Elegant Jewels began
                as a small family workshop dedicated to preserving traditional
                jewelry craftsmanship while embracing innovation.
              </p>
              <p>
                For over four decades, we have been creating exquisite pieces
                that blend timeless designs with contemporary elegance. Our
                artisans, many of whom have been with us for generations, bring
                decades of expertise to each creation.
              </p>
              <p>
                Today, we continue to honor our heritage while expanding our
                collections to meet the evolving tastes of our discerning
                clientele. Every piece we create carries the legacy of Jaipur's
                rich jewelry tradition.
              </p>
              <Button to="/collection">Explore Our Collections</Button>
            </StoryContent>
          </StoryGrid>
        </StorySection>

        <TimelineSection>
          <SectionTitle
            title="Our Journey"
            subtitle="Key milestones in our four-decade legacy of jewelry craftsmanship"
          />
          <Timeline>
            <TimelineItem>
              <TimelineContent position="left">
                <TimelineYear>1982</TimelineYear>
                <TimelineTitle>Our Founding</TimelineTitle>
                <p>
                  Established in Jaipur by master craftsman Rajendra Sharma with
                  a vision to preserve traditional jewelry making techniques.
                </p>
              </TimelineContent>
              <div style={{ width: "45%" }}></div>
            </TimelineItem>

            <TimelineItem>
              <div style={{ width: "45%" }}></div>
              <TimelineContent position="right">
                <TimelineYear>1995</TimelineYear>
                <TimelineTitle>Expansion</TimelineTitle>
                <p>
                  Opened our flagship showroom in Johari Bazaar, Jaipur's
                  renowned jewelry market, expanding our collection to include
                  gemstone specialties.
                </p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent position="left">
                <TimelineYear>2005</TimelineYear>
                <TimelineTitle>International Recognition</TimelineTitle>
                <p>
                  Received national award for excellence in jewelry design and
                  craftsmanship, establishing our reputation for quality.
                </p>
              </TimelineContent>
              <div style={{ width: "45%" }}></div>
            </TimelineItem>

            <TimelineItem>
              <div style={{ width: "45%" }}></div>
              <TimelineContent position="right">
                <TimelineYear>2018</TimelineYear>
                <TimelineTitle>Modern Evolution</TimelineTitle>
                <p>
                  Launched our contemporary collection, blending traditional
                  techniques with modern designs to appeal to a new generation.
                </p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent position="left">
                <TimelineYear>Today</TimelineYear>
                <TimelineTitle>Continuing Legacy</TimelineTitle>
                <p>
                  Continuing our commitment to exceptional craftsmanship while
                  embracing sustainable and ethical practices in jewelry making.
                </p>
              </TimelineContent>
              <div style={{ width: "45%" }}></div>
            </TimelineItem>
          </Timeline>
        </TimelineSection>

        <ValuesSection>
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide our craftsmanship and business"
          />
          <ValuesGrid>
            <ValueCard>
              <ValueIcon>💎</ValueIcon>
              <ValueTitle>Craftsmanship</ValueTitle>
              <p>
                We uphold the highest standards of artistry in every piece we
                create, honoring traditional techniques passed down through
                generations.
              </p>
            </ValueCard>

            <ValueCard>
              <ValueIcon>✨</ValueIcon>
              <ValueTitle>Quality</ValueTitle>
              <p>
                We use only the finest materials, ensuring each creation meets
                our exacting standards for beauty and durability.
              </p>
            </ValueCard>

            <ValueCard>
              <ValueIcon>🤝</ValueIcon>
              <ValueTitle>Integrity</ValueTitle>
              <p>
                We conduct our business with transparency and honesty, building
                lasting relationships with our clients based on trust.
              </p>
            </ValueCard>
          </ValuesGrid>
        </ValuesSection>
      </AboutContainer>
    </>
  );
};

export default About;
