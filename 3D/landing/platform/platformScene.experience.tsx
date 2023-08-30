import TitleAnimation from "../../common/titleAnimation.experience";
import Window from "../window.experience";
import PlatformCharacter from "./platformCharacter.experience";
import PlatformScreens from "./platformScreens.experience";

export default function PlatformScene() {
  return <>
    <PlatformScreens />
    <PlatformCharacter />
    <TitleAnimation
      image_paths={['/animation/platform/PLATFORM.gif']}
      titleLabel="Platform title"
      position={{ x: 3.8, y: .2, z: -7 }}
      size={{ width: 4, height: 4 }}
    />
    <Window position={[0, 0, -4]} />
  </>
}