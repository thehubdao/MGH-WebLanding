import Window from "../window.experience";
import PlatformScreens from "./platformModel.experience";

export default function PlatformScene() {
  return <>
    <PlatformScreens />
    <Window position={[0, 0, -4]} />
  </>
}