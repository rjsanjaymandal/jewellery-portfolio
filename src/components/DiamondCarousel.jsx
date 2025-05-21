import React, { useState, useEffect } from "react";
import { Carousel, Button, Typography } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled, { keyframes } from "styled-components";

const { Title, Text } = Typography;

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
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

const float = keyframes`
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(2deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
`;

const sparkle = keyframes`
  0%, 100% {
    opacity: 0.2;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
`;

// Styled Components
const CarouselWrapper = styled.div`
  position: relative;
  height: 90vh;
  max-height: 800px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
    z-index: 5;
    pointer-events: none;
  }

  .ant-carousel {
    height: 100%;
  }

  .slick-slider,
  .slick-list,
  .slick-track,
  .slick-slide > div {
    height: 100%;
  }

  .slick-dots {
    bottom: 40px;
    z-index: 50;

    li {
      margin: 0 8px;

      button {
        width: 12px !important;
        height: 12px !important;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        transition: all 0.5s ease;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        position: relative;
        overflow: hidden;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.5) 0%,
            rgba(255, 255, 255, 0) 60%
          );
          border-radius: 50%;
        }
      }

      &.slick-active button {
        transform: scale(1.3);
        background: var(--color-primary);
        box-shadow: 0 0 15px var(--color-primary);
      }
    }
  }
`;

const DiamondShape = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 150%;
    height: 150%;
    top: -25%;
    left: -25%;
    background: ${(props) =>
      props.gradient ||
      "linear-gradient(135deg, #1a2a6c 0%, #b21f1f 50%, #fdbb2d 100%)"};
    opacity: 0.8;
    z-index: -1;
    transform: rotate(${(props) => props.rotate || "0deg"});
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  }
`;

const Slide = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex !important;
  align-items: center;
  justify-content: center;
`;

const SlideBackground = styled.div`
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
    filter: brightness(0.7) contrast(1.2);
    transform: scale(1.1);
    animation: ${(props) =>
      props.animate ? "slowZoom 20s infinite alternate" : "none"};
  }

  @keyframes slowZoom {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.overlay || "rgba(0, 0, 0, 0.4)"};
  }
`;

const ContentContainer = styled.div`
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
    animation-delay: 0.3s;
  }

  > *:nth-child(2) {
    animation-delay: 0.6s;
  }

  > *:nth-child(3) {
    animation-delay: 0.9s;
  }

  > *:nth-child(4) {
    animation-delay: 1.2s;
  }
`;

const SlideTitle = styled(Title)`
  color: white !important;
  font-size: 4rem !important;
  font-weight: 700 !important;
  margin-bottom: 1rem !important;
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
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: ${(props) => props.accentColor || "var(--color-primary)"};
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 3.5rem !important;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem !important;
  }
`;

const SlideSubtitle = styled(Text)`
  display: block;
  font-size: 1.8rem;
  color: ${(props) => props.color || "var(--color-primary)"};
  margin-bottom: 1rem;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 1px;
  animation: ${float} 6s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const SlideDescription = styled(Text)`
  display: block;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255, 255, 255, 0.5),
      transparent
    );
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

const NavArrow = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: white;
    transform: translateY(-50%) scale(1.1);
  }

  &.prev {
    left: 40px;
  }

  &.next {
    right: 40px;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 18px;

    &.prev {
      left: 20px;
    }

    &.next {
      right: 20px;
    }
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
`;

// Sparkle elements
const Sparkle = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8);
  animation: ${sparkle} ${(props) => props.duration || "3s"} ease-in-out
    infinite;
  animation-delay: ${(props) => props.delay || "0s"};
  opacity: 0.7;
  z-index: 5;

  &.top-left {
    top: 20%;
    left: 15%;
  }

  &.top-right {
    top: 15%;
    right: 20%;
  }

  &.bottom-left {
    bottom: 25%;
    left: 10%;
  }

  &.bottom-right {
    bottom: 20%;
    right: 15%;
  }

  &.center-top {
    top: 10%;
    left: 50%;
  }

  &.center-bottom {
    bottom: 15%;
    left: 40%;
  }
`;

// Main Component
const DiamondCarousel = ({
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
    <CarouselWrapper>
      <Sparkle className="top-left" duration="4s" delay="0.5s" />
      <Sparkle className="top-right" duration="5s" delay="1s" />
      <Sparkle className="bottom-left" duration="6s" delay="1.5s" />
      <Sparkle className="bottom-right" duration="4.5s" delay="0.2s" />
      <Sparkle className="center-top" duration="5.5s" delay="0.8s" />
      <Sparkle className="center-bottom" duration="3.5s" delay="1.2s" />

      <NavArrow className="prev" icon={<LeftOutlined />} onClick={handlePrev} />

      <Carousel
        ref={carouselRef}
        autoplay={autoplay}
        effect={effect}
        dots={dots}
        afterChange={afterChange}
        autoplaySpeed={8000}
        pauseOnHover={false}
        fade={effect === "fade"}
        easing="cubic-bezier(0.645, 0.045, 0.355, 1)"
      >
        {slides.map((slide, index) => (
          <Slide key={slide.id || index}>
            <SlideBackground overlay={slide.overlay} animate={true}>
              <img src={slide.image} alt={slide.title} />
            </SlideBackground>

            <DiamondShape
              gradient={slide.gradient}
              rotate={`${(index * 45) % 90}deg`}
            />

            <ContentContainer>
              <SlideTitle
                level={1}
                gradient={slide.titleGradient}
                accentColor={slide.subtitleColor}
              >
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
            </ContentContainer>
          </Slide>
        ))}
      </Carousel>

      <NavArrow
        className="next"
        icon={<RightOutlined />}
        onClick={handleNext}
      />
    </CarouselWrapper>
  );
};

export default DiamondCarousel;
