import React, { useState, useEffect, useRef } from "react";
import {
  Typography,
  Space,
  Card,
  Row,
  Col,
  Carousel,
  Statistic,
  Divider,
  Image,
  Badge,
  Tag,
  Tabs,
  Avatar,
  Rate
} from "antd";
import {
  RightOutlined,
  HistoryOutlined,
  CrownOutlined,
  DollarOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
  ShoppingOutlined,
  StarOutlined,
  HeartOutlined,
  GoldOutlined,
  TrophyOutlined,
  TeamOutlined,
  GlobalOutlined,
  EnvironmentOutlined,
  ArrowDownOutlined
} from "@ant-design/icons";
import styled, { keyframes } from "styled-components";
import Button from "../components/Button.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;

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

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

// Container for sections
const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-sm);
  position: relative;
`;

// Hero Section
const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #000;

  @media (max-width: 768px) {
    height: 80vh;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
  z-index: 1;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(156, 102, 68, 0.6) 50%,
    rgba(0, 21, 41, 0.7) 100%
  );
  z-index: 2;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  width: 90%;
  max-width: 900px;
  z-index: 3;

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

const HeroLogo = styled.div`
  font-size: 4rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
  animation: ${float} 6s ease-in-out infinite;
`;

const HeroTitle = styled(Title)`
  color: white !important;
  font-size: 4.5rem !important;
  font-weight: 700 !important;
  margin-bottom: 1rem !important;
  background: linear-gradient(
    to right,
    #ffffff 0%,
    #d4b996 50%,
    #ffffff 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shimmer} 8s linear infinite !important;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3) !important;

  @media (max-width: 768px) {
    font-size: 3rem !important;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem !important;
  }
`;

const HeroSubtitle = styled(Paragraph)`
  color: rgba(255, 255, 255, 0.9) !important;
  font-size: 1.8rem !important;
  margin-bottom: 2rem !important;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5) !important;
  max-width: 800px;
  margin-left: auto !important;
  margin-right: auto !important;

  @media (max-width: 768px) {
    font-size: 1.4rem !important;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem !important;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  .anticon {
    font-size: 2rem;
    animation: ${float} 2s ease-in-out infinite;
  }

  span {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

// Featured Collections Section
const FeaturedSection = styled.section`
  padding: var(--spacing-xl) 0;
  background: linear-gradient(
    135deg,
    #f9f7f3 0%,
    #f5f0e5 50%,
    #f9f7f3 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5YzY2NDQiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAtMzR2Nmg2di02aC02em0tMTIgMTJ2Nmg2di02aC02em0xMiAwdjZoNnYtNmgtNnptLTI0IDEydjZoNnYtNmgtNnptMjQgMHY2aDZ2LTZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=');
    opacity: 0.5;
    z-index: 0;
  }
`;

const FeaturedContainer = styled(SectionContainer)`
  position: relative;
  z-index: 1;
`;

const CollectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(200px, auto);
  gap: 20px;
  margin-top: 60px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
`;

const CollectionCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
    z-index: 1;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px) rotateX(5deg) rotateY(-5deg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

    &::before {
      opacity: 0.5;
    }

    img {
      transform: scale(1.1);
    }

    .card-content {
      transform: translateY(-10px);

      h3 {
        transform: translateY(0);
        opacity: 1;
      }

      p {
        transform: translateY(0);
        opacity: 1;
      }

      .view-btn {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  &.large {
    grid-column: span 6;
    grid-row: span 2;

    @media (max-width: 992px) {
      grid-column: span 3;
    }

    @media (max-width: 576px) {
      grid-column: span 2;
    }
  }

  &.medium {
    grid-column: span 4;
    grid-row: span 2;

    @media (max-width: 992px) {
      grid-column: span 3;
    }

    @media (max-width: 576px) {
      grid-column: span 2;
    }
  }

  &.small {
    grid-column: span 3;
    grid-row: span 1;

    @media (max-width: 992px) {
      grid-column: span 2;
    }

    @media (max-width: 576px) {
      grid-column: span 1;
    }
  }
`;

const CollectionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  z-index: 2;
  transition: transform 0.3s ease;

  h3 {
    color: white;
    font-family: var(--font-heading);
    font-size: 1.5rem;
    margin: 0 0 5px;
    transform: translateY(10px);
    opacity: 0.9;
    transition: transform 0.3s ease 0.1s, opacity 0.3s ease 0.1s;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    margin: 0 0 15px;
    font-size: 0.9rem;
    transform: translateY(10px);
    opacity: 0;
    transition: transform 0.3s ease 0.2s, opacity 0.3s ease 0.2s;
  }

  .view-btn {
    display: inline-block;
    background: linear-gradient(
      to right,
      var(--color-primary) 0%,
      var(--color-primary-dark) 100%
    );
    color: white;
    padding: 8px 15px;
    border-radius: 30px;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0;
    transform: translateY(10px);
    transition: transform 0.3s ease 0.3s, opacity 0.3s ease 0.3s, background 0.3s ease;

    &:hover {
      background: linear-gradient(
        to right,
        var(--color-primary-dark) 0%,
        var(--color-primary) 100%
      );
    }
  }
`;

const CategoryTabs = styled(Tabs)`
  margin-top: 40px;

  .ant-tabs-nav {
    margin-bottom: 40px;

    &::before {
      border-bottom: none !important;
    }
  }

  .ant-tabs-tab {
    padding: 12px 20px;
    margin: 0 10px;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:hover {
      color: var(--color-primary);
    }
  }

  .ant-tabs-tab-active {
    .ant-tabs-tab-btn {
      color: var(--color-primary) !important;
      font-weight: 600;
    }
  }

  .ant-tabs-ink-bar {
    background-color: var(--color-primary);
    height: 3px !important;
  }
`;

// About Section
const AboutSection = styled.section`
  padding: var(--spacing-xl) 0;
  background: linear-gradient(
    to right,
    #ffffff 0%,
    #f5f0e5 50%,
    #ffffff 100%
  );
  position: relative;
  overflow: hidden;
`;

const AboutContainer = styled(SectionContainer)`
  position: relative;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-top: 60px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const AboutImageContainer = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100%;
    height: 100%;
    border: 3px solid var(--color-primary);
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 60%;
    height: 60%;
    background: linear-gradient(
      135deg,
      var(--color-primary) 0%,
      var(--color-primary-dark) 100%
    );
    z-index: 0;
  }

  img {
    position: relative;
    z-index: 2;
    width: 100%;
    height: auto;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const AboutContent = styled.div`
  h2 {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    margin-bottom: 20px;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 80px;
      height: 3px;
      background: linear-gradient(
        to right,
        var(--color-primary) 0%,
        var(--color-primary-dark) 100%
      );
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 25px;
    color: var(--color-text);
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled.div`
  text-align: center;

  .ant-statistic-title {
    font-size: 1rem;
    color: var(--color-text-light);
    margin-bottom: 5px;
  }

  .ant-statistic-content {
    font-family: var(--font-heading);
    color: var(--color-primary);
    font-size: 2.5rem;
    font-weight: 700;
  }
`;

// Testimonial Section
const TestimonialSection = styled.section`
  padding: var(--spacing-xl) 0;
  background: linear-gradient(
    135deg,
    rgba(0, 21, 41, 0.95) 0%,
    rgba(0, 21, 41, 0.85) 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.15;
    z-index: 0;
  }
`;

const TestimonialContainer = styled(SectionContainer)`
  position: relative;
  z-index: 1;
  text-align: center;
`;

const TestimonialTitle = styled(Title)`
  color: white !important;
  margin-bottom: 60px !important;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(
      to right,
      var(--color-primary) 0%,
      var(--color-primary-light) 100%
    );
  }
`;

const TestimonialCarousel = styled(Carousel)`
  .slick-dots {
    bottom: -40px;

    li button {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.3);
    }

    li.slick-active button {
      background-color: var(--color-primary) !important;
      width: 14px;
      height: 14px;
    }
  }

  .slick-prev, .slick-next {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex !important;
    align-items: center;
    justify-content: center;
    z-index: 10;

    &:hover {
      background: var(--color-primary);
    }

    &:before {
      font-size: 20px;
      opacity: 1;
    }
  }

  .slick-prev {
    left: -60px;
  }

  .slick-next {
    right: -60px;
  }

  @media (max-width: 992px) {
    .slick-prev {
      left: -20px;
    }

    .slick-next {
      right: -20px;
    }
  }
