import { Canvas } from "@react-three/fiber";
import OrbitControls from "./orbitControl.component";

function Floor(props: any) {
  return (
    <mesh {...props} recieveShadow={true}>
      <boxBufferGeometry args={[40, 1, 40]} />
      <meshPhysicalMaterial color='white' />
    </mesh>
  )
}

function Box(props: any) {
  return (
    <mesh {...props} recieveShadow={true} castShadow={true}>
      <boxBufferGeometry />
      <meshPhysicalMaterial color={"red"} />
    </mesh>
  );
}

function LightBulb(props: any) {
  return (
    <mesh {...props} >
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 30, 10]} />
      <meshPhongMaterial emissive={"yellow"} />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas
      shadows={true}
      className='w-full h-full'
      camera={{
        position: [0, 4, 10],
      }}
    >
      <ambientLight color={"white"} intensity={0.2} />
      <LightBulb position={[0, 3, 0]} />
      <Box rotateX={3} rotateY={0.2} />
      <OrbitControls />
      <Floor position={[0, -1, 0]} />
    </Canvas>
  )
}