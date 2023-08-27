
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function PlatformCharacter() {
  const { nodes } = useLoader(GLTFLoader, '/3d/landing/platform/CHARACTER.glb');

  console.log(nodes.CHARACTER)

  return <group>
    <mesh {...nodes.CHARACTER}></mesh>
  </group>
}