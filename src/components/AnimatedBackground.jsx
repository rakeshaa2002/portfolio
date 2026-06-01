import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// A slowly rotating spiral galaxy built from thousands of colored particles.
function Galaxy({
  count = 7000,
  branches = 5,
  radius = 11,
  spin = 1.1,
  randomness = 0.55,
  randomnessPower = 3,
  insideColor = "#aee9ff",
  outsideColor = "#7c3aed",
}) {
  const ref = useRef(null);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const cIn = new THREE.Color(insideColor);
    const cOut = new THREE.Color(outsideColor);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r = Math.random() * radius;
      const branchAngle = ((i % branches) / branches) * Math.PI * 2;
      const spinAngle = r * spin;

      const rand = () =>
        Math.pow(Math.random(), randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        randomness *
        r;

      positions[i3] = Math.cos(branchAngle + spinAngle) * r + rand();
      positions[i3 + 1] = rand() * 0.6; // flatten into a disk
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + rand();

      const mixed = cIn.clone().lerp(cOut, r / radius);
      colors[i3] = mixed.r;
      colors[i3 + 1] = mixed.g;
      colors[i3 + 2] = mixed.b;
    }
    return { positions, colors };
  }, [count, branches, radius, spin, randomness, randomnessPower, insideColor, outsideColor]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.04;
    // gentle parallax toward the cursor
    ref.current.rotation.z = THREE.MathUtils.lerp(
      ref.current.rotation.z,
      state.pointer.x * 0.15,
      0.03
    );
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      -0.55 + state.pointer.y * 0.12,
      0.03
    );
  });

  return (
    <points ref={ref} rotation={[-0.55, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.95}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Distant twinkling starfield wrapped around the scene for depth.
function Starfield({ count = 1800 }) {
  const ref = useRef(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 24 + Math.random() * 18;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.01;
    // subtle twinkle
    ref.current.material.opacity = 0.6 + Math.sin(state.clock.elapsedTime * 1.5) * 0.15;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#dbeafe"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export const AnimatedBackground = () => {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at 20% 25%, rgba(59,130,246,0.18), transparent 40%)," +
          "radial-gradient(circle at 80% 70%, rgba(124,58,237,0.20), transparent 45%)," +
          "radial-gradient(circle at 50% 50%, rgba(6,182,212,0.08), transparent 60%)," +
          "linear-gradient(180deg, #05060f 0%, #080615 55%, #03040a 100%)",
      }}
    >
      <Canvas camera={{ position: [0, 3, 11], fov: 62 }} dpr={[1, 1.8]}>
        <Galaxy />
        <Starfield />
      </Canvas>
    </div>
  );
};
