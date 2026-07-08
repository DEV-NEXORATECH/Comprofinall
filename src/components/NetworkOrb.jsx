import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function NetworkOrbScene() {
  const groupRef = useRef(null);
  const { nodePositions, linePositions } = useMemo(() => {
    const nodes = [];
    const nodeCount = 34;

    for (let index = 0; index < nodeCount; index += 1) {
      const phi = Math.acos(1 - (2 * (index + 0.5)) / nodeCount);
      const theta = index * Math.PI * (3 - Math.sqrt(5));
      const radius = 1.42 + (index % 5) * 0.035;
      nodes.push(new THREE.Vector3(
        Math.cos(theta) * Math.sin(phi) * radius,
        Math.sin(theta) * Math.sin(phi) * radius,
        Math.cos(phi) * radius,
      ));
    }

    const pointArray = new Float32Array(nodes.flatMap((point) => [point.x, point.y, point.z]));
    const lines = [];
    nodes.forEach((point, index) => {
      for (let next = index + 1; next < nodes.length; next += 1) {
        const other = nodes[next];
        if (point.distanceTo(other) < 0.86) {
          lines.push(point.x, point.y, point.z, other.x, other.y, other.z);
        }
      }
    });

    return {
      nodePositions: pointArray,
      linePositions: new Float32Array(lines),
    };
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.18;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.13;
  });

  return (
    <group ref={groupRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={linePositions} count={linePositions.length / 3} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#0067bd" transparent opacity={0.22} />
      </lineSegments>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={nodePositions} count={nodePositions.length / 3} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="#0067bd" size={0.075} sizeAttenuation transparent opacity={0.92} />
      </points>
      <mesh>
        <icosahedronGeometry args={[1.47, 1]} />
        <meshBasicMaterial color="#a6c8ff" wireframe transparent opacity={0.08} />
      </mesh>
    </group>
  );
}

export default function NetworkOrb() {
  return (
    <div className="network-orb" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 4.8], fov: 44 }} dpr={[1, 1.5]}>
        <NetworkOrbScene />
      </Canvas>
    </div>
  );
}
