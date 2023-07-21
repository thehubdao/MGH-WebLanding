import { ProjectData } from "../../../data/project.data"
import { useRouter } from "next/router"
import { Project } from "../../../enums/project.enum";
import ProjectsComponent from "../../../components/project.component";
import { PageLocation } from "../../../enums/common.enum";
import { useEffect } from "react";

export default function ProjectPage (){
    const router = useRouter();
    const dataProject = Object.values(Project).includes(router.query.project as Project) && ProjectData[router.query.project as Project];

    useEffect(()=>{
        if(dataProject === false){
            router.push(PageLocation.Projects)
        }
    },[])
    
    return(
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