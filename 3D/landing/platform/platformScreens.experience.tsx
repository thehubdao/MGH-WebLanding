import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import PlatformUi from "./platformUi.experience";

export default function PlatformScreens() {
  const { nodes } = useLoader(GLTFLoader, '/3d/landing/platform/SCREENS.glb',);

  return (
    <group>
      <mesh {...nodes.PLATFORM_SCREENS}>
        <meshBasicMaterial color={[0.4, 0.4, 0.4]} />
      </mesh>
      <mesh {...nodes.PLATFORM_STRUCTURE}>

      </mesh>
      <PlatformUi node={nodes.PLATFORM_UI} />
    </group>
  )
}