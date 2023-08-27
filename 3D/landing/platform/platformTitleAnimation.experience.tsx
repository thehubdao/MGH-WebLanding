import * as THREE from 'three';
import { useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef } from 'react';

export default function PlatformTitleAnimation() {
  const groupRef = useRef<THREE.Group>(null);
  const { camera } = useThree();
  const texture = useLoader(THREE.TextureLoader, '/animation/platform/PLATFORM.gif');

  useEffect(() => {
    if (groupRef.current)
      groupRef.current.lookAt(camera.position);
  }, [])

  return <group ref={groupRef} position={[0.5, 0, -1]}>
    <mesh position={[.1, 0, -1]} >
      <planeGeometry args={[0.5, 0.5]} />
      <meshBasicMaterial map={texture} transparent />
      {/* <meshBasicMaterial color={[255, 255, 0]} /> */}
    </mesh>
  </group>
};