import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const industries = [
  { label: 'Fintech', icon: 'Banking API', position: [-1.95, 0.92, 0.1], color: '#00427e' },
  { label: 'Healthcare', icon: 'EMR Data', position: [0, 1.36, 0.18], color: '#0067bd' },
  { label: 'Logistics', icon: 'Tracking', position: [1.95, 0.9, 0.08], color: '#4d8fd1' },
  { label: 'Retail', icon: 'POS ERP', position: [1.78, -0.92, 0.16], color: '#70a9e6' },
  { label: 'Manufacturing', icon: 'Production', position: [0, -1.35, 0.12], color: '#2d75bd' },
  { label: 'Education', icon: 'LMS Portal', position: [-1.78, -0.92, 0.18], color: '#8fc2f2' },
];

function IndustryNode({ industry, index }) {
  return (
    <group position={industry.position}>
      <mesh rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.34, 0.34, 0.18]} />
        <meshStandardMaterial color={industry.color} roughness={0.38} metalness={0.14} />
      </mesh>
      <mesh position={[0, 0, -0.08]} scale={[1, 1, 0.08]}>
        <sphereGeometry args={[0.38, 32, 32]} />
        <meshBasicMaterial color="#a6c8ff" transparent opacity={0.16 + (index % 2) * 0.04} />
      </mesh>
    </group>
  );
}

function IndustryScene() {
  const groupRef = useRef(null);
  const linePositions = useMemo(() => {
    const center = new THREE.Vector3(0, 0, 0.44);
    const points = [];
    industries.forEach((industry) => {
      const target = new THREE.Vector3(...industry.position);
      const mid = center.clone().lerp(target, 0.5);
      mid.z += 0.42;
      const curve = new THREE.QuadraticBezierCurve3(center, mid, target);
      curve.getPoints(24).forEach((point, index, list) => {
        if (index === list.length - 1) return;
        const next = list[index + 1];
        points.push(point.x, point.y, point.z, next.x, next.y, next.z);
      });
    });
    return new Float32Array(points);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.22) * 0.1;
    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.32) * 0.025;
  });

  return (
    <>
      <ambientLight intensity={1.75} />
      <directionalLight position={[2.8, 4, 4.6]} intensity={1.65} />
      <group ref={groupRef} rotation={[-0.56, 0, -0.05]}>
        <mesh position={[0, 0, -0.1]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[2.72, 2.72, 0.035, 96]} />
          <meshBasicMaterial color="#f8fbff" transparent opacity={0.82} />
        </mesh>
        <mesh position={[0, 0, 0.42]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.68, 0.68, 0.32]} />
          <meshStandardMaterial color="#00427e" roughness={0.32} metalness={0.18} />
        </mesh>
        <mesh position={[0, 0, 0.08]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.78, 0.014, 16, 96]} />
          <meshBasicMaterial color="#a6c8ff" transparent opacity={0.6} />
        </mesh>
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" array={linePositions} count={linePositions.length / 3} itemSize={3} />
          </bufferGeometry>
          <lineBasicMaterial color="#0067bd" transparent opacity={0.42} />
        </lineSegments>
        {industries.map((industry, index) => <IndustryNode industry={industry} index={index} key={industry.label} />)}
      </group>
    </>
  );
}

export default function IndustryEcosystem3D() {
  return (
    <div className="industry-ecosystem-canvas" aria-label="Visual 3D ecosystem solusi industri Nexora">
      <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.5]}>
        <IndustryScene />
      </Canvas>
      <div className="industry-node-labels" aria-hidden="true">
        {industries.map((industry) => (
          <span key={industry.label}>
            <strong>{industry.label}</strong>
            <small>{industry.icon}</small>
          </span>
        ))}
      </div>
      <div className="industry-core-label" aria-hidden="true">Nexora Core</div>
    </div>
  );
}
