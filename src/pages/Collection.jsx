import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Typography, Button as AntButton, Card, Tag } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import RamavatargemsLogo from "../components/logo/RamavatargemsLogo";

const CollectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

// Comprehensive product data for all jewelry categories
const allProducts = [
  // Diamond Rings Collection - Curated Selection
  {
    id: 1,
    title: "Contemporary Diamond Ring",
    model: "LR3069",
    category: "rings",
    description:
      "Modern contemporary design with brilliant diamond setting and sophisticated craftsmanship",
    image: "/images/rings/ring1.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Elegant Diamond Ring",
    model: "LR3270",
    category: "rings",
    description:
      "Elegant design featuring premium diamonds with exceptional clarity and cut",
    image: "/images/rings/ring2.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Luxury Diamond Ring",
    model: "LR3378",
    category: "rings",
    description:
      "Luxury diamond ring with intricate detailing and premium gemstone setting",
    image: "/images/rings/ring3.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "Classic Diamond Ring",
    model: "LR3379",
    category: "rings",
    description:
      "Classic design with timeless appeal and brilliant diamond arrangement",
    image: "/images/rings/ring4.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Designer Diamond Ring",
    model: "LR3414",
    category: "rings",
    description:
      "Designer piece featuring unique diamond pattern with exceptional brilliance",
    image: "/images/rings/ring5.jpg",
    featured: true,
  },
  {
    id: 6,
    title: "Premium Diamond Ring",
    model: "LR3416",
    category: "rings",
    description:
      "Premium quality diamond ring with sophisticated design and superior craftsmanship",
    image: "/images/rings/ring6.jpg",
    featured: false,
  },
  // Additional Premium Ring Models
  {
    id: 7,
    title: "Emerald Cut Diamond Ring",
    model: "LR3854",
    category: "rings",
    description:
      "Sophisticated emerald cut diamond ring with geometric precision and luxury appeal",
    image: "/images/rings/ring1.jpg",
    featured: true,
  },
  {
    id: 8,
    title: "Contemporary Twist Ring",
    model: "LR010038",
    category: "rings",
    description:
      "Modern twist design featuring brilliant diamonds with contemporary styling",
    image: "/images/rings/ring2.jpg",
    featured: false,
  },
  {
    id: 9,
    title: "Marquise Diamond Ring",
    model: "LR010039",
    category: "rings",
    description:
      "Elegant marquise diamond ring with distinctive shape and exceptional brilliance",
    image: "/images/rings/ring3.jpg",
    featured: true,
  },
  {
    id: 10,
    title: "Multi-Row Diamond Ring",
    model: "LR010020",
    category: "rings",
    description:
      "Luxurious multi-row diamond ring with cascading brilliance and premium setting",
    image: "/images/rings/ring4.jpg",
    featured: false,
  },
  {
    id: 11,
    title: "Spiral Diamond Ring",
    model: "LR010023",
    category: "rings",
    description:
      "Innovative spiral design with flowing diamond arrangement and modern appeal",
    image: "/images/rings/ring5.jpg",
    featured: true,
  },
  {
    id: 12,
    title: "Geometric Diamond Ring",
    model: "LR010027",
    category: "rings",
    description:
      "Bold geometric design with structured diamond placement and contemporary finish",
    image: "/images/rings/ring6.jpg",
    featured: false,
  },
  // Diamond Earrings Collection
  {
    id: 20,
    title: "Chandelier Diamond Earrings",
    model: "ER-001",
    category: "earrings",
    description:
      "Stunning chandelier earrings perfect for special occasions and formal events",
    image: "/images/jewelry_categories/earrings.jpg",
    featured: true,
  },
  {
    id: 21,
    title: "Drop Diamond Earrings",
    model: "ER-002",
    category: "earrings",
    description:
      "Elegant drop earrings with cascading diamond design and graceful movement",
    image: "/images/jewelry_categories/earrings.jpg",
    featured: false,
  },
  {
    id: 22,
    title: "Huggie Diamond Earrings",
    model: "ER-003",
    category: "earrings",
    description:
      "Modern huggie earrings with diamond accents for everyday luxury",
    image: "/images/jewelry_categories/earrings.jpg",
    featured: false,
  },
  {
    id: 23,
    title: "Stud Diamond Earrings",
    model: "ER-004",
    category: "earrings",
    description:
      "Classic diamond stud earrings with brilliant cut stones and secure settings",
    image: "/images/jewelry_categories/earrings.jpg",
    featured: true,
  },
  {
    id: 24,
    title: "Hoop Diamond Earrings",
    model: "ER-005",
    category: "earrings",
    description:
      "Contemporary hoop earrings featuring diamonds along the entire circumference",
    image: "/images/jewelry_categories/earrings.jpg",
    featured: false,
  },
  {
    id: 25,
    title: "Cluster Diamond Earrings",
    model: "ER-006",
    category: "earrings",
    description:
      "Sophisticated cluster design with multiple diamonds creating floral patterns",
    image: "/images/jewelry_categories/earrings.jpg",
    featured: true,
  },
  // Diamond Necklaces Collection
  {
    id: 30,
    title: "Diamond Tennis Necklace",
    model: "NK-001",
    category: "necklaces",
    description:
      "Classic tennis necklace with perfectly matched diamonds and secure clasp",
    image: "/images/jewelry_categories/necklaces.jpg",
    featured: true,
  },
  {
    id: 31,
    title: "Diamond Pendant Necklace",
    model: "NK-002",
    category: "necklaces",
    description:
      "Elegant pendant necklace with center diamond and delicate chain",
    image: "/images/jewelry_categories/necklaces.jpg",
    featured: false,
  },
  {
    id: 32,
    title: "Diamond Rivière Necklace",
    model: "NK-003",
    category: "necklaces",
    description:
      "Luxurious rivière necklace with graduated diamonds and exceptional brilliance",
    image: "/images/jewelry_categories/necklaces.jpg",
    featured: true,
  },
  {
    id: 33,
    title: "Diamond Choker Necklace",
    model: "NK-004",
    category: "necklaces",
    description:
      "Contemporary choker design with multiple diamond rows and modern appeal",
    image: "/images/jewelry_categories/necklaces.jpg",
    featured: false,
  },
  {
    id: 34,
    title: "Diamond Statement Necklace",
    model: "NK-005",
    category: "necklaces",
    description:
      "Bold statement piece with dramatic diamond arrangement and luxury finish",
    image: "/images/jewelry_categories/necklaces.jpg",
    featured: true,
  },
  {
    id: 35,
    title: "Diamond Collar Necklace",
    model: "NK-006",
    category: "necklaces",
    description:
      "Sophisticated collar necklace with intricate diamond pattern and elegant design",
    image: "/images/jewelry_categories/necklaces.jpg",
    featured: false,
  },
  // Diamond Bracelets Collection
  {
    id: 40,
    title: "Diamond Tennis Bracelet",
    model: "BR-001",
    category: "bracelets",
    description:
      "Timeless tennis bracelet with brilliant diamonds and secure clasp mechanism",
    image: "/images/jewelry_categories/bracelets.jpg",
    featured: true,
  },
  {
    id: 41,
    title: "Diamond Chain Bracelet",
    model: "BR-002",
    category: "bracelets",
    description:
      "Delicate chain bracelet with diamond accents and adjustable length",
    image: "/images/jewelry_categories/bracelets.jpg",
    featured: false,
  },
  {
    id: 42,
    title: "Diamond Bangle Bracelet",
    model: "BR-003",
    category: "bracelets",
    description:
      "Elegant bangle bracelet with continuous diamond setting and luxury appeal",
    image: "/images/jewelry_categories/bracelets.jpg",
    featured: true,
  },
  {
    id: 43,
    title: "Diamond Link Bracelet",
    model: "BR-004",
    category: "bracelets",
    description:
      "Contemporary link bracelet with diamond-set connections and modern design",
    image: "/images/jewelry_categories/bracelets.jpg",
    featured: false,
  },
  {
    id: 44,
    title: "Diamond Cuff Bracelet",
    model: "BR-005",
    category: "bracelets",
    description:
      "Bold cuff bracelet with dramatic diamond arrangement and statement appeal",
    image: "/images/jewelry_categories/bracelets.jpg",
    featured: true,
  },
  {
    id: 45,
    title: "Diamond Charm Bracelet",
    model: "BR-006",
    category: "bracelets",
    description:
      "Sophisticated charm bracelet with diamond-set charms and personalized appeal",
    image: "/images/jewelry_categories/bracelets.jpg",
    featured: false,
  },
];

