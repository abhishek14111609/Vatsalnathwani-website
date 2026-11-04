import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

// Deterministic pseudo-random generator so the particle field is stable
// across re-renders (keeps the render pure).
const createSeededRandom = (seed) => {
  let value = seed;
  return () => {
    value = (value * 1664525 + 1013904223) % 4294967296;
    return value / 4294967296;
  };
};

function ParticleField({ count = 2000 }) {
  const ref = useRef();

  const particles = useMemo(() => {
    const random = createSeededRandom(9781);
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Spread particles in a wide area
      positions[i3] = (random() - 0.5) * 20;
      positions[i3 + 1] = (random() - 0.5) * 20;
      positions[i3 + 2] = (random() - 0.5) * 20;

      // Gold color with variation
      colors[i3] = 0.96 + random() * 0.04; // R
      colors[i3 + 1] = 0.76 + random() * 0.04; // G
      colors[i3 + 2] = 0.42 + random() * 0.04; // B
    }

    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={particles.positions} colors={particles.colors}>
      <PointMaterial
        transparent
        vertexColors
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#07070A']} />
        <ParticleField count={2000} />
      </Canvas>
    </div>
  );
}

export default HeroScene;
