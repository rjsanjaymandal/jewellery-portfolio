import React, { createContext, useContext, useEffect } from "react";
import { luxuryTheme } from "../theme/modernTheme";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Single luxury theme - no dark mode
  const currentTheme = luxuryTheme;

  useEffect(() => {
    // Update CSS custom properties with luxury theme
    const root = document.documentElement;
    const theme = currentTheme;

    // Colors
    root.style.setProperty("--color-primary", theme.colors.primary);
    root.style.setProperty("--color-secondary", theme.colors.secondary);
    root.style.setProperty("--color-accent", theme.colors.accent);
    root.style.setProperty("--color-background", theme.colors.background);
    root.style.setProperty("--color-surface", theme.colors.surface);
    root.style.setProperty("--color-card", theme.colors.card);
    root.style.setProperty("--color-overlay", theme.colors.overlay);

    // Text Colors
    root.style.setProperty("--color-text-primary", theme.colors.text.primary);
    root.style.setProperty("--color-text-secondary", theme.colors.text.secondary);
    root.style.setProperty("--color-text-muted", theme.colors.text.muted);
    root.style.setProperty("--color-text-inverse", theme.colors.text.inverse);
    root.style.setProperty("--color-text-luxury", theme.colors.text.luxury);

    // Border Colors
    root.style.setProperty("--color-border-light", theme.colors.border.light);
    root.style.setProperty("--color-border-medium", theme.colors.border.medium);
    root.style.setProperty("--color-border-dark", theme.colors.border.dark);
    root.style.setProperty("--color-border-luxury", theme.colors.border.luxury);

    // Shadows
    root.style.setProperty("--shadow-sm", theme.shadows.sm);
    root.style.setProperty("--shadow-md", theme.shadows.md);
    root.style.setProperty("--shadow-lg", theme.shadows.lg);
    root.style.setProperty("--shadow-xl", theme.shadows.xl);
    root.style.setProperty("--shadow-luxury", theme.shadows.luxury);
    root.style.setProperty("--shadow-glow", theme.shadows.glow);

    // Update body background
    document.body.style.backgroundColor = theme.colors.background;
    document.body.style.color = theme.colors.text.primary;
    document.body.style.fontFamily = "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
    document.body.style.transition = "all 0.3s ease";

    // Update meta theme color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", theme.colors.background);
    }
  }, []);

  const value = {
    theme: currentTheme,
    colors: currentTheme.colors,
    shadows: currentTheme.shadows,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
