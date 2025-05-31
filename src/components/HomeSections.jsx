import React from "react";

// Services Section Component
export const ServicesSection = ({ LazyImage, scrollToSection }) => (
  <section
    id="services"
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
          Our Services
        </div>
        <h2 style={{
          fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
          fontFamily: "'Playfair Display', serif",
          fontWeight: "bold",
          color: "#1a2332",
          marginBottom: "20px"
        }}>
          Premium Jewelry Manufacturing Services
        </h2>
        <p style={{
          fontSize: "20px",
          color: "#4a5568",
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "1.6"
        }}>
          From concept to creation, we offer comprehensive diamond jewelry manufacturing in silver & platinum
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "40px"
      }}>
        {[
          {
            icon: "💎",
            title: "Diamond Setting",
            description: "Expert precision diamond setting in silver & platinum with master craftsmen ensuring perfect stone placement and maximum brilliance.",
            features: ["Prong Setting", "Bezel Setting", "Pave Setting", "Channel Setting"]
          },
          {
            icon: "🔨",
            title: "Silver & Platinum Manufacturing",
            description: "Complete custom diamond jewelry manufacturing in premium silver and platinum from CAD design to finished piece.",
            features: ["CAD Design", "3D Modeling", "Silver Crafting", "Platinum Work"]
          },
          {
            icon: "✨",
            title: "Premium Finishing",
            description: "Professional polishing and finishing services for silver and platinum that bring out the ultimate beauty in every piece.",
            features: ["Hand Polishing", "Rhodium Plating", "Platinum Finishing", "Final Inspection"]
          },
          {
            icon: "🏆",
            title: "Certification Services",
            description: "Complete certification and documentation services ensuring authenticity and quality standards for diamond jewelry.",
            features: ["GIA Certification", "Quality Reports", "Appraisal Services", "Documentation"]
          }
        ].map((service, index) => (
          <div key={index} style={{
            background: "white",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 8px 32px rgba(26, 35, 50, 0.1)",
            textAlign: "center",
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
              fontSize: "48px",
              marginBottom: "24px"
            }}>
              {service.icon}
            </div>
            <h3 style={{
              fontSize: "24px",
              fontFamily: "'Playfair Display', serif",
              fontWeight: "bold",
              color: "#1a2332",
              marginBottom: "16px"
            }}>
              {service.title}
            </h3>
            <p style={{
              color: "#4a5568",
              fontSize: "16px",
              lineHeight: "1.6",
              marginBottom: "24px"
            }}>
              {service.description}
            </p>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}>
              {service.features.map((feature, idx) => (
                <div key={idx} style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  color: "#d4a574",
                  fontSize: "14px",
                  fontWeight: "600"
                }}>
                  <span style={{ fontSize: "12px" }}>✓</span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Collection Section Component
export const CollectionSection = ({ LazyImage }) => (
  <section
    id="collection"
    style={{
      padding: "120px 20px",
      background: "linear-gradient(135deg, #1a2332 0%, #243b53 50%, #d4a574 100%)",
      color: "white"
    }}
  >
    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <div style={{
          fontSize: "14px",
          color: "#e6b887",
          fontWeight: "600",
          letterSpacing: "3px",
          textTransform: "uppercase",
          marginBottom: "20px"
        }}>
          Our Collection
        </div>
        <h2 style={{
          fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
          fontFamily: "'Playfair Display', serif",
          fontWeight: "bold",
          marginBottom: "20px"
        }}>
          Exquisite Diamond Jewelry in Silver & Platinum
        </h2>
        <p style={{
          fontSize: "20px",
          color: "rgba(255, 255, 255, 0.9)",
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "1.6"
        }}>
          Discover our comprehensive range of diamond jewelry crafted in premium silver and platinum with precision and artistry
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "32px"
      }}>
        {[
          {
            title: "Diamond Silver Rings",
            desc: "Exquisite diamond rings in premium silver crafted with precision and artistry",
            image: "/images/jewelry_categories/rings.jpg",
            alt: "Luxury diamond silver rings collection",
            pieces: "500+ Designs"
          },
          {
            title: "Diamond Platinum Necklaces",
            desc: "Elegant diamond necklaces in platinum with timeless appeal and sophistication",
            image: "/images/jewelry_categories/necklaces.jpg",
            alt: "Premium diamond platinum necklaces",
            pieces: "300+ Designs"
          },
          {
            title: "Diamond Silver Earrings",
            desc: "Stunning diamond earrings in silver for every occasion and style",
            image: "/images/jewelry_categories/earrings.jpg",
            alt: "Beautiful diamond silver earrings",
            pieces: "400+ Designs"
          },
          {
            title: "Diamond Platinum Bracelets",
            desc: "Luxury diamond bracelets in platinum with exquisite detail and craftsmanship",
            image: "/images/jewelry_categories/bracelets.jpg",
            alt: "Elegant diamond platinum bracelets",
            pieces: "200+ Designs"
          }
        ].map((item, index) => (
          <div key={index} style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "24px",
            overflow: "hidden",
            transition: "all 0.4s ease",
            cursor: "pointer",
            position: "relative"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-12px) scale(1.02)";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
            e.currentTarget.style.borderColor = "#d4a574";
            e.currentTarget.style.boxShadow = "0 25px 50px rgba(0, 0, 0, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
            e.currentTarget.style.boxShadow = "none";
          }}
          >
            {/* Image Container */}
            <div style={{
              aspectRatio: "4/3",
              position: "relative",
              overflow: "hidden"
            }}>
              <LazyImage
                src={item.image}
                alt={item.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  transition: "transform 0.4s ease"
                }}
              />
              {/* Gradient Overlay */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(212, 165, 116, 0.2) 0%, rgba(26, 35, 50, 0.3) 100%)",
                opacity: 0.7
              }} />

              {/* Category Badge */}
              <div style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "rgba(212, 165, 116, 0.9)",
                color: "white",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "1px",
                backdropFilter: "blur(10px)"
              }}>
                {item.pieces}
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: "28px" }}>
              <h3 style={{
                fontSize: "22px",
                fontFamily: "'Playfair Display', serif",
                fontWeight: "bold",
                color: "white",
                marginBottom: "16px",
                lineHeight: "1.3"
              }}>
                {item.title}
              </h3>
              <p style={{
                color: "rgba(255, 255, 255, 0.85)",
                fontSize: "16px",
                lineHeight: "1.6",
                marginBottom: "20px"
              }}>
                {item.desc}
              </p>

              {/* View More Button */}
              <button style={{
                background: "linear-gradient(135deg, #d4a574 0%, #e6b887 100%)",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 8px 20px rgba(212, 165, 116, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
              >
                View Collection
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Contact Section Component
export const ContactSection = ({ LazyImage }) => (
  <section
    id="contact"
    style={{
      padding: "120px 20px",
      backgroundColor: "#ffffff"
    }}
  >
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{
        background: "linear-gradient(135deg, #1a2332 0%, #243b53 50%, #d4a574 100%)",
        borderRadius: "24px",
        padding: "80px 60px",
        textAlign: "center",
        color: "white",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Background Pattern */}
        <div style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background: "radial-gradient(circle, rgba(212, 165, 116, 0.1) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.3,
          animation: "float 20s ease-in-out infinite"
        }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            fontSize: "14px",
            color: "#e6b887",
            fontWeight: "600",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "20px"
          }}>
            Get In Touch
          </div>

          <h2 style={{
            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: "bold",
            marginBottom: "24px"
          }}>
            Ready to Create Your Dream Diamond Jewelry?
          </h2>

          <p style={{
            fontSize: "20px",
            marginBottom: "40px",
            opacity: "0.9",
            maxWidth: "600px",
            margin: "0 auto 40px auto",
            lineHeight: "1.6"
          }}>
            Contact our expert team to discuss your custom diamond jewelry requirements in silver & platinum and discover
            the Ramavatargems difference in premium diamond jewelry manufacturing.
          </p>

          <div style={{
            display: "flex",
            gap: "24px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "40px"
          }}>
            <button style={{
              background: "rgba(255, 255, 255, 0.9)",
              color: "#1a2332",
              fontWeight: "bold",
              padding: "18px 32px",
              borderRadius: "30px",
              border: "none",
              cursor: "pointer",
              fontSize: "18px",
              transition: "all 0.3s ease",
              textTransform: "uppercase",
              letterSpacing: "1px"
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "white";
              e.target.style.transform = "translateY(-3px) scale(1.05)";
              e.target.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 0.9)";
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.boxShadow = "none";
            }}
            >
              📞 Call Now: +91-141-XXXXXXX
            </button>
            <button style={{
              background: "transparent",
              color: "white",
              fontWeight: "600",
              padding: "18px 32px",
              borderRadius: "30px",
              border: "2px solid rgba(255, 255, 255, 0.5)",
              cursor: "pointer",
              fontSize: "18px",
              transition: "all 0.3s ease",
              textTransform: "uppercase",
              letterSpacing: "1px"
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 0.1)";
              e.target.style.borderColor = "white";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.borderColor = "rgba(255, 255, 255, 0.5)";
              e.target.style.transform = "translateY(0)";
            }}
            >
              ✉️ Email Us
            </button>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "32px",
            marginTop: "40px"
          }}>
            {[
              { icon: "🏢", title: "Visit Our Workshop", desc: "Jaipur, Rajasthan, India" },
              { icon: "⏰", title: "Business Hours", desc: "Mon-Sat: 9AM-7PM" },
              { icon: "🌍", title: "Global Shipping", desc: "Worldwide Delivery" }
            ].map((item, index) => (
              <div key={index} style={{
                textAlign: "center",
                padding: "20px"
              }}>
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>{item.icon}</div>
                <h4 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "8px" }}>{item.title}</h4>
                <p style={{ fontSize: "14px", opacity: "0.8" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
