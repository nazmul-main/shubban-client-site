'use client';

import { createContext, useContext, ReactNode } from 'react';

// Color constants
export const COLORS = {
  BACKGROUND_COLOR: '#FFFFFF',
  SECONDARY_COLOR: '#E91E63',
  PRIMARY_COLOR: '#0D47A1',
  ACCENT_COLOR: '#994E3B'
};

// Color context
const ColorContext = createContext();

// Color provider component
export function ColorProvider({ children }) {
  const colorSystem = {
    // Direct color values
    backgroundColor: COLORS.BACKGROUND_COLOR,
    secondaryColor: COLORS.SECONDARY_COLOR,
    primaryColor: COLORS.PRIMARY_COLOR,
    accentColor: COLORS.ACCENT_COLOR,
    
    // Semantic color mappings
    primary: COLORS.PRIMARY_COLOR,
    secondary: COLORS.SECONDARY_COLOR,
    accent: COLORS.ACCENT_COLOR,
    background: COLORS.BACKGROUND_COLOR,
    text: COLORS.ACCENT_COLOR,
    
    // Utility functions
    getColor: (colorName) => {
      const colorMap = {
        'background': COLORS.BACKGROUND_COLOR,
        'secondary': COLORS.SECONDARY_COLOR,
        'primary': COLORS.PRIMARY_COLOR,
        'accent': COLORS.ACCENT_COLOR
      };
      return colorMap[colorName] || COLORS.PRIMARY_COLOR;
    },
    
    // CSS class helpers
    getTextClass: (colorName) => `text-${colorName}-color`,
    getBgClass: (colorName) => `bg-${colorName}-color`,
    getBorderClass: (colorName) => `border-${colorName}-color`,
    
    // Tailwind classes
    classes: {
      text: {
        background: 'text-background-color',
        secondary: 'text-secondary-color',
        primary: 'text-primary-color',
        accent: 'text-accent-color'
      },
      background: {
        background: 'bg-background-color',
        secondary: 'bg-secondary-color',
        primary: 'bg-primary-color',
        accent: 'bg-accent-color'
      },
      border: {
        background: 'border-background-color',
        secondary: 'border-secondary-color',
        primary: 'border-primary-color',
        accent: 'border-accent-color'
      }
    }
  };

  return (
    <ColorContext.Provider value={colorSystem}>
      {children}
    </ColorContext.Provider>
  );
}

// Custom hook to use the color context
export function useColors() {
  const context = useContext(ColorContext);
  if (!context) {
    // Return fallback colors instead of throwing an error
    return {
      backgroundColor: COLORS.BACKGROUND_COLOR,
      secondaryColor: COLORS.SECONDARY_COLOR,
      primaryColor: COLORS.PRIMARY_COLOR,
      accentColor: COLORS.ACCENT_COLOR,
      primary: COLORS.PRIMARY_COLOR,
      secondary: COLORS.SECONDARY_COLOR,
      accent: COLORS.ACCENT_COLOR,
      background: COLORS.BACKGROUND_COLOR,
      text: COLORS.ACCENT_COLOR,
      getColor: (colorName) => {
        const colorMap = {
          'background': COLORS.BACKGROUND_COLOR,
          'secondary': COLORS.SECONDARY_COLOR,
          'primary': COLORS.PRIMARY_COLOR,
          'accent': COLORS.ACCENT_COLOR
        };
        return colorMap[colorName] || COLORS.PRIMARY_COLOR;
      },
      getTextClass: (colorName) => `text-${colorName}-color`,
      getBgClass: (colorName) => `bg-${colorName}-color`,
      getBorderClass: (colorName) => `border-${colorName}-color`,
      classes: {
        text: {
          background: 'text-background-color',
          secondary: 'text-secondary-color',
          primary: 'text-primary-color',
          accent: 'text-accent-color'
        },
        background: {
          background: 'bg-background-color',
          secondary: 'bg-secondary-color',
          primary: 'bg-primary-color',
          accent: 'bg-accent-color'
        },
        border: {
          background: 'border-background-color',
          secondary: 'border-secondary-color',
          primary: 'border-primary-color',
          accent: 'border-accent-color'
        }
      }
    };
  }
  return context;
}

// Export the context for direct use if needed
export { ColorContext }; 