import PlatformUi from "./platformUi.experience";
import { useGLTF } from "@react-three/drei";

export default function PlatformScreens() {
  const { nodes } = useGLTF('/3d/landing/platform/SCREENS.glb',);

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