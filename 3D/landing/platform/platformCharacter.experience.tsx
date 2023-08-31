import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { Group, SkinnedMesh } from 'three';

export default function PlatformCharacter() {
  const group: React.MutableRefObject<Group | undefined> = useRef();
  const alienPosition = useRef({ x: 3, y: -2, z: -5 });
  const { nodes, materials, animations } = useGLTF('/3d/landing/platform/ALIEN_WORKING.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions['Armature|mixamo.com|Layer0']?.play();
  }, [])

  useFrame(({ clock }) => {
    if (!group.current) return
    group.current.position.set(alienPosition.current.x, alienPosition.current.y + (Math.sin(clock.elapsedTime) * 0.1), alienPosition.current.z)
  })

  const alienMesh = nodes.ALIEN001 as SkinnedMesh;

  return (
    <group ref={group} dispose={null} position={[alienPosition.current.x, alienPosition.current.y, alienPosition.current.z]}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, Math.PI * 14 / 12]} scale={0.008}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh frustumCulled={false} name="ALIEN001" geometry={alienMesh.geometry} material={materials.CHARACTER} skeleton={alienMesh.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/3d/landing/platform/ALIEN_WORKING.glb');