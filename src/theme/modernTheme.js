// Modern Theme System for Jewelry Manufacturing Website
export const lightTheme = {
  colors: {
    // Primary Colors
    primary: '#1a1a1a',
    secondary: '#d4af37',
    accent: '#f7e9b7',
    
    // Background Colors
    background: '#ffffff',
    surface: '#f8f9fa',
    card: '#ffffff',
    overlay: 'rgba(255, 255, 255, 0.95)',
    
    // Text Colors
    text: {
      primary: '#1a1a1a',
      secondary: '#4a4a4a',
      muted: '#6b7280',
      inverse: '#ffffff'
    },
    
    // Border Colors
    border: {
      light: '#e5e7eb',
      medium: '#d1d5db',
      dark: '#9ca3af'
    },
    
    // Status Colors
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6'
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    glow: '0 0 20px rgba(212, 175, 55, 0.3)'
  }
};

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
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    heading: "'Playfair Display', serif",
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
    '7xl': '4.5rem'
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
