import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import { useLoader } from '@react-three/fiber'
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { EffectComposer, Bloom, Vignette, Noise } from '@react-three/postprocessing'
import { Html, OrbitControls, useProgress } from "@react-three/drei"
import React from "react";
import { fragmentShader, vertexShader } from "../shaders/portal.shader";
import { gsap } from "gsap";

extend({ OrbitControls });

function LightBulb(props: any) {
  return (
    <mesh {...props} >
      <pointLight castShadow intensity={props.intensity} color={props.color} />
      {/* <sphereBufferGeometry args={[0.2, 30, 10]} />
      <meshPhongMaterial emissive={"yellow"} /> */}
    </mesh>
  );
}

function LightFocus(props: any) {
  return (
    <mesh {...props} >
      <spotLight castShadow intensity={props.intensity} color={props.color} angle={Math.PI / 2} />
      {/* <sphereBufferGeometry args={[0.2, 30, 10]} />
      <meshPhongMaterial emissive={"yellow"} /> */}
    </mesh>
  );
}

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

/* function ImportScene() {
  const gltf = useLoader(GLTFLoader, '/3d/portal.glb')

  return (
    <primitive object={gltf.scene} toneMapped={false} />
  )
} */

/* function Rig() {
  const { camera } = useThree()
  return useFrame(({ mouse }) => {
    camera.lookAt(camera.rotation.x, 0, 0);
  })
} */

/* function ZoomIn() {
  const vec = new THREE.Vector3(0, 0, 4)
  return useFrame(({ camera }) => camera.position.lerp(vec, 0.1))
} */

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html fullscreen>
    <p className="text-3xl bg-green-500 text-center pt-6">{progress} % loaded</p>
  </Html>;
}

const ImagePlane = ({ texture }: { texture: THREE.Texture }) => {
  const planeRef = useRef();

  return (
    <mesh ref={planeRef} position={[0, 0, -5]} color='transparet'>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
};

function Plane() {
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
  const textureArray: THREE.Texture[] = [];
  const FPS = 12;

  imagePaths.map((image) => {
    const texture = useLoader(THREE.TextureLoader, image);
    textureArray.push(texture);
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        if (prevIndex == imagePaths.length - 1) {
          clearInterval(interval);
          return prevIndex;
        }
        return (prevIndex + 1) % imagePaths.length;
      });
    }, 1000 / FPS);

    return () => clearInterval(interval);
  }, []);

  return (<ImagePlane texture={textureArray[currentImageIndex]} />)
};

export default function Scene() {

  return (
    <div className="w-full h-full">
      <Canvas
        shadows={true}
        className='w-full h-full'
        camera={{ position: [0, 0, 0], fov: 25 }}
        gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
        linear
        color='white'
      >
        <Suspense fallback={<Loader />}>
          <ImportPortal />
          {/* <OrbitControls ref={controlsRef} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enableZoom={false} /> */}
          <ambientLight color={"white"} intensity={10} />
          {/* <LightBulb position={[-1, -1, 0.6]} intensity={1} color={'red'} /> */}
          {/* <LightBulb position={[0, 3, -3]} intensity={12} color={'white'} /> */}
          {/* <LightFocus position={[0, 6, -4]} intensity={20} color={'white'} /> */}
          <mesh position={[-0.9, -0.62, 0]}>
            {/* <boxGeometry attach="geometry" args={[1, 0.2, 1]} /> */}
            <meshStandardMaterial attach="material" color={"#5f6b63"} />
          </mesh>
          {/* <Rig /> */}
          {/* <ZoomIn /> */}
          {/* <EffectComposer>
            <Bloom intensity={1} radius={0.92} luminanceThreshold={0.7} luminanceSmoothing={0.3} height={300} mipmapBlur />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
            <Noise opacity={0.1} />
          </EffectComposer> */}
          <Plane />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  )
}