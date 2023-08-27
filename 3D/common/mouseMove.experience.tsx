import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useState } from "react";

export default function MouseMove() {
  const [isMouseInsideCanvas, setIsMouseInsideCanvas] = useState(true);

  useEffect(() => {
    const handleMouseEnter = () => { setIsMouseInsideCanvas(true) };
    const handleMouseLeave = () => { setIsMouseInsideCanvas(false) };

    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const { cameraSpeed } = useControls('Camera Speed', {
    cameraSpeed: {
      value: 0.01,
      min: 0,
      max: 1,
    },
  });

  useFrame(({ pointer, camera }) => {
    if (Math.abs(pointer.x) > 0.3 && isMouseInsideCanvas)
      camera.rotateY(Math.pow(- pointer.x, 7) * cameraSpeed);
  });

  return <></>
}