// Categories
const categories = [
  { id: "all", name: "All Collections", icon: "💎" },
  { id: "rings", name: "Diamond Rings", icon: "💍" },
  { id: "earrings", name: "Diamond Earrings", icon: "👂" },
  { id: "necklaces", name: "Diamond Necklaces", icon: "📿" },
  { id: "bracelets", name: "Diamond Bracelets", icon: "⌚" },
];

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

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// Modern styled components with beautiful gradients
const CollectionPage = styled.div`
  min-height: 100vh;
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
        rgba(212, 175, 55, 0.1) 0%,
        transparent 40%
      ),
      radial-gradient(
        circle at 85% 15%,
        rgba(63, 81, 181, 0.08) 0%,
        transparent 40%
      ),
      radial-gradient(
        circle at 50% 50%,
        rgba(212, 175, 55, 0.06) 0%,
        transparent 60%
      );
    z-index: 0;
  }
`;

const HeroSection = styled.div`
  padding: 120px 0 80px;
  text-align: center;
  position: relative;
  z-index: 10;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);

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
        rgba(212, 175, 55, 0.15) 0%,
        transparent 50%
      );
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroTitle = styled(Title)`
  color: #ffffff !important;
  font-size: 3.5rem !important;
  font-weight: 800 !important;
  margin-bottom: 20px !important;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  font-family: "Playfair Display", serif !important;

  span {
    color: #d4af37 !important;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(212, 175, 55, 0.6);
  }

  @media (max-width: 768px) {
    font-size: 2.5rem !important;
  }
