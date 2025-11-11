import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./FloatingRibbon.css";

const FloatingRibbon = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const ribbonRef = useRef<THREE.Mesh | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 10000);
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    container.appendChild(renderer.domElement);

    // Create ribbon mesh with shader material
    const ribbon = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1, 128, 128),
      new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 1.0 },
        },
        vertexShader: `
          varying vec3 vEC;
          uniform float time;

          float iqhash(float n) {
            return fract(sin(n) * 43758.5453);
          }

          float noise(vec3 x) {
            vec3 p = floor(x);
            vec3 f = fract(x);
            f = f * f * (3.0 - 2.0 * f);
            float n = p.x + p.y * 57.0 + 113.0 * p.z;
            return mix(mix(mix(iqhash(n), iqhash(n + 1.0), f.x),
                       mix(iqhash(n + 57.0), iqhash(n + 58.0), f.x), f.y),
                       mix(mix(iqhash(n + 113.0), iqhash(n + 114.0), f.x),
                       mix(iqhash(n + 170.0), iqhash(n + 171.0), f.x), f.y), f.z);
          }

          float xmb_noise2(vec3 x) {
            return cos(x.z * 4.0) * cos(x.z + time / 10.0 + x.x);
          }

          void main() {
            vec4 pos = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            vec3 v = vec3(pos.x, 0.0, pos.y);
            vec3 v2 = v;
            vec3 v3 = v;

            v.y = xmb_noise2(v2) / 8.0;

            v3.x -= time / 5.0;
            v3.x /= 4.0;

            v3.z -= time / 10.0;
            v3.y -= time / 100.0;

            v.z -= noise(v3 * 7.0) / 15.0;
            v.y -= noise(v3 * 7.0) / 15.0 + cos(v.x * 2.0 - time / 2.0) / 5.0 - 0.3;

            vEC = v;
            gl_Position = vec4(v, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          varying vec3 vEC;

          void main() {
            const vec3 up = vec3(0.0, 0.0, 1.0);
            vec3 x = dFdx(vEC);
            vec3 y = dFdy(vEC);
            vec3 normal = normalize(cross(x, y));
            float c = 1.0 - dot(normal, up);
            c = (1.0 - cos(c * c)) / 3.0;
            gl_FragColor = vec4(1.0, 1.0, 1.0, c * 1.5);
          }
        `,

        side: THREE.DoubleSide,
        transparent: true,
        depthTest: false,
      })
    );

    scene.add(ribbon);

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;
    ribbonRef.current = ribbon;

    // Resize function
    const resize = () => {
      const { offsetWidth, offsetHeight } = container;

      renderer.setSize(offsetWidth, offsetHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      camera.aspect = offsetWidth / offsetHeight;
      camera.updateProjectionMatrix();

      ribbon.scale.set(camera.aspect * 1.55, 0.75, 1);
    };

    // Animation loop
    const animate = () => {
      if (
        ribbonRef.current &&
        ribbonRef.current.material instanceof THREE.ShaderMaterial
      ) {
        ribbonRef.current.material.uniforms.time.value += 0.01;
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    // Initial setup
    resize();
    animate();

    // Event listener for resize
    window.addEventListener("resize", resize);

    // Cleanup function
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      window.removeEventListener("resize", resize);

      if (container && rendererRef.current?.domElement) {
        container.removeChild(rendererRef.current.domElement);
      }

      if (ribbonRef.current) {
        if (ribbonRef.current.geometry) {
          ribbonRef.current.geometry.dispose();
        }
        if (ribbonRef.current.material instanceof THREE.ShaderMaterial) {
          ribbonRef.current.material.dispose();
        }
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div className="floating-ribbon-page">
      <div className="floating-ribbon-container" ref={containerRef}></div>
    </div>
  );
};

export default FloatingRibbon;
