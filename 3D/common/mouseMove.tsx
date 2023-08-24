import { useFrame } from "@react-three/fiber";

export default function MouseMove() {
  // TODO: create speed const = 0.01
  // TODO: add speed to debuger

  // TODO: window mouse listener to control move just in canvas.

  useFrame(({ pointer, camera }) => {
    if (Math.abs(pointer.x) > 0.3)
      camera.rotateY(Math.pow(- pointer.x, 7) / 100);
  });

  return <></>
}