// New theme configuration for the jewelry portfolio website
// Inspired by high-end jewelry and diamond manufacturing portfolio sites

// Color palette
export const colors = {
  // Primary colors - Elegant blue palette
  primary: {
    main: '#1E3A8A',       // Deep royal blue - main brand color
    light: '#2563EB',      // Brighter blue for hover states
    dark: '#0F172A',       // Very dark blue for text/accents
    contrast: '#FFFFFF',   // White text on primary backgrounds
  },
  
  // Secondary colors - Luxury gold accents
  secondary: {
    main: '#D4AF37',       // Classic gold
    light: '#F7E9B7',      // Light gold for subtle accents
    dark: '#9E7C1E',       // Darker gold for hover states
    contrast: '#000000',   // Black text on secondary backgrounds
  },
  
  // Neutral colors for backgrounds and text
  neutral: {
    100: '#FFFFFF',        // Pure white
    200: '#F8FAFC',        // Very light gray for backgrounds
    300: '#E2E8F0',        // Light gray for borders
    400: '#94A3B8',        // Medium gray for secondary text
    500: '#64748B',        // Darker gray for secondary text
    600: '#475569',        // Dark gray for body text
    700: '#334155',        // Very dark gray for headings
    800: '#1E293B',        // Nearly black for main text
    900: '#0F172A',        // True dark for backgrounds in dark mode
  },
  
  // Accent colors for highlights and special elements
  accent: {
    teal: '#0D9488',       // Teal accent
    purple: '#7E22CE',     // Purple accent
    rose: '#BE185D',       // Rose accent
    amber: '#D97706',      // Amber accent
  },
  
  // Feedback colors
  feedback: {
    success: '#10B981',    // Green
    warning: '#F59E0B',    // Amber
    error: '#EF4444',      // Red
    info: '#3B82F6',       // Blue
  },
  
  // Gradients
  gradients: {
    blueSapphire: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
    goldDiamond: 'linear-gradient(135deg, #D4AF37 0%, #F7E9B7 100%)',
    darkSapphire: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)',
    luxuryGold: 'linear-gradient(to right, #BF953F 0%, #FCF6BA 50%, #B38728 100%)',
    silverPlatinum: 'linear-gradient(135deg, #D1D5DB 0%, #F8FAFC 100%)',
    darkMode: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
  },
  
  // Overlays
  overlays: {
    light: 'rgba(255, 255, 255, 0.8)',
    dark: 'rgba(15, 23, 42, 0.7)',
    blue: 'rgba(30, 58, 138, 0.7)',
    gold: 'rgba(212, 175, 55, 0.2)',
  },
};

// Typography
export const typography = {
  fontFamily: {
    heading: "'Playfair Display', serif",
    body: "'Montserrat', sans-serif",
    accent: "'Cormorant Garamond', serif",
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

// Spacing
export const spacing = {
  0: '0',
  1: '0.25rem',      // 4px
  2: '0.5rem',       // 8px
  3: '0.75rem',      // 12px
  4: '1rem',         // 16px
  5: '1.25rem',      // 20px
  6: '1.5rem',       // 24px
  8: '2rem',         // 32px
  10: '2.5rem',      // 40px
  12: '3rem',        // 48px
  16: '4rem',        // 64px
  20: '5rem',        // 80px
  24: '6rem',        // 96px
  32: '8rem',        // 128px
};

// Shadows
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  outline: '0 0 0 3px rgba(30, 58, 138, 0.5)',
  gold: '0 4px 20px rgba(212, 175, 55, 0.25)',
  blue: '0 4px 20px rgba(30, 58, 138, 0.25)',
  none: 'none',
};

// Border radius
export const borderRadius = {
  none: '0',
  sm: '0.125rem',    // 2px
  md: '0.25rem',     // 4px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px
  '3xl': '1.5rem',   // 24px
  full: '9999px',    // Fully rounded (circles)
};

// Transitions
export const transitions = {
  default: 'all 0.3s ease',
  fast: 'all 0.15s ease',
  slow: 'all 0.5s ease',
  bezier: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
};

// Z-index
export const zIndex = {
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
  auto: 'auto',
};

// Breakpoints
export const breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Light theme
export const lightTheme = {
  colors: {
    primary: colors.primary,
    secondary: colors.secondary,
    background: {
      main: colors.neutral[100],
      alt: colors.neutral[200],
      card: colors.neutral[100],
    },
    text: {
      primary: colors.neutral[800],
      secondary: colors.neutral[600],
      tertiary: colors.neutral[500],
      light: colors.neutral[400],
      inverted: colors.neutral[100],
    },
    border: colors.neutral[300],
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  gradients: colors.gradients,
};

// Dark theme
export const darkTheme = {
  colors: {
    primary: {
      ...colors.primary,
      main: '#3B82F6', // Brighter blue for dark mode
    },
    secondary: colors.secondary,
    background: {
      main: colors.neutral[900],
      alt: colors.neutral[800],
      card: colors.neutral[800],
    },
    text: {
      primary: colors.neutral[100],
      secondary: colors.neutral[300],
      tertiary: colors.neutral[400],
      light: colors.neutral[500],
      inverted: colors.neutral[900],
    },
    border: colors.neutral[700],
    shadow: 'rgba(0, 0, 0, 0.3)',
  },
  gradients: {
    ...colors.gradients,
    blueSapphire: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
  },
};

export default {
  colors,
  typography,
  spacing,
  shadows,
  borderRadius,
  transitions,
  zIndex,
  breakpoints,
  lightTheme,
  darkTheme,
};
