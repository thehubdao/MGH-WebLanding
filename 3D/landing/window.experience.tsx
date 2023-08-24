import { useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { fragmentShader } from "../../shaders/universe.shader";
import { vertexShader } from "../../shaders/portal.shader";

export default function Window() {
  const { nodes } = useLoader(GLTFLoader, '/3d/landing/WINDOW.glb');
  const windowRef = useRef<THREE.Mesh>();

  useFrame((state) => {
    const { clock } = state;
    if (windowRef.current) {
      (windowRef.current.material as THREE.ShaderMaterial).uniforms.u_time.value = clock.getElapsedTime();
    }
  });

  const data = useMemo(
    () => ({
      uniforms: {
        u_time: {
          value: 0
        },
        u_resolution: {
          value: {
            x: window.innerWidth * window.devicePixelRatio || 256,
            y: window.innerHeight * window.devicePixelRatio || 256
          }
        }
      },
      fragmentShader,
      vertexShader
    }),
    []
  );

  return (
    <group>
      <mesh {...nodes.WINDOW}></mesh>
      <mesh ref={windowRef} {...nodes.SIDERAL_SPACE}>
        <shaderMaterial vertexShader={data.vertexShader} fragmentShader={data.fragmentShader} uniforms={data.uniforms} />
      </mesh>
    </group>
  )
}