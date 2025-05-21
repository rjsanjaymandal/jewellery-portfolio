import React, { useState } from 'react';
import { Carousel, Button, Typography, Card, Avatar, Rate } from 'antd';
import { LeftOutlined, RightOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Title, Text, Paragraph } = Typography;

// Styled Components
const CarouselWrapper = styled.div`
  position: relative;
  margin: 40px 0;
  
  .slick-dots {
    bottom: -30px;
    
    li {
      width: 30px;
      height: 3px;
      
      button {
        width: 30px;
        height: 3px;
        border-radius: 0;
        background: rgba(201, 160, 99, 0.3);
        opacity: 0.7;
        transition: all 0.3s ease;
      }
      
      &.slick-active button {
        background: var(--color-primary);
        width: 50px;
        opacity: 1;
      }
    }
  }
  
  .ant-carousel .slick-slide {
    text-align: center;
    overflow: hidden;
    
    h3 {
      color: #fff;
    }
  }
`;

const StyledCarousel = styled(Carousel)`
  .slick-slide {
    transition: opacity 0.3s ease;
    padding: 10px;
  }
  
  .slick-center {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

const CarouselArrow = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--color-primary);
    color: white;
    transform: translateY(-50%) scale(1.1);
  }
  
  &.prev {
    left: -25px;
  }
  
  &.next {
    right: -25px;
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    
    &.prev {
      left: -15px;
    }
    
    &.next {
      right: -15px;
    }
  }
`;

const TestimonialCard = styled(Card)`
  margin: 10px 20px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: none;
  background: ${props => props.isDarkMode ? 'rgba(30, 30, 30, 0.8)' : 'white'};
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }
  
  .ant-card-body {
    padding: 30px;
  }
  
  .quote-icon {
    font-size: 60px;
    color: var(--color-primary);
    opacity: 0.2;
    position: absolute;
    top: 20px;
    left: 20px;
  }
`;

const QuoteText = styled(Paragraph)`
  font-size: 1.1rem;
  font-style: italic;
  margin-bottom: 20px;
  text-align: left;
  position: relative;
  z-index: 1;
  color: ${props => props.isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.75)'};
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
`;

const AuthorAvatar = styled(Avatar)`
  width: 60px;
  height: 60px;
  margin-right: 15px;
  border: 2px solid var(--color-primary);
`;

const AuthorInfo = styled.div`
  text-align: left;
`;

const AuthorName = styled(Text)`
  display: block;
  font-weight: 600;
  font-size: 1.1rem;
  color: ${props => props.isDarkMode ? 'white' : 'rgba(0, 0, 0, 0.85)'};
`;

const AuthorLocation = styled(Text)`
  display: block;
  color: ${props => props.isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.5)'};
  font-size: 0.9rem;
`;

const StyledRate = styled(Rate)`
  margin-top: 5px;
  font-size: 0.9rem;
`;

// Main Component
const EnhancedCarousel = ({ 
  items, 
  autoplay = true, 
  effect = 'scrollx', 
  dots = true,
  arrows = true,
  isDarkMode = false,
  cardType = 'testimonial'
}) => {
  const carouselRef = React.createRef();
  
  const next = () => {
    carouselRef.current.next();
  };
  
  const previous = () => {
    carouselRef.current.prev();
  };
  
  const renderTestimonialCard = (item) => (
    <TestimonialCard isDarkMode={isDarkMode}>
      <div className="quote-icon">"</div>
      <QuoteText isDarkMode={isDarkMode}>{item.quote}</QuoteText>
      <AuthorSection>
        <AuthorAvatar src={item.avatar || 'https://randomuser.me/api/portraits/lego/1.jpg'} />
        <AuthorInfo>
          <AuthorName isDarkMode={isDarkMode}>{item.author}</AuthorName>
          <AuthorLocation isDarkMode={isDarkMode}>{item.location}</AuthorLocation>
          <StyledRate value={item.rating || 5} disabled />
        </AuthorInfo>
      </AuthorSection>
    </TestimonialCard>
  );
  
  const renderImageCard = (item) => (
    <div style={{ padding: '10px' }}>
      <img 
        src={item.image} 
        alt={item.title || 'Carousel image'} 
        style={{ 
          width: '100%', 
          height: '400px', 
          objectFit: 'cover', 
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)'
        }} 
      />
      {item.title && (
        <div style={{ 
          position: 'absolute', 
          bottom: '20px', 
          left: '20px', 
          right: '20px', 
          background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
          padding: '20px',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px'
        }}>
          <Title level={4} style={{ color: 'white', margin: 0 }}>{item.title}</Title>
          {item.description && <Text style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{item.description}</Text>}
        </div>
      )}
    </div>
  );
  
  return (
    <CarouselWrapper>
      {arrows && (
        <>
          <CarouselArrow 
            className="prev" 
            icon={<LeftOutlined />} 
            onClick={previous} 
          />
          <CarouselArrow 
            className="next" 
            icon={<RightOutlined />} 
            onClick={next} 
          />
        </>
      )}
      
      <StyledCarousel
        ref={carouselRef}
        autoplay={autoplay}
        effect={effect}
        dots={dots}
        slidesToShow={cardType === 'testimonial' ? 1 : 1}
        slidesToScroll={1}
        centerMode={cardType === 'image'}
        centerPadding="60px"
      >
        {items.map((item, index) => (
          <div key={item.id || index}>
            {cardType === 'testimonial' 
              ? renderTestimonialCard(item) 
              : renderImageCard(item)
            }
          </div>
        ))}
      </StyledCarousel>
    </CarouselWrapper>
  );
};

export default EnhancedCarousel;
