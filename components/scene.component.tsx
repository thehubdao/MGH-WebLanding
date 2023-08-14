import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Html, useProgress, OrbitControls } from "@react-three/drei"
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from 'three'
import { gsap } from "gsap";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { fragmentShader, vertexShader } from "../shaders/portal.shader";
import { Leva, button, useControls } from "leva";
import { useRouter } from "next/router";
// import { Bloom, EffectComposer, Noise, Vignette } from "@react-three/postprocessing";

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html fullscreen>
    <p className="text-3xl text-white text-center pt-6">{progress} % loaded</p>
  </Html>;
}

function PortalTitleAnimation() {
  const imagePaths = [
    '/animation/enter_the_hub/enter_the_hub_00000.png',
    '/animation/enter_the_hub/enter_the_hub_00001.png',
    '/animation/enter_the_hub/enter_the_hub_00002.png',
    '/animation/enter_the_hub/enter_the_hub_00003.png',
    '/animation/enter_the_hub/enter_the_hub_00004.png',
    '/animation/enter_the_hub/enter_the_hub_00005.png',
    '/animation/enter_the_hub/enter_the_hub_00006.png',
    '/animation/enter_the_hub/enter_the_hub_00007.png',
    '/animation/enter_the_hub/enter_the_hub_00008.png',
    '/animation/enter_the_hub/enter_the_hub_00009.png',
    '/animation/enter_the_hub/enter_the_hub_00010.png',
    '/animation/enter_the_hub/enter_the_hub_00011.png',
    '/animation/enter_the_hub/enter_the_hub_00012.png',
    '/animation/enter_the_hub/enter_the_hub_00013.png',
    '/animation/enter_the_hub/enter_the_hub_00014.png',
    '/animation/enter_the_hub/enter_the_hub_00015.png',
    '/animation/enter_the_hub/enter_the_hub_00016.png',
    '/animation/enter_the_hub/enter_the_hub_00017.png',
    '/animation/enter_the_hub/enter_the_hub_00018.png',
    '/animation/enter_the_hub/enter_the_hub_00019.png',
    '/animation/enter_the_hub/enter_the_hub_00020.png',
    '/animation/enter_the_hub/enter_the_hub_00021.png',
    '/animation/enter_the_hub/enter_the_hub_00022.png',
    '/animation/enter_the_hub/enter_the_hub_00023.png',
    '/animation/enter_the_hub/enter_the_hub_00024.png',
    '/animation/enter_the_hub/enter_the_hub_00025.png',
    '/animation/enter_the_hub/enter_the_hub_00026.png',
    '/animation/enter_the_hub/enter_the_hub_00027.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const textures = useLoader(THREE.TextureLoader, imagePaths);
  const FPS = 17;

  const router = useRouter()

  if (router.asPath.split('#')[1] === 'debug')
    useControls('The HUB title', { 'repeat animation': button(() => ejectAnimation()), });

  const ejectAnimation = () => {
    setCurrentImageIndex(0);

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex: number) => {
        if (prevIndex == imagePaths.length - 1) {
          clearInterval(interval);
          return prevIndex;
        }
        return (prevIndex + 1) % imagePaths.length;
      });
    }, 1000 / FPS);

    return interval;
  };

  useEffect(() => {
    const interval = ejectAnimation();
    return () => clearInterval(interval);
  }, []);

  return (
    <mesh position={[0, 0, -5]} color='transparet'>
      <planeGeometry args={[2.5, 2.5]} />
      <meshBasicMaterial map={textures[currentImageIndex]} transparent />
    </mesh>
  )
};

function ImportPortal() {
  const { nodes } = useLoader(GLTFLoader, '/3d/portal.glb')

  const portalRef = useRef<THREE.Mesh>();
  useFrame((state) => {
    const { clock } = state;
    if (portalRef.current) {
      (portalRef.current.material as THREE.ShaderMaterial).uniforms.u_time.value = clock.getElapsedTime();
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
      <mesh {...nodes.Portal}></mesh>
      <mesh {...nodes.Portal_gate} ref={portalRef}>
        <shaderMaterial vertexShader={data.vertexShader} fragmentShader={data.fragmentShader} uniforms={data.uniforms} />
      </mesh>
      <mesh {...nodes.Portal_lights}>
        <meshBasicMaterial color={[0, 1, 1]} />
      </mesh>
    </group>
  )
}

export default function Scene() {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows={true}
        className='w-full h-full'
        camera={{ position: [0, 0, .1], fov: 25 }}
        gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
        linear
        color='white'
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enableZoom={false} />
          <pointLight position={[15, 15, 15]} intensity={4} />
          <ImportPortal />
          <PortalTitleAnimation />
          {/* <EffectComposer>
            <Bloom intensity={1} radius={0.92} luminanceThreshold={0.7} luminanceSmoothing={0.3} height={300} mipmapBlur />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
            <Noise opacity={0.1} />
          </EffectComposer> */}
        </Suspense>
      </Canvas>
    </div>
  );
}