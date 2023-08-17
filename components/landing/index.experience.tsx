import { OrbitControls } from '@react-three/drei';
import Postprocessing from './postprocessing.experience';
import AmbientLight from '../common/ambientalLight.experience';
import Portal from './Portal.experience';
import PortalTitleAnimation from './PortalTitleAnimation.experience';

export default function Experience() {
  return (<>
    <color args={['#010101']} attach="background" />
    <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enableZoom={false} />

    <AmbientLight />
    <Portal />
    <PortalTitleAnimation />
    <Postprocessing />
  </>)
}