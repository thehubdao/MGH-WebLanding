import * as THREE from 'three';
import { useLoader } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { button, useControls } from 'leva';

const IMAGE_PATHS = [
  '/animation/enter_the_hub/enter_the_hub_00000.png',
  '/animation/enter_the_hub/enter_the_hub_00001.png',
  '/animation/enter_the_hub/enter_the_hub_00002.png',
  '/animation/enter_the_hub/enter_the_hub_00003.png',
  '/animation/enter_the_hub/enter_the_hub_00004.png',
  '/animation/enter_the_hub/enter_the_hub_00005.png',
  '/animation/enter_the_hub/enter_the_hub_00006.png',
  '/animation/enter_the_hub/enter_the_hub_00007.png',
  '/animation/enter_the_hub/enter_the_hub_00008.png',
  '/animation/enter_the_hub/enter_the_hub_00009.png',
  '/animation/enter_the_hub/enter_the_hub_00010.png',
  '/animation/enter_the_hub/enter_the_hub_00011.png',
  '/animation/enter_the_hub/enter_the_hub_00012.png',
  '/animation/enter_the_hub/enter_the_hub_00013.png',
  '/animation/enter_the_hub/enter_the_hub_00014.png',
  '/animation/enter_the_hub/enter_the_hub_00015.png',
  '/animation/enter_the_hub/enter_the_hub_00016.png',
  '/animation/enter_the_hub/enter_the_hub_00017.png',
  '/animation/enter_the_hub/enter_the_hub_00018.png',
  '/animation/enter_the_hub/enter_the_hub_00019.png',
  '/animation/enter_the_hub/enter_the_hub_00020.png',
  '/animation/enter_the_hub/enter_the_hub_00021.png',
  '/animation/enter_the_hub/enter_the_hub_00022.png',
  '/animation/enter_the_hub/enter_the_hub_00023.png',
  '/animation/enter_the_hub/enter_the_hub_00024.png',
  '/animation/enter_the_hub/enter_the_hub_00025.png',
  '/animation/enter_the_hub/enter_the_hub_00026.png',
  '/animation/enter_the_hub/enter_the_hub_00027.png',
];

export default function PortalTitleAnimation() {

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const textures = useLoader(THREE.TextureLoader, IMAGE_PATHS);
  const FPS = 17;

  useControls('The HUB title', { 'repeat animation': button(() => ejectAnimation()), });

  const ejectAnimation = () => {
    setCurrentImageIndex(0);

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex: number) => {
        if (prevIndex == IMAGE_PATHS.length - 1) {
          clearInterval(interval);
          return prevIndex;
        }
        return (prevIndex + 1) % IMAGE_PATHS.length;
      });
    }, 1000 / FPS);

    return interval;
  };

  useEffect(() => {
    const interval = ejectAnimation();
    return () => clearInterval(interval);
  }, []);

  return <mesh position={[0, 0, -1]} color='transparent'>
    <planeGeometry args={[0.5, 0.5]} />
    <meshBasicMaterial map={textures[currentImageIndex]} transparent />
  </mesh>

};