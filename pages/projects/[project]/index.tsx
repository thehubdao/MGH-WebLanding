import { ProjectData } from "../../../data/project.data"
import { useRouter } from "next/router"
import { ProjectLocation } from "../../../enums/project.enum";
import ProjectsComponent from "../../../components/project.component";
import { PageLocation } from "../../../enums/common.enum";
import { useEffect } from "react";

export default function ProjectPage() {
  const router = useRouter();
  const projectLocation = Object.values(ProjectLocation).find(x => x.endsWith(router.query.project as string));
  const dataProject = projectLocation == undefined ? false : ProjectData[projectLocation];

  useEffect(() => {
    if (dataProject === false) {
      router.push(PageLocation.Projects)
    }
  }, [])

  return (
    <>
      {
        dataProject !== false ?
          <ProjectsComponent project={dataProject} />
          :
          <></>
      }
    </>
  )
}