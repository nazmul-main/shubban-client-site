'use client';

import { useColors } from '../context/ColorContext';

export default function ColorExample() {
  const colors = useColors();

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-secondary-color mb-6">
        Your 4-Color System Demo
      </h1>

      {/* Method 1: Using CSS classes directly */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary-color">Method 1: CSS Classes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-background-color p-4 rounded-lg border-2 border-secondary-color">
            <p className="text-secondary-color font-bold">Background Color</p>
            <p className="text-accent-color text-sm">Secondary Color Text</p>
          </div>
          <div className="bg-secondary-color p-4 rounded-lg">
            <p className="text-background-color font-bold">Secondary Background</p>
            <p className="text-background-color text-sm">Background Color Text</p>
          </div>
          <div className="bg-primary-color p-4 rounded-lg">
            <p className="text-background-color font-bold">Primary Background</p>
            <p className="text-background-color text-sm">Background Color Text</p>
          </div>
          <div className="bg-accent-color p-4 rounded-lg">
            <p className="text-background-color font-bold">Accent Background</p>
            <p className="text-background-color text-sm">Background Color Text</p>
          </div>
        </div>
      </section>

      {/* Method 2: Using Context values */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary-color">Method 2: Context Values</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div 
            className="p-4 rounded-lg border-2"
            style={{ 
              backgroundColor: colors.backgroundColor,
              borderColor: colors.secondaryColor
            }}
          >
            <p style={{ color: colors.secondaryColor }} className="font-bold">Background Color</p>
            <p style={{ color: colors.accentColor }} className="text-sm">Secondary Color Text</p>
          </div>
          <div 
            className="p-4 rounded-lg"
            style={{ backgroundColor: colors.secondaryColor }}
          >
            <p style={{ color: colors.backgroundColor }} className="font-bold">Secondary Background</p>
            <p style={{ color: colors.backgroundColor }} className="text-sm">Background Color Text</p>
          </div>
          <div 
            className="p-4 rounded-lg"
            style={{ backgroundColor: colors.primaryColor }}
          >
            <p style={{ color: colors.backgroundColor }} className="font-bold">Primary Background</p>
            <p style={{ color: colors.backgroundColor }} className="text-sm">Background Color Text</p>
          </div>
          <div 
            className="p-4 rounded-lg"
            style={{ backgroundColor: colors.accentColor }}
          >
            <p style={{ color: colors.backgroundColor }} className="font-bold">Accent Background</p>
            <p style={{ color: colors.backgroundColor }} className="text-sm">Background Color Text</p>
          </div>
        </div>
      </section>

      {/* Method 3: Using Context utility functions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary-color">Method 3: Utility Functions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className={`${colors.getBgClass('background')} p-4 rounded-lg border-2 ${colors.getBorderClass('secondary')}`}>
            <p className={`${colors.getTextClass('secondary')} font-bold`}>Background Color</p>
            <p className={`${colors.getTextClass('accent')} text-sm`}>Secondary Color Text</p>
          </div>
          <div className={`${colors.getBgClass('secondary')} p-4 rounded-lg`}>
            <p className={`${colors.getTextClass('background')} font-bold`}>Secondary Background</p>
            <p className={`${colors.getTextClass('background')} text-sm`}>Background Color Text</p>
          </div>
          <div className={`${colors.getBgClass('primary')} p-4 rounded-lg`}>
            <p className={`${colors.getTextClass('background')} font-bold`}>Primary Background</p>
            <p className={`${colors.getTextClass('background')} text-sm`}>Background Color Text</p>
          </div>
          <div className={`${colors.getBgClass('accent')} p-4 rounded-lg`}>
            <p className={`${colors.getTextClass('background')} font-bold`}>Accent Background</p>
            <p className={`${colors.getTextClass('background')} text-sm`}>Background Color Text</p>
          </div>
        </div>
      </section>

      {/* Method 4: Using Context classes object */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary-color">Method 4: Classes Object</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className={`${colors.classes.background.background} p-4 rounded-lg border-2 ${colors.classes.border.secondary}`}>
            <p className={`${colors.classes.text.secondary} font-bold`}>Background Color</p>
            <p className={`${colors.classes.text.accent} text-sm`}>Secondary Color Text</p>
          </div>
          <div className={`${colors.classes.background.secondary} p-4 rounded-lg`}>
            <p className={`${colors.classes.text.background} font-bold`}>Secondary Background</p>
            <p className={`${colors.classes.text.background} text-sm`}>Background Color Text</p>
          </div>
          <div className={`${colors.classes.background.primary} p-4 rounded-lg`}>
            <p className={`${colors.classes.text.background} font-bold`}>Primary Background</p>
            <p className={`${colors.classes.text.background} text-sm`}>Background Color Text</p>
          </div>
          <div className={`${colors.classes.background.accent} p-4 rounded-lg`}>
            <p className={`${colors.classes.text.background} font-bold`}>Accent Background</p>
            <p className={`${colors.classes.text.background} text-sm`}>Background Color Text</p>
          </div>
        </div>
      </section>

      {/* Color Palette Display */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary-color">Your Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div 
              className="w-20 h-20 rounded-lg mx-auto mb-2 border-2 border-gray-300"
              style={{ backgroundColor: colors.backgroundColor }}
            ></div>
            <p className="font-bold text-secondary-color">Background Color</p>
            <p className="text-sm text-accent-color">{colors.backgroundColor}</p>
          </div>
          <div className="text-center">
            <div 
              className="w-20 h-20 rounded-lg mx-auto mb-2 border-2 border-gray-300"
              style={{ backgroundColor: colors.secondaryColor }}
            ></div>
            <p className="font-bold text-secondary-color">Secondary Color</p>
            <p className="text-sm text-accent-color">{colors.secondaryColor}</p>
          </div>
          <div className="text-center">
            <div 
              className="w-20 h-20 rounded-lg mx-auto mb-2 border-2 border-gray-300"
              style={{ backgroundColor: colors.primaryColor }}
            ></div>
            <p className="font-bold text-secondary-color">Primary Color</p>
            <p className="text-sm text-accent-color">{colors.primaryColor}</p>
          </div>
          <div className="text-center">
            <div 
              className="w-20 h-20 rounded-lg mx-auto mb-2 border-2 border-gray-300"
              style={{ backgroundColor: colors.accentColor }}
            ></div>
            <p className="font-bold text-secondary-color">Accent Color</p>
            <p className="text-sm text-accent-color">{colors.accentColor}</p>
          </div>
        </div>
      </section>
    </div>
  );
} 