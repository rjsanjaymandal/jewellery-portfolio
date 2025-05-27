import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Parallax,
} from "swiper/modules";
import {
  Typography,
  Row,
  Col,
  Card,
  Statistic,
  Space,
  Badge,
  Button as AntButton,
} from "antd";
import {
  ArrowRightOutlined,
  CheckCircleFilled,
  HistoryOutlined,
  DollarOutlined,
  TeamOutlined,
  GlobalOutlined,
  ToolOutlined,
  DashboardOutlined,
  SafetyCertificateOutlined,
  StarFilled,
  DiamondOutlined,
  CrownOutlined,
  PlayCircleOutlined,
  RocketOutlined,
  TrophyOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import styled, { keyframes } from "styled-components";
import { useTheme } from "../context/ThemeContext";
import Button from "../components/Button";
import RamavatargemsLogo from "../components/logo/RamavatargemsLogo";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/parallax";

const { Title, Text, Paragraph } = Typography;

// Modern Animations with Enhanced Visibility
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Modern Styled Components with Dark Mode Support
const PageContainer = styled.div`
  overflow-x: hidden;
  background: var(--color-background);
  min-height: 100vh;
  transition: background-color 0.3s ease;
`;

const Section = styled.section`
  padding: 120px 0;
  position: relative;
  background: var(--color-background);

  @media (max-width: 768px) {
    padding: 80px 0;
  }

  @media (max-width: 480px) {
    padding: 60px 0;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

// Modern Hero Section with Enhanced Visibility
const HeroSection = styled(Section)`
  height: 90vh;
  min-height: 700px;
  max-height: 900px;
  padding: 0;
  position: relative;
  overflow: hidden;
  margin-top: 80px;

  @media (max-width: 768px) {
    height: 80vh;
    min-height: 600px;
    max-height: 700px;
    margin-top: 70px;
  }

  @media (max-width: 480px) {
    height: 75vh;
    min-height: 500px;
    max-height: 600px;
  }
`;

const ModernSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;

  .swiper-pagination {
    bottom: 60px;
    z-index: 15;
    display: flex;
    justify-content: center;
    gap: 20px;

    .swiper-pagination-bullet {
      width: 60px;
      height: 4px;
      border-radius: 2px;
      background: rgba(255, 255, 255, 0.3);
      opacity: 1;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: var(--color-secondary);
        transition: all 0.6s ease;
      }

      &.swiper-pagination-bullet-active {
        background: var(--color-secondary);
        transform: scaleY(2);
        box-shadow: 0 0 25px rgba(212, 175, 55, 0.8);

        &::before {
          left: 0;
        }
      }
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 80px;
    height: 80px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 15;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);

    &:hover {
      background: rgba(212, 175, 55, 0.3);
      border-color: var(--color-secondary);
      transform: scale(1.2);
      box-shadow: 0 15px 50px rgba(212, 175, 55, 0.5);
    }

    &::after {
      font-size: 24px;
      color: white;
      font-weight: bold;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
    }

    @media (max-width: 768px) {
      width: 60px;
      height: 60px;

      &::after {
        font-size: 18px;
      }
    }

    @media (max-width: 480px) {
      display: none;
    }
  }

  .swiper-button-prev {
    left: 60px;

    @media (max-width: 768px) {
      left: 30px;
    }
  }

  .swiper-button-next {
    right: 60px;

    @media (max-width: 768px) {
      right: 30px;
    }
  }

  .swiper-slide {
    height: 90vh;
    min-height: 700px;
    max-height: 900px;

    @media (max-width: 768px) {
      height: 80vh;
      min-height: 600px;
      max-height: 700px;
    }

    @media (max-width: 480px) {
      height: 75vh;
      min-height: 500px;
      max-height: 600px;
    }
  }
`;

const HeroSlide = styled.div`
  height: 90vh;
  min-height: 700px;
  max-height: 900px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(26, 35, 126, 0.75) 30%,
      rgba(0, 0, 0, 0.85) 100%
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
    background: radial-gradient(
        circle at 30% 70%,
        rgba(212, 175, 55, 0.2) 0%,
        transparent 60%
      ),
      radial-gradient(
        circle at 70% 30%,
        rgba(212, 175, 55, 0.15) 0%,
        transparent 60%
      ),
      linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
    z-index: 2;
  }

  @media (max-width: 768px) {
    height: 80vh;
    min-height: 600px;
    max-height: 700px;
    background-attachment: scroll;
  }

  @media (max-width: 480px) {
    height: 75vh;
    min-height: 500px;
    max-height: 600px;
  }
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 0 24px;
    margin: 0 16px;
  }

  @media (max-width: 480px) {
    padding: 0 16px;
    margin: 0 8px;
  }
`;

const HeroLogo = styled(motion.div)`
  margin-bottom: 40px;
  filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.8));
  animation: ${float} 6s ease-in-out infinite;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 40px rgba(212, 175, 55, 1));
  }
`;

const HeroTitle = styled(motion.h1)`
  color: #ffffff !important;
  font-size: 4.5rem !important;
  font-weight: 900 !important;
  margin-bottom: 30px !important;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 0, 0, 0.7),
    0 4px 8px rgba(0, 0, 0, 0.8);
  letter-spacing: 3px;
  line-height: 1.1 !important;
  font-family: "Playfair Display", serif;
  position: relative;
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  &::before {
    content: "";
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--color-secondary),
      transparent
    );
    border-radius: 2px;
    animation: ${shimmer} 4s ease-in-out infinite;
  }

  span {
    background: linear-gradient(
      45deg,
      #d4af37 0%,
      #f7e9b7 25%,
      #d4af37 50%,
      #f7e9b7 75%,
      #d4af37 100%
    );
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    animation: ${shimmer} 3s ease-in-out infinite;
    text-shadow: none;

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, transparent, #d4af37, transparent);
      border-radius: 2px;
      animation: ${slideInLeft} 2s ease-out infinite;
    }
  }

  @media (max-width: 768px) {
    font-size: 3.5rem !important;
    letter-spacing: 2px;
  }

  @media (max-width: 480px) {
    font-size: 2.8rem !important;
    letter-spacing: 1px;
  }
`;

const HeroSubtitle = styled(motion.p)`
  display: block;
  font-size: 1.8rem;
  color: #ffffff;
  margin-bottom: 40px;
  max-width: 900px;
  font-weight: 400;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.7),
    0 2px 4px rgba(0, 0, 0, 0.8);
  line-height: 1.7;
  letter-spacing: 1px;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px 30px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.8),
      transparent
    );
    border-radius: 2px;
    animation: ${slideInRight} 3s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    letter-spacing: 0.8px;
    padding: 16px 24px;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    letter-spacing: 0.5px;
    padding: 12px 20px;
  }
`;

const ModernButtonGroup = styled(motion.div)`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 380px;
    gap: 20px;
  }
`;

const ModernButton = styled(motion.button)`
  padding: 20px 45px;
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 50px;
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 700;
  cursor: pointer;
  backdrop-filter: blur(25px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  min-width: 220px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: all 0.8s ease;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.4) 0%,
      transparent 70%
    );
    border-radius: 50%;
    transition: all 0.6s ease;
  }

  &:hover {
    transform: translateY(-6px) scale(1.08);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 40px rgba(212, 175, 55, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
    border-color: var(--color-secondary);
    background: rgba(212, 175, 55, 0.2);

    &::before {
      left: 100%;
    }

    &::after {
      width: 120px;
      height: 120px;
    }
  }

  &.primary {
    background: linear-gradient(
      135deg,
      var(--color-secondary) 0%,
      #f7e9b7 50%,
      var(--color-secondary) 100%
    );
    background-size: 200% 200%;
    border-color: var(--color-secondary);
    color: #000000;
    animation: ${shimmer} 4s ease-in-out infinite;
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

    &:hover {
      background-position: right center;
      box-shadow: 0 20px 50px rgba(212, 175, 55, 0.7),
        0 0 40px rgba(212, 175, 55, 0.9), inset 0 1px 0 rgba(255, 255, 255, 0.4);
      transform: translateY(-6px) scale(1.1);
    }
  }

  @media (max-width: 576px) {
    min-width: 300px;
    padding: 18px 36px;
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
`;

// Section Components
const SectionTitle = styled(Title)`
  text-align: center;
  margin-bottom: var(--spacing-2) !important;
  font-weight: 700 !important;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  color: var(--color-text) !important;

  span {
    color: var(--color-secondary) !important;
  }
`;

const SectionDivider = styled.div`
  width: 60px;
  height: 2px;
  background: var(--gradient-gold);
  margin: 0 auto var(--spacing-4);
  border-radius: 1px;
`;

const SectionSubtitle = styled(Text)`
  display: block;
  text-align: center;
  font-size: 1.2rem;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-8);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-family: var(--font-accent);
  font-weight: 500;
`;

// About Section
const AboutSection = styled(Section)`
  background-color: var(--color-background);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 70%, rgba(212, 175, 55, 0.05) 0%, transparent 50%);
    background-size: 300px;
    opacity: 0.03;
    z-index: 0;
  }
`;

const AboutContent = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
  position: relative;
  z-index: 1;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const AboutText = styled.div`
  flex: 1;

  h2 {
    position: relative;
    padding-bottom: var(--spacing-4);
    margin-bottom: var(--spacing-6);

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 80px;
      height: 3px;
      background: var(--gradient-blue-gold);
      border-radius: 1.5px;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--color-text-light);
  }
`;

const AboutImageContainer = styled.div`
  flex: 1;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  position: relative;

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

  &::after {
    content: "";
    position: absolute;
    top: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background: var(--color-secondary);
    opacity: 0.8;
    border-radius: 50%;
    z-index: 1;
    box-shadow: var(--shadow-gold);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

// Features Section
const FeaturesSection = styled(Section)`
  background-color: var(--color-background-alt);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: var(--gradient-blue);
  }
