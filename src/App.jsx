import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, ConfigProvider } from "antd";
import styled from "styled-components";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Collection from "./pages/Collection.jsx";
import Contact from "./pages/Contact.jsx";

// Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const { Content } = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const StyledContent = styled(Content)`
  flex: 1;
`;

// Custom theme for Ant Design with improved contrast
const theme = {
  token: {
    colorPrimary: "#8B4513", // Darker brown for better contrast
    colorLink: "#8B4513",
    colorLinkHover: "#5D2906", // Even darker for hover states
    borderRadius: 2,
    fontFamily:
      "'Playfair Display', serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto",
    fontSize: 16,
    fontSizeHeading1: 32,
    fontSizeHeading2: 28,
    fontSizeHeading3: 24,
    fontSizeHeading4: 20,
    fontSizeHeading5: 16,
    colorTextBase: "#262626", // Darker text for better readability
    colorTextSecondary: "#4D4D4D", // Darker gray for better contrast
    colorBgBase: "#ffffff",
  },
  components: {
    Typography: {
      fontWeightStrong: 700,
      titleMarginBottom: 16,
    },
    Button: {
      fontWeight: 500,
    },
    Card: {
      colorBorderSecondary: "#e8e8e8", // Slightly darker border for better visibility
    },
  },
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <StyledLayout>
        <Navbar />
        <StyledContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </StyledContent>
        <Footer />
      </StyledLayout>
    </ConfigProvider>
  );
}

export default App;
