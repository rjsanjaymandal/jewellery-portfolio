import React, { useState } from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle.jsx";
import Button from "../components/Button.jsx";

const CollectionContainer = styled.div`
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

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-md);
  flex-wrap: wrap;
  gap: 1rem;
`;

const FilterButton = styled.button`
  background: ${({ active }) =>
    active ? "var(--color-primary)" : "transparent"};
  color: ${({ active }) => (active ? "white" : "var(--color-text)")};
  border: 2px solid var(--color-primary);
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius);
  font-family: var(--font-body);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-primary);
    color: white;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-md);
`;

const ProductCard = styled.div`
  background-color: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.div`
  height: 300px;
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, 0.5) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${ProductCard}:hover &::after {
    opacity: 1;
  }
`;

const ProductContent = styled.div`
  padding: var(--spacing-sm);
`;

const ProductTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const ProductCategory = styled.span`
  display: inline-block;
  background-color: var(--color-primary-light);
  color: var(--color-primary-dark);
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled.p`
  color: var(--color-text-light);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-sm);
`;

const CategorySection = styled.section`
  padding: var(--spacing-xl) 0;
  background-color: ${({ index }) =>
    index % 2 === 0
      ? "var(--color-background)"
      : "var(--color-background-alt)"};
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const CategoryTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: 2rem;
  color: var(--color-secondary);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: var(--color-primary);
  }
`;

// Sample product data
const products = [
  {
    id: 1,
    title: "Round Brilliant Cut",
    category: "cuts",
    description:
      "The most popular diamond cut with 58 facets for maximum brilliance",
    image: "/images/diamonds/round_brilliant.jpg",
  },
  {
    id: 2,
    title: "Princess Cut",
    category: "cuts",
    description: "Square shape with pointed corners and exceptional brilliance",
    image: "/images/diamonds/princess_cut.jpg",
  },
  {
    id: 3,
    title: "Emerald Cut",
    category: "cuts",
    description:
      "Rectangular shape with stepped facets and elegant hall-of-mirrors effect",
    image: "/images/diamonds/emerald_cut.jpg",
  },
  {
    id: 4,
    title: "Cushion Cut",
    category: "cuts",
    description:
      "Square or rectangular shape with rounded corners and larger facets",
    image: "/images/diamonds/cushion_cut.jpg",
  },
  {
    id: 5,
    title: "Asscher Cut",
    category: "cuts",
    description: "Octagonal shape with stepped facets and high crown for depth",
    image: "/images/diamonds/asscher_cut.jpg",
  },
  {
    id: 6,
    title: "VS1 Clarity",
    category: "clarity",
    description:
      "Very Slightly Included - minor inclusions difficult to see under 10x magnification",
    image: "/images/diamonds/round_brilliant.jpg",
  },
  {
    id: 7,
    title: "VVS2 Clarity",
    category: "clarity",
    description:
      "Very Very Slightly Included - extremely difficult to see inclusions even under magnification",
    image: "/images/diamonds/princess_cut.jpg",
  },
  {
    id: 8,
    title: "IF Clarity",
    category: "clarity",
    description:
      "Internally Flawless - no inclusions visible under 10x magnification",
    image: "/images/diamonds/emerald_cut.jpg",
  },
  {
    id: 9,
    title: "D Color Grade",
    category: "color",
    description: "Absolutely colorless - the highest color grade for diamonds",
    image: "/images/diamonds/oval_cut.jpg",
  },
  {
    id: 10,
    title: "F Color Grade",
    category: "color",
    description:
      "Colorless with minimal traces of color, detectable only by expert gemologists",
    image: "/images/diamonds/marquise_cut.jpg",
  },
  {
    id: 11,
    title: "Fancy Yellow Diamonds",
    category: "specialty",
    description: "Natural yellow diamonds with intense color saturation",
    image: "/images/diamonds/pear_cut.jpg",
  },
  {
    id: 12,
    title: "Rough Diamonds",
    category: "specialty",
    description:
      "Uncut, natural diamonds ready for our expert cutting and polishing process",
    image: "/images/diamonds/rough_diamonds.jpg",
  },
];

// Categories
const categories = [
  { id: "all", name: "All Collections" },
  { id: "cuts", name: "Diamond Cuts" },
  { id: "clarity", name: "Clarity Grades" },
  { id: "color", name: "Color Grades" },
  { id: "specialty", name: "Specialty Diamonds" },
];

const Collection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  // Group products by category for the category sections
  const productsByCategory = {};
  categories.slice(1).forEach((category) => {
    productsByCategory[category.id] = products.filter(
      (product) => product.category === category.id
    );
  });

  return (
    <>
      <HeroSection>
        <HeroContent>
          <SectionTitle
            title="Diamond Collection"
            subtitle="Explore our precision-cut diamonds manufactured with advanced technology and expert craftsmanship"
          />
        </HeroContent>
      </HeroSection>

      <CollectionContainer>
        <section style={{ marginBottom: "40px" }}>
          <SectionTitle
            title="Diamond Manufacturing Excellence"
            subtitle="From rough stones to brilliant masterpieces"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            <p>
              At Ramavatargems, we specialize in the complete diamond
              manufacturing process. Our expert craftsmen transform rough
              diamonds into exquisite finished stones using a combination of
              traditional techniques and cutting-edge technology.
            </p>
            <p>
              Each diamond in our collection undergoes a rigorous manufacturing
              process that includes planning, cutting, polishing, and quality
              control. We maintain the highest standards at every stage,
              ensuring that our diamonds achieve optimal brilliance, fire, and
              scintillation.
            </p>
            <p>
              Browse our collection below to explore the various diamond cuts,
              clarity grades, color grades, and specialty diamonds we
              manufacture. Each category showcases our commitment to excellence
              and precision in diamond manufacturing.
            </p>
          </div>
        </section>

        <section>
          <FilterContainer>
            {categories.map((category) => (
              <FilterButton
                key={category.id}
                active={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </FilterButton>
            ))}
          </FilterContainer>

          <ProductGrid>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id}>
                <ProductImage
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <ProductContent>
                  <ProductCategory>
                    {categories.find((cat) => cat.id === product.category).name}
                  </ProductCategory>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductDescription>{product.description}</ProductDescription>
                  <Button variant="outline" size="small">
                    View Specifications
                  </Button>
                </ProductContent>
              </ProductCard>
            ))}
          </ProductGrid>
        </section>

        {activeCategory === "all" &&
          categories.slice(1).map((category, index) => (
            <CategorySection key={category.id} index={index}>
              <CollectionContainer>
                <CategoryHeader>
                  <CategoryTitle>{category.name}</CategoryTitle>
                  <Button
                    variant="outline"
                    size="small"
                    onClick={() => setActiveCategory(category.id)}
                  >
                    View All {category.name} Diamonds
                  </Button>
                </CategoryHeader>

                <ProductGrid>
                  {productsByCategory[category.id]
                    .slice(0, 3)
                    .map((product) => (
                      <ProductCard key={product.id}>
                        <ProductImage
                          style={{ backgroundImage: `url(${product.image})` }}
                        />
                        <ProductContent>
                          <ProductTitle>{product.title}</ProductTitle>
                          <ProductDescription>
                            {product.description}
                          </ProductDescription>
                          <Button variant="outline" size="small">
                            View Specifications
                          </Button>
                        </ProductContent>
                      </ProductCard>
                    ))}
                </ProductGrid>
              </CollectionContainer>
            </CategorySection>
          ))}
      </CollectionContainer>
    </>
  );
};

export default Collection;
