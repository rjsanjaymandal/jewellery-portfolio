import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, ConfigProvider } from "antd";
import styled from "styled-components";

// Pages
import Home from "./pages/HomeBasic.jsx";
import About from "./pages/About.jsx";
import Manufacturing from "./pages/Manufacturing.jsx";
import JewelryManufacturing from "./pages/JewelryManufacturing.jsx";
import Gemstones from "./pages/Gemstones.jsx";
import Workshop from "./pages/Workshop.jsx";
import Craftsmanship from "./pages/Craftsmanship.jsx";
import Contact from "./pages/Contact.jsx";
import Collection from "./pages/Collection.jsx";

// Components
import ModernNavbar from "./components/ModernNavbar.jsx";
import Footer from "./components/Footer.jsx";

// Theme Context
import { ThemeProvider, useTheme } from "./context/ThemeContext.jsx";

const { Content } = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const StyledContent = styled(Content)`
  flex: 1;
`;

// Theme configuration for Ant Design
const getAntdTheme = (isDarkMode) => {
  // Common theme settings
  const baseTheme = {
    token: {
      fontFamily:
        "'Playfair Display', serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto",
      fontSize: 16,
      fontSizeHeading1: 32,
      fontSizeHeading2: 28,
      fontSizeHeading3: 24,
      fontSizeHeading4: 20,
      fontSizeHeading5: 16,
      borderRadius: 4,
    },
    components: {
      Typography: {
        fontWeightStrong: 700,
        titleMarginBottom: 16,
      },
      Button: {
        fontWeight: 500,
      },
    },
  };

  // Light theme
  const lightTheme = {
    ...baseTheme,
    token: {
      ...baseTheme.token,
      colorPrimary: "#1a237e", // Deep royal blue
      colorLink: "#1a237e",
      colorLinkHover: "#0d1642", // Darker blue for hover states
      colorTextBase: "#262626", // Darker text for better readability
      colorTextSecondary: "#4D4D4D", // Darker gray for better contrast
      colorBgBase: "#ffffff",
      colorSuccess: "#d4af37", // Gold as success color
      colorInfo: "#e5e4e2", // Silver/platinum tone
    },
    components: {
      ...baseTheme.components,
      Card: {
        colorBorderSecondary: "#e8e8e8", // Slightly darker border for better visibility
      },
      Button: {
        colorPrimary: "#d4af37", // Gold for primary buttons
        colorPrimaryHover: "#b8971f", // Darker gold for hover
      },
    },
  };

  // Dark theme
  const darkTheme = {
    ...baseTheme,
    token: {
      ...baseTheme.token,
      colorPrimary: "#d4af37", // Gold for dark mode
      colorLink: "#d4af37",
      colorLinkHover: "#e6c55c", // Lighter gold for hover
      colorTextBase: "#e6e6e6", // Light text for dark mode
      colorTextSecondary: "#b3b3b3", // Lighter gray for secondary text
      colorBgBase: "#121212", // Dark background
      colorSuccess: "#1a237e", // Deep blue as success color in dark mode
      colorInfo: "#e5e4e2", // Silver/platinum tone
    },
    components: {
      ...baseTheme.components,
      Card: {
        colorBorderSecondary: "#333333", // Darker border for dark mode
      },
      Button: {
        colorPrimary: "#d4af37", // Gold for primary buttons
        colorPrimaryHover: "#e6c55c", // Lighter gold for hover in dark mode
      },
    },
  };

  return isDarkMode ? darkTheme : lightTheme;
};

// Theme-aware App component
const ThemedApp = () => {
  const { isDarkMode } = useTheme();
  const antdTheme = getAntdTheme(isDarkMode);

  return (
    <ConfigProvider theme={antdTheme}>
      <StyledLayout>
        <ModernNavbar />
        <StyledContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route
              path="/jewelry-manufacturing"
              element={<JewelryManufacturing />}
            />
            <Route path="/gemstones" element={<Gemstones />} />
            <Route path="/workshop" element={<Workshop />} />
            <Route path="/craftsmanship" element={<Craftsmanship />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/collection" element={<Collection />} />
          </Routes>
        </StyledContent>
        <Footer />
      </StyledLayout>
    </ConfigProvider>
  );
};

// Main App component with ThemeProvider
function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;
