import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useState } from "react";
import gsap from 'gsap'

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
      value: 0.1,
      min: 0,
      max: 1,
    },
  });

  useFrame(({ pointer, camera }) => {
    if (Math.abs(pointer.x) > 0.3 && isMouseInsideCanvas) {
      gsap.to(camera.rotation, {
        y: camera.rotation.y + Math.pow(- pointer.x, 7) * cameraSpeed,
        duration: 3,
        ease: "power3.out",
      });
    }
  });

  return <></>
}