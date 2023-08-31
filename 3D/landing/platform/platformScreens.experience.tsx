import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { useControls } from "leva";

export default function PlatformScreens() {
  const { nodes } = useGLTF('/3d/landing/platform/SCREENS.glb',);
  const texture = useLoader(THREE.TextureLoader, '/3D/landing/texture/UI_Texture.png');

  const { ScreenColor } = useControls('Platform Screens', { ScreenColor: '#666666' });

  return (
    <group>
      <mesh {...nodes.PLATFORM_SCREENS}>
        <meshBasicMaterial color={ScreenColor} />
      </mesh>
      <mesh {...nodes.PLATFORM_STRUCTURE}>

      </mesh>
      <mesh {...nodes.PLATFORM_UI}>
        <meshBasicMaterial map={texture} transparent />
      </mesh>
    </group>
  )
}