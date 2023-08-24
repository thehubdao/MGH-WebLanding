import { useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import Postprocessing from './postprocessing.experience';
import Lights from '../common/lights';
import PortalScene from './portal/portalScene.experience';
import PlatformScene from './platform/platformScene.experience';
import MouseMove from '../common/mouseMove';

export default function Experience() {
  const ambientSound = useRef<Howl>();
  const handleHowler = () => {
    ambientSound.current = new Howl({
      src: ['/audio/test.mp3'],
      autoplay: true,
      loop: true,
      volume: 0.01,
    });
    Howler.pos(0, 0, 0);
    ambientSound.current.pos(0, 0, 10);
    ambientSound.current.play();
  }

  useEffect(() => {
    handleHowler();
  }, []);

  useFrame(({ camera }) => {
    Howler.orientation(camera.rotation.y, 0, 0);
  })

  return <>
    <Lights />
    <PortalScene />
    <PlatformScene />
    <MouseMove />

    <Postprocessing />
  </>
}