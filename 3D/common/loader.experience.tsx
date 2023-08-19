import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress, errors, item, loaded, total } = useProgress();

  return <Html center={false} fullscreen>
    <div className="relative flex justify-center items-center w-screen p-3 pr-10 h-screen bg-opacity-0">
      <div className="absolute bottom-0 h-fit w-[70%] m-3 p-2 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-100 text-white text-center">
        <div className="md:flex justify-center gap-2">
          <p>processing: {item}</p> -
          <p >{progress} % loaded</p> -
          <p>{loaded}/{total} files</p>
        </div>
        <div className="h-1 w-full bg-neutral-600">
          <div className="h-1 bg-white" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  </Html>;
}