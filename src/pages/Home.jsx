import React from "react";
import styled from "styled-components";
import Button from "../components/Button.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

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

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-md);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-sm);
`;

const FeaturedItem = styled.div`
  background-color: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const FeaturedImage = styled.div`
  height: 250px;
  background-size: cover;
  background-position: center;
`;

const FeaturedContent = styled.div`
  padding: var(--spacing-sm);
  text-align: center;
`;

const FeaturedTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

const FeaturedDescription = styled.p`
  color: var(--color-text-light);
  margin-bottom: var(--spacing-sm);
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

const TestimonialQuote = styled.blockquote`
  font-size: 1.5rem;
  font-style: italic;
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
  position: relative;

  &::before,
  &::after {
    content: '"';
    font-size: 4rem;
    color: var(--color-primary-light);
    position: absolute;
    opacity: 0.5;
  }

  &::before {
    top: -20px;
    left: -20px;
  }

  &::after {
    bottom: -60px;
    right: -20px;
  }
`;

const TestimonialAuthor = styled.div`
  font-weight: 600;
  color: var(--color-secondary);
`;

const Home = () => {
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
        <FeaturedGrid>
          <FeaturedItem>
            <FeaturedImage
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`,
              }}
            />
            <FeaturedContent>
              <FeaturedTitle>Traditional Jewelry</FeaturedTitle>
              <FeaturedDescription>
                Timeless designs inspired by royal heritage
              </FeaturedDescription>
              <Button to="/collection" variant="outline" size="small">
                View Collection
              </Button>
            </FeaturedContent>
          </FeaturedItem>

          <FeaturedItem>
            <FeaturedImage
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1589674781759-c21c37956a44?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`,
              }}
            />
            <FeaturedContent>
              <FeaturedTitle>Gemstone Treasures</FeaturedTitle>
              <FeaturedDescription>
                Vibrant gemstones set in exquisite designs
              </FeaturedDescription>
              <Button to="/collection" variant="outline" size="small">
                View Collection
              </Button>
            </FeaturedContent>
          </FeaturedItem>

          <FeaturedItem>
            <FeaturedImage
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`,
              }}
            />
            <FeaturedContent>
              <FeaturedTitle>Diamond Elegance</FeaturedTitle>
              <FeaturedDescription>
                Brilliant diamonds crafted with precision
              </FeaturedDescription>
              <Button to="/collection" variant="outline" size="small">
                View Collection
              </Button>
            </FeaturedContent>
          </FeaturedItem>
        </FeaturedGrid>
      </FeaturedSection>

      <TestimonialSection>
        <TestimonialContainer>
          <SectionTitle
            title="Client Testimonials"
            subtitle="What our valued clients say about our craftsmanship"
          />
          <TestimonialQuote>
            The craftsmanship and attention to detail in every piece from
            Elegant Jewels is truly exceptional. Their traditional designs with
            modern touches are exactly what I was looking for.
          </TestimonialQuote>
          <TestimonialAuthor>— Priya Sharma, Delhi</TestimonialAuthor>
        </TestimonialContainer>
      </TestimonialSection>
    </>
  );
};

export default Home;
