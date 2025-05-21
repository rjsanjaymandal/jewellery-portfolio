import React, { useState, useEffect } from "react";
import { Carousel, Button, Typography } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { keyframes } from "styled-components";

const { Title, Text } = Typography;

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

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// Styled Components
const CarouselContainer = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;

  .ant-carousel {
    height: 100%;
  }

  .slick-slider,
  .slick-list,
  .slick-track {
    height: 100%;
  }

  .slick-dots {
    bottom: 40px;
    z-index: 50;

    li {
      margin: 0 8px;

      button {
        width: 40px !important;
        height: 4px !important;
        border-radius: 2px;
        background: rgba(255, 255, 255, 0.4);
        transition: all 0.5s ease;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      }

      &.slick-active button {
        width: 60px !important;
        background: var(--color-primary);
        box-shadow: 0 1px 5px rgba(201, 160, 99, 0.5);
      }
    }
  }

  .slick-slide {
    transition: opacity 0.8s ease;
  }
`;

const CarouselSlide = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex !important;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.gradient || "linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)"};
  box-shadow: inset 0 0 150px rgba(0, 0, 0, 0.5);
`;

const SlideImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.5;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.overlay || "rgba(0, 0, 0, 0.5)"};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.05);
    transition: transform 10s ease;
    animation: slowZoom 20s infinite alternate;
  }

  @keyframes slowZoom {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;

const SlideContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 1000px;
  padding: 0 40px;

  > * {
    animation: ${fadeIn} 0.8s ease-out forwards;
    opacity: 0;
  }

  > *:nth-child(1) {
    animation-delay: 0.2s;
  }

  > *:nth-child(2) {
    animation-delay: 0.4s;
  }

  > *:nth-child(3) {
    animation-delay: 0.6s;
  }

  > *:nth-child(4) {
    animation-delay: 0.8s;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const SlideTitle = styled(Title)`
  color: white !important;
  font-size: 4.5rem !important;
  font-weight: 700 !important;
  margin-bottom: 1.5rem !important;
  background: ${(props) =>
    props.gradient ||
    "linear-gradient(to right, #ffffff 0%, #d4b996 50%, #ffffff 100%)"};
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shimmer} 8s linear infinite !important;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3) !important;
  letter-spacing: 1px;
  line-height: 1.2 !important;

  @media (max-width: 768px) {
    font-size: 3rem !important;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem !important;
  }
`;

const SlideSubtitle = styled(Text)`
  display: block;
  font-size: 2rem;
  color: ${(props) => props.color || "var(--color-primary)"};
  margin-bottom: 1.5rem;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const SlideDescription = styled(Text)`
  display: block;
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const CarouselArrow = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 18px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: white;
    transform: translateY(-50%) scale(1.1);
  }

  &.prev {
    left: 30px;
  }

  &.next {
    right: 30px;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 16px;

    &.prev {
      left: 15px;
    }

    &.next {
      right: 15px;
    }
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

// Main Component
const GradientCarousel = ({
  slides,
  autoplay = true,
  effect = "fade",
  dots = true,
}) => {
  const carouselRef = React.createRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const handleNext = () => {
    carouselRef.current.next();
  };

  const afterChange = (current) => {
    setActiveIndex(current);
  };

  return (
    <CarouselContainer>
      <CarouselArrow
        className="prev"
        icon={<LeftOutlined />}
        onClick={handlePrev}
      />

      <Carousel
        ref={carouselRef}
        autoplay={autoplay}
        effect={effect}
        dots={dots}
        afterChange={afterChange}
        autoplaySpeed={7000}
        pauseOnHover={false}
        fade={effect === "fade"}
        easing="ease-in-out"
      >
        {slides.map((slide, index) => (
          <CarouselSlide key={slide.id || index} gradient={slide.gradient}>
            <SlideImageContainer overlay={slide.overlay}>
              <img src={slide.image} alt={slide.title} />
            </SlideImageContainer>

            <SlideContent>
              <SlideTitle level={1} gradient={slide.titleGradient}>
                {slide.title}
              </SlideTitle>

              <SlideSubtitle color={slide.subtitleColor}>
                {slide.subtitle}
              </SlideSubtitle>

              <SlideDescription>{slide.description}</SlideDescription>

              <ButtonContainer>
                {slide.buttons &&
                  slide.buttons.map((btn, btnIndex) => (
                    <Button
                      key={btnIndex}
                      type={btn.type || "primary"}
                      size={btn.size || "large"}
                      href={btn.href}
                      onClick={btn.onClick}
                      icon={btn.icon}
                      style={btn.style}
                    >
                      {btn.text}
                    </Button>
                  ))}
              </ButtonContainer>
            </SlideContent>
          </CarouselSlide>
        ))}
      </Carousel>

      <CarouselArrow
        className="next"
        icon={<RightOutlined />}
        onClick={handleNext}
      />
    </CarouselContainer>
  );
};

export default GradientCarousel;
