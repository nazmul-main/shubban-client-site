# 4-Color System Usage Guide

Your website now uses a consistent 4-color system with semantic naming:

## Colors
- **Background Color**: `#FFFFFF` - Used for backgrounds and light text
- **Secondary Color**: `#E91E63` - Secondary brand color (pink/magenta)
- **Primary Color**: `#0D47A1` - Primary color (blue)
- **Accent Color**: `#994E3B` - Accent color (brown/terracotta)

## How to Use Colors

### Method 1: CSS Classes (Recommended)
```jsx
// Text colors
<p className="text-background-color">Background color text</p>
<p className="text-secondary-color">Secondary color text</p>
<p className="text-primary-color">Primary color text</p>
<p className="text-accent-color">Accent color text</p>

// Background colors
<div className="bg-background-color">Background color background</div>
<div className="bg-secondary-color">Secondary color background</div>
<div className="bg-primary-color">Primary color background</div>
<div className="bg-accent-color">Accent color background</div>

// Border colors
<div className="border-2 border-secondary-color">Secondary color border</div>
```

### Method 2: Using Context Hook
```jsx
import { useColors } from '../context/ColorContext';

function MyComponent() {
  const colors = useColors();
  
  return (
    <div style={{ backgroundColor: colors.secondaryColor }}>
      <p style={{ color: colors.backgroundColor }}>Text with secondary background</p>
    </div>
  );
}
```

### Method 3: Context Utility Functions
```jsx
const colors = useColors();

// Get CSS classes
<div className={colors.getBgClass('secondary')}>Secondary background</div>
<p className={colors.getTextClass('background')}>Background color text</p>
<div className={colors.getBorderClass('primary')}>Primary color border</div>
```

### Method 4: Context Classes Object
```jsx
const colors = useColors();

// Using the classes object
<div className={colors.classes.background.secondary}>Secondary background</div>
<p className={colors.classes.text.background}>Background color text</p>
<div className={colors.classes.border.primary}>Primary color border</div>
```

## Semantic Color Mappings
- `primary` = Primary Color (`#0D47A1`)
- `secondary` = Secondary Color (`#E91E63`)
- `accent` = Accent Color (`#994E3B`)
- `background` = Background Color (`#FFFFFF`)
- `text` = Accent Color (`#994E3B`)

## Example Usage Patterns

### Buttons
```jsx
// Primary button
<button className="bg-primary-color text-background-color px-4 py-2 rounded">
  Primary Action
</button>

// Secondary button
<button className="bg-secondary-color text-background-color px-4 py-2 rounded">
  Secondary Action
</button>

// Outline button
<button className="border-2 border-secondary-color text-secondary-color px-4 py-2 rounded">
  Outline Button
</button>
```

### Cards
```jsx
<div className="bg-background-color border-2 border-secondary-color rounded-lg p-6">
  <h3 className="text-secondary-color font-bold">Card Title</h3>
  <p className="text-accent-color">Card content</p>
</div>
```

### Navigation
```jsx
<nav className="bg-primary-color">
  <a className="text-background-color hover:text-secondary-color">Home</a>
  <a className="text-background-color hover:text-secondary-color">About</a>
</nav>
```

## Best Practices

1. **Use CSS classes** for most styling - they're the most performant
2. **Use context** when you need dynamic color values or calculations
3. **Maintain consistency** - use the same color for similar UI elements
4. **Consider contrast** - ensure text is readable on colored backgrounds
5. **Use semantic names** - `primary`, `secondary`, `accent` for better code readability

## Color Combinations

### High Contrast (Recommended)
- Secondary color text on background color
- Background color text on secondary/primary/accent color backgrounds
- Accent color text on background color

### Medium Contrast
- Primary color text on background color
- Secondary color borders on background color backgrounds

### Avoid
- Light text on light backgrounds
- Dark text on dark backgrounds
- Using too many colors in one component 