import React, { useState } from "react";
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
} from "antd";
import {
  MenuOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  ShoppingOutlined,
  MailOutlined,
  PhoneOutlined,
  ToolOutlined,
  GiftOutlined,
  CrownOutlined,
  DollarOutlined,
  SettingOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import RamavatargemsLogo from "./logo/RamavatargemsLogo";

const { Header } = Layout;
const { Text } = Typography;

// Styled components
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
  background-color: ${(props) => (props.isDarkMode ? "#121212" : "white")};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  height: 80px;
  line-height: 80px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      to right,
      var(--color-primary-dark) 0%,
      var(--color-secondary) 50%,
      var(--color-primary-dark) 100%
    );
  }
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  overflow: hidden;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  padding: 0;
  margin: 0;
  height: 80px;

  &:hover {
    transform: translateY(-2px);
  }
`;

const StyledLogo = styled(RamavatargemsLogo)`
  height: 60px;
  width: auto;
  margin: 0;
  display: block;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: auto;
    height: 50px;
  }
`;

const NavMenu = styled(Menu)`
  border: none;
  background: transparent;
  line-height: 80px;
  flex: 1;
  display: flex;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;

  .ant-menu-item {
    padding: 0 15px;
    font-size: 14px;
    position: relative;
    transition: all 0.3s ease;
    white-space: nowrap;

    &:hover {
      color: var(--color-secondary);
    }

    &.ant-menu-item-selected {
      color: var(--color-secondary);
      font-weight: 600;
    }

    .anticon {
      margin-right: 6px;
      font-size: 14px;
    }
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

const MobileMenuButton = styled(Button)`
  display: none;

  @media (max-width: 992px) {
    display: block;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-right: 10px;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${(props) =>
    props.isDarkMode ? "rgba(255, 255, 255, 0.85)" : "rgba(0, 0, 0, 0.65)"};
  font-size: 14px;

  .anticon {
    color: #d4af37;
    font-size: 14px;
  }

  span {
    font-weight: 500;
    white-space: nowrap;
  }
`;

const StyledDrawer = styled(Drawer)`
  .ant-drawer-header {
    background-color: ${(props) => (props.isDarkMode ? "#1f1f1f" : "#f5f5f5")};
    border-bottom: 1px solid
      ${(props) => (props.isDarkMode ? "#333" : "#e8e8e8")};
  }

  .ant-drawer-title {
    color: ${(props) => (props.isDarkMode ? "white" : "rgba(0, 0, 0, 0.85)")};
  }

  .ant-drawer-body {
    padding: 0;
    background-color: ${(props) => (props.isDarkMode ? "#121212" : "white")};
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
      color: #c9a063;
    }

    &.ant-menu-item-selected {
      color: #c9a063;
    }
  }
`;

const DrawerFooter = styled.div`
  padding: 16px;
  border-top: 1px solid ${(props) => (props.isDarkMode ? "#333" : "#e8e8e8")};
`;

const DrawerContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  color: ${(props) =>
    props.isDarkMode ? "rgba(255, 255, 255, 0.85)" : "rgba(0, 0, 0, 0.65)"};

  .anticon {
    color: #c9a063;
  }
`;

// Spacer to compensate for fixed header
const HeaderSpacer = styled.div`
  height: 80px;
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
      label: "About Us",
      onClick: () => handleNavigation("/about"),
    },
    {
      key: "/collection",
      icon: <CrownOutlined />,
      label: "Collections",
      onClick: () => handleNavigation("/collection"),
    },
    {
      key: "/jewelry-manufacturing",
      icon: <SettingOutlined />,
      label: "Our Process",
      onClick: () => handleNavigation("/jewelry-manufacturing"),
    },
    {
      key: "/custom-design",
      icon: <HeartOutlined />,
      label: "Custom Design",
      onClick: () => handleNavigation("/custom-design"),
    },
    {
      key: "/gemstones",
      icon: <GiftOutlined />,
      label: "Gemstones",
      onClick: () => handleNavigation("/gemstones"),
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
            <StyledLogo width={180} height={60} />
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
                <span>94631 96935</span>
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
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "5px 0",
            }}
          >
            <RamavatargemsLogo width={200} height={70} />
          </div>
        }
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
            <span>94631 96935</span>
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
