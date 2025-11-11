# Floating Ribbon Component

A mesmerizing 3D floating ribbon effect built with React and Three.js, inspired by RetroArch menu shaders.

## Features

- **Real-time Animation**: Smooth, continuous ribbon movement using procedural noise
- **Custom GLSL Shaders**: Vertex and fragment shaders for realistic ribbon physics
- **Responsive Design**: Adapts to different screen sizes and orientations
- **Hardware Acceleration**: Leverages WebGL for optimal performance
- **React Integration**: Clean component lifecycle management with proper cleanup

## Technical Details

### Shaders

- **Vertex Shader**: Implements noise-based deformation and wave functions
- **Fragment Shader**: Calculates surface normals for realistic lighting

### Dependencies

- React 19+
- Three.js 0.181+
- TypeScript support

### Performance

- Optimized for 60fps animation
- Automatic cleanup on component unmount
- Responsive rendering based on container size

## Usage

The component is automatically routed and can be accessed via `/floating-ribbon` path.

```tsx
import FloatingRibbon from "./components/FloatingRibbon/FloatingRibbon";
```

## Customization

You can modify the ribbon behavior by adjusting:

- Animation speed in the `animate()` function
- Noise parameters in the vertex shader
- Color and transparency in the fragment shader
- Container styling in the CSS file
