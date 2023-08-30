import * as THREE from 'three';
import { useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from 'react';
import { button, useControls } from 'leva';

interface TitleAnimationProps {
  image_paths: string[]
  titleLabel: string,
  fpsRate?: number,
  position?: { x?: number, y?: number, z?: number },
  size?: { width?: number, height?: number }
}

export default function TitleAnimation({
  image_paths,
  titleLabel,
  fpsRate = 12,
  position = {
    x: 0,
    y: 0,
    z: -1
  },
  size = {
    width: 1,
    height: 1
  }
}: TitleAnimationProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { camera } = useThree();
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const textures = useLoader(THREE.TextureLoader, image_paths);

  useControls(titleLabel, { 'repeat animation': button(() => ejectAnimation()), });

  const ejectAnimation = () => {
    setCurrentImageIndex(0);

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex: number) => {
        if (prevIndex == image_paths.length - 1) {
          clearInterval(interval);
          return prevIndex;
        }
        return (prevIndex + 1) % image_paths.length;
      });
    }, 1000 / fpsRate);

    return interval;
  };

  useEffect(() => {
    if (groupRef.current)
      groupRef.current.lookAt(camera.position);

    const interval = ejectAnimation();
    return () => clearInterval(interval);
  }, []);

  //! Delete to update on github
  // useEffect(() => {
  //   if (groupRef.current)
  //     groupRef.current.lookAt(camera.position);
  // }, [position.x, position.y, position.z])

  return <group ref={groupRef} position={[position.x, position.y, position.z]}>
    <mesh>
      <planeGeometry args={[size.width, size.height]} />
      <meshBasicMaterial map={textures[currentImageIndex]} transparent />
    </mesh>
  </group>
};