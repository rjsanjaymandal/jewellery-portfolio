import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  MenuOutlined,
  CloseOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  CrownOutlined,
  MailOutlined,
  PhoneOutlined,
  SunOutlined,
  MoonOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import RamavatargemsLogo from "./logo/RamavatargemsLogo";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${(props) =>
    props.isDarkMode
      ? "linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(20, 20, 20, 0.95) 100%)"
      : "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)"};
  backdrop-filter: blur(25px);
  border-bottom: 2px solid
    ${(props) =>
      props.isDarkMode ? "rgba(212, 175, 55, 0.3)" : "rgba(212, 175, 55, 0.2)"};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${(props) =>
    props.isDarkMode
      ? "0 4px 20px rgba(0, 0, 0, 0.3)"
      : "0 4px 20px rgba(0, 0, 0, 0.1)"};

  &.scrolled {
    background: ${(props) =>
      props.isDarkMode
        ? "linear-gradient(135deg, rgba(10, 10, 10, 0.98) 0%, rgba(20, 20, 20, 0.98) 100%)"
        : "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.98) 100%)"};
    box-shadow: ${(props) =>
      props.isDarkMode
        ? "0 8px 40px rgba(0, 0, 0, 0.4)"
        : "0 8px 40px rgba(0, 0, 0, 0.15)"};
    border-bottom-color: var(--color-secondary);
  }
