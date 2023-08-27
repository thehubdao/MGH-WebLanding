import { useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { useFrame } from '@react-three/fiber';

import Postprocessing from './postprocessing.experience';
import Lights from '../common/lights.experience';
import PortalScene from './portal/portalScene.experience';
import PlatformScene from './platform/platformScene.experience';
import MouseMove from '../common/mouseMove.experience';
import { useControls } from 'leva';

export default function Experience() {
  const { near, far, fogColor } = useControls('Fog', {
    near: {
      value: 10,
      min: 0,
      max: 20,

    },
    far: {
      value: 80,
      min: 50,
      max: 200
    },
    fogColor: '#00ffff'
  });

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

  useFrame(({ camera }) => { Howler.orientation(camera.rotation.y, 0, 0) })

  return <>
    <Lights />
    <PortalScene />
    <PlatformScene />
    <MouseMove />

    <fog attach="fog" color={fogColor} near={near} far={far} />
    <Postprocessing />
  </>
}