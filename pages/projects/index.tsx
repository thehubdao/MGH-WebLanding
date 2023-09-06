import Link from "next/link";
import { ProjectsData } from "../../data/cardProject.data";
import {  PageLocation } from "../../enums/common.enum";
import { useState } from "react";
import { MetaverseOptions} from "../../enums/project.enum";
import ProjectsFilterUI from "../../ui/project/projectsFilter.ui";
import { CardProjectInterface } from "../../interfaces/data.interface";
import ProjectCardUI from "../../ui/project/projectCard.ui";

export default function Projects() {
  const projectsData = ProjectsData;
  const [metaverse, setMetaverse] = useState(MetaverseOptions.all);
  const [filteredProject, setFilteredProject] = useState<CardProjectInterface[]>(ProjectsData);

  //filter projects by metaverse
  const filterProject = (metaverse: MetaverseOptions) => {
    setMetaverse(metaverse);
    if (metaverse !== MetaverseOptions.all){
      setFilteredProject(projectsData.filter((project) => project.metaverse === metaverse));
    } else{
      setFilteredProject(projectsData);
    }
  }
  
  return (
    <>
      <main className=" pt-28 pb-20">
        <div className="flex flex-col xl:flex-row mb-0 gap-8">
          <div className=" w-full xl:w-1/4 pl-10 lg:pl-20">
            <h1 className="font-neue text-2xl sm:text-4xl text-lm_gray font-bold mt-11">THE HUB<br />DAO</h1>
            <p className="font-neue text-2xl sm:text-4xl text-lm_icons font-bold">BUILD</p>
          </div>
          <div className=" w-full xl:w-3/4 pr-10 lg:pr-20 text-end">
            <h1 className="font-neue text-6xl md:text-9xl lg:text-[170px] 2xl:text-[225px] text-lm_icons font-bold">PROJECTS</h1>
          </div>
        </div>

        <div className="px-10 lg:px-20 w-full text-end flex justify-end mt-16 ">
          <div className="row ">
            <p className="lg:w-[1060px] font-light font-work text-xl">As a leading provider of custom metaverse experiences, we have had the privilege of <br className="hidden lg:inline-block" /> co-creating with some of the most forward-thinking brands in the industry.<br className="hidden lg:inline-block" /> Our unique approach turns regular metaverse users into brand ambassadors, fostering a <br className="hidden lg:inline-block" />community that is as engaged as it is diverse. We believe in the power of co-creation, <br className="hidden lg:inline-block" /> and our projects reflect this commitment.</p>
          </div>
        </div>
        
        <div className="mt-32  px-[15%] lg:px-[20%]">
          <ProjectsFilterUI metaverse={metaverse} setMetaverse={(metaverse: MetaverseOptions) => filterProject(metaverse)}/>
        </div>

        <div className='flex flex-wrap justify-center px-10 lg:px-20 gap-8 mt-32'>
          <ProjectCardUI projects={filteredProject} />
        </div>

        <div className="flex justify-center my-28 md:my-52 xl:my-72 ">
          <Link href={PageLocation.Home} rel="noopener noreferrer">
            <div className="w-52 sm:w-[333px] min-h-[85px] shadow-relief-32 hover:shadow-relief-12 rounded-3xl cursor-pointer flex justify-center items-center">
              <p className="font-work text-sm font-medium text-lm_icons text-center">BACK TO THE HUB</p>
            </div>
          </Link>
        </div>
      </main>
    </>
  )
}