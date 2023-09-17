import { useFrame, useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import { useMemo, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { fragmentShader, vertexShader } from "../../../shaders/portal.shader";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";

export default function PortalModel() {
  const { nodes } = useLoader(GLTFLoader, '/3d/landing/PORTAL.glb');
  const portalRef = useRef<THREE.Mesh>();

  const { portalRcolor } = useControls('Portal shader', {
    portalRcolor: {
      value: 0,
      min: 0,
      max: 1,
    }
  });
  const { portalGcolor } = useControls('Portal shader', {
    portalGcolor: {
      value: 1,
      min: 0,
      max: 1,
    }
  });
  const { portalBcolor } = useControls('Portal shader', {
    portalBcolor: {
      value: 1,
      min: 0,
      max: 1,
    }
  });

  const { lightRcolor } = useControls('Portal lights', {
    lightRcolor: {
      value: 1,
      min: 0,
      max: 1,
    }
  });
  const { lightGcolor } = useControls('Portal lights', {
    lightGcolor: {
      value: 1,
      min: 0,
      max: 1,
    }
  });
  const { lightBcolor } = useControls('Portal lights', {
    lightBcolor: {
      value: 1,
      min: 0,
      max: 1,
    }
  });

  useFrame((state) => {
    const { clock } = state;
    if (portalRef.current) {
      (portalRef.current.material as THREE.ShaderMaterial).uniforms.u_time.value = clock.getElapsedTime();
      (portalRef.current.material as THREE.ShaderMaterial).uniforms.u_portalColor.value.r = portalRcolor;
      (portalRef.current.material as THREE.ShaderMaterial).uniforms.u_portalColor.value.g = portalGcolor;
      (portalRef.current.material as THREE.ShaderMaterial).uniforms.u_portalColor.value.b = portalBcolor;
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
        },
        u_portalColor: {
          value: {
            r: portalRcolor,
            g: portalGcolor,
            b: portalBcolor
          }
        }
      },
      fragmentShader,
      vertexShader
    }),
    []
  );

  const color2 = new THREE.Color(0x00ffff);

  return (
    <group>
      <mesh {...nodes.Portal}></mesh>
      <mesh ref={portalRef} position={[0, -0.1, -15]}>
        <circleGeometry args={[1.75, 12]} />
        <shaderMaterial vertexShader={data.vertexShader} fragmentShader={data.fragmentShader} uniforms={data.uniforms} />
      </mesh>
      <mesh {...nodes.Portal_lights}>
        <meshBasicMaterial color={[lightRcolor, lightGcolor, lightBcolor]} />
      </mesh>
      <Sparkles
        size={2}
        scale={[1.2, 1.2, 11]}
        position-z={-9}
        color={color2}
      />
    </group>
  )
}