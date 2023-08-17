import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html fullscreen>
    <p className="text-3xl text-white text-center pt-6">{progress} % loaded</p>
  </Html>;
}