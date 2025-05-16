import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu, Button, Drawer, Typography } from "antd";
import {
  MenuOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  AppstoreOutlined,
  MailOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const { Header } = Layout;
const { Title } = Typography;

const StyledHeader = styled(Header)`
  background-color: var(--color-background);
  padding: 0 var(--spacing-sm);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  line-height: 70px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(Title)`
  margin: 0 !important;
  font-family: var(--font-heading) !important;
  font-size: 2rem !important; /* Slightly larger for better visibility */
  font-weight: 700 !important; /* Bolder for better visibility */
  letter-spacing: -0.01em !important; /* Slight letter spacing adjustment */
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5) !important; /* Subtle text shadow for contrast */

  .primary-text {
    color: var(--color-primary);
  }
`;

const DesktopMenu = styled(Menu)`
  border: none;
  background: transparent;
  font-size: 1.05rem !important; /* Slightly larger menu items */
  font-weight: 500 !important; /* Slightly bolder menu items */

  .ant-menu-item {
    padding: 0 20px !important; /* More spacing between menu items */

    &:hover {
      color: var(
        --color-primary-dark
      ) !important; /* Darker color on hover for better visibility */
    }

    &.ant-menu-item-selected {
      font-weight: 600 !important; /* Bolder for selected item */
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled(Button)`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    padding: 0;
  }

  .ant-drawer-title {
    font-family: var(--font-heading) !important;
    font-size: 1.5rem !important;
    font-weight: 700 !important;
    color: var(--color-secondary) !important;
  }

  .ant-menu-item {
    font-size: 1.1rem !important; /* Larger text in mobile menu */
    font-weight: 500 !important; /* Slightly bolder for better visibility */
    padding: 0 24px !important;
    height: 50px !important; /* Taller menu items for better touch targets */
    line-height: 50px !important;

    .anticon {
      font-size: 1.2rem !important; /* Larger icons */
      margin-right: 12px !important; /* More space between icon and text */
    }

    &.ant-menu-item-selected {
      font-weight: 600 !important; /* Bolder for selected item */
    }
  }
`;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleMenuClick = (e) => {
    navigate(e.key);
    if (visible) {
      onClose();
    }
  };

  const menuItems = [
    {
      key: "/",
      icon: <HomeOutlined />,
      label: "Home",
    },
    {
      key: "/about",
      icon: <InfoCircleOutlined />,
      label: "About",
    },
    {
      key: "/collection",
      icon: <AppstoreOutlined />,
      label: "Collection",
    },
    {
      key: "/contact",
      icon: <MailOutlined />,
      label: "Contact",
    },
  ];

  return (
    <StyledHeader>
      <LogoContainer
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <Logo level={3}>
          Ramavatar<span className="primary-text">gems</span>
        </Logo>
      </LogoContainer>

      <DesktopMenu
        mode="horizontal"
        selectedKeys={[location.pathname]}
        onClick={handleMenuClick}
        items={menuItems}
      />

      <MobileMenuButton
        type="text"
        icon={<MenuOutlined />}
        onClick={showDrawer}
        size="large"
      />

      <StyledDrawer
        title="Ramavatargems"
        placement="right"
        onClose={onClose}
        open={visible}
      >
        <Menu
          mode="vertical"
          selectedKeys={[location.pathname]}
          onClick={handleMenuClick}
          items={menuItems}
          style={{ borderRight: 0 }}
        />
      </StyledDrawer>
    </StyledHeader>
  );
};

export default Navbar;
