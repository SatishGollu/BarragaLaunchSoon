import React, { useRef, useEffect, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";

// Import shaders from separate files
import vertexShader from "../../../../shaders/sphere.vert?raw";
import fragmentShader from "../../../../shaders/sphere.frag?raw";

// Simple Morphing Sphere
const MorphingSphere: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // 🐉 DRAGONFLY MOVEMENT ANIMATION SETTINGS
  const ANIMATION_EASE = "back.inOut(1.7)"; // ⭐ PERFECT for dragonfly-like motion!

  // ⚡ SPEED CONTROL - Easy to experiment with different speeds!
  const SPEED_MULTIPLIER = 3.0; // Change this value to adjust speed!

  // 📱 RESPONSIVE BALL SIZE
  const getResponsiveSize = (): number => {
    const width = window.innerWidth;
    if (width <= 480) return 0.35; // Small mobile
    if (width <= 768) return 0.45; // Tablet
    return 0.6; // Desktop
  };

  const [ballSize, setBallSize] = useState<number>(getResponsiveSize());

  // Update ball size on window resize
  useEffect(() => {
    const handleResize = () => {
      setBallSize(getResponsiveSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🦟 DRAGONFLY FLIGHT PATTERN:
  // "back.inOut(1.7)"        // ⭐ RECOMMENDED: Quick darting with slight overshoot
  // "elastic.inOut(1, 0.3)"  // Alternative: Wing-flutter effect
  // "power4.inOut"           // Sharp acceleration/deceleration like insects
  // "expo.inOut"             // Sudden bursts of speed

  useEffect(() => {
    if (!materialRef.current) return;

    // Dragonfly-inspired flight pattern: quick darts + sudden stops
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.8 * SPEED_MULTIPLIER, // Pause like dragonfly hovering
      })
      .to(materialRef.current.uniforms.u_progress, {
        value: 4, // Quick dart forward
        duration: 1.2 * SPEED_MULTIPLIER, // Fast movement
        ease: ANIMATION_EASE,
      })
      .to(materialRef.current.uniforms.u_progress, {
        value: 1, // Sharp stop/hover
        duration: 0.8 * SPEED_MULTIPLIER, // Quick transition
        ease: ANIMATION_EASE,
      })
      .to(materialRef.current.uniforms.u_progress, {
        value: 3.5, // Another quick dart
        duration: 1.5 * SPEED_MULTIPLIER,
        ease: ANIMATION_EASE,
      })
      .to(materialRef.current.uniforms.u_progress, {
        value: 0.5, // Return to hovering
        duration: 1 * SPEED_MULTIPLIER,
        ease: ANIMATION_EASE,
      });
  }, [ANIMATION_EASE, SPEED_MULTIPLIER]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value = state.clock.elapsedTime;
    }

    // Dragonfly-like erratic rotation (not smooth, more darting)
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      // Irregular rotation speed mimicking dragonfly direction changes
      meshRef.current.rotation.y += 0.003 + Math.sin(time * 3) * 0.002;
      meshRef.current.rotation.x += Math.sin(time * 2.7) * 0.001;
    }
  });

  const sphereMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: vertexShader, // Now using separate .vert file
        fragmentShader: fragmentShader, // Now using separate .frag file
        uniforms: {
          u_time: { value: 0 },
          u_progress: { value: 0 },
        },
      }),
    []
  );

  return (
    <mesh ref={meshRef} material={sphereMaterial}>
      <sphereGeometry args={[ballSize, 64, 64]} />
      <primitive object={sphereMaterial} ref={materialRef} />
    </mesh>
  );
};

// Simple dark background
const SimpleBackground: React.FC = () => {
  return (
    <mesh position={[0, 0, -3]}>
      <planeGeometry args={[100, 100]} />
      <meshBasicMaterial color="#0a0a0a" />
    </mesh>
  );
};

// Main Component - Simple Ball Only
const BallOnlyMorphing: React.FC = () => {
  return (
    <Canvas
      camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, 5] }}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
      }}
    >
      <SimpleBackground />
      <MorphingSphere />
    </Canvas>
  );
};

export default BallOnlyMorphing;
