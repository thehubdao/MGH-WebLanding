import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

export default function PlatformUi({ node }: { node: THREE.Object3D }) {
  const texture = useLoader(THREE.TextureLoader, '/3D/landing/texture/UI_Texture.png');

  return (
    <mesh {...node}>
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  )
}