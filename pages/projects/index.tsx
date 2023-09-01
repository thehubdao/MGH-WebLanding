import Link from "next/link";
import Image from "next/image";
import Card from "../../components/card.component";
import { ProjectsData } from "../../data/cardProject.data";
import { CardForm, PageLocation } from "../../enums/common.enum";

export default function Projects() {
  
  return (
    <>
      <main className=" pt-28 pb-20">
        <div className="flex flex-col xl:flex-row mb-0 gap-8">
          <div className=" w-full xl:w-1/4 pl-10 lg:pl-20 font-neueExtended">
            <h1 className="text-2xl sm:text-4xl text-lm_gray font-bold mt-11">THE HUB<br />DAO</h1>
            <p className="text-2xl sm:text-4xl text-lm_icons font-bold">BUILD</p>
          </div>
          <div className=" w-full xl:w-3/4 pr-10 lg:pr-20 text-end">
            <h1 className="text-6xl md:text-9xl lg:text-[170px] 2xl:text-[225px] text-lm_icons font-bold">PROJECTS</h1>
          </div>
        </div>

        <div className="px-10 lg:px-20 w-full text-end flex justify-end mt-16 ">
          <div className="row ">
            <p className="lg:w-[1060px] font-light font-work text-xl">As a leading provider of custom metaverse experiences, we have had the privilege of <br className="hidden lg:inline-block" /> co-creating with some of the most forward-thinking brands in the industry.<br className="hidden lg:inline-block" /> Our unique approach turns regular metaverse users into brand ambassadors, fostering a <br className="hidden lg:inline-block" />community that is as engaged as it is diverse. We believe in the power of co-creation, <br className="hidden lg:inline-block" /> and our projects reflect this commitment.</p>
          </div>
        </div>

        <div className='flex flex-wrap justify-center px-10 lg:px-20 gap-8 mt-32'>
          {
            ProjectsData.map((project, index) => (
              <div key={index}>
                <Card imageUrl={project.imageUrl} altImages={project.tag} url={project.url} form={CardForm.Vertical}>
                  <div className="flex px-5 h-full justify-between items-center">
                    <div>
                      <Image src={project.metaverseLogo} width={100} height={100} alt={project.tag} className="rounded-full p-3 bg-lm_gray" />
                    </div>
                    <div className="text-end font-neueExtended">
                      <h1 className="text-sm text-lm_gray font-bold uppercase">{project.tag}</h1>
                      <p className="text-xl sm:text-4xl text-lm_icons font-bold uppercase" dangerouslySetInnerHTML={{__html: project.title}}></p>
                    </div>
                  </div>
                </Card>
              </div>
            ))
          }
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