`;

const FeatureCard = styled(Card)`
  height: 100%;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  border: none;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 0;
    background: var(--gradient-blue-gold);
    z-index: 1;
    transition: height 0.3s ease;
  }

  &:hover::before {
    height: 100%;
  }

  .ant-card-cover {
    height: 220px;
    overflow: hidden;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        transparent 50%,
        rgba(26, 35, 126, 0.7) 100%
      );
      z-index: 1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }

  &:hover .ant-card-cover img {
    transform: scale(1.1);
  }

  .ant-card-body {
    padding: var(--spacing-4);
  }

  .ant-card-meta-title {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: var(--color-text);
    font-family: var(--font-heading);
    font-weight: 600;
    position: relative;
    padding-left: var(--spacing-4);

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 10px;
      height: 10px;
      background: var(--color-secondary);
      border-radius: 50%;
    }
  }

  .ant-card-meta-description {
    color: var(--color-text-light);
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

// Stats Section
const StatsSection = styled(Section)`
  background: var(--color-primary);
  position: relative;
  overflow: hidden;
  color: white;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 60%);
    background-size: 300px;
    opacity: 0.05;
    z-index: 0;
  }

  h2 {
    color: white !important;

    span {
      color: var(--color-secondary) !important;
    }
  }

  .section-subtitle {
    color: rgba(255, 255, 255, 0.8) !important;
  }
`;

const StatCard = styled(Card)`
  text-align: center;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  height: 100%;
  border: none;
  background: rgba(255, 255, 255, 0.95);
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(10px);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: var(--gradient-gold);
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30px;
    height: 30px;
    background: var(--color-secondary);
    opacity: 0.2;
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  .ant-card-body {
    padding: var(--spacing-6) var(--spacing-4);
  }

  .ant-statistic-title {
    color: var(--color-primary);
    font-family: var(--font-heading);
    font-size: 1.1rem;
    margin-bottom: var(--spacing-2);
    font-weight: 600;
  }

  .ant-statistic-content {
    color: var(--color-primary);
    font-family: var(--font-heading);

    .ant-statistic-content-value {
      font-size: 2.5rem;
      font-weight: 700;
    }
  }
`;

const StatIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: var(--spacing-4);
  color: white;
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-light) 100%
  );
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-4);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  border: 2px solid var(--color-secondary);
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

