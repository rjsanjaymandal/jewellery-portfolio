import React from "react";
import { Button as AntButton } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Custom styled Ant Design Button with improved text visibility
const StyledButton = styled(AntButton)`
  &.ant-btn-primary {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    color: white; /* Ensure white text on primary button */
    font-weight: 500; /* Slightly bolder text */
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); /* Subtle text shadow for better contrast */

    &:hover,
    &:focus {
      background-color: var(--color-primary-dark);
      border-color: var(--color-primary-dark);
    }
  }

  &.ant-btn-default {
    border-color: var(--color-primary);
    color: var(--color-primary);
    border-width: 2px; /* Slightly thicker border for better visibility */
    font-weight: 500; /* Slightly bolder text */

    &:hover,
    &:focus {
      color: var(--color-primary-dark);
      border-color: var(--color-primary-dark);
    }
  }

  &.ant-btn-secondary {
    background-color: var(--color-secondary);
    border-color: var(--color-secondary);
    color: white;
    font-weight: 500; /* Slightly bolder text */
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); /* Subtle text shadow for better contrast */

    &:hover,
    &:focus {
      background-color: rgba(0, 21, 41, 0.8);
      border-color: rgba(0, 21, 41, 0.8);
    }
  }

  /* Increase font size slightly for better readability */
  &.ant-btn-large {
    font-size: 1.1rem;
  }

  &.ant-btn-middle {
    font-size: 1rem;
  }
`;

const Button = ({
  children,
  variant = "primary",
  size = "middle",
  to,
  href,
  ...props
}) => {
  const navigate = useNavigate();

  // Map our variant names to Ant Design types
  const getButtonType = () => {
    switch (variant) {
      case "outline":
        return "default";
      case "primary":
        return "primary";
      case "secondary":
        return "secondary"; // Custom type
      default:
        return "primary";
    }
  };

  // Map our size names to Ant Design sizes
  const getButtonSize = () => {
    switch (size) {
      case "small":
        return "small";
      case "large":
        return "large";
      default: // medium
        return "middle";
    }
  };

  const handleClick = (e) => {
    if (to) {
      e.preventDefault();
      navigate(to);
    }

    if (props.onClick) {
      props.onClick(e);
    }
  };

  if (href) {
    return (
      <StyledButton
        type={getButtonType()}
        size={getButtonSize()}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton
      type={getButtonType()}
      size={getButtonSize()}
      onClick={handleClick}
      className={variant === "secondary" ? "ant-btn-secondary" : ""}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
