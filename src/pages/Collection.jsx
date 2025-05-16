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
    title: "Royal Kundan Necklace",
    category: "traditional",
    description: "Exquisite kundan work with pearl detailing",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Emerald Pendant",
    category: "gemstones",
    description: "Vibrant emerald set in 18k gold",
    image:
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Diamond Eternity Band",
    category: "diamonds",
    description: "Brilliant cut diamonds in platinum setting",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Sapphire Statement Ring",
    category: "gemstones",
    description: "Blue sapphire surrounded by diamonds",
    image:
      "https://images.unsplash.com/photo-1589674781759-c21c37956a44?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Polki Bridal Set",
    category: "traditional",
    description: "Complete bridal set with uncut diamonds",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "Diamond Tennis Bracelet",
    category: "diamonds",
    description: "Classic design with 3 carats of diamonds",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    title: "Ruby Chandelier Earrings",
    category: "gemstones",
    description: "Elegant design with Burmese rubies",
    image:
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    title: "Gold Kada Bangle",
    category: "traditional",
    description: "Handcrafted solid gold bangle with intricate detailing",
    image:
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    title: "Diamond Solitaire Necklace",
    category: "diamonds",
    description: "Minimalist design with 1 carat diamond",
    image:
      "https://images.unsplash.com/photo-1599459182681-c938b7f65344?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    title: "Emerald Cut Diamond Ring",
    category: "rolls",
    description: "Luxury statement piece with emerald cut diamond",
    image:
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    title: "Pearl and Diamond Necklace",
    category: "rolls",
    description: "South sea pearls with diamond accents",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    title: "Platinum Men's Band",
    category: "rolls",
    description: "Contemporary design with channel set diamonds",
    image:
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfbfc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

// Categories
const categories = [
  { id: "all", name: "All Collections" },
  { id: "traditional", name: "Traditional Jewelry" },
  { id: "gemstones", name: "Gemstones" },
  { id: "diamonds", name: "Diamonds" },
  { id: "rolls", name: "Rolls (Luxury)" },
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
            title="Our Collection"
            subtitle="Discover our exquisite range of handcrafted jewelry pieces"
          />
        </HeroContent>
      </HeroSection>

      <CollectionContainer>
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
                    View Details
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
                    View All {category.name}
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
                            View Details
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
