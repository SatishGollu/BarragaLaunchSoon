# Barraga - Timeless Clothing Brand Landing Page

A sophisticated brand landing page for Barraga featuring an interactive WebGL morphing sphere background, elegant animations, and responsive design.

## About Barraga

Barraga is a timeless clothing brand in creation, dedicated to shaping clothing that lives with you and moves with your journey. This landing page showcases the brand's sophisticated aesthetic through cutting-edge web technologies and elegant design.

## Features

- **🎨 Brand Identity**: Professional logo hierarchy with dragonfly brand mark
- **⚡ WebGL Background**: Dynamic morphing sphere with coral-colored organic animation  
- **✨ Cinematic Loading**: Smooth, timed entrance animations for all brand elements
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🎭 Interactive Effects**: Subtle hover animations and breathing text effects
- **⚛️ Modern Tech Stack**: React 18, Three.js, GSAP, and Vite

## Tech Stack

- **React 18** - Modern component framework
- **Three.js** + **@react-three/fiber** - WebGL 3D graphics
- **GSAP** - Professional animation library
- **Vite** - Fast build tool and dev server
- **Custom GLSL Shaders** - Vertex and fragment shaders for morphing effects
- **Google Fonts** - Lato typography for premium feel

## Local Development

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd barraga
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Build for production:**
```bash
npm run build
```

5. **Preview production build:**
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── BallOnlyMorphing.jsx     # WebGL morphing sphere component
│   └── TypewriterText.jsx       # Animated text component
├── shaders/
│   ├── sphere.vert              # Vertex shader for morphing effect
│   └── sphere.frag              # Fragment shader for visual styling
├── assets/
│   └── logos/
│       ├── onlyBarraga.svg      # Main brand logo
│       └── dragonfly.svg        # Brand mark logo
├── App.jsx                      # Main application component
├── App.css                      # Responsive styles and animations
└── main.jsx                     # React app entry point
```

## Design Features

### Brand Identity
- **Dragonfly Logo**: Elegant top brand mark with hover effects
- **BARRAGA Typography**: Center-stage logo with professional spacing
- **Cinematic Loading**: Timed entrance animations (dragonfly → logo → text)

### Interactive Elements
- **Morphing Background**: Organic coral-colored sphere with dragonfly movement patterns
- **Breathing Text**: Subtle glow and dim effects on creation text
- **Responsive Design**: Scales beautifully across all device sizes

### Performance
- **Optimized WebGL**: Efficient shader-based rendering
- **Smooth Animations**: 60fps animations with professional easing
- **Fast Loading**: Vite-powered build with optimized assets

## Customization

### Colors
- **Background**: `#0a0a0a` (Deep black)
- **Brand Coral**: `#F24B42` (Morphing sphere)
- **Text Colors**: `#ffffff` (bright) to `#cccccc` (dimmed)

### Animation Timing
- **Dragonfly**: 0.5s delay entrance
- **BARRAGA Logo**: 1.8s delay entrance  
- **Subtitle**: 4.8s delay entrance

## Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting platform
3. Ensure proper routing for single-page applications

### Vercel/Netlify
- Simply connect your GitHub repository
- Set build command: `npm run build`
- Set publish directory: `dist`

## Browser Support

- **Chrome**: ✅ Full support
- **Firefox**: ✅ Full support
- **Safari**: ✅ Full support
- **Edge**: ✅ Full support
- **Mobile Browsers**: ✅ Responsive design

## License

This project is part of the Barraga brand identity and is proprietary.

---

**Barraga** - *Timeless clothing to live with you, and move with your journey.*
```

## Performance

This simplified version provides excellent performance:

- **60+ FPS** on most hardware
- **Low memory usage** (~35MB)
- **Mobile-friendly** with good battery life
- **No particle system overhead**

## Technologies Used

- **React 18**: Component framework
- **Vite**: Build tool and dev server
- **Three.js**: 3D graphics library
- **GSAP**: Animation library
- **@react-three/fiber**: React renderer for Three.js
- **GLSL**: Shader language for morphing effects

