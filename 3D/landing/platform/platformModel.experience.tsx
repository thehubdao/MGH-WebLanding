import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function PlatformScreens() {
  const { nodes } = useLoader(GLTFLoader, '/3d/landing/platform/SCREENS.glb');
  const texture = useLoader(THREE.TextureLoader, '/3D/landing/texture/UI_Texture.png');

  return (
    <group>
      <mesh {...nodes.PLATFORM_SCREENS}>
        <meshBasicMaterial color={[255, 255, 255]} />
      </mesh>
      <mesh {...nodes.PLATFORM_STRUCTURE}>

      </mesh>
      {/* <mesh {...nodes.PLATFORM_UI}>
        <meshBasicMaterial map={texture} transparent />
        <meshBasicMaterial color={[255, 255, 0]} /> 
      </mesh> */}
    </group>
  )
}