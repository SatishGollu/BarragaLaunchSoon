# Barraga Launch Soon - Project Structure

## 📁 Folder Structure

```
src/
├── components/
│   ├── common/              # Reusable UI components
│   │   ├── ErrorBoundary/   # Error boundary for error handling
│   │   ├── Loading/         # Loading spinner component
│   │   └── Logo/            # Logo component
│   ├── layout/              # Layout components (Header, Footer, etc.)
│   └── features/            # Feature-specific components
│       └── ComingSoon/      # Coming soon page features
│           ├── BallOnlyMorphing/  # WebGL morphing sphere
│           └── TypewriterText/    # Animated text component
├── hooks/                   # Custom React hooks
│   ├── useWindowSize.js     # Window size tracking
│   ├── useLoadingState.js   # Loading state management
│   ├── useMousePosition.js  # Mouse position tracking
│   └── index.js             # Hooks barrel export
├── utils/                   # Helper functions
│   ├── logger.js            # Logging utility
│   ├── helpers.js           # Generic helper functions
│   └── index.js             # Utils barrel export
├── services/                # API and external services
│   ├── api.js               # API service wrapper
│   └── index.js             # Services barrel export
├── constants/               # App constants and configuration
│   └── index.js             # All constants (colors, animations, etc.)
├── assets/                  # Static assets
│   └── logos/               # Logo files
├── shaders/                 # GLSL shader files
│   ├── sphere.vert          # Vertex shader
│   └── sphere.frag          # Fragment shader
├── App.jsx                  # Main app component
├── App.css                  # Global styles
├── main.jsx                 # React entry point
└── index.css                # Base styles
```

## 🚀 Production-Ready Features

### ✅ Error Handling

- **ErrorBoundary** component catches React errors
- Displays user-friendly error messages
- Shows detailed error info in development mode
- Provides "Refresh" and "Try Again" options

### ✅ Loading States

- **Loading** component for async operations
- Supports multiple sizes (small, medium, large)
- Full-screen and inline variants
- Customizable loading messages

### ✅ Code Organization

- **Modular structure** with clear separation of concerns
- **Barrel exports** (index.js) for clean imports
- **Component folders** with co-located styles
- **Custom hooks** for reusable logic

### ✅ Configuration Management

- **Constants file** for centralized configuration
- **Environment variables** support (.env.example)
- **Feature flags** for easy feature toggling
- **API configuration** ready for backend integration

### ✅ Utility Functions

- **Logger** for consistent logging
- **Helpers** for common operations (debounce, throttle, validation)
- **API service** with error handling

### ✅ Custom Hooks

- **useWindowSize** - Responsive design helper
- **useLoadingState** - Loading state management
- **useMousePosition** - Mouse tracking (for future features)

## 📝 Usage Examples

### Importing Components

```jsx
// Clean imports using barrel exports
import { ErrorBoundary, Loading, Logo } from "./components/common";
import { useWindowSize, useLoadingState } from "./hooks";
import { COLORS, ANIMATION, BRAND_TEXT } from "./constants";
import { apiService } from "./services";
```

### Using Custom Hooks

```jsx
const MyComponent = () => {
  const { width, isMobile, isTablet } = useWindowSize();
  const { isLoading, startLoading, stopLoading } = useLoadingState();

  // Your component logic
};
```

### Environment Variables

```bash
# Copy .env.example to .env.local
cp .env.example .env.local

# Edit .env.local with your values
VITE_API_BASE_URL=https://api.barraga.com
```

## 🔜 Next Steps for Production

1. **Add Testing**

   - Jest + React Testing Library setup
   - Unit tests for components
   - Integration tests for features

2. **Add SEO**

   - React Helmet for meta tags
   - Open Graph tags
   - Structured data (JSON-LD)

3. **Add Analytics**

   - Google Analytics integration
   - Error tracking (Sentry)
   - Performance monitoring

4. **Add Accessibility**

   - ARIA labels
   - Keyboard navigation
   - Screen reader support

5. **Optimize Performance**

   - Code splitting with React.lazy()
   - Image optimization
   - Bundle size analysis

6. **Add CI/CD**
   - Automated testing
   - Automated deployment
   - Version tagging

## 🎯 Current Status

✅ Production-grade folder structure
✅ Error boundary implemented
✅ Loading states implemented
✅ Custom hooks created
✅ Constants and configuration
✅ API service ready
✅ Utility functions
✅ Environment variable support

Your project is now well-organized and ready for scaling!