`;

const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 40px;
  margin: 20px;
  position: relative;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const QuoteIcon = styled.div`
  font-size: 5rem;
  color: var(--color-primary);
  opacity: 0.2;
  position: absolute;
  top: 20px;
  left: 20px;
  line-height: 1;
`;

const TestimonialQuote = styled(Paragraph)`
  font-size: 1.2rem !important;
  font-style: italic;
  color: rgba(255, 255, 255, 0.9) !important;
  margin: 0 0 30px !important;
  position: relative;
  z-index: 1;
  text-align: left;
`;

const TestimonialFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const TestimonialAvatar = styled(Avatar)`
  width: 60px;
  height: 60px;
  margin-right: 15px;
  border: 2px solid var(--color-primary);
`;

const TestimonialAuthorInfo = styled.div`
  text-align: left;
`;

const TestimonialAuthor = styled(Text)`
  display: block;
  font-weight: 600 !important;
  color: white !important;
  font-size: 1.1rem !important;
  margin-bottom: 5px !important;
`;

const TestimonialLocation = styled(Text)`
  display: block;
  color: rgba(255, 255, 255, 0.7) !important;
  font-size: 0.9rem !important;
`;

const TestimonialRating = styled(Rate)`
  font-size: 0.9rem;
  color: var(--color-primary) !important;
  margin-top: 5px;
