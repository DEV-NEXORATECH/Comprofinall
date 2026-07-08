import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const leaders = [
  { label: 'CEO', position: [-1.55, 0.72, 0.18], color: '#00427e' },
  { label: 'CTO', position: [1.42, 0.7, 0.1], color: '#0067bd' },
  { label: 'COO', position: [-1.18, -0.92, 0.12], color: '#4d8fd1' },
  { label: 'Sales', position: [1.38, -0.86, 0.2], color: '#7fb2e8' },
];

function TeamScene() {
  const groupRef = useRef(null);
  const linePositions = useMemo(() => {
    const center = new THREE.Vector3(0, 0, 0.42);
    const points = [];
    leaders.forEach((leader) => {
      const end = new THREE.Vector3(...leader.position);
      const mid = center.clone().lerp(end, 0.5);
      mid.z += 0.28;
      const curve = new THREE.QuadraticBezierCurve3(center, mid, end);
      curve.getPoints(20).forEach((point, index, list) => {
        if (index === list.length - 1) return;
        const next = list[index + 1];
        points.push(point.x, point.y, point.z, next.x, next.y, next.z);
      });
    });
    return new Float32Array(points);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.28) * 0.12;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.52) * 0.035;
  });

  return (
    <>
      <ambientLight intensity={1.7} />
      <directionalLight position={[2.4, 3.4, 4]} intensity={1.5} />
      <group ref={groupRef} rotation={[-0.52, 0, 0]}>
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.55, 0.012, 16, 96]} />
          <meshBasicMaterial color="#a6c8ff" transparent opacity={0.55} />
        </mesh>
        <mesh position={[0, 0, 0.42]}>
          <octahedronGeometry args={[0.38, 1]} />
          <meshStandardMaterial color="#00427e" roughness={0.36} metalness={0.18} />
        </mesh>
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" array={linePositions} count={linePositions.length / 3} itemSize={3} />
          </bufferGeometry>
          <lineBasicMaterial color="#0067bd" transparent opacity={0.38} />
        </lineSegments>
        {leaders.map((leader) => (
          <group position={leader.position} key={leader.label}>
            <mesh>
              <sphereGeometry args={[0.16, 32, 32]} />
              <meshStandardMaterial color={leader.color} roughness={0.42} metalness={0.1} />
            </mesh>
            <mesh scale={[1, 1, 0.08]}>
              <sphereGeometry args={[0.28, 32, 32]} />
              <meshBasicMaterial color="#a6c8ff" transparent opacity={0.18} />
            </mesh>
          </group>
        ))}
      </group>
    </>
  );
}

export default function TeamNetwork3D() {
  return (
    <div className="team-network-canvas" aria-label="Visual 3D struktur manajemen Nexora">
      <Canvas camera={{ position: [0, 0, 4.4], fov: 42 }} dpr={[1, 1.5]}>
        <TeamScene />
      </Canvas>
      <div className="team-network-labels" aria-hidden="true">
        {leaders.map((leader) => <span key={leader.label}>{leader.label}</span>)}
      </div>
    </div>
  );
}