`;

const HeroSubtitle = styled(Text)`
  display: block;
  color: #ffffff;
  font-size: 1.3rem;
  margin-bottom: 40px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const FilterSection = styled.div`
  padding: 60px 0;
  position: relative;
  z-index: 10;
`;

const FilterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const CategoryFilters = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
  flex-wrap: wrap;
`;

const CategoryButton = styled(AntButton)`
  height: auto !important;
  padding: 15px 30px !important;
  border-radius: 50px !important;
  font-size: 1rem !important;
  font-weight: 600 !important;
  border: 2px solid
    ${(props) => (props.active ? "#d4af37" : "rgba(212, 175, 55, 0.3)")} !important;
  background: ${(props) =>
    props.active
      ? "linear-gradient(135deg, #d4af37 0%, #f7e9b7 100%)"
      : "rgba(255, 255, 255, 0.9)"} !important;
  color: ${(props) => (props.active ? "#000000" : "#2c3e50")} !important;
  transition: all 0.3s ease !important;
  animation: ${fadeIn} 0.6s ease-out;
  box-shadow: ${(props) =>
    props.active
      ? "0 8px 25px rgba(212, 175, 55, 0.4)"
      : "0 4px 15px rgba(0, 0, 0, 0.1)"} !important;

  &:hover {
    transform: translateY(-3px) !important;
    box-shadow: 0 12px 30px rgba(212, 175, 55, 0.3) !important;
    border-color: #d4af37 !important;
    background: linear-gradient(135deg, #d4af37 0%, #f7e9b7 100%) !important;
    color: #000000 !important;
  }

  .category-icon {
    margin-right: 8px;
    font-size: 1.2rem;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }
`;

const ProductCard = styled(Card)`
  border-radius: 20px !important;
  overflow: hidden !important;
  border: none !important;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
  transition: all 0.4s ease !important;
  animation: ${scaleIn} 0.6s ease-out;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.98) 0%,
    rgba(248, 249, 250, 0.95) 100%
  ) !important;

  &:hover {
    transform: translateY(-10px) scale(1.02) !important;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2), 0 0 30px rgba(212, 175, 55, 0.3) !important;
  }

  .ant-card-body {
    padding: 0 !important;
  }
