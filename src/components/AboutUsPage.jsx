import React, { useState, useEffect } from "react";
import { CompanyHistorySection, ManufacturingSection } from "./AboutSections.jsx";
import UniversalFooter from "./UniversalFooter.jsx";

// About Us Page Component
const AboutUsPage = ({ navigate }) => {
  const [activeSection, setActiveSection] = useState('history');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle scroll effects and intersection observer for active sections
  useEffect(() => {
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

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Auto-rotate process images
  useEffect(() => {
    const processImages = [
      '/images/jewelry_manufacturing/design.jpg',
      '/images/jewelry_manufacturing/wax_model.jpg',
      '/images/jewelry_manufacturing/casting.jpg',
      '/images/jewelry_manufacturing/stone_setting.jpg',
      '/images/jewelry_manufacturing/polishing.jpg',
      '/images/jewelry_manufacturing/quality_check.jpg'
    ];

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % processImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Image lazy loading component
  const LazyImage = ({ src, alt, className, style, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);

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
          transition: 'all 0.3s ease'
        }}
        {...props}
      >
        {isInView && (
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
            loading="lazy"
          />
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
        backgroundColor: "rgba(255, 255, 255, 0.98)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid #d4a574",
        boxShadow: "0 8px 32px rgba(26, 35, 50, 0.15)",
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
            onClick={() => navigate('/')}
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

          {/* Navigation Links */}
          <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            <span
              style={{
                color: "#334e68",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onClick={() => navigate('/')}
              onMouseEnter={(e) => e.target.style.color = "#d4a574"}
              onMouseLeave={(e) => e.target.style.color = "#334e68"}
            >
              Home
            </span>
            <span
              style={{
                color: "#d4a574",
                fontWeight: "600",
                cursor: "pointer",
                borderBottom: "2px solid #d4a574",
                paddingBottom: "4px"
              }}
            >
              About Us
            </span>
            <span
              style={{
                color: "#334e68",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              onMouseEnter={(e) => e.target.style.color = "#d4a574"}
              onMouseLeave={(e) => e.target.style.color = "#334e68"}
            >
              Services
            </span>
            <span
              style={{
                color: "#334e68",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const element = document.getElementById('collection');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              onMouseEnter={(e) => e.target.style.color = "#d4a574"}
              onMouseLeave={(e) => e.target.style.color = "#334e68"}
            >
              Collection
            </span>
            <span
              style={{
                color: "#334e68",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              onMouseEnter={(e) => e.target.style.color = "#d4a574"}
              onMouseLeave={(e) => e.target.style.color = "#334e68"}
            >
              Contact
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
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
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
      <section style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a2332 0%, #243b53 50%, #d4a574 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "80px",
        textAlign: "center",
        color: "white",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Background Image */}
        <div style={{
          position: "absolute",
          inset: 0,
          zIndex: -2
        }}>
          <LazyImage
            src="/images/jewelry_manufacturing/stone_setting.jpg"
            alt="Master craftsman at work - Diamond jewelry manufacturing"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        </div>

        {/* Gradient Overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(26, 35, 50, 0.9) 0%, rgba(36, 59, 83, 0.8) 50%, rgba(193, 150, 96, 0.7) 100%)",
          zIndex: -1
        }} />

        {/* Hero Content */}
        <div style={{ maxWidth: "1000px", padding: "0 20px", zIndex: 1 }}>
          <div style={{
            width: "100px",
            height: "100px",
            margin: "0 auto 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
            backdropFilter: "blur(20px)",
            border: "2px solid rgba(212, 165, 116, 0.3)",
            boxShadow: "0 8px 32px rgba(212, 165, 116, 0.2)"
          }}>
            <img
              src="/images/ramavatargems-logo.png"
              alt="Ramavatargems Logo"
              style={{
                width: "60px",
                height: "60px",
                objectFit: "contain",
                filter: "brightness(0) invert(1)"
              }}
              onError={(e) => {
                e.target.src = "/images/ramavatargems-logo.svg";
              }}
            />
          </div>

          <h1 style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: "bold",
            marginBottom: "24px",
            lineHeight: "1.1",
            textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
            fontFamily: "'Playfair Display', serif"
          }}>
            About Ramavatargems
          </h1>

          <p style={{
            fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
            marginBottom: "48px",
            lineHeight: "1.7",
            opacity: "0.95",
            maxWidth: "800px",
            margin: "0 auto 48px auto",
            textShadow: "1px 1px 3px rgba(0,0,0,0.3)"
          }}>
            Discover the legacy of excellence, craftsmanship, and innovation that has defined
            Ramavatargems as a premier diamond jewelry manufacturer in silver & platinum since 1982
          </p>

          {/* Quick Navigation */}
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { label: "Our History", id: "history" },
              { label: "Manufacturing", id: "manufacturing" },
              { label: "Our Team", id: "team" },
              { label: "Quality", id: "quality" }
            ].map((item) => (
              <button
                key={item.id}
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  fontWeight: "600",
                  padding: "12px 24px",
                  borderRadius: "25px",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  cursor: "pointer",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(20px)"
                }}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(212, 165, 116, 0.8)";
                  e.target.style.borderColor = "#d4a574";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.1)";
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Company History Section */}
      <CompanyHistorySection LazyImage={LazyImage} />

      {/* Manufacturing Process Section */}
      <ManufacturingSection
        LazyImage={LazyImage}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />

      {/* Team Section */}
      <section
        id="team"
        style={{
          padding: "120px 20px",
          backgroundColor: "#ffffff"
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <div style={{
              fontSize: "14px",
              color: "#d4a574",
              fontWeight: "600",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "20px"
            }}>
              Our Craftsmen
            </div>
            <h2 style={{
              fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
              fontFamily: "'Playfair Display', serif",
              fontWeight: "bold",
              color: "#1a2332",
              marginBottom: "20px"
            }}>
              Master Artisans & Expert Team
            </h2>
            <p style={{
              fontSize: "20px",
              color: "#4a5568",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.6"
            }}>
              Meet the skilled craftsmen and dedicated professionals who bring our jewelry designs to life
            </p>
          </div>

          {/* Team Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "40px",
            marginBottom: "80px"
          }}>
            {[
              {
                name: "Shri Ramavatar",
                role: "Founder & Master Craftsman",
                experience: "42+ Years",
                specialty: "Diamond Setting & Design",
                image: "/images/team/founder.jpg",
                description: "Visionary founder with unparalleled expertise in traditional jewelry craftsmanship."
              },
              {
                name: "Rajesh Kumar",
                role: "Head of Manufacturing",
                experience: "25+ Years",
                specialty: "Production Management",
                image: "/images/team/manufacturing_head.jpg",
                description: "Oversees all manufacturing operations ensuring quality and precision in every piece."
              },
              {
                name: "Priya Sharma",
                role: "Chief Designer",
                experience: "18+ Years",
                specialty: "CAD Design & Innovation",
                image: "/images/team/chief_designer.jpg",
                description: "Creative force behind our contemporary designs and technical innovations."
              },
              {
                name: "Master Craftsmen Team",
                role: "Stone Setting Specialists",
                experience: "15+ Years Average",
                specialty: "Precision Diamond Setting",
                image: "/images/team/craftsmen_team.jpg",
                description: "Skilled artisans specializing in intricate diamond and gemstone setting techniques."
              }
            ].map((member, index) => (
              <div key={index} style={{
                background: "white",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(26, 35, 50, 0.1)",
                transition: "all 0.4s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(26, 35, 50, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(26, 35, 50, 0.1)";
              }}
              >
                <div style={{
                  aspectRatio: "4/3",
                  position: "relative",
                  overflow: "hidden"
                }}>
                  <LazyImage
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    style={{
                      width: "100%",
                      height: "100%"
                    }}
                  />
                  <div style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    background: "linear-gradient(135deg, #d4a574 0%, #e6b887 100%)",
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "600"
                  }}>
                    {member.experience}
                  </div>
                </div>
                <div style={{ padding: "32px" }}>
                  <h3 style={{
                    fontSize: "22px",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: "bold",
                    color: "#1a2332",
                    marginBottom: "8px"
                  }}>
                    {member.name}
                  </h3>
                  <div style={{
                    fontSize: "16px",
                    color: "#d4a574",
                    fontWeight: "600",
                    marginBottom: "8px"
                  }}>
                    {member.role}
                  </div>
                  <div style={{
                    fontSize: "14px",
                    color: "#6b7280",
                    marginBottom: "16px",
                    fontStyle: "italic"
                  }}>
                    Specialty: {member.specialty}
                  </div>
                  <p style={{
                    color: "#4a5568",
                    fontSize: "14px",
                    lineHeight: "1.6"
                  }}>
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section
        id="quality"
        style={{
          padding: "120px 20px",
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)"
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <div style={{
              fontSize: "14px",
              color: "#d4a574",
              fontWeight: "600",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "20px"
            }}>
              Quality Excellence
            </div>
            <h2 style={{
              fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
              fontFamily: "'Playfair Display', serif",
              fontWeight: "bold",
              color: "#1a2332",
              marginBottom: "20px"
            }}>
              Certifications & Standards
            </h2>
            <p style={{
              fontSize: "20px",
              color: "#4a5568",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.6"
            }}>
              Our commitment to excellence is validated by international certifications and rigorous quality control
            </p>
          </div>

          {/* Quality Features Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px"
          }}>
            {[
              {
                icon: "🏆",
                title: "ISO 9001:2015 Certified",
                description: "International quality management system certification ensuring consistent excellence in all our processes."
              },
              {
                icon: "💎",
                title: "GIA Certified Diamonds",
                description: "All our diamonds are certified by the Gemological Institute of America, guaranteeing authenticity and quality."
              },
              {
                icon: "🔬",
                title: "Advanced Quality Control",
                description: "State-of-the-art testing equipment and multi-stage quality checks ensure perfection in every piece."
              },
              {
                icon: "🌱",
                title: "Ethical Sourcing",
                description: "Committed to responsible sourcing practices and conflict-free diamonds for sustainable luxury."
              },
              {
                icon: "🛡️",
                title: "Lifetime Warranty",
                description: "Comprehensive warranty coverage on craftsmanship and materials, reflecting our confidence in quality."
              },
              {
                icon: "📋",
                title: "Detailed Documentation",
                description: "Complete certification and documentation for every piece, ensuring transparency and authenticity."
              }
            ].map((feature, index) => (
              <div key={index} style={{
                background: "white",
                padding: "40px",
                borderRadius: "20px",
                boxShadow: "0 8px 32px rgba(26, 35, 50, 0.1)",
                textAlign: "center",
                transition: "all 0.4s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(26, 35, 50, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(26, 35, 50, 0.1)";
              }}
              >
                <div style={{
                  fontSize: "48px",
                  marginBottom: "24px"
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: "20px",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: "bold",
                  color: "#1a2332",
                  marginBottom: "16px"
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: "#4a5568",
                  fontSize: "16px",
                  lineHeight: "1.6"
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

        html {
          scroll-behavior: smooth;
        }

        * {
          box-sizing: border-box;
        }

        /* Smooth transitions for all interactive elements */
        button, a, [role="button"] {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Image loading animation */
        img {
          transition: opacity 0.3s ease;
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
      `}</style>

      {/* Universal Footer */}
      <UniversalFooter navigate={navigate} scrollToSection={scrollToSection} />
    </div>
  );
};

export default AboutUsPage;
