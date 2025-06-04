import React from "react";

// Universal Footer Component
const UniversalFooter = ({ navigate, scrollToSection }) => {
  return (
    <footer style={{
      background: "linear-gradient(135deg, #1a2332 0%, #243b53 100%)",
      color: "white",
      padding: "80px 20px 40px 20px"
    }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Main Footer Content */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "60px",
          marginBottom: "60px"
        }}>
          {/* Company Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
              <div style={{
                width: "60px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <img
                  src="/images/ramavatargems-logo.png"
                  alt="Ramavatargems - Premium Diamond Jewelry Manufacturer"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    filter: "brightness(0) invert(1) drop-shadow(0 4px 8px rgba(212, 165, 116, 0.3))"
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
                  fontFamily: "'Playfair Display', serif",
                  lineHeight: "1.2"
                }}>
                  Ramavatargems
                </div>
                <div style={{
                  fontSize: "11px",
                  color: "#c0c0c0",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  marginTop: "2px"
                }}>
                  Since 1982
                </div>
              </div>
            </div>

            <p style={{
              fontSize: "16px",
              lineHeight: "1.6",
              color: "rgba(255, 255, 255, 0.8)",
              marginBottom: "24px"
            }}>
              Premier diamond jewelry manufacturer in Jaipur, crafting exquisite pieces in silver & platinum with
              precision stone setting and expert craftsmanship for over four decades.
            </p>

            {/* Social Media Links */}
            <div style={{
              display: "flex",
              gap: "16px",
              marginBottom: "24px"
            }}>
              {[
                { icon: "📘", name: "Facebook", url: "#" },
                { icon: "📷", name: "Instagram", url: "#" },
                { icon: "🐦", name: "Twitter", url: "#" },
                { icon: "💼", name: "LinkedIn", url: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "rgba(192, 192, 192, 0.2)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    border: "1px solid rgba(192, 192, 192, 0.3)"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#c0c0c0";
                    e.target.style.transform = "translateY(-2px) scale(1.1)";
                    e.target.style.boxShadow = "0 8px 20px rgba(192, 192, 192, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(192, 192, 192, 0.2)";
                    e.target.style.transform = "translateY(0) scale(1)";
                    e.target.style.boxShadow = "none";
                  }}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "24px",
              color: "#c0c0c0",
              fontFamily: "'Playfair Display', serif"
            }}>
              Quick Links
            </h3>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}>
              {[
                { label: "Home", action: () => navigate && navigate('/') },
                { label: "About Us", action: () => navigate && navigate('/about') },
                { label: "Our Services", action: () => { navigate && navigate('/'); setTimeout(() => scrollToSection && scrollToSection('services'), 100); } },
                { label: "Collection", action: () => { navigate && navigate('/'); setTimeout(() => scrollToSection && scrollToSection('collection'), 100); } },
                { label: "Contact Us", action: () => { navigate && navigate('/'); setTimeout(() => scrollToSection && scrollToSection('contact'), 100); } },
                { label: "Manufacturing Process", action: () => { navigate && navigate('/about'); setTimeout(() => scrollToSection && scrollToSection('manufacturing'), 100); } }
              ].map((link, index) => (
                <span
                  key={index}
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "16px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: "4px 0",
                    borderBottom: "1px solid transparent"
                  }}
                  onClick={link.action}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#c0c0c0";
                    e.target.style.borderBottomColor = "#c0c0c0";
                    e.target.style.paddingLeft = "8px";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "rgba(255, 255, 255, 0.8)";
                    e.target.style.borderBottomColor = "transparent";
                    e.target.style.paddingLeft = "0";
                  }}
                >
                  {link.label}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "24px",
              color: "#c0c0c0",
              fontFamily: "'Playfair Display', serif"
            }}>
              Contact Information
            </h3>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px"
            }}>
              {[
                {
                  icon: "📍",
                  title: "Address",
                  content: "Jewelry Manufacturing Hub, Jaipur, Rajasthan 302001, India"
                },
                {
                  icon: "📞",
                  title: "Phone",
                  content: "+91-141-XXXXXXX"
                },
                {
                  icon: "✉️",
                  title: "Email",
                  content: "info@ramavatargems.com"
                },
                {
                  icon: "⏰",
                  title: "Business Hours",
                  content: "Monday - Saturday: 9:00 AM - 7:00 PM"
                }
              ].map((contact, index) => (
                <div key={index} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px"
                }}>
                  <span style={{
                    fontSize: "18px",
                    marginTop: "2px"
                  }}>
                    {contact.icon}
                  </span>
                  <div>
                    <div style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#c0c0c0",
                      marginBottom: "4px"
                    }}>
                      {contact.title}
                    </div>
                    <div style={{
                      fontSize: "14px",
                      color: "rgba(255, 255, 255, 0.8)",
                      lineHeight: "1.4"
                    }}>
                      {contact.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Overview */}
          <div>
            <h3 style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "24px",
              color: "#c0c0c0",
              fontFamily: "'Playfair Display', serif"
            }}>
              Our Expertise
            </h3>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}>
              {[
                "Diamond Setting in Silver & Platinum",
                "Custom Diamond Jewelry Manufacturing",
                "CAD Design & 3D Modeling",
                "Silver & Platinum Finishing",
                "Diamond Certification Services",
                "International Shipping"
              ].map((service, index) => (
                <div key={index} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "14px"
                }}>
                  <span style={{
                    color: "#c0c0c0",
                    fontSize: "12px"
                  }}>
                    ✓
                  </span>
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div style={{
          borderTop: "1px solid rgba(212, 165, 116, 0.3)",
          paddingTop: "40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px"
        }}>
          <div style={{
            fontSize: "14px",
            color: "rgba(255, 255, 255, 0.7)"
          }}>
            © 2024 Ramavatargems. All rights reserved. | Crafting Excellence Since 1982
          </div>

          <div style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap"
          }}>
            {[
              "Privacy Policy",
              "Terms of Service",
              "Quality Guarantee",
              "Shipping Policy"
            ].map((link, index) => (
              <span
                key={index}
                style={{
                  fontSize: "14px",
                  color: "rgba(255, 255, 255, 0.7)",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#c0c0c0";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "rgba(255, 255, 255, 0.7)";
                }}
              >
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UniversalFooter;
