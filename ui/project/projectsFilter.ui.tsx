import { MetaverseOptions } from "../../enums/project.enum"
import { typedKeys } from "../../utils/common.util";

interface ProjectsFilterUIProps {
  metaverse: MetaverseOptions;
  setMetaverse: (project: MetaverseOptions) => void;
}

export default function ProjectsFilterUI({ metaverse, setMetaverse }: ProjectsFilterUIProps) {
  return (
    <div className="w-full flex flex-wrap items-center justify-center">
      {
        typedKeys(MetaverseOptions).map((key)=>{
          return <button
          key={key}
          type="button"
          className={`font-neueExtended text-[20px] uppercase tracking-[6px] leading-[100%] px-5 py-3 ${metaverse === MetaverseOptions[key]? "text-lm_icons" : "text-lm_gray"}`} 
          onClick={() => {
            setMetaverse(MetaverseOptions[key])}}
          >
            {MetaverseOptions[key] === MetaverseOptions.all && MetaverseOptions.all}
            {MetaverseOptions[key] === MetaverseOptions.decentraland && MetaverseOptions.decentraland}
            {MetaverseOptions[key] === MetaverseOptions.sandbox && MetaverseOptions.sandbox}
            {MetaverseOptions[key] === MetaverseOptions.spatial && MetaverseOptions.spatial}
            {MetaverseOptions[key] === MetaverseOptions["somnium-space"] && MetaverseOptions["somnium-space"]}
            {MetaverseOptions[key] === MetaverseOptions["xone-games"] && MetaverseOptions["xone-games"]}
            {/* {ProjectOption[key] === ProjectOption.experiences && ProjectOption.experiences}
            {ProjectOption[key] === ProjectOption.galleries && ProjectOption.galleries}
            {ProjectOption[key] === ProjectOption.headquarters && ProjectOption.headquarters}
            {ProjectOption[key] === ProjectOption.weareables && ProjectOption.weareables} */}
          </button>
        })
      }
    </div>
  )
}