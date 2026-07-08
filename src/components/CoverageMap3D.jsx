import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const islands = [
  { name: 'Sumatra', position: [-2.15, -0.15, 0], scale: [1.18, 0.24, 0.08], rotation: -0.55 },
  { name: 'Java', position: [-0.75, -1.02, 0.02], scale: [1.28, 0.16, 0.08], rotation: -0.08 },
  { name: 'Kalimantan', position: [-0.42, 0.52, 0], scale: [1.0, 0.56, 0.08], rotation: 0.16 },
  { name: 'Sulawesi', position: [0.82, 0.02, 0.03], scale: [0.74, 0.28, 0.08], rotation: 0.45 },
  { name: 'Papua', position: [2.18, 0.02, 0], scale: [1.22, 0.35, 0.08], rotation: 0.1 },
  { name: 'Nusa Tenggara', position: [0.72, -1.16, 0.04], scale: [0.92, 0.1, 0.06], rotation: -0.04 },
];

const nodes = [
  { name: 'Bandung', position: [-0.82, -1.0, 0.33], main: true },
  { name: 'Sumatra', position: [-2.08, -0.2, 0.3] },
  { name: 'Kalimantan', position: [-0.42, 0.55, 0.3] },
  { name: 'Sulawesi', position: [0.84, 0.04, 0.32] },
  { name: 'Papua', position: [2.17, 0.04, 0.3] },
  { name: 'Bali', position: [0.18, -1.12, 0.31] },
];

function Island({ island }) {
  return (
    <mesh
      position={island.position}
      rotation={[Math.PI / 2, 0, island.rotation]}
      scale={island.scale}
    >
      <cylinderGeometry args={[1, 1, 0.12, 48]} />
      <meshStandardMaterial color="#d8ecff" roughness={0.72} metalness={0.04} />
    </mesh>
  );
}

function CoverageScene() {
  const groupRef = useRef(null);
  const linePositions = useMemo(() => {
    const origin = new THREE.Vector3(...nodes[0].position);
    const points = [];
    nodes.slice(1).forEach((node) => {
      const target = new THREE.Vector3(...node.position);
      const mid = origin.clone().lerp(target, 0.5);
      mid.z += 0.32;
      const curve = new THREE.QuadraticBezierCurve3(origin, mid, target);
      curve.getPoints(22).forEach((point, index, list) => {
        if (index === list.length - 1) return;
        const next = list[index + 1];
        points.push(point.x, point.y, point.z, next.x, next.y, next.z);
      });
    });
    return new Float32Array(points);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.35) * 0.025;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.55) * 0.035;
  });

  return (
    <>
      <ambientLight intensity={1.8} />
      <directionalLight position={[2, 4, 5]} intensity={1.7} />
      <group ref={groupRef} rotation={[-0.76, 0, -0.16]} position={[0, -0.08, 0]}>
        <mesh position={[0, -0.1, -0.08]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[3.35, 96]} />
          <meshBasicMaterial color="#f8fbff" transparent opacity={0.72} />
        </mesh>
        {islands.map((island) => <Island island={island} key={island.name} />)}
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" array={linePositions} count={linePositions.length / 3} itemSize={3} />
          </bufferGeometry>
          <lineBasicMaterial color="#0067bd" transparent opacity={0.42} />
        </lineSegments>
        {nodes.map((node) => (
          <group position={node.position} key={node.name}>
            <mesh>
              <sphereGeometry args={[node.main ? 0.095 : 0.064, 24, 24]} />
              <meshStandardMaterial color={node.main ? '#00427e' : '#0067bd'} roughness={0.35} metalness={0.12} />
            </mesh>
            <mesh scale={[1, 1, 0.12]}>
              <sphereGeometry args={[node.main ? 0.18 : 0.13, 24, 24]} />
              <meshBasicMaterial color="#a6c8ff" transparent opacity={node.main ? 0.24 : 0.18} />
            </mesh>
          </group>
        ))}
      </group>
    </>
  );
}

export default function CoverageMap3D() {
  return (
    <div className="coverage-canvas" aria-label="Cakupan layanan Nexora di Indonesia dalam visual 3D">
      <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 1.5]}>
        <CoverageScene />
      </Canvas>
      <div className="coverage-canvas-tags" aria-hidden="true">
        <span className="coverage-pin">Bandung HQ</span>
        <span>National Coverage</span>
      </div>
    </div>
  );
}
