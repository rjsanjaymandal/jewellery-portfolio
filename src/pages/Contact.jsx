import React, { useState } from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle.jsx";
import Button from "../components/Button.jsx";

const ContactContainer = styled.div`
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

const ContactSection = styled.section`
  padding: var(--spacing-xl) 0;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h3 {
    margin-bottom: var(--spacing-md);
    color: var(--color-secondary);
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 50px;
      height: 3px;
      background-color: var(--color-primary);
    }
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--spacing-md);
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: var(--color-primary-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: var(--spacing-sm);
  color: var(--color-primary-dark);
  font-size: 1.5rem;
`;

const InfoContent = styled.div`
  h4 {
    margin-bottom: 0.25rem;
  }

  p {
    color: var(--color-text-light);
  }
`;

const ContactForm = styled.form`
  background-color: white;
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const FormGroup = styled.div`
  margin-bottom: var(--spacing-sm);

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--color-secondary);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-family: var(--font-body);
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-family: var(--font-body);
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const SuccessMessage = styled.div`
  background-color: #e6f7e6;
  color: #2e7d32;
  padding: var(--spacing-sm);
  border-radius: var(--border-radius);
  margin-bottom: var(--spacing-sm);
  text-align: center;
`;

const MapSection = styled.section`
  padding: var(--spacing-xl) 0;
  background-color: var(--color-background-alt);
`;

const MapContainer = styled.div`
  height: 400px;
  background-color: #f0f0f0;
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: "Map location: Johari Bazaar, Jaipur";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 0.5rem;
    text-align: center;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <HeroSection>
        <HeroContent>
          <SectionTitle
            title="Contact Us"
            subtitle="We'd love to hear from you. Reach out to us with any questions or inquiries."
          />
        </HeroContent>
      </HeroSection>

      <ContactContainer>
        <ContactSection>
          <ContactGrid>
            <ContactInfo>
              <h3>Get In Touch</h3>

              <InfoItem>
                <InfoIcon>📍</InfoIcon>
                <InfoContent>
                  <h4>Our Location</h4>
                  <p>Elegant Jewels, Johari Bazaar, Jaipur, Rajasthan, India</p>
                </InfoContent>
              </InfoItem>

              <InfoItem>
                <InfoIcon>📞</InfoIcon>
                <InfoContent>
                  <h4>Phone Number</h4>
                  <p>+91 98765 43210</p>
                  <p>+91 91234 56789</p>
                </InfoContent>
              </InfoItem>

              <InfoItem>
                <InfoIcon>✉️</InfoIcon>
                <InfoContent>
                  <h4>Email Address</h4>
                  <p>info@elegantjewels.com</p>
                  <p>sales@elegantjewels.com</p>
                </InfoContent>
              </InfoItem>

              <InfoItem>
                <InfoIcon>🕒</InfoIcon>
                <InfoContent>
                  <h4>Business Hours</h4>
                  <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                  <p>Sunday: Closed</p>
                </InfoContent>
              </InfoItem>
            </ContactInfo>

            <ContactForm onSubmit={handleSubmit}>
              {isSubmitted && (
                <SuccessMessage>
                  Thank you for your message! We'll get back to you soon.
                </SuccessMessage>
              )}

              <FormGroup>
                <label htmlFor="name">Your Name</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="email">Email Address</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="subject">Subject</label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="message">Your Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <Button type="submit">Send Message</Button>
            </ContactForm>
          </ContactGrid>
        </ContactSection>
      </ContactContainer>

      <MapSection>
        <ContactContainer>
          <SectionTitle
            title="Visit Our Showroom"
            subtitle="Experience our exquisite collection in person at our Jaipur showroom"
          />
          <MapContainer>
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Jaipur Map"
            />
          </MapContainer>
        </ContactContainer>
      </MapSection>
    </>
  );
};

export default Contact;
