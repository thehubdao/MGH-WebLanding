
import { useAnimations } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function PlatformCharacter() {
  const { nodes, materials, animations } = useLoader(GLTFLoader, '/3d/landing/platform/ALIEN_WORKING.glb');
  const { ref, actions } = useAnimations(animations);

  useEffect(() => {
    actions["Armature|mixamo.com|Layer0"]?.play();
  }, [actions["Armature|mixamo.com|Layer0"]])

  return <group>
    <mesh {...nodes.ALIEN001} scale={0.01} position={[-4, 0, -4]} ref={ref}></mesh>
  </group>
}