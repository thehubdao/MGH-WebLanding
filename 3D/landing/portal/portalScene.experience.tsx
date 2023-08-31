import TitleAnimation from "../../common/titleAnimation.experience";
import PortalModel from "./portalModel.experience";

export default function PortalScene() {
  const IMAGE_PATHS = [
    '/animation/enter_the_hub/enter_the_hub_00000.png',
    '/animation/enter_the_hub/enter_the_hub_00001.png',
    '/animation/enter_the_hub/enter_the_hub_00002.png',
    '/animation/enter_the_hub/enter_the_hub_00003.png',
    '/animation/enter_the_hub/enter_the_hub_00004.png',
    '/animation/enter_the_hub/enter_the_hub_00005.png',
    '/animation/enter_the_hub/enter_the_hub_00006.png',
    '/animation/enter_the_hub/enter_the_hub_00007.png',
    '/animation/enter_the_hub/enter_the_hub_00008.png',
    '/animation/enter_the_hub/enter_the_hub_00009.png',
    '/animation/enter_the_hub/enter_the_hub_00010.png',
    '/animation/enter_the_hub/enter_the_hub_00011.png',
    '/animation/enter_the_hub/enter_the_hub_00012.png',
    '/animation/enter_the_hub/enter_the_hub_00013.png',
    '/animation/enter_the_hub/enter_the_hub_00014.png',
    '/animation/enter_the_hub/enter_the_hub_00015.png',
    '/animation/enter_the_hub/enter_the_hub_00016.png',
    '/animation/enter_the_hub/enter_the_hub_00017.png',
    '/animation/enter_the_hub/enter_the_hub_00018.png',
    '/animation/enter_the_hub/enter_the_hub_00019.png',
    '/animation/enter_the_hub/enter_the_hub_00020.png',
    '/animation/enter_the_hub/enter_the_hub_00021.png',
    '/animation/enter_the_hub/enter_the_hub_00022.png',
    '/animation/enter_the_hub/enter_the_hub_00023.png',
    '/animation/enter_the_hub/enter_the_hub_00024.png',
    '/animation/enter_the_hub/enter_the_hub_00025.png',
    '/animation/enter_the_hub/enter_the_hub_00026.png',
    '/animation/enter_the_hub/enter_the_hub_00027.png',
  ];

  return (<>
    <PortalModel />
    <TitleAnimation
      image_paths={IMAGE_PATHS}
      titleLabel="The HUB title"
      fpsRate={17}
      position={{ x: 0, y: 0, z: -1 }}
      size={{ width: 0.5, height: 0.5 }}
    />
  </>)
}