`;

// CTA Section
const CTASection = styled.section`
  padding: var(--spacing-xl) 0;
  background: linear-gradient(
    135deg,
    var(--color-primary-dark) 0%,
    var(--color-primary) 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.5;
  }
`;

const CTAContainer = styled(SectionContainer)`
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
`;

const CTATitle = styled(Title)`
  color: white !important;
  font-size: 3rem !important;
  margin-bottom: 20px !important;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2) !important;
`;

const CTADescription = styled(Paragraph)`
  color: rgba(255, 255, 255, 0.9) !important;
  font-size: 1.2rem !important;
  max-width: 700px;
  margin: 0 auto 40px !important;
`;

const CTAButton = styled(Button)`
  background: white !important;
  color: var(--color-primary) !important;
  border: none !important;
  font-size: 1.1rem !important;
  height: auto !important;
  padding: 12px 30px !important;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2) !important;
  }
`;

const Home = () => {
  // Video reference
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Toggle video playback
  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  // Collection data
  const collections = [
    {
      id: 1,
      title: "Traditional Jewelry",
      description: "Timeless designs inspired by royal heritage",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      size: "large"
    },
    {
      id: 2,
      title: "Diamond Collection",
      description: "Brilliant diamonds crafted with precision",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      size: "medium"
    },
    {
      id: 3,
      title: "Gemstone Treasures",
      description: "Vibrant gemstones set in exquisite designs",
      image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      size: "medium"
    },
    {
      id: 4,
      title: "Bridal Collection",
      description: "Stunning pieces for your special day",
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      size: "small"
    },
    {
      id: 5,
      title: "Luxury Rolls",
      description: "Exclusive pieces for special occasions",
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      size: "small"
    },
    {
      id: 6,
      title: "Modern Designs",
      description: "Contemporary styles with timeless appeal",
      image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      size: "small"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "The craftsmanship and attention to detail in every piece from Ramavatargems is truly exceptional. Their traditional designs with modern touches are exactly what I was looking for.",
      author: "Priya Sharma",
      location: "Delhi",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      id: 2,
      quote: "I've been a loyal customer of Ramavatargems for over a decade. Their jewelry pieces are timeless and the quality is unmatched. Every time I wear their pieces, I receive countless compliments.",
      author: "Rajat Mehta",
      location: "Mumbai",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      id: 3,
      quote: "The gemstone collection at Ramavatargems is absolutely stunning. Each piece tells a story of Jaipur's rich heritage and craftsmanship. I'm so happy with my purchase!",
      author: "Ananya Kapoor",
      location: "Bangalore",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero Section with Video Background */}
      <HeroSection id="hero">
        <VideoBackground ref={videoRef} autoPlay muted loop playsInline>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-gold-colored-chain-necklace-with-a-pendant-39877-large.mp4" type="video/mp4" />
        </VideoBackground>
        <HeroOverlay />
        <HeroContent>
          <HeroLogo>
            <GoldOutlined />
          </HeroLogo>
          <HeroTitle level={1}>Ramavatargems</HeroTitle>
          <HeroSubtitle>
            Crafting Elegance Since 1982 | Premium Jewelry from Jaipur
          </HeroSubtitle>
          <ButtonGroup>
            <Button
              to="/collection"
              size="large"
              style={{ fontSize: '1.1rem', height: 'auto', padding: '12px 30px' }}
            >
              Explore Collection
            </Button>
            <Button
              onClick={toggleVideo}
              variant="outline"
              size="large"
              style={{ fontSize: '1.1rem', height: 'auto', padding: '12px 30px' }}
            >
              {isVideoPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined />} {isVideoPlaying ? 'Pause Video' : 'Play Video'}
            </Button>
          </ButtonGroup>
        </HeroContent>
        <ScrollIndicator onClick={() => scrollToSection('collections')}>
          <ArrowDownOutlined />
          <span>Discover</span>
        </ScrollIndicator>
      </HeroSection>

      {/* Featured Collections Section */}
      <FeaturedSection id="collections">
        <FeaturedContainer>
          <SectionTitle
            title="Our Signature Collections"
            subtitle="Discover our most coveted pieces, each telling a story of heritage and craftsmanship"
          />

          <CategoryTabs defaultActiveKey="all" centered>
            <TabPane tab="All Collections" key="all">
              <CollectionGrid>
                {collections.map(collection => (
                  <CollectionCard key={collection.id} className={collection.size}>
                    <CollectionImage src={collection.image} alt={collection.title} />
                    <CardContent className="card-content">
                      <h3>{collection.title}</h3>
                      <p>{collection.description}</p>
                      <a href="/collection" className="view-btn">View Collection</a>
                    </CardContent>
                  </CollectionCard>
                ))}
              </CollectionGrid>
            </TabPane>
            <TabPane tab="Traditional" key="traditional">
              <CollectionGrid>
                {collections.filter(c => c.title.includes('Traditional')).map(collection => (
                  <CollectionCard key={collection.id} className={collection.size}>
                    <CollectionImage src={collection.image} alt={collection.title} />
                    <CardContent className="card-content">
                      <h3>{collection.title}</h3>
                      <p>{collection.description}</p>
                      <a href="/collection" className="view-btn">View Collection</a>
                    </CardContent>
                  </CollectionCard>
                ))}
              </CollectionGrid>
            </TabPane>
            <TabPane tab="Diamonds" key="diamonds">
              <CollectionGrid>
                {collections.filter(c => c.title.includes('Diamond')).map(collection => (
                  <CollectionCard key={collection.id} className={collection.size}>
                    <CollectionImage src={collection.image} alt={collection.title} />
                    <CardContent className="card-content">
                      <h3>{collection.title}</h3>
                      <p>{collection.description}</p>
                      <a href="/collection" className="view-btn">View Collection</a>
                    </CardContent>
                  </CollectionCard>
                ))}
              </CollectionGrid>
            </TabPane>
            <TabPane tab="Gemstones" key="gemstones">
              <CollectionGrid>
                {collections.filter(c => c.title.includes('Gemstone')).map(collection => (
                  <CollectionCard key={collection.id} className={collection.size}>
                    <CollectionImage src={collection.image} alt={collection.title} />
                    <CardContent className="card-content">
                      <h3>{collection.title}</h3>
                      <p>{collection.description}</p>
                      <a href="/collection" className="view-btn">View Collection</a>
                    </CardContent>
                  </CollectionCard>
                ))}
              </CollectionGrid>
            </TabPane>
          </CategoryTabs>
        </FeaturedContainer>
      </FeaturedSection>

      {/* About Section */}
      <AboutSection id="about">
        <AboutContainer>
          <SectionTitle
            title="Our Legacy"
            subtitle="A tradition of excellence in jewelry craftsmanship since 1982"
          />

          <AboutGrid>
            <AboutImageContainer>
              <img
                src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Ramavatargems workshop"
              />
            </AboutImageContainer>

            <AboutContent>
              <h2>Crafting Elegance Since 1982</h2>
              <p>
                Established in 1982 in the heart of Jaipur, Ramavatargems has been a beacon of exquisite craftsmanship and timeless elegance in the world of fine jewelry.
              </p>
              <p>
                Our artisans blend traditional techniques with contemporary designs to create pieces that celebrate India's rich heritage while embracing modern aesthetics. Each creation is a testament to our commitment to quality and artistry.
              </p>
              <p>
                From the vibrant gemstones of Rajasthan to the finest diamonds, we source only the most exceptional materials to craft jewelry that becomes a cherished part of your story.
              </p>

              <StatsContainer>
                <StatItem>
                  <Statistic title="Years of Excellence" value={new Date().getFullYear() - 1982} suffix="+" />
                </StatItem>
                <StatItem>
                  <Statistic title="Master Artisans" value={25} suffix="+" />
                </StatItem>
                <StatItem>
                  <Statistic title="Happy Clients" value="10K" suffix="+" />
                </StatItem>
              </StatsContainer>

              <div style={{ marginTop: '30px' }}>
                <Button to="/about" size="large">
                  Discover Our Story
                </Button>
              </div>
            </AboutContent>
          </AboutGrid>
        </AboutContainer>
      </AboutSection>

      {/* Testimonials Section */}
      <TestimonialSection id="testimonials">
        <TestimonialContainer>
          <TestimonialTitle level={2}>What Our Clients Say</TestimonialTitle>

          <TestimonialCarousel
            autoplay
            dots
            arrows
          >
            {testimonials.map(testimonial => (
              <div key={testimonial.id}>
                <TestimonialCard>
                  <QuoteIcon>"</QuoteIcon>
                  <TestimonialQuote>
                    {testimonial.quote}
                  </TestimonialQuote>
                  <TestimonialFooter>
                    <TestimonialAvatar src={testimonial.avatar} />
                    <TestimonialAuthorInfo>
                      <TestimonialAuthor>{testimonial.author}</TestimonialAuthor>
                      <TestimonialLocation>{testimonial.location}</TestimonialLocation>
                      <TestimonialRating value={testimonial.rating} disabled />
                    </TestimonialAuthorInfo>
                  </TestimonialFooter>
                </TestimonialCard>
              </div>
            ))}
          </TestimonialCarousel>
        </TestimonialContainer>
      </TestimonialSection>

      {/* CTA Section */}
      <CTASection id="cta">
        <CTAContainer>
          <CTATitle level={2}>Experience Timeless Elegance</CTATitle>
          <CTADescription>
            Visit our showroom in Jaipur to explore our complete collection and experience the craftsmanship firsthand.
          </CTADescription>
          <CTAButton to="/contact" size="large">
            Contact Us
          </CTAButton>
        </CTAContainer>
      </CTASection>
    </>
  );
};

export default Home;