`;

const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  gap: 32px;

  @media (max-width: 1200px) {
    padding: 0 16px;
    gap: 24px;
  }

  @media (max-width: 768px) {
    height: 70px;
    padding: 0 12px;
    gap: 16px;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 4px 6px;
  border-radius: 8px;
  background: ${(props) =>
    props.isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.02)"};
  flex-shrink: 0;
  width: 110px;
  height: 50px;
  overflow: hidden;
  position: relative;

  svg,
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  &:hover {
    background: ${(props) =>
      props.isDarkMode
        ? "rgba(212, 175, 55, 0.1)"
        : "rgba(212, 175, 55, 0.05)"};
    box-shadow: 0 2px 8px rgba(212, 175, 55, 0.2);
  }

  @media (max-width: 1200px) {
    padding: 3px 5px;
    width: 100px;
    height: 45px;
  }

  @media (max-width: 768px) {
    padding: 2px 4px;
    width: 90px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 35px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  justify-content: center;
  max-width: 600px;

  @media (max-width: 1200px) {
    gap: 12px;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.div`
  position: relative;
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#1a1a1a")};
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 12px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  border-radius: 10px;
  background: ${(props) =>
    props.isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.02)"};
  white-space: nowrap;
  flex-shrink: 0;

  &::after {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--color-secondary), #f7e9b7);
    border-radius: 1px;
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: var(--color-secondary);
    background: ${(props) =>
      props.isDarkMode
        ? "rgba(212, 175, 55, 0.1)"
        : "rgba(212, 175, 55, 0.05)"};
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(212, 175, 55, 0.2);

    &::after {
      width: 70%;
    }
  }

  &.active {
    color: var(--color-secondary);
    background: ${(props) =>
      props.isDarkMode
        ? "rgba(212, 175, 55, 0.15)"
        : "rgba(212, 175, 55, 0.1)"};
    box-shadow: 0 2px 8px rgba(212, 175, 55, 0.3);

    &::after {
      width: 70%;
    }
  }

  .anticon {
    font-size: 16px;
    transition: transform 0.3s ease;
  }

  &:hover .anticon {
    transform: scale(1.1);
  }

  @media (max-width: 1200px) {
    font-size: 13px;
    padding: 6px 10px;
    gap: 4px;

    .anticon {
      font-size: 14px;
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;

  @media (max-width: 1200px) {
    gap: 16px;
  }

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

const ThemeToggle = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid
    ${(props) =>
      props.isDarkMode ? "rgba(212, 175, 55, 0.3)" : "rgba(212, 175, 55, 0.2)"};
  background: ${(props) =>
    props.isDarkMode
      ? "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(212, 175, 55, 0.1) 100%)"
      : "linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, rgba(212, 175, 55, 0.05) 100%)"};
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#1a1a1a")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 18px;
  backdrop-filter: blur(15px);
  position: relative;
  overflow: hidden;
  flex-shrink: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(212, 175, 55, 0.1) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: var(--color-secondary);
    background: linear-gradient(
      135deg,
      var(--color-secondary) 0%,
      #f7e9b7 100%
    );
    color: #000000;
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.5),
      0 4px 12px rgba(212, 175, 55, 0.3);
    transform: scale(1.1) rotate(15deg);

    &::before {
      opacity: 1;
    }
  }

  .anticon {
    transition: transform 0.3s ease;
  }

  &:hover .anticon {
    transform: rotate(180deg);
  }

  @media (max-width: 1200px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 14px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 13px;
  color: ${(props) =>
    props.isDarkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.6)"};
  flex-shrink: 0;

  @media (max-width: 1200px) {
    gap: 12px;
    font-size: 12px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  .anticon {
    color: var(--color-secondary);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 2px solid
    ${(props) =>
      props.isDarkMode ? "rgba(212, 175, 55, 0.3)" : "rgba(212, 175, 55, 0.2)"};
  background: ${(props) =>
    props.isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)"};
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#1a1a1a")};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 18px;
  backdrop-filter: blur(10px);
  flex-shrink: 0;

  @media (max-width: 768px) {
    display: flex;
    width: 40px;
    height: 40px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    font-size: 14px;
  }

  &:hover {
    border-color: var(--color-secondary);
    background: var(--color-secondary);
    color: #000000;
    transform: scale(1.05);
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: ${(props) =>
    props.isDarkMode ? "rgba(10, 10, 10, 0.98)" : "rgba(255, 255, 255, 0.98)"};
  backdrop-filter: blur(20px);
  border-top: 1px solid
    ${(props) =>
      props.isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: 24px;
  z-index: 999;
  transform: ${(props) =>
    props.isOpen ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: all 0.3s ease;
`;

const MobileNavLink = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 0;
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#1a1a1a")};
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  border-bottom: 1px solid
    ${(props) =>
      props.isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: var(--color-secondary);
    padding-left: 8px;
  }

  &.active {
    color: var(--color-secondary);
  }

  .anticon {
    font-size: 20px;
  }
`;

const ModernNavbar = () => {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Since we removed dark mode, we'll use false for all isDarkMode checks
  const isDarkMode = false;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home", icon: <HomeOutlined /> },
    { path: "/about", label: "About Us", icon: <InfoCircleOutlined /> },
    { path: "/collection", label: "Collection", icon: <CrownOutlined /> },
    {
      path: "/jewelry-manufacturing",
      label: "Our Process",
      icon: <SettingOutlined />,
    },
    { path: "/contact", label: "Contact", icon: <MailOutlined /> },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <NavbarContainer
        isDarkMode={isDarkMode}
        className={isScrolled ? "scrolled" : ""}
      >
        <NavContent>
          <LogoSection
            isDarkMode={isDarkMode}
            onClick={() => handleNavigation("/")}
          >
            <RamavatargemsLogo width={100} />
          </LogoSection>

          <NavLinks>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                isDarkMode={isDarkMode}
                className={location.pathname === item.path ? "active" : ""}
                onClick={() => handleNavigation(item.path)}
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </NavLinks>

          <ActionButtons>
            <ContactInfo isDarkMode={isDarkMode}>
              <ContactItem>
                <PhoneOutlined />
                <span>94631 96935</span>
              </ContactItem>
              <ContactItem>
                <MailOutlined />
                <span>info@ramavatargems.com</span>
              </ContactItem>
            </ContactInfo>



            <MobileMenuButton
              isDarkMode={isDarkMode}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            </MobileMenuButton>
          </ActionButtons>
        </NavContent>
      </NavbarContainer>

      <MobileMenu isDarkMode={isDarkMode} isOpen={isMobileMenuOpen}>
        {navItems.map((item) => (
          <MobileNavLink
            key={item.path}
            isDarkMode={isDarkMode}
            className={location.pathname === item.path ? "active" : ""}
            onClick={() => handleNavigation(item.path)}
          >
            {item.icon}
            {item.label}
          </MobileNavLink>
        ))}
      </MobileMenu>
    </>
  );
};

export default ModernNavbar;
