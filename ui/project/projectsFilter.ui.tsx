import { ProjectOption, ProjectOptionsKey } from "../../enums/project.enum"
import { typedKeys } from "../../utils/common.util";

interface ProjectsFilterUIProps {
  project: ProjectOption;
  setProject: (project: ProjectOptionsKey) => void;
}

export default function ProjectsFilterUI({ project, setProject }: ProjectsFilterUIProps) {
  return (
    <div className="w-full flex flex-wrap items-center justify-center">
      {
        typedKeys(ProjectOption).map((key)=>{
          return <button
          key={key}
          type="button"
          className={`font-neueExtended text-[20px] uppercase tracking-[6px] leading-[100%] px-5 py-3 ${project === ProjectOption[key]? "text-lm_icons" : "text-lm_gray"}`} 
          onClick={() => {
            setProject(key)}}
          >
            {ProjectOption[key] === ProjectOption.decentraland && ProjectOption.decentraland}
            {ProjectOption[key] === ProjectOption.sandbox && ProjectOption.sandbox}
            {ProjectOption[key] === ProjectOption.spatial && ProjectOption.spatial}
            {ProjectOption[key] === ProjectOption["somnium-space"] && ProjectOption["somnium-space"]}
            {ProjectOption[key] === ProjectOption["xone-games"] && ProjectOption["xone-games"]}
            {ProjectOption[key] === ProjectOption.experiences && ProjectOption.experiences}
            {ProjectOption[key] === ProjectOption.galleries && ProjectOption.galleries}
            {ProjectOption[key] === ProjectOption.headquarters && ProjectOption.headquarters}
            {ProjectOption[key] === ProjectOption.weareables && ProjectOption.weareables}
          </button>
        })
      }
    </div>
  )
}