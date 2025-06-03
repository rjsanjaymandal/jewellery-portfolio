import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import AboutUsPage from "./components/AboutUsPage.jsx";
import { ServicesSection, CollectionSection, ContactSection } from "./components/HomeSections.jsx";
import UniversalFooter from "./components/UniversalFooter.jsx";

// Router implementation for navigation
const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  return React.cloneElement(children, { currentPath, navigate });
};

// Enhanced luxury jewelry website with real images and professional design
const LuxuryJewelryWebsite = ({ navigate }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle scroll effects and intersection observer for active sections
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Intersection Observer for active section tracking
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Auto-rotate hero images
  useEffect(() => {
    const heroImages = [
      '/images/jewelry_manufacturing/stone_setting.jpg',
      '/images/jewelry_manufacturing/workshop_overview.jpg',
      '/images/jewelry_manufacturing/polishing.jpg'
    ];

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Image lazy loading component
  const LazyImage = ({ src, alt, className, style, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      const imgElement = document.querySelector(`[data-src="${src}"]`);
      if (imgElement) observer.observe(imgElement);

      return () => observer.disconnect();
    }, [src]);

    return (
      <div
        data-src={src}
        style={{
          ...style,
          background: isLoaded ? 'transparent' : 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        {...props}
      >
        {isInView && !hasError && (
          <img
            src={src}
            alt={alt}
            className={className}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }}
            onLoad={() => setIsLoaded(true)}
            onError={() => {
              setHasError(true);
              setIsLoaded(true);
            }}
            loading="lazy"
          />
        )}
        {hasError && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            color: '#6c757d',
            fontSize: '14px',
            textAlign: 'center'
          }}>
            💎 Image Loading...
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      {/* Navigation */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: isScrolled ? "1px solid #d4a574" : "1px solid rgba(212, 165, 116, 0.3)",
        boxShadow: isScrolled ? "0 8px 32px rgba(26, 35, 50, 0.15)" : "0 4px 20px rgba(26, 35, 50, 0.1)",
        padding: "0 20px",
        transition: "all 0.3s ease"
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "80px"
        }}>
          {/* Logo */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "16px", cursor: "pointer" }}
            onClick={() => scrollToSection('home')}
          >
            <div style={{
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease"
            }}>
              <img
                src="/images/ramavatargems-logo.png"
                alt="Ramavatargems - Premium Diamond Jewelry Manufacturer"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 4px 8px rgba(212, 165, 116, 0.3))"
                }}
                onError={(e) => {
                  e.target.src = "/images/ramavatargems-logo.svg";
                }}
              />
            </div>
            <div>
              <div style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#1a2332",
                letterSpacing: "0.5px",
                fontFamily: "'Playfair Display', serif",
                lineHeight: "1.2"
              }}>
                Ramavatargems
              </div>
              <div style={{
                fontSize: "11px",
                color: "#c19660",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontWeight: "600",
                marginTop: "2px"
              }}>
                Since 1982
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div
            className="desktop-nav"
            style={{
              display: "flex",
              gap: "32px",
              alignItems: "center"
            }}>
            {[
              { label: "Home", id: "home" },
              { label: "Services", id: "services" },
              { label: "Collection", id: "collection" },
              { label: "Contact", id: "contact" }
            ].map((item) => (
              <span
                key={item.id}
                style={{
                  color: activeSection === item.id ? "#d4a574" : "#334e68",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  borderBottom: activeSection === item.id ? "2px solid #d4a574" : "none",
                  paddingBottom: "4px"
                }}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={(e) => e.target.style.color = "#d4a574"}
                onMouseLeave={(e) => e.target.style.color = activeSection === item.id ? "#d4a574" : "#334e68"}
              >
                {item.label}
              </span>
            ))}
            <span
              style={{
                color: "#334e68",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onClick={() => navigate('/about')}
              onMouseEnter={(e) => e.target.style.color = "#d4a574"}
              onMouseLeave={(e) => e.target.style.color = "#334e68"}
            >
              About Us
            </span>
          </div>

          <button
            style={{
              background: "linear-gradient(135deg, #d4a574 0%, #e6b887 50%, #d4a574 100%)",
              color: "#1a2332",
              fontWeight: "600",
              padding: "10px 20px",
              borderRadius: "25px",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              boxShadow: "0 4px 15px rgba(212, 165, 116, 0.3)",
              transition: "all 0.3s ease"
            }}
            onClick={() => scrollToSection('contact')}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px) scale(1.05)";
              e.target.style.boxShadow = "0 8px 25px rgba(212, 165, 116, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.boxShadow = "0 4px 15px rgba(212, 165, 116, 0.3)";
            }}
          >
            📞 Get Quote
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          height: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "100px",
          paddingBottom: "100px",
          textAlign: "center",
          color: "white",
          overflow: "hidden"
        }}
      >
        {/* Background Image Carousel */}
        <div style={{
          position: "absolute",
          inset: 0,
          zIndex: -2
        }}>
          {[
            '/images/jewelry_manufacturing/stone_setting.jpg',
            '/images/jewelry_manufacturing/workshop_overview.jpg',
            '/images/jewelry_manufacturing/polishing.jpg'
          ].map((image, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                inset: 0,
                opacity: currentImageIndex === index ? 1 : 0,
                transition: "opacity 2s ease-in-out"
              }}
            >
              <LazyImage
                src={image}
                alt={`Diamond jewelry in silver & platinum craftsmanship ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(26, 35, 50, 0.85) 0%, rgba(36, 59, 83, 0.75) 50%, rgba(169, 169, 169, 0.65) 100%)",
          zIndex: -1
        }} />

        {/* Floating Animation Elements */}
        <div style={{
          position: "absolute",
          top: "15%",
          left: "8%",
          width: "120px",
          height: "120px",
          background: "rgba(192, 192, 192, 0.15)",
          borderRadius: "50%",
          filter: "blur(40px)",
          animation: "float 8s ease-in-out infinite"
        }} />
        <div style={{
          position: "absolute",
          bottom: "15%",
          right: "12%",
          width: "180px",
          height: "180px",
          background: "rgba(229, 228, 226, 0.1)",
          borderRadius: "50%",
          filter: "blur(60px)",
          animation: "float 10s ease-in-out infinite reverse"
        }} />
        <div style={{
          position: "absolute",
          top: "50%",
          left: "85%",
          width: "80px",
          height: "80px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          filter: "blur(30px)",
          animation: "float 6s ease-in-out infinite"
        }} />

        {/* Hero Content */}
        <div style={{ maxWidth: "1000px", padding: "0 20px", zIndex: 1 }}>
          {/* Logo Icon */}
          <div style={{
            width: "80px",
            height: "80px",
            margin: "0 auto 30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
            backdropFilter: "blur(20px)",
            border: "2px solid rgba(192, 192, 192, 0.3)",
            boxShadow: "0 8px 32px rgba(192, 192, 192, 0.2)"
          }}>
            <img
              src="/images/ramavatargems-logo.png"
              alt="Ramavatargems Logo"
              style={{
                width: "50px",
                height: "50px",
                objectFit: "contain",
                filter: "brightness(0) invert(1)"
              }}
              onError={(e) => {
                e.target.src = "/images/ramavatargems-logo.svg";
              }}
            />
          </div>

          {/* Main Heading */}
          <h1 style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: "bold",
            marginBottom: "20px",
            lineHeight: "1.1",
            textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
            fontFamily: "'Playfair Display', serif"
          }}>
            Exquisite Diamond<br />
            <span style={{
              background: "linear-gradient(135deg, #e5e4e2 0%, #c0c0c0 50%, #a8a8a8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "none"
            }}>
              Silver & Platinum
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            marginBottom: "16px",
            lineHeight: "1.6",
            opacity: "0.95",
            maxWidth: "700px",
            margin: "0 auto 16px auto",
            textShadow: "1px 1px 3px rgba(0,0,0,0.3)"
          }}>
            Premier Diamond Jewelry Manufacturer in Silver & Platinum
          </p>

          <p style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            marginBottom: "30px",
            lineHeight: "1.5",
            opacity: "0.9",
            maxWidth: "600px",
            margin: "0 auto 30px auto",
            textShadow: "1px 1px 3px rgba(0,0,0,0.3)"
          }}>
            Crafting Timeless Diamond Masterpieces with Precision Stone Setting Since 1982
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              style={{
                background: "linear-gradient(135deg, #c0c0c0 0%, #e5e4e2 50%, #c0c0c0 100%)",
                color: "#1a2332",
                fontWeight: "bold",
                padding: "14px 28px",
                borderRadius: "25px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                boxShadow: "0 6px 24px rgba(192, 192, 192, 0.3)",
                transition: "all 0.3s ease",
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}
              onClick={() => scrollToSection('services')}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px) scale(1.05)";
                e.target.style.boxShadow = "0 15px 40px rgba(192, 192, 192, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0) scale(1)";
                e.target.style.boxShadow = "0 8px 32px rgba(192, 192, 192, 0.3)";
              }}
            >
              💎 Our Craftsmanship
            </button>
            <button
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                color: "white",
                fontWeight: "600",
                padding: "14px 28px",
                borderRadius: "25px",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                cursor: "pointer",
                fontSize: "16px",
                transition: "all 0.3s ease",
                backdropFilter: "blur(20px)",
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}
              onClick={() => scrollToSection('collection')}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.2)";
                e.target.style.borderColor = "#c0c0c0";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.1)";
                e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
                e.target.style.transform = "translateY(0)";
              }}
            >
              ✨ View Collection
            </button>
          </div>


        </div>
      </section>

      {/* Services Section */}
      <ServicesSection LazyImage={LazyImage} scrollToSection={scrollToSection} />

      {/* Collection Section */}
      <CollectionSection LazyImage={LazyImage} />

      {/* Contact Section */}
      <ContactSection LazyImage={LazyImage} />

      {/* Universal Footer */}
      <UniversalFooter navigate={navigate} scrollToSection={scrollToSection} />

      {/* Enhanced CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-20px) rotate(0deg); }
          75% { transform: translateY(-10px) rotate(-1deg); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        html {
          scroll-behavior: smooth;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: 'Arial', sans-serif;
          overflow-x: hidden;
        }

        /* Responsive navigation */
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
        }

        /* Smooth transitions for all interactive elements */
        button, a, [role="button"] {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Image loading animation */
        img {
          transition: opacity 0.3s ease;
          max-width: 100%;
          height: auto;
        }

        /* Responsive grid fixes */
        .responsive-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .responsive-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #d4a574, #e6b887);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #c19660, #d4a574);
        }

        /* Focus styles for accessibility */
        button:focus, a:focus {
          outline: 2px solid #d4a574;
          outline-offset: 2px;
        }

        /* Prevent horizontal scroll */
        .container {
          max-width: 100%;
          overflow-x: hidden;
        }

        /* Fix for mobile viewport */
        @media (max-width: 768px) {
          .hero-content {
            padding: 0 1rem;
          }

          .section-padding {
            padding: 4rem 1rem;
          }
        }
      `}</style>
    </div>
  );
};

// Main App Component with Routing
const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

// App Content with Route Handling
const AppContent = ({ currentPath, navigate }) => {
  // Route to appropriate component based on current path
  if (currentPath === '/about') {
    return <AboutUsPage navigate={navigate} />;
  }

  // Default to home page
  return <LuxuryJewelryWebsite navigate={navigate} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
