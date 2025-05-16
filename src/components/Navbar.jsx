import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Layout,
  Menu,
  Button,
  Drawer,
  Typography,
  Row,
  Col,
  Space,
  Divider,
} from "antd";
import {
  MenuOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  ShoppingOutlined,
  MailOutlined,
  GoldOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const { Header } = Layout;
const { Title, Text } = Typography;

// Simple styled components with reliable styling
const NavbarWrapper = styled.div`
  position: relative;
`;

const StyledHeader = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0;
  background-color: ${props => props.isDarkMode ? '#121212' : 'white'};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  height: auto;
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoIcon = styled(GoldOutlined)`
  font-size: 24px;
  color: #8b4513;
  margin-right: 8px;
`;

const LogoText = styled(Title)`
  margin: 0 !important;
  font-size: 20px !important;
  line-height: 1 !important;
  color: ${props => props.isDarkMode ? 'white' : '#001529'} !important;
  
  .highlight {
    color: #8b4513;
  }
`;

const NavMenu = styled(Menu)`
  border: none;
  background: transparent;
  line-height: 64px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const MobileMenuButton = styled(Button)`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  
  @media (max-width: 992px) {
    display: none;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${props => props.isDarkMode ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.65)'};
  
  .anticon {
    color: #8b4513;
  }
`;

const StyledDrawer = styled(Drawer)`
  .ant-drawer-header {
    background-color: ${props => props.isDarkMode ? '#1f1f1f' : '#f5f5f5'};
    border-bottom: 1px solid ${props => props.isDarkMode ? '#333' : '#e8e8e8'};
  }
  
  .ant-drawer-title {
    color: ${props => props.isDarkMode ? 'white' : 'rgba(0, 0, 0, 0.85)'};
  }
  
  .ant-drawer-body {
    padding: 0;
    background-color: ${props => props.isDarkMode ? '#121212' : 'white'};
  }
`;

const DrawerMenu = styled(Menu)`
  background-color: transparent;
  border-right: none;
  
  .ant-menu-item {
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    
    .anticon {
      font-size: 18px;
      margin-right: 10px;
    }
  }
`;

const DrawerFooter = styled.div`
  padding: 16px;
  border-top: 1px solid ${props => props.isDarkMode ? '#333' : '#e8e8e8'};
`;

const DrawerContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  color: ${props => props.isDarkMode ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.65)'};
  
  .anticon {
    color: #8b4513;
  }
`;

// Spacer to compensate for fixed header
const HeaderSpacer = styled.div`
  height: 64px;
`;

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode } = useTheme();

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (drawerVisible) {
      closeDrawer();
    }
  };

  const menuItems = [
    {
      key: "/",
      icon: <HomeOutlined />,
      label: "Home",
      onClick: () => handleNavigation("/"),
    },
    {
      key: "/about",
      icon: <InfoCircleOutlined />,
      label: "About",
      onClick: () => handleNavigation("/about"),
    },
    {
      key: "/collection",
      icon: <ShoppingOutlined />,
      label: "Collection",
      onClick: () => handleNavigation("/collection"),
    },
    {
      key: "/contact",
      icon: <MailOutlined />,
      label: "Contact",
      onClick: () => handleNavigation("/contact"),
    },
  ];

  return (
    <NavbarWrapper>
      <HeaderSpacer />
      <StyledHeader isDarkMode={isDarkMode}>
        <HeaderContainer>
          {/* Logo */}
          <LogoContainer onClick={() => handleNavigation("/")}>
            <LogoIcon />
            <LogoText level={4} isDarkMode={isDarkMode}>
              Ramavatar<span className="highlight">gems</span>
            </LogoText>
          </LogoContainer>

          {/* Desktop Navigation */}
          <NavMenu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
            theme={isDarkMode ? "dark" : "light"}
          />

          {/* Contact Info & Actions */}
          <NavActions>
            <ContactInfo>
              <ContactItem isDarkMode={isDarkMode}>
                <PhoneOutlined />
                <span>+91 98765 43210</span>
              </ContactItem>
            </ContactInfo>
            
            <ThemeToggle />
            
            <MobileMenuButton
              type="text"
              icon={<MenuOutlined />}
              onClick={showDrawer}
            />
          </NavActions>
        </HeaderContainer>
      </StyledHeader>

      {/* Mobile Drawer */}
      <StyledDrawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        open={drawerVisible}
        width={280}
        isDarkMode={isDarkMode}
      >
        <DrawerMenu
          mode="vertical"
          selectedKeys={[location.pathname]}
          items={menuItems}
          theme={isDarkMode ? "dark" : "light"}
        />
        
        <DrawerFooter isDarkMode={isDarkMode}>
          <DrawerContactItem isDarkMode={isDarkMode}>
            <PhoneOutlined />
            <span>+91 98765 43210</span>
          </DrawerContactItem>
          <DrawerContactItem isDarkMode={isDarkMode}>
            <MailOutlined />
            <span>info@ramavatargems.com</span>
          </DrawerContactItem>
        </DrawerFooter>
      </StyledDrawer>
    </NavbarWrapper>
  );
};

export default Navbar;