const Home = () => {
  const { isDarkMode } = useTheme();
  // Updated with diamond jewelry and manufacturing images - 2024

  // Features data - UPDATED DIAMOND MANUFACTURING IMAGES
  const features = [
    {
      title: "DIAMOND CUTTING",
      description:
        "State-of-the-art diamond cutting technology that maximizes brilliance and fire in every stone",
      icon: <ToolOutlined />,
      image: "/images/manufacturing/diamond_cutting_1.jpg",
    },
    {
      title: "DIAMOND POLISHING",
      description:
        "Expert polishing techniques using precision equipment to achieve perfect diamond surfaces",
      icon: <DashboardOutlined />,
      image: "/images/manufacturing/diamond_polishing.jpg",
    },
    {
      title: "QUALITY CONTROL",
      description:
        "Advanced microscopic inspection and grading ensures every diamond meets international standards",
      icon: <TeamOutlined />,
      image: "/images/manufacturing/diamond_microscope.jpg",
    },
    {
      title: "DIAMOND INSPECTION",
      description:
        "Professional diamond grading and certification using the latest inspection technology",
      icon: <SafetyCertificateOutlined />,
      image: "/images/manufacturing/diamond_inspection.jpg",
    },
  ];

  // Stats data
  const stats = [
    {
      title: "Years of Craftsmanship",
      value: 40,
      icon: <SafetyCertificateOutlined />,
    },
    {
      title: "Premium Diamonds",
      value: "75K+",
      icon: <StarFilled />,
    },
    {
      title: "Expert Artisans",
      value: 35,
      icon: <ToolOutlined />,
    },
    {
      title: "Global Presence",
      value: 42,
      icon: <GlobalOutlined />,
    },
  ];

  return (
    <PageContainer>
      {/* TEST BANNER - IMAGES UPDATED */}
      <div style={{
        background: 'red',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999
      }}>
        🔥 DIAMOND IMAGES UPDATED - NEW MANUFACTURING PHOTOS 🔥
      </div>
      {/* Modern Hero Section */}
      <HeroSection style={{ marginTop: '80px' }}>
        <ModernSwiper
          modules={[Navigation, Pagination, Autoplay, EffectFade, Parallax]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          parallax={true}
          speed={1200}
          loop={true}
        >
          <SwiperSlide>
            <HeroSlide
              style={{
                backgroundImage:
                  "url(/images/manufacturing/diamond_cutting_1.jpg)",
                backgroundColor: "#1a1a1a",
              }}
            >
              <HeroContent
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <HeroLogo
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <RamavatargemsLogo width={220} />
                </HeroLogo>
                <HeroTitle
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  data-swiper-parallax="-300"
                >
                  DIAMOND <span>CUTTING</span> MASTERS
                </HeroTitle>
                <HeroSubtitle
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  data-swiper-parallax="-200"
                >
                  Professional diamond cutting and polishing with state-of-the-art technology since 1982
                </HeroSubtitle>
                <ModernButtonGroup
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  data-swiper-parallax="-100"
                >
                  <ModernButton
                    className="primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <DiamondOutlined style={{ marginRight: 8 }} />
                    Our Process
                  </ModernButton>
                  <ModernButton
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <PlayCircleOutlined style={{ marginRight: 8 }} />
                    Watch Video
                  </ModernButton>
                </ModernButtonGroup>
              </HeroContent>
            </HeroSlide>
          </SwiperSlide>

          <SwiperSlide>
            <HeroSlide
              style={{
                backgroundImage:
                  "url(/images/manufacturing/diamond_polishing.jpg)",
                backgroundColor: "#2a2a2a",
              }}
            >
              <HeroContent
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <HeroTitle
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  data-swiper-parallax="-300"
                >
                  DIAMOND <span>POLISHING</span> EXPERTS
                </HeroTitle>
                <HeroSubtitle
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  data-swiper-parallax="-200"
                >
                  Expert diamond polishing techniques that bring out maximum brilliance and fire
                </HeroSubtitle>
                <ModernButtonGroup
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  data-swiper-parallax="-100"
                >
                  <ModernButton
                    className="primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <CrownOutlined style={{ marginRight: 8 }} />
                    Manufacturing Process
                  </ModernButton>
                </ModernButtonGroup>
              </HeroContent>
            </HeroSlide>
          </SwiperSlide>

          <SwiperSlide>
            <HeroSlide
              style={{
                backgroundImage:
                  "url(/images/manufacturing/diamond_inspection.jpg)",
                backgroundColor: "#3a3a3a",
              }}
            >
              <HeroContent
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <HeroTitle
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  data-swiper-parallax="-300"
                >
                  DIAMOND <span>QUALITY</span> CONTROL
                </HeroTitle>
                <HeroSubtitle
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  data-swiper-parallax="-200"
                >
                  Rigorous quality inspection ensures every diamond meets our exacting standards
                </HeroSubtitle>
                <ModernButtonGroup
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  data-swiper-parallax="-100"
                >
                  <ModernButton
                    className="primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <StarFilled style={{ marginRight: 8 }} />
                    Quality Standards
                  </ModernButton>
                </ModernButtonGroup>
              </HeroContent>
            </HeroSlide>
          </SwiperSlide>
        </ModernSwiper>
      </HeroSection>

      {/* About Section */}
      <AboutSection id="about">
        <Container>
          <SectionTitle level={2}>
            About <span>Ramavatargems</span>
          </SectionTitle>
          <SectionDivider />
          <SectionSubtitle>
            Diamond Jewelry Manufacturing Excellence Since 1982
          </SectionSubtitle>

          <AboutContent>
            <AboutText>
              <Paragraph
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "20px",
                  color: "var(--color-text-light)",
                }}
              >
                Ramavatargems has been at the forefront of diamond jewelry
                manufacturing in Jaipur for over four decades. Our commitment to
                excellence and artistry has made us a trusted name in the
                industry.
              </Paragraph>
              <Paragraph
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "20px",
                  color: "var(--color-text-light)",
                }}
              >
                We specialize in the complete jewelry creation process, from
                design conceptualization to final finishing. Our team of master
                jewelers combines traditional craftsmanship with modern
                techniques to create exquisite diamond jewelry pieces of
                exceptional quality and beauty.
              </Paragraph>
              <Space direction="vertical" size="middle">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleFilled
                    style={{
                      color: "var(--color-secondary)",
                      marginRight: "10px",
                      fontSize: "1.2rem",
                    }}
                  />
                  <Text strong style={{ color: "var(--color-text)" }}>
                    Bespoke jewelry design and creation
                  </Text>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleFilled
                    style={{
                      color: "var(--color-secondary)",
                      marginRight: "10px",
                      fontSize: "1.2rem",
                    }}
                  />
                  <Text strong style={{ color: "var(--color-text)" }}>
                    Expert diamond setting and metalwork
                  </Text>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleFilled
                    style={{
                      color: "var(--color-secondary)",
                      marginRight: "10px",
                      fontSize: "1.2rem",
                    }}
                  />
                  <Text strong style={{ color: "var(--color-text)" }}>
                    Ethical sourcing of diamonds and precious metals
                  </Text>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleFilled
                    style={{
                      color: "var(--color-secondary)",
                      marginRight: "10px",
                      fontSize: "1.2rem",
                    }}
                  />
                  <Text strong style={{ color: "var(--color-text)" }}>
                    Artisanal craftsmanship with modern technology
                  </Text>
                </div>
              </Space>
              <div style={{ marginTop: "30px" }}>
                <Button
                  to="/about"
                  size="large"
                  style={{
                    background: "var(--color-primary)",
                    border: "none",
                    color: "white",
                    padding: "0 var(--spacing-5)",
                    height: "44px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    borderRadius: "var(--border-radius-md)",
                  }}
                >
                  Learn More About Us <ArrowRightOutlined />
                </Button>
              </div>
            </AboutText>
            <AboutImageContainer>
              <img
                src="/images/manufacturing/diamond_microscope.jpg"
                alt="Ramavatargems diamond manufacturing and inspection"
                style={{ filter: "brightness(1.1) contrast(1.2)" }}
              />
            </AboutImageContainer>
          </AboutContent>
        </Container>
      </AboutSection>

      {/* Features Section */}
      <FeaturesSection id="features">
        <Container>
          <SectionTitle level={2}>
            Our <span>Expertise</span>
          </SectionTitle>
          <SectionDivider />
          <SectionSubtitle>
            What Sets Our Diamond Jewelry Manufacturing Apart
          </SectionSubtitle>

          <Row gutter={[24, 24]} style={{ marginTop: "40px" }}>
            {features.map((feature, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <FeatureCard
                  hoverable
                  cover={
                    <div style={{ position: "relative" }}>
                      <img alt={feature.title} src={feature.image} />
                      <Badge
                        count={feature.icon}
                        style={{
                          background: "var(--color-secondary)",
                          position: "absolute",
                          top: "15px",
                          right: "15px",
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.2rem",
                          zIndex: 2,
                          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                        }}
                      />
                    </div>
                  }
                >
                  <Card.Meta
                    title={feature.title}
                    description={feature.description}
                  />
                </FeatureCard>
              </Col>
            ))}
          </Row>
        </Container>
      </FeaturesSection>

      {/* Stats Section */}
      <StatsSection id="stats">
        <Container>
          <SectionTitle level={2} style={{ color: "white !important" }}>
            Our <span>Achievements</span>
          </SectionTitle>
          <SectionDivider />
          <SectionSubtitle style={{ color: "rgba(255, 255, 255, 0.9)" }}>
            Four Decades of Diamond Manufacturing Excellence
          </SectionSubtitle>

          <Row gutter={[24, 24]} style={{ marginTop: "40px" }}>
            {stats.map((stat, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <StatCard hoverable>
                  <StatIcon>{stat.icon}</StatIcon>
                  <Statistic
                    title={
                      <span
                        style={{
                          fontSize: "1.2rem",
                          color: "var(--color-primary)",
                          fontWeight: "600",
                          display: "inline-block",
                          padding: "8px 0",
                          borderBottom: "2px solid var(--color-secondary)",
                          marginBottom: "5px",
                        }}
                      >
                        {stat.title}
                      </span>
                    }
                    value={stat.value}
                    valueStyle={{
                      fontSize: "3rem",
                      fontWeight: "800",
                      background: "var(--gradient-gold)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontFamily: "var(--font-heading)",
                      textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </StatCard>
              </Col>
            ))}
          </Row>
        </Container>
      </StatsSection>

      {/* Custom Design Section */}
      <Section
        id="custom-design"
        style={{
          background: "var(--color-background)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container>
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={12}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "var(--border-radius-md)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <img
                  src="/images/jewelry_pieces/diamond_ring_making.jpg"
                  alt="Custom Diamond Jewelry Manufacturing Process"
                  style={{ width: "100%", display: "block" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    background: "var(--color-secondary)",
                    color: "var(--color-primary)",
                    padding: "10px 20px",
                    borderRadius: "var(--border-radius-md)",
                    fontFamily: "var(--font-heading)",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                    boxShadow: "var(--shadow-md)",
                  }}
                >
                  Premium Service
                </div>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div>
                <Title
                  level={2}
                  style={{
                    marginBottom: "20px",
                    position: "relative",
                    paddingBottom: "15px",
                  }}
                >
                  Custom Jewelry{" "}
                  <span style={{ color: "var(--color-secondary)" }}>
                    Design
                  </span>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "80px",
                      height: "3px",
                      background: "var(--gradient-blue-gold)",
                      borderRadius: "1.5px",
                    }}
                  ></div>
                </Title>
                <Paragraph
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                    marginBottom: "20px",
                    color: "var(--color-text-light)",
                  }}
                >
                  Transform your vision into a stunning reality with our bespoke
                  jewelry design service. Our expert designers work closely with
                  you to create unique, personalized pieces that tell your
                  story.
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                    marginBottom: "30px",
                    color: "var(--color-text-light)",
                  }}
                >
                  From initial concept to the finished masterpiece, we guide you
                  through every step of the custom jewelry creation process,
                  ensuring your piece is as unique as you are.
                </Paragraph>
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ marginBottom: "30px" }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        background: "var(--color-primary)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "15px",
                        fontSize: "0.9rem",
                        fontWeight: "bold",
                      }}
                    >
                      1
                    </div>
                    <Text strong style={{ fontSize: "1.1rem" }}>
                      Personal consultation with our design experts
                    </Text>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        background: "var(--color-primary)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "15px",
                        fontSize: "0.9rem",
                        fontWeight: "bold",
                      }}
                    >
                      2
                    </div>
                    <Text strong style={{ fontSize: "1.1rem" }}>
                      Detailed sketches and 3D modeling of your design
                    </Text>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        background: "var(--color-primary)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "15px",
                        fontSize: "0.9rem",
                        fontWeight: "bold",
                      }}
                    >
                      3
                    </div>
                    <Text strong style={{ fontSize: "1.1rem" }}>
                      Handcrafting by our master jewelers
                    </Text>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        background: "var(--color-primary)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "15px",
                        fontSize: "0.9rem",
                        fontWeight: "bold",
                      }}
                    >
                      4
                    </div>
                    <Text strong style={{ fontSize: "1.1rem" }}>
                      Final quality inspection and certification
                    </Text>
                  </div>
                </Space>
                <Button
                  to="/custom-design"
                  size="large"
                  style={{
                    background: "var(--color-primary)",
                    border: "none",
                    color: "white",
                    padding: "0 var(--spacing-6)",
                    height: "48px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    borderRadius: "var(--border-radius-md)",
                  }}
                >
                  Start Your Custom Design <ArrowRightOutlined />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* Process Section */}
      <Section
        id="process"
        style={{ background: "var(--color-background-alt)" }}
      >
        <Container>
          <SectionTitle level={2}>
            Jewelry <span>Creation</span> Process
          </SectionTitle>
          <SectionDivider />
          <SectionSubtitle>
            The Journey from Design Concept to Finished Jewelry Piece
          </SectionSubtitle>

          <Row gutter={[32, 32]} style={{ marginTop: "40px" }}>
            <Col xs={24} md={12} lg={6}>
              <Card
                hoverable
                style={{
                  height: "100%",
                  borderRadius: "var(--border-radius-md)",
                  overflow: "hidden",
                  border: "none",
                  boxShadow: "var(--shadow-md)",
                  transition: "all 0.3s ease",
                }}
                cover={
                  <div
                    style={{
                      height: "160px",
                      background: "var(--color-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "3rem",
                      color: "var(--color-secondary)",
                    }}
                  >
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        border: "2px solid var(--color-secondary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      1
                    </div>
                  </div>
                }
              >
                <Card.Meta
                  title={
                    <div
                      style={{
                        marginBottom: "10px",
                        color: "var(--color-primary)",
                        fontSize: "1.2rem",
                      }}
                    >
                      Design & Conceptualization
                    </div>
                  }
                  description="Creating detailed designs and 3D models of jewelry pieces, working closely with clients to bring their vision to life."
                />
              </Card>
            </Col>

            <Col xs={24} md={12} lg={6}>
              <Card
                hoverable
                style={{
                  height: "100%",
                  borderRadius: "var(--border-radius-md)",
                  overflow: "hidden",
                  border: "none",
                  boxShadow: "var(--shadow-md)",
                  transition: "all 0.3s ease",
                }}
                cover={
                  <div
                    style={{
                      height: "160px",
                      background: "var(--color-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "3rem",
                      color: "var(--color-secondary)",
                    }}
                  >
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        border: "2px solid var(--color-secondary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      2
                    </div>
                  </div>
                }
              >
                <Card.Meta
                  title={
                    <div
                      style={{
                        marginBottom: "10px",
                        color: "var(--color-primary)",
                        fontSize: "1.2rem",
                      }}
                    >
                      Metal Crafting
                    </div>
                  }
                  description="Expert crafting of the jewelry framework using precious metals like gold, platinum, and silver, creating the foundation for the piece."
                />
              </Card>
            </Col>

            <Col xs={24} md={12} lg={6}>
              <Card
                hoverable
                style={{
                  height: "100%",
                  borderRadius: "var(--border-radius-md)",
                  overflow: "hidden",
                  border: "none",
                  boxShadow: "var(--shadow-md)",
                  transition: "all 0.3s ease",
                }}
                cover={
                  <div
                    style={{
                      height: "160px",
                      background: "var(--color-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "3rem",
                      color: "var(--color-secondary)",
                    }}
                  >
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        border: "2px solid var(--color-secondary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      3
                    </div>
                  </div>
                }
              >
                <Card.Meta
                  title={
                    <div
                      style={{
                        marginBottom: "10px",
                        color: "var(--color-primary)",
                        fontSize: "1.2rem",
                      }}
                    >
                      Diamond Setting
                    </div>
                  }
                  description="Precision setting of diamonds and gemstones into the metal framework using various techniques like prong, pave, channel, and bezel settings."
                />
              </Card>
            </Col>

            <Col xs={24} md={12} lg={6}>
              <Card
                hoverable
                style={{
                  height: "100%",
                  borderRadius: "var(--border-radius-md)",
                  overflow: "hidden",
                  border: "none",
                  boxShadow: "var(--shadow-md)",
                  transition: "all 0.3s ease",
                }}
                cover={
                  <div
                    style={{
                      height: "160px",
                      background: "var(--color-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "3rem",
                      color: "var(--color-secondary)",
                    }}
                  >
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        border: "2px solid var(--color-secondary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      4
                    </div>
                  </div>
                }
              >
                <Card.Meta
                  title={
                    <div
                      style={{
                        marginBottom: "10px",
                        color: "var(--color-primary)",
                        fontSize: "1.2rem",
                      }}
                    >
                      Finishing & Polishing
                    </div>
                  }
                  description="Final polishing, plating, and detailing to achieve the perfect finish, ensuring each jewelry piece meets our exacting standards of quality and beauty."
                />
              </Card>
            </Col>
          </Row>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Button
              to="/manufacturing"
              size="large"
              style={{
                background: "var(--color-primary)",
                border: "none",
                color: "white",
                padding: "0 var(--spacing-6)",
                height: "48px",
                fontSize: "1rem",
                fontWeight: "500",
                borderRadius: "var(--border-radius-md)",
              }}
            >
              Learn More About Our Jewelry Manufacturing <ArrowRightOutlined />
            </Button>
          </div>
        </Container>
      </Section>

      {/* Jewelry Categories Section */}
      <Section
        id="categories"
        style={{
          background: "var(--color-background-alt)",
          padding: "var(--spacing-16) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container>
          <SectionTitle level={2}>
            Our Jewelry <span>Collections</span>
          </SectionTitle>
          <SectionDivider />
          <SectionSubtitle>
            Explore our exquisite range of handcrafted diamond jewelry pieces
          </SectionSubtitle>

          <Row gutter={[32, 32]} style={{ marginTop: "40px" }}>
            <Col xs={24} sm={12} md={6}>
              <Card
                hoverable
                cover={
                  <div
                    style={{
                      position: "relative",
                      height: "250px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src="/images/jewelry_pieces/diamond_ring.jpg"
                      alt="Diamond Rings"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                        padding: "20px",
                        textAlign: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: "1.5rem",
                          fontFamily: "var(--font-heading)",
                          fontWeight: "600",
                        }}
                      >
                        Rings
                      </Text>
                    </div>
                  </div>
                }
                bodyStyle={{ padding: "20px", textAlign: "center" }}
              >
                <Paragraph style={{ marginBottom: "20px" }}>
                  Exquisite diamond rings crafted with precision and artistry
                  for every occasion
                </Paragraph>
                <Button to="/collection/rings" size="middle">
                  View Collection <ArrowRightOutlined />
                </Button>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <Card
                hoverable
                cover={
                  <div
                    style={{
                      position: "relative",
                      height: "250px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src="/images/jewelry_pieces/diamond_necklace.jpg"
                      alt="Diamond Necklaces"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                        padding: "20px",
                        textAlign: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: "1.5rem",
                          fontFamily: "var(--font-heading)",
                          fontWeight: "600",
                        }}
                      >
                        Necklaces
                      </Text>
                    </div>
                  </div>
                }
                bodyStyle={{ padding: "20px", textAlign: "center" }}
              >
                <Paragraph style={{ marginBottom: "20px" }}>
                  Stunning diamond necklaces that make a statement of elegance
                  and sophistication
                </Paragraph>
                <Button to="/collection/necklaces" size="middle">
                  View Collection <ArrowRightOutlined />
                </Button>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <Card
                hoverable
                cover={
                  <div
                    style={{
                      position: "relative",
                      height: "250px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src="/images/jewelry_categories/earrings.jpg"
                      alt="Diamond Earrings"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                        padding: "20px",
                        textAlign: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: "1.5rem",
                          fontFamily: "var(--font-heading)",
                          fontWeight: "600",
                        }}
                      >
                        Earrings
                      </Text>
                    </div>
                  </div>
                }
                bodyStyle={{ padding: "20px", textAlign: "center" }}
              >
                <Paragraph style={{ marginBottom: "20px" }}>
                  Dazzling diamond earrings that add sparkle and glamour to any
                  ensemble
                </Paragraph>
                <Button to="/collection/earrings" size="middle">
                  View Collection <ArrowRightOutlined />
                </Button>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <Card
                hoverable
                cover={
                  <div
                    style={{
                      position: "relative",
                      height: "250px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src="/images/jewelry_categories/bracelets.jpg"
                      alt="Diamond Bracelets"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                        padding: "20px",
                        textAlign: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: "1.5rem",
                          fontFamily: "var(--font-heading)",
                          fontWeight: "600",
                        }}
                      >
                        Bracelets
                      </Text>
                    </div>
                  </div>
                }
                bodyStyle={{ padding: "20px", textAlign: "center" }}
              >
                <Paragraph style={{ marginBottom: "20px" }}>
                  Elegant diamond bracelets that wrap your wrist in luxury and
                  brilliance
                </Paragraph>
                <Button to="/collection/bracelets" size="middle">
                  View Collection <ArrowRightOutlined />
                </Button>
              </Card>
            </Col>
          </Row>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Button
              to="/collection"
              size="large"
              style={{
                background: "var(--color-primary)",
                border: "none",
                color: "white",
                padding: "0 var(--spacing-6)",
                height: "48px",
                fontSize: "1rem",
                fontWeight: "500",
                borderRadius: "var(--border-radius-md)",
              }}
            >
              View All Collections <ArrowRightOutlined />
            </Button>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section
        id="cta"
        style={{
          background: "var(--color-primary)",
          padding: "var(--spacing-12) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)",
            opacity: 0.3,
          }}
        />

        <Container>
          <div style={{ textAlign: "center" }}>
            <Title
              level={2}
              style={{ color: "white", marginBottom: "var(--spacing-4)" }}
            >
              Ready to Experience Diamond Jewelry{" "}
              <span style={{ color: "var(--color-secondary)" }}>
                Excellence?
              </span>
            </Title>
            <Paragraph
              style={{
                fontSize: "1.2rem",
                color: "rgba(255,255,255,0.9)",
                maxWidth: "800px",
                margin: "0 auto var(--spacing-8)",
                fontFamily: "var(--font-accent)",
              }}
            >
              Discover our exceptional diamond jewelry manufacturing services
              and explore our collection of exquisite handcrafted pieces.
            </Paragraph>

            <Space size="large" wrap style={{ justifyContent: "center" }}>
              <Button
                to="/contact"
                size="large"
                style={{
                  background: "var(--color-secondary)",
                  border: "none",
                  color: "var(--color-primary)",
                  padding: "0 var(--spacing-6)",
                  height: "48px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  borderRadius: "var(--border-radius-md)",
                }}
              >
                Contact Us <ArrowRightOutlined />
              </Button>

              <Button
                to="/collection"
                size="large"
                style={{
                  background: "transparent",
                  border: "1px solid var(--color-secondary)",
                  color: "var(--color-secondary)",
                  padding: "0 var(--spacing-6)",
                  height: "48px",
                  fontSize: "1rem",
                  fontWeight: "500",
                  borderRadius: "var(--border-radius-md)",
                }}
              >
                View Our Collection
              </Button>
            </Space>
          </div>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default Home;
