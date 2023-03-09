import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useLoader } from '@react-three/fiber'
import { Suspense } from "react";
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { EffectComposer, Bloom, Vignette, Noise} from '@react-three/postprocessing'
import { Html, useProgress } from "@react-three/drei"

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
      <spotLight castShadow intensity={props.intensity} color={props.color} angle={Math.PI/2}/>
      {/* <sphereBufferGeometry args={[0.2, 30, 10]} />
      <meshPhongMaterial emissive={"yellow"} /> */}
    </mesh>
  );
}

function ImportScene() {
  const gltf = useLoader(GLTFLoader, '/3d/scene.glb')
  return (
    <primitive object={gltf.scene} toneMapped={false} />
  )
}

function Rig() {
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()
  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 1.02, mouse.y * 1.01, camera.position.z), 0.04)
    camera.lookAt(0, 0, 0);
  })
}

function ZoomIn() {
  const vec = new THREE.Vector3(0, 0, 11)
  return useFrame(({ camera }) => camera.position.lerp(vec, 0.1))
}

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html fullscreen>
    <p className="text-xs text-center pt-6">{progress} % loaded</p>
  </Html>;
}

export default function Scene() {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows={true}
        className='w-full h-full'
        camera={{
          position: [0, 0, 300],
          fov: 25
        }}
        gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
        linear
      >
        <Suspense fallback={<Loader />}>
          <ImportScene />
          <ambientLight color={"white"} intensity={0.3} />
          <LightBulb position={[-1, -1, 0.6]} intensity={2} color={'red'} />
          {/* <LightBulb position={[0, 3, -3]} intensity={12} color={'white'} /> */}
          <LightFocus position={[0, 6, -4]} intensity={20} color={'white'} />
          <mesh position={[-0.9, -0.62, 0]}>
            <boxGeometry attach="geometry" args={[1, 0.2, 1]} />
            <meshStandardMaterial attach="material" color={"#5f6b63"} />
          </mesh>
          <Rig />
          <ZoomIn />
          <EffectComposer>
            <Bloom intensity={1} radius={0.92} luminanceThreshold={0.7} luminanceSmoothing={0.3} height={300} mipmapBlur />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
            <Noise opacity={0.1}/>
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  )
}