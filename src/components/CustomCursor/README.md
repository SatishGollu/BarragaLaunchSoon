# CustomCursor Component

A production-ready, theme-aware custom cursor component with smooth trailing effects.

## Features

- 🎨 **Theme-Aware**: Automatically adapts colors based on dark/light themes
- 🔄 **Smooth Animation**: Physics-based trailing effect with 15 particles
- 📱 **Responsive**: Automatically disabled on mobile devices
- ⚡ **Performance Optimized**: Uses requestAnimationFrame for smooth 60fps animation
- 🎯 **Fully Customizable**: Override colors and theme detection behavior
- 💪 **TypeScript**: Full type safety out of the box

## Installation

Simply copy the `CustomCursor` folder into your project's components directory.

## Basic Usage

### Auto Theme Detection (Recommended)

The cursor will automatically detect your system's theme preference:

```tsx
import CustomCursor from "./components/CustomCursor/CustomCursor";

function App() {
  return (
    <>
      <CustomCursor />
      {/* Your app content */}
    </>
  );
}
```

### Explicit Theme

Force a specific theme:

```tsx
// Dark theme - uses red cursor (#F24B42)
<CustomCursor theme="dark" />

// Light theme - uses blue cursor (#5551FF)
<CustomCursor theme="light" />
```

### Custom Colors

Override the default colors:

```tsx
<CustomCursor theme="dark" darkColor="#FF0000" lightColor="#0000FF" />
```

### Dynamic Theme Switching

```tsx
import { useState } from "react";
import CustomCursor from "./components/CustomCursor/CustomCursor";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  return (
    <>
      <CustomCursor theme={theme} />
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle Theme
      </button>
      {/* Your app content */}
    </>
  );
}
```

## Props

| Prop         | Type                          | Default     | Description                    |
| ------------ | ----------------------------- | ----------- | ------------------------------ |
| `theme`      | `"dark" \| "light" \| "auto"` | `"auto"`    | Theme mode for color selection |
| `darkColor`  | `string`                      | `"#F24B42"` | Cursor color for dark theme    |
| `lightColor` | `string`                      | `"#5551FF"` | Cursor color for light theme   |

## Default Colors

- **Dark Theme**: `#F24B42` (Red) - High contrast on dark backgrounds
- **Light Theme**: `#5551FF` (Blue/Purple) - High contrast on light backgrounds

## Behavior

### Desktop

- Custom cursor with 15 trailing particles
- Smooth animation following mouse movement
- Expands on mouse down
- Glow effect matching the current theme color

### Mobile & Tablet

- Automatically disabled on touch devices (phones, tablets, iPads)
- Component returns `null` for touch devices - no DOM elements rendered
- Falls back to native cursor/touch interactions
- Disabled via media queries: `max-width: 1024px` and `hover: none`
- Optimal performance with zero overhead on mobile devices

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Any browser supporting CSS backdrop-filter and requestAnimationFrame

## Performance Notes

- Uses `will-change` CSS property for GPU acceleration
- Optimized with `requestAnimationFrame` for smooth 60fps
- Minimal DOM manipulation
- Automatic cleanup on unmount

## Examples

### Integration with React Router

```tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor/CustomCursor";

function App() {
  return (
    <Router>
      <CustomCursor theme="auto" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
```

### With Theme Context

```tsx
import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";
import CustomCursor from "./components/CustomCursor/CustomCursor";

// 1. Create Theme Context
type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 2. Theme Provider Component
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom Hook
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

// 4. Usage in App
function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <CustomCursor theme={theme} />
      <div className={`app ${theme}`}>
        <button onClick={toggleTheme}>
          Switch to {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
        <h1>My App</h1>
        <p>The cursor color changes based on the theme!</p>
      </div>
    </>
  );
}
```

## Customization

### Adjusting Trail Count

Edit `TRAIL_COUNT` in `CustomCursor.tsx`:

```tsx
const TRAIL_COUNT = 20; // More trails = denser effect
```

### Modifying Animation Speed

Adjust the easing factor (default 0.2):

```tsx
cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.3; // Faster
```

### Changing Trail Sizes

Modify the size range in trail initialization:

```tsx
size: Math.random() * 6 + 6, // Random size between 6-12px
```

## CSS Variables

You can also use CSS custom properties for theming:

```css
:root {
  --cursor-color-dark: #f24b42;
  --cursor-color-light: #5551ff;
}
```

## Troubleshooting

### Cursor not visible

- Check z-index conflicts with other fixed elements
- Ensure the component is rendered at the root level
- Verify the color contrast with your background

### Performance issues

- Reduce `TRAIL_COUNT`
- Increase the easing factor for faster animation
- Check for other heavy animations on the page

## License

MIT - Feel free to use in your projects!

## Credits

Created for the Barraga Elements collection by Berme.
