import { OrbitControls } from '@react-three/drei';
import Postprocessing from './postprocessing.experience';
import Lights from '../common/lights';
import PortalScene from './portal/portalScene.experience';
import { Howl } from 'howler';
import { useEffect } from 'react';
import PlatformScene from './platform/platformScene.experience';

export default function Experience() {
  const handleHowler = () => {
    let sound = new Howl({
      src: ['/audio/space-sound-mid-109575.mp3'],
      autoplay: true,
      loop: true,
      volume: 0.9,
    });

    sound.orientation(0, 0, 10);
    sound.play();
  }

  useEffect(() => {
    handleHowler();
  }, []);

  return <>
    <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enableZoom={false} />

    <Lights />
    <PortalScene />
    <PlatformScene />

    <Postprocessing />
  </>
}