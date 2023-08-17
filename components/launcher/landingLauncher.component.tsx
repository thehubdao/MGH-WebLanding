import * as THREE from 'three';
import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import Experience from '../landing/index.experience';
import Loader from '../common/loader.experience';

export default function LandingLauncher() {

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
          <Experience />
        </Suspense>
      </Canvas>
    </div>
  );
}