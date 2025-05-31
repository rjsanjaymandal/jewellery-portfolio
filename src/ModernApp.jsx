import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ModernHome from "./pages/ModernHome.jsx";

// Custom Chakra UI theme for luxury jewelry
const luxuryTheme = extendTheme({
  colors: {
    luxury: {
      50: '#fefefe',
      100: '#f8f6f3',
      200: '#f4e4d1',
      300: '#e6b887',
      400: '#d4a574',
      500: '#c19660',
      600: '#a67c4a',
      700: '#8b6239',
      800: '#704d2d',
      900: '#5a3d24',
    },
    navy: {
      50: '#f0f4f8',
      100: '#d9e2ec',
      200: '#bcccdc',
      300: '#9fb3c8',
      400: '#829ab1',
      500: '#627d98',
      600: '#486581',
      700: '#334e68',
      800: '#243b53',
      900: '#1a2332',
    },
    accent: {
      50: '#fdf8f0',
      100: '#faf0e1',
      200: '#f4e4d1',
      300: '#edd5b8',
      400: '#e4c29f',
      500: '#d9ad86',
      600: '#cc956d',
      700: '#bd7c54',
      800: '#a6633b',
      900: '#8d4a22',
    }
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Inter', system-ui, sans-serif",
    luxury: "'Cormorant Garamond', serif",
  },
  fontSizes: {
    hero: "clamp(3rem, 8vw, 6rem)",
    display: "clamp(2.5rem, 6vw, 4rem)",
    heading: "clamp(2rem, 4vw, 3rem)",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "full",
        transition: "all 0.3s ease",
        _hover: {
          transform: "translateY(-2px)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        },
      },
      variants: {
        luxury: {
          bg: "linear-gradient(135deg, #d4a574 0%, #e6b887 50%, #d4a574 100%)",
          color: "navy.900",
          border: "2px solid",
          borderColor: "luxury.400",
          boxShadow: "0 8px 32px rgba(212, 165, 116, 0.25)",
          _hover: {
            boxShadow: "0 0 30px rgba(212, 165, 116, 0.6)",
            transform: "translateY(-2px) scale(1.02)",
          },
        },
        ghost: {
          color: "white",
          border: "2px solid",
          borderColor: "whiteAlpha.300",
          _hover: {
            bg: "whiteAlpha.200",
            borderColor: "luxury.400",
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: "2xl",
          overflow: "hidden",
          transition: "all 0.3s ease",
          _hover: {
            transform: "translateY(-8px)",
            boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "heading",
        fontWeight: "700",
        letterSpacing: "-0.025em",
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "body",
        lineHeight: "1.7",
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "luxury.50",
        color: "navy.900",
        fontFamily: "body",
      },
      html: {
        scrollBehavior: "smooth",
      },
    },
  },
});

const MotionBox = motion.div;

const ModernApp = () => {
  return (
    <ChakraProvider theme={luxuryTheme}>
      <Router>
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen"
        >
          <Routes>
            <Route path="/" element={<ModernHome />} />
          </Routes>
        </MotionBox>
      </Router>
    </ChakraProvider>
  );
};

export default ModernApp;
