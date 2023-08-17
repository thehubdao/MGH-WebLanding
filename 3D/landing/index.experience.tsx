import { OrbitControls } from '@react-three/drei';
import Postprocessing from './postprocessing.experience';
import Lights from '../common/lights';
import PortalScene from './portal/portalScene.experience';

export default function Experience() {

  return (<>
    <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enableZoom={false} />

    <Lights />

    <PortalScene />

    <Postprocessing />
  </>)
}