`;

const ProductImageContainer = styled.div`
  position: relative;
  height: 250px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const ProductOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.4) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const ViewButton = styled(AntButton)`
  padding: 12px 24px !important;
  height: auto !important;
  border-radius: 25px !important;
  border: 2px solid #ffffff !important;
  background: rgba(255, 255, 255, 0.1) !important;
  color: #ffffff !important;
  font-size: 1rem !important;
  font-weight: 600 !important;
  backdrop-filter: blur(10px) !important;
  transition: all 0.3s ease !important;

  &:hover {
    background: #d4af37 !important;
    border-color: #d4af37 !important;
    color: #000000 !important;
    transform: scale(1.05) !important;
  }
`;

const ProductInfo = styled.div`
  padding: 25px;
  text-align: center;
`;

const ProductTitle = styled(Title)`
  color: #2c3e50 !important;
  font-size: 1.4rem !important;
  font-weight: 700 !important;
  margin-bottom: 8px !important;
  font-family: "Playfair Display", serif !important;
`;

const ProductModel = styled(Text)`
  color: #666 !important;
  font-size: 0.9rem !important;
  display: block !important;
  margin-bottom: 10px !important;
  font-weight: 500 !important;
`;

const ProductDescription = styled(Text)`
  color: #666 !important;
  font-size: 0.95rem !important;
  line-height: 1.5 !important;
  margin-bottom: 15px !important;
`;

const FeaturedBadge = styled(Tag)`
  position: absolute !important;
  top: 15px !important;
  right: 15px !important;
  background: linear-gradient(135deg, #d4af37 0%, #f7e9b7 100%) !important;
  color: #000000 !important;
  border: none !important;
  font-weight: 600 !important;
  padding: 5px 12px !important;
  border-radius: 20px !important;
  font-size: 0.8rem !important;
  z-index: 10 !important;
`;

const Collection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? allProducts
      : allProducts.filter((product) => product.category === activeCategory);

  return (
    <CollectionPage>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroTitle level={1}>
            Our <span>Diamond Jewelry</span> Manufacturing Collection
          </HeroTitle>
          <HeroSubtitle>
            Explore our exquisite range of handcrafted diamond jewelry pieces.
            Each design showcases our manufacturing expertise, precision
            craftsmanship, and commitment to creating timeless pieces that
            reflect the beauty of fine jewelry making. From elegant rings to
            stunning necklaces, witness the artistry of our skilled craftsmen.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      {/* Filter and Products Section */}
      <FilterSection>
        <FilterContainer>
          {/* Category Filters */}
          <CategoryFilters>
            {categories.map((category) => (
              <CategoryButton
                key={category.id}
                active={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                {category.name}
              </CategoryButton>
            ))}
          </CategoryFilters>

          {/* Products Grid */}
          <ProductGrid>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id}>
                <ProductImageContainer>
                  {product.featured && (
                    <FeaturedBadge>✨ Featured</FeaturedBadge>
                  )}
                  <img
                    src={product.image}
                    alt={`${product.title} - ${product.model} - Ramavatargems Diamond Jewelry Manufacturing`}
                    onError={(e) => {
                      // Fallback to appropriate category image
                      if (product.category === "rings") {
                        e.target.src = "/images/rings/ring1.jpg";
                      } else {
                        e.target.src =
                          "/images/jewelry_pieces/diamond_ring_making.jpg";
                      }
                    }}
                  />
                  <ProductOverlay>
                    <ViewButton icon={<EyeOutlined />}>View Details</ViewButton>
                  </ProductOverlay>
                </ProductImageContainer>

                <ProductInfo>
                  <ProductTitle level={4}>{product.title}</ProductTitle>
                  <ProductModel>Model: {product.model}</ProductModel>
                  <ProductDescription>{product.description}</ProductDescription>

                  <AntButton
                    type="primary"
                    size="large"
                    style={{
                      background:
                        "linear-gradient(135deg, #d4af37 0%, #f7e9b7 100%)",
                      border: "none",
                      borderRadius: "25px",
                      fontWeight: 600,
                      color: "#000000",
                      padding: "10px 28px",
                      height: "auto",
                      marginTop: "10px",
                    }}
                  >
                    View Specifications
                  </AntButton>
                </ProductInfo>
              </ProductCard>
            ))}
          </ProductGrid>
        </FilterContainer>
      </FilterSection>
    </CollectionPage>
  );
};

export default Collection;
