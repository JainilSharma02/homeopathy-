"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { LeafParticles } from "./LeafParticles";

export const DNAHelix = () => {
  const groupRef = useRef<THREE.Group>(null);
  const count = 20;
  
  const points = useMemo(() => {
    const list = [];
    for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 4;
        const x = Math.cos(angle) * 2;
        const z = Math.sin(angle) * 2;
        const y = (i / count) * 10 - 5;
        list.push({ x, y, z, color: "#38bdf8" });
        list.push({ x: -x, y, z: -z, color: "#4ade80" });
    }
    return list;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
        groupRef.current.rotation.y += 0.005;
        groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {points.map((p, i) => (
        <group key={i} position={[p.x, p.y, p.z]}>
          <Sphere args={[0.15, 16, 16]}>
            <meshStandardMaterial color={p.color} emissive={p.color} emissiveIntensity={0.5} />
          </Sphere>
          {i % 2 === 0 && (
            <mesh position={[-p.x, 0, -p.z]}>
              <boxGeometry args={[p.x * 2, 0.02, 0.02]} />
              <meshStandardMaterial color="#ffffff" transparent opacity={0.2} />
            </mesh>
          )}
        </group>
      ))}
    </group>
  );
};

export const FloatingParticles = () => {
  const points = useMemo(() => {
    const p = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20;
      p[i * 3 + 1] = (Math.random() - 0.5) * 20;
      p[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return p;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005;
      pointsRef.current.rotation.x += 0.0002;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#c5a059"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
};

export const BackgroundScene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <DNAHelix />
      </Float>

      <FloatingParticles />
      <LeafParticles />

      {/* Floating Remedy Bottles (Styled Spheres) */}
      {[...Array(5)].map((_, i) => (
        <Float key={i} speed={3} rotationIntensity={1} floatIntensity={2} position={[(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 10, -8]}>
           <Sphere args={[0.3, 32, 32]}>
              <meshStandardMaterial color="#ffffff" transparent opacity={0.6} roughness={0} metalness={0.5} />
           </Sphere>
           <mesh position={[0, -0.4, 0]}>
              <boxGeometry args={[0.2, 0.1, 0.2]} />
              <meshStandardMaterial color="#c5a059" />
           </mesh>
        </Float>
      ))}

      {/* Decorative Spheres */}


      <Float speed={5} rotationIntensity={2} floatIntensity={2}>
        <Sphere args={[1, 32, 32]} position={[-5, 2, -5]}>
          <MeshDistortMaterial color="#0f4c81" speed={2} distort={0.3} transparent opacity={0.1} />
        </Sphere>
      </Float>

       <Float speed={4} rotationIntensity={1} floatIntensity={1}>
        <Sphere args={[0.5, 32, 32]} position={[6, -3, -4]}>
          <MeshDistortMaterial color="#2d6a4f" speed={3} distort={0.4} transparent opacity={0.1} />
        </Sphere>
      </Float>
    </>
  );
};
