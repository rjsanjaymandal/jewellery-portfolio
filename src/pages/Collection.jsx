import React, { useState } from "react";
import styled from "styled-components";
import { Typography } from "antd";
import RamavatargemsLogo from "../components/logo/RamavatargemsLogo";

const CollectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

// Sample product data for rings
const ringProducts = [
  {
    id: 1,
    title: "RING",
    model: "LR19178",
    category: "rings",
    image: "/images/rings/ring1.jpg",
  },
  {
    id: 2,
    title: "RING",
    model: "LR19179",
    category: "rings",
    image: "/images/rings/ring2.jpg",
  },
  {
    id: 3,
    title: "RING",
    model: "LR19182",
    category: "rings",
    image: "/images/rings/ring3.jpg",
  },
  {
    id: 4,
    title: "RING",
    model: "LR19184",
    category: "rings",
    image: "/images/rings/ring4.jpg",
  },
  {
    id: 5,
    title: "RING",
    model: "LR19186",
    category: "rings",
    image: "/images/rings/ring5.jpg",
  },
  {
    id: 6,
    title: "RING",
    model: "LR19187",
    category: "rings",
    image: "/images/rings/ring6.jpg",
  },
  {
    id: 7,
    title: "RING",
    model: "LR19188",
    category: "rings",
    image: "/images/rings/ring1.jpg",
  },
  {
    id: 8,
    title: "RING",
    model: "LR19207",
    category: "rings",
    image: "/images/rings/ring2.jpg",
  },
  {
    id: 9,
    title: "RING",
    model: "LR19208",
    category: "rings",
    image: "/images/rings/ring3.jpg",
  },
];

// Categories
const categories = [
  { id: "all", name: "All Collections" },
  { id: "rings", name: "Rings" },
  { id: "earrings", name: "Earrings" },
  { id: "bracelets", name: "Bracelets" },
  { id: "necklaces", name: "Necklaces" },
];

const { Title, Text } = Typography;

// New styled components for the collection page
const CollectionHeader = styled.div`
  background-color: #f5f5f5;
  padding: 60px 0;
  text-align: center;
  min-height: 100vh;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const CollectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  padding: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const RingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const RingCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  border-radius: 0;
  overflow: hidden;
`;

const RingImage = styled.div`
  height: 250px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #000;
  position: relative;
  padding: 20px;

  &::after {
    content: "RAM AVATAR GEMS";
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.3);
    font-family: var(--font-heading);
    letter-spacing: 1px;
  }
`;

const RingInfo = styled.div`
  padding: 15px;
  background-color: #fff;
  text-align: center;
`;

const ModelNumber = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
`;

const PageNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
`;

const Collection = () => {
  const [activeCategory, setActiveCategory] = useState("rings");

  return (
    <>
      <CollectionHeader>
        <CollectionContainer>
          <LogoContainer>
            <RamavatargemsLogo width={150} />
          </LogoContainer>

          <CollectionTitle>
            <Title
              level={2}
              style={{
                margin: 0,
                fontWeight: 400,
                textAlign: "center",
                flex: 1,
                fontSize: "36px",
                letterSpacing: "2px",
                color: "#333",
                fontFamily: "var(--font-heading)",
              }}
            >
              RINGS
            </Title>
            <Title
              level={3}
              style={{
                margin: 0,
                fontWeight: 400,
                textAlign: "right",
                flex: 1,
                fontSize: "24px",
                letterSpacing: "1px",
                color: "#333",
                fontFamily: "var(--font-heading)",
              }}
            >
              DIAMOND COLLECTION
            </Title>
          </CollectionTitle>

          <RingGrid>
            {ringProducts.map((product) => (
              <RingCard key={product.id}>
                <RingImage
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <RingInfo>
                  <Title level={5} style={{ margin: 0, fontWeight: 500 }}>
                    {product.title}
                  </Title>
                  <ModelNumber>MODEL: {product.model}</ModelNumber>
                </RingInfo>
              </RingCard>
            ))}
          </RingGrid>

          <PageNumber>
            <div style={{ display: "flex", alignItems: "center" }}>
              <RamavatargemsLogo width={50} />
              <Text style={{ marginLeft: 10 }}>PAGE 4</Text>
            </div>
            <div>
              <Text>RAM AVATAR GEMS</Text>
            </div>
          </PageNumber>
        </CollectionContainer>
      </CollectionHeader>
    </>
  );
};

export default Collection;
