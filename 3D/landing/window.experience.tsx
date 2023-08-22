import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Window() {
  const { nodes } = useLoader(GLTFLoader, '/3d/landing/WINDOW.glb');

  return (
    <group>
      <mesh {...nodes.WINDOW}></mesh>
      <mesh {...nodes.SIDERAL_SPACE}>
        <meshBasicMaterial color={[10, 10, 10]} />
      </mesh>
    </group>
  )
}