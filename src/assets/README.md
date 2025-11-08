# Assets Folder

This folder contains all static assets for the WebGL Morphing Ball project.

## Folder Structure

- **`images/`** - General images (PNG, JPG, WebP)
- **`logos/`** - Brand logos and SVG graphics
- **`icons/`** - Small icons and symbols
- **`fonts/`** - Custom fonts (if needed)

## Usage Examples

```jsx
// Import images
import logo from '../assets/logos/brand-logo.svg'
import heroImage from '../assets/images/hero-background.png'
import icon from '../assets/icons/menu-icon.svg'

// Use in components
<img src={logo} alt="Brand Logo" />
<div style={{ backgroundImage: `url(${heroImage})` }} />
```

## Supported Formats

- **Images**: PNG, JPG, JPEG, WebP, GIF
- **Vectors**: SVG
- **Fonts**: WOFF, WOFF2, TTF, OTF

## File Naming Convention

- Use kebab-case: `brand-logo.svg`, `hero-image.png`
- Be descriptive: `company-logo-dark.svg`, `menu-close-icon.svg`
- Include size if relevant: `logo-small.svg`, `hero-1920x1080.jpg`