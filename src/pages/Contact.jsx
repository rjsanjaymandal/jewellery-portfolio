import React, { useState } from "react";
import {
  Form,
  Input,
  Typography,
  Row,
  Col,
  Card,
  Alert,
  Space,
  Divider,
} from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
  SendOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle.jsx";
import Button from "../components/Button.jsx";

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

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

const ContactInfoCard = styled(Card)`
  height: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  .ant-card-head {
    border-bottom: none;
  }

  .ant-card-head-title {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    padding-bottom: 0;
  }
`;

const InfoDivider = styled(Divider)`
  width: 50px;
  min-width: 50px;
  margin: 16px 0 24px !important;
  border-top: 3px solid var(--color-primary) !important;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--spacing-md);
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: var(--color-primary-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: var(--spacing-sm);

  .anticon {
    color: var(--color-primary-dark);
    font-size: 1.2rem;
  }
`;

const InfoTitle = styled(Text)`
  display: block;
  font-weight: 600 !important;
  margin-bottom: 4px;
`;

const InfoText = styled(Text)`
  color: var(--color-text-light) !important;
  display: block;
`;

const FormCard = styled(Card)`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  .ant-card-head {
    border-bottom: none;
  }

  .ant-card-head-title {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    padding-bottom: 0;
  }
`;

const StyledForm = styled(Form)`
  .ant-form-item-label > label {
    color: var(--color-secondary);
    font-weight: 500;
  }

  .ant-input,
  .ant-input-textarea {
    &:hover,
    &:focus {
      border-color: var(--color-primary);
    }
  }

  .ant-form-item-explain-error {
    font-size: 0.8rem;
  }
`;

const SubmitButton = styled(Button)`
  margin-top: var(--spacing-sm);
`;

const StyledTextArea = styled(TextArea)`
  min-height: 150px;
  resize: vertical;
`;

const MapSection = styled.section`
  padding: var(--spacing-xl) 0;
  background-color: var(--color-background-alt);
`;

const MapCard = styled(Card)`
  height: 400px;
  overflow: hidden;
  border-radius: var(--border-radius);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  .ant-card-body {
    padding: 0;
    height: 100%;
    position: relative;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MapOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem;
  text-align: center;
`;

const Contact = () => {
  const [form] = Form.useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onFinish = (values) => {
    // In a real application, you would send the form data to a server
    console.log("Form submitted:", values);
    setIsSubmitted(true);

    // Reset form
    form.resetFields();

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
            subtitle="Interested in our diamond manufacturing services? Reach out to schedule a workshop tour or discuss your requirements."
          />
        </HeroContent>
      </HeroSection>

      <ContactContainer>
        <ContactSection>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <ContactInfoCard title="Get In Touch" bordered={false}>
                <InfoDivider />

                <Space
                  direction="vertical"
                  size="large"
                  style={{ width: "100%" }}
                >
                  <InfoItem>
                    <IconWrapper>
                      <EnvironmentOutlined />
                    </IconWrapper>
                    <div>
                      <InfoTitle>Our Location</InfoTitle>
                      <InfoText>
                        Ramavatargems, Johari Bazaar, Jaipur, Rajasthan, India
                      </InfoText>
                    </div>
                  </InfoItem>

                  <InfoItem>
                    <IconWrapper>
                      <PhoneOutlined />
                    </IconWrapper>
                    <div>
                      <InfoTitle>Phone Number</InfoTitle>
                      <InfoText>94631 96935</InfoText>
                    </div>
                  </InfoItem>

                  <InfoItem>
                    <IconWrapper>
                      <MailOutlined />
                    </IconWrapper>
                    <div>
                      <InfoTitle>Email Address</InfoTitle>
                      <InfoText>info@ramavatargems.com</InfoText>
                    </div>
                  </InfoItem>

                  <InfoItem>
                    <IconWrapper>
                      <ClockCircleOutlined />
                    </IconWrapper>
                    <div>
                      <InfoTitle>Business Hours</InfoTitle>
                      <InfoText>Monday - Saturday: 10:00 AM - 8:00 PM</InfoText>
                      <InfoText>Sunday: Closed</InfoText>
                    </div>
                  </InfoItem>
                </Space>
              </ContactInfoCard>
            </Col>

            <Col xs={24} md={12}>
              <FormCard title="Send Us a Message" bordered={false}>
                <InfoDivider />

                {isSubmitted && (
                  <Alert
                    message="Message Sent!"
                    description="Thank you for your message! We'll get back to you soon."
                    type="success"
                    showIcon
                    style={{ marginBottom: 24 }}
                  />
                )}

                <StyledForm
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  requiredMark={false}
                >
                  <Form.Item
                    name="name"
                    label="Your Name"
                    rules={[
                      { required: true, message: "Please enter your name" },
                    ]}
                  >
                    <Input size="large" placeholder="Enter your name" />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    label="Email Address"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Please enter a valid email" },
                    ]}
                  >
                    <Input size="large" placeholder="Enter your email" />
                  </Form.Item>

                  <Form.Item
                    name="subject"
                    label="Subject"
                    rules={[
                      { required: true, message: "Please enter a subject" },
                    ]}
                  >
                    <Input size="large" placeholder="Enter subject" />
                  </Form.Item>

                  <Form.Item
                    name="message"
                    label="Your Message"
                    rules={[
                      { required: true, message: "Please enter your message" },
                    ]}
                  >
                    <StyledTextArea
                      size="large"
                      placeholder="Enter your message here..."
                      rows={5}
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      icon={<SendOutlined />}
                    >
                      Send Message
                    </Button>
                  </Form.Item>
                </StyledForm>
              </FormCard>
            </Col>
          </Row>
        </ContactSection>
      </ContactContainer>

      <MapSection>
        <ContactContainer>
          <SectionTitle
            title="Visit Our Workshop"
            subtitle="Tour our diamond manufacturing facility and witness our master craftsmen at work"
          />
          <MapCard bordered={false}>
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Jaipur Map"
            />
            <MapOverlay>
              Map location: Ramavatargems Diamond Manufacturing Facility, Jaipur
            </MapOverlay>
          </MapCard>
        </ContactContainer>
      </MapSection>
    </>
  );
};

export default Contact;
