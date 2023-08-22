import { OrbitControls } from '@react-three/drei';
import Postprocessing from './postprocessing.experience';
import Lights from '../common/lights';
import PortalScene from './portal/portalScene.experience';
import { Howl } from 'howler';
import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Experience() {
  const ambientSound = useRef<Howl>();
  const handleHowler = () => {
    ambientSound.current = new Howl({
      src: ['/audio/test.mp3'],
      autoplay: true,
      loop: true,
      volume: 1,
    });
    Howler.pos(0, 0, 0);
    ambientSound.current.pos(0, 0, 10);
    ambientSound.current.play();
  }

  useEffect(() => {
    handleHowler();
  }, [])

  useFrame(({camera}) => {
    Howler.orientation(camera.rotation.y, 0, 0);
  })

  return <>
    <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enableZoom={false} />

    <Lights />
    <PortalScene />

    <Postprocessing />
  </>
}