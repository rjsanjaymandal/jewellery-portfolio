import React from "react";

// Company History Section
export const CompanyHistorySection = ({ LazyImage }) => (
  <section
    id="history"
    style={{
      padding: "120px 20px",
      backgroundColor: "#ffffff"
    }}
  >
    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: window.innerWidth > 768 ? "1fr 1fr" : "1fr",
        gap: "80px",
        alignItems: "center"
      }}>
        {/* Content Side */}
        <div>
          <div style={{
            fontSize: "14px",
            color: "#d4a574",
            fontWeight: "600",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "20px"
          }}>
            Our Legacy
          </div>

          <h2 style={{
            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: "bold",
            color: "#1a2332",
            marginBottom: "30px",
            lineHeight: "1.2"
          }}>
            Four Decades of Excellence
          </h2>

          <div style={{
            width: "80px",
            height: "3px",
            background: "linear-gradient(135deg, #d4a574 0%, #e6b887 50%, #d4a574 100%)",
            marginBottom: "40px",
            borderRadius: "3px"
          }} />

          <div style={{ marginBottom: "40px" }}>
            <p style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#4a5568",
              marginBottom: "24px"
            }}>
              Founded in 1982 by visionary craftsman Shri Ramavatar, Ramavatargems began as a small
              workshop in the heart of Jaipur with a simple yet profound mission: to create diamond
              jewelry that transcends time and captures the essence of eternal beauty.
            </p>
            <p style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#4a5568",
              marginBottom: "24px"
            }}>
              What started as a passion for precision stone setting has evolved into one of India's
              most respected diamond jewelry manufacturing houses. Our journey spans four decades
              of continuous innovation, unwavering quality, and dedication to the ancient art of
              jewelry craftsmanship.
            </p>
            <p style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#4a5568",
              marginBottom: "24px"
            }}>
              Today, Ramavatargems stands as a testament to the perfect harmony between traditional
              Indian craftsmanship and modern manufacturing excellence, serving discerning clients
              across 50+ countries worldwide.
            </p>
          </div>

          {/* Timeline */}
          <div style={{ marginBottom: "40px" }}>
            <h3 style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#1a2332",
              marginBottom: "24px"
            }}>
              Key Milestones
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { year: "1982", event: "Founded by Shri Ramavatar in Jaipur" },
                { year: "1995", event: "Expanded to international markets" },
                { year: "2005", event: "Introduced modern CAD/CAM technology" },
                { year: "2015", event: "Achieved ISO 9001:2015 certification" },
                { year: "2020", event: "Launched sustainable jewelry initiatives" },
                { year: "2024", event: "Celebrating 42 years of excellence" }
              ].map((milestone, index) => (
                <div key={index} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "12px 0",
                  borderLeft: "3px solid #d4a574",
                  paddingLeft: "20px"
                }}>
                  <div style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#d4a574",
                    minWidth: "50px"
                  }}>
                    {milestone.year}
                  </div>
                  <div style={{
                    fontSize: "16px",
                    color: "#4a5568"
                  }}>
                    {milestone.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div style={{ position: "relative" }}>
          <div style={{
            aspectRatio: "4/3",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 25px 50px rgba(26, 35, 50, 0.15)"
          }}>
            <LazyImage
              src="/images/jewelry_manufacturing/workshop_overview.jpg"
              alt="Ramavatargems workshop - Four decades of craftsmanship"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "20px"
              }}
            />
            <div style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              right: "20px",
              background: "rgba(26, 35, 50, 0.9)",
              color: "white",
              padding: "20px",
              borderRadius: "12px",
              backdropFilter: "blur(10px)"
            }}>
              <div style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>1982 - 2024</div>
              <div style={{ fontSize: "14px", opacity: "0.9" }}>Four decades of jewelry excellence</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Manufacturing Process Section
export const ManufacturingSection = ({ LazyImage, currentImageIndex, setCurrentImageIndex }) => (
  <section
    id="manufacturing"
    style={{
      padding: "120px 20px",
      background: "linear-gradient(135deg, #f4e4d1 0%, #f9f1e6 100%)"
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
          Our Process
        </div>
        <h2 style={{
          fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
          fontFamily: "'Playfair Display', serif",
          fontWeight: "bold",
          color: "#1a2332",
          marginBottom: "20px"
        }}>
          Diamond Jewelry Manufacturing in Silver & Platinum
        </h2>
        <p style={{
          fontSize: "20px",
          color: "#4a5568",
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "1.6"
        }}>
          From concept to creation, witness the meticulous process that transforms silver & platinum into exquisite diamond jewelry
        </p>
      </div>

      {/* Process Steps */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "40px",
        marginBottom: "80px"
      }}>
        {[
          {
            step: "01",
            title: "Design & Conceptualization",
            description: "Our master designers create detailed CAD models and technical drawings, ensuring every detail is perfect before production begins.",
            image: "/images/jewelry_manufacturing/design.jpg",
            alt: "Jewelry design process with CAD modeling"
          },
          {
            step: "02",
            title: "Wax Model Creation",
            description: "Precision wax models are crafted using advanced 3D printing technology, creating the foundation for each unique piece.",
            image: "/images/jewelry_manufacturing/wax_model.jpg",
            alt: "Wax model creation for jewelry casting"
          },
          {
            step: "03",
            title: "Silver & Platinum Casting",
            description: "The lost-wax casting process transforms wax models into premium silver and platinum frameworks with exceptional detail and accuracy.",
            image: "/images/jewelry_manufacturing/casting.jpg",
            alt: "Silver and platinum casting process for jewelry"
          },
          {
            step: "04",
            title: "Diamond Setting",
            description: "Master stone setters carefully place each diamond with precision, ensuring maximum brilliance and security.",
            image: "/images/jewelry_manufacturing/stone_setting.jpg",
            alt: "Expert diamond setting process"
          },
          {
            step: "05",
            title: "Silver & Platinum Finishing",
            description: "Multiple stages of polishing and finishing create the mirror-like surface that defines luxury silver and platinum jewelry.",
            image: "/images/jewelry_manufacturing/polishing.jpg",
            alt: "Silver and platinum jewelry polishing and finishing process"
          },
          {
            step: "06",
            title: "Quality Assurance",
            description: "Rigorous quality checks ensure every piece meets our exacting standards before final certification.",
            image: "/images/jewelry_manufacturing/quality_check.jpg",
            alt: "Quality assurance and jewelry inspection"
          }
        ].map((process, index) => (
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
                src={process.image}
                alt={process.alt}
                style={{
                  width: "100%",
                  height: "100%"
                }}
              />
              <div style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                width: "50px",
                height: "50px",
                background: "linear-gradient(135deg, #d4a574 0%, #e6b887 100%)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "18px",
                fontWeight: "bold",
                boxShadow: "0 4px 15px rgba(212, 165, 116, 0.4)"
              }}>
                {process.step}
              </div>
            </div>
            <div style={{ padding: "32px" }}>
              <h3 style={{
                fontSize: "22px",
                fontFamily: "'Playfair Display', serif",
                fontWeight: "bold",
                color: "#1a2332",
                marginBottom: "16px",
                lineHeight: "1.3"
              }}>
                {process.title}
              </h3>
              <p style={{
                color: "#4a5568",
                fontSize: "16px",
                lineHeight: "1.6"
              }}>
                {process.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
