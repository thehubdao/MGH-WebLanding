import { Html, useProgress } from "@react-three/drei";
import { useEffect } from "react";

export default function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();

  useEffect(() => {
    console.log({ active, progress, errors, item, loaded, total });
  }, [active, progress, errors, item, loaded, total]);

  return <Html fullscreen>
    <p className="text-3xl text-white text-center pt-6">{progress} % loaded</p>
  </Html>;
}