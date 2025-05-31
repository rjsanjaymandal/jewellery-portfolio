// Luxury Diamond Jewelry Theme System
export const luxuryTheme = {
  colors: {
    // Primary Luxury Colors - Deep Navy & Rose Gold
    primary: '#1a2332',        // Deep Navy Blue
    secondary: '#d4a574',      // Rose Gold
    accent: '#f4e4d1',         // Champagne
    tertiary: '#8b4513',       // Bronze

    // Background Colors - Elegant Whites & Creams
    background: '#fefefe',     // Pure White
    surface: '#f8f6f3',       // Warm Cream
    card: '#ffffff',          // Pure White Cards
    overlay: 'rgba(26, 35, 50, 0.95)',

    // Luxury Gradients
    gradients: {
      primary: 'linear-gradient(135deg, #1a2332 0%, #2c3e50 100%)',
      secondary: 'linear-gradient(135deg, #d4a574 0%, #e6b887 50%, #d4a574 100%)',
      accent: 'linear-gradient(135deg, #f4e4d1 0%, #f9f1e6 100%)',
      hero: 'linear-gradient(135deg, rgba(26, 35, 50, 0.8) 0%, rgba(44, 62, 80, 0.6) 50%, rgba(212, 165, 116, 0.1) 100%)'
    },

    // Text Colors
    text: {
      primary: '#1a2332',      // Deep Navy
      secondary: '#4a5568',    // Slate Gray
      muted: '#718096',        // Light Gray
      inverse: '#ffffff',      // White
      luxury: '#d4a574'        // Rose Gold
    },

    // Border Colors
    border: {
      light: '#e2e8f0',
      medium: '#cbd5e0',
      dark: '#a0aec0',
      luxury: '#d4a574'
    },

    // Status Colors
    success: '#38a169',
    warning: '#d69e2e',
    error: '#e53e3e',
    info: '#3182ce'
  },

  shadows: {
    sm: '0 2px 4px 0 rgba(26, 35, 50, 0.08)',
    md: '0 4px 12px 0 rgba(26, 35, 50, 0.12)',
    lg: '0 8px 25px 0 rgba(26, 35, 50, 0.15)',
    xl: '0 12px 40px 0 rgba(26, 35, 50, 0.18)',
    luxury: '0 8px 32px 0 rgba(212, 165, 116, 0.25)',
    glow: '0 0 30px rgba(212, 165, 116, 0.4)'
  }
};

// Keep lightTheme for backward compatibility but redirect to luxury
export const lightTheme = luxuryTheme;

export const darkTheme = {
  colors: {
    // Primary Colors
    primary: '#ffffff',
    secondary: '#d4af37',
    accent: '#f7e9b7',

    // Background Colors
    background: '#0a0a0a',
    surface: '#1a1a1a',
    card: '#262626',
    overlay: 'rgba(0, 0, 0, 0.95)',

    // Text Colors
    text: {
      primary: '#ffffff',
      secondary: '#e5e5e5',
      muted: '#a3a3a3',
      inverse: '#1a1a1a'
    },

    // Border Colors
    border: {
      light: '#404040',
      medium: '#525252',
      dark: '#737373'
    },

    // Status Colors
    success: '#22c55e',
    warning: '#fbbf24',
    error: '#f87171',
    info: '#60a5fa'
  },

  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.4)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.6)',
    glow: '0 0 30px rgba(212, 175, 55, 0.5)'
  }
};

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
  '5xl': '8rem'
};

export const typography = {
  fontFamily: {
    primary: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    heading: "'Playfair Display', 'Georgia', serif",
    luxury: "'Cormorant Garamond', 'Times New Roman', serif",
    mono: "'JetBrains Mono', monospace"
  },

  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem'
  },

  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },

  lineHeight: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2
  }
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

export const animations = {
  transition: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out'
  },

  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  }
};
