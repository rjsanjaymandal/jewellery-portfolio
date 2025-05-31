import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import Home from "./pages/Home.jsx";
import LuxuryHome from "./pages/LuxuryHome.jsx";
import ModernApp from "./ModernApp.jsx";
import SimpleTest from "./pages/SimpleTest.jsx";

// Simple Ant Design theme
const antdTheme = {
  token: {
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: 16,
    colorPrimary: "#1a2332",
    colorLink: "#d4a574",
    colorLinkHover: "#e6b887",
    colorTextBase: "#1a2332",
    colorBgBase: "#fefefe",
  },
  components: {
    Typography: {
      fontWeightStrong: 600,
    },
    Button: {
      fontWeight: 600,
      colorPrimary: "#d4a574",
      colorPrimaryHover: "#e6b887",
    },
    Card: {
      borderRadius: 15,
    },
  },
};

const App = () => {
  return (
    <ConfigProvider theme={antdTheme}>
      <Router>
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<ModernApp />} />
            <Route path="/luxury" element={<LuxuryHome />} />
            <Route path="/test" element={<SimpleTest />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </ConfigProvider>
  );
};

export default App;
