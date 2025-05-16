import React from "react";
import { Button, Tooltip } from "antd";
import { BulbOutlined, BulbFilled } from "@ant-design/icons";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";

// Simple styled toggle button
const ToggleButton = styled(Button)`
  width: 36px !important;
  height: 36px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: ${(props) =>
    props.isDarkMode ? "#1f1f1f" : "#ffffff"} !important;
  border: 1px solid ${(props) => (props.isDarkMode ? "#333333" : "#d9d9d9")} !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
  transition: all 0.2s ease !important;

  &:hover {
    background: ${(props) =>
      props.isDarkMode ? "#333333" : "#f5f5f5"} !important;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  .anticon {
    font-size: 1.2rem !important;
    color: ${(props) => (props.isDarkMode ? "#d4b996" : "#8b4513")} !important;
  }
`;

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Tooltip
      title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      placement="bottom"
    >
      <ToggleButton
        onClick={toggleTheme}
        aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        isDarkMode={isDarkMode}
        shape="circle"
      >
        {isDarkMode ? <BulbOutlined /> : <BulbFilled />}
      </ToggleButton>
    </Tooltip>
  );
};

export default ThemeToggle;
