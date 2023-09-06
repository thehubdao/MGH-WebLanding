import Link from "next/link";
import Image from "next/image";
import { PageLocation } from "../enums/common.enum";
import Box from "../components/box.component";
import { ProjectInterface } from "../interfaces/data.interface";
import parse from 'html-react-parser';

interface ProjectProps {
  project: ProjectInterface;
}


export default function ProjectsComponent({ project }: ProjectProps) {

  const titleSize = (size: number) => {
    switch (size) {
      case 70:
        return 'lg:text-[70px] leading-none';
      case 85:
        return 'lg:text-[85px] leading-none';
      case 95:
        return 'lg:text-[95px] leading-none';
      default:
        return 'lg:text-[70px] leading-none';
    }
  }

  return (
    <>
      <main className=" pt-28 pb-20">
        <div className="flex flex-col xl:flex-row mb-0 gap-8 pr-7 md:pr-20 xl:pr-56 pl-7">
          <div className=" w-full xl:w-[40%] text-end flex flex-wrap justify-end">
            <div className="w-1/4 xl:hidden mt-11">
              <Link href={PageLocation.Projects}>
                <div className="w-16 sm:w-[85px] h-16 sm:h-[85px] rounded-3xl shadow-relief-32 hover:shadow-relief-12 cursor-pointer flex justify-center items-center relative">
                  <Image src={'/icons/left-arrow.svg'} alt={'Vector'} fill  className="p-2"/>
                </div>
              </Link>
            </div>
            <div className="w-3/4 xl:w-full font-neueExtended">
              <h1 className="text-2xl sm:text-[40px] text-lm_gray font-bold mt-11">{project.tag}</h1>
              <p className={`text-3xl sm:text-[50px] ${titleSize(project.fontTitle)} text-lm_icons font-bold`}>{parse(project.title)}</p>
            </div>
            <div className="mt-10 md:mt-20 w-full">
              <p className="font-neueExtended text-3xl sm:text-4xl text-lm_icons font-bold">
                PROJECT SUMMARY
              </p>
            </div>
            <div className="mt-5 w-full xl:pl-48">
              <p className="font-light font-work text-sm text-lm_icons">
                {project.summaryContent}
              </p>
            </div>
            <div className="mt-10 md:mt-20 w-full">
              <p className="font-neueExtended text-3xl sm:text-4xl text-lm_icons font-bold">
                OUR APPROACH
              </p>
            </div>
            <div className="mt-5 w-full xl:pl-48">
              <p className="font-light font-work text-sm text-lm_icons">
                {project.approachContent}
              </p>
            </div>
            <div className="w-[333px] mt-20">
              <div className="mb-10">
                <Box>
                  <div className='flex justify-between items-center min-h-[85px]'>
                    <div className='pl-8 mr-5'>
                      <h1 className='font-work text-sm font-medium text-lm_icons leading-5 uppercase'>Launch Project</h1>
                    </div>
                    <div className='flex items-center justify-start mr-4' >
                      <Link href={project.urlProject} target='_blank'>
                        <div className="rounded-full shadow-boxes bg-bg_vector flex items-center justify-center w-[58px] h-[58px] group">
                          <Image src={'/icons/Vector.svg'} alt={'Vector'} width={50} height={50} style={{ maxWidth: '50px', maxHeight: '50px' }} className="scale-50 rotate-45 group-hover:scale-75 group-hover:rotate-0 transition-all duration-300 " />
                        </div>
                      </Link>
                    </div>
                  </div>
                </Box>
              </div>
              {
                project.projectWebsite &&
                <div>
                  <Box>
                    <div className='flex justify-between items-center min-h-[85px]'>
                      <div className='pl-8 mr-5'>
                        <h1 className='font-work text-sm font-medium text-lm_icons leading-5 uppercase'>PROJECT WEBSITE</h1>
                      </div>
                      <div className='flex items-center justify-start mr-4' >
                        <Link href={project.projectWebsite} target='_blank'>
                          <div className="rounded-full shadow-boxes bg-bg_vector flex items-center justify-center w-[58px] h-[58px] group">
                            <Image src={'/icons/Vector.svg'} alt={'Vector'} width={50} height={50} style={{ maxWidth: '50px', maxHeight: '50px' }} className="scale-50 rotate-45 group-hover:scale-75 group-hover:rotate-0 transition-all duration-300 " />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </Box>
                </div>
              }
            </div>
          </div>

          <div className=" w-full xl:w-[60%] mt-10 xl:mt-[60px] flex flex-wrap items-end">
            <div className="text-start w-full xl:w-1/2">
              <div className="flex gap-x-10 w-[300px]">
                <p className="uppercase font-work text-sm font-bold text-lm_icons w-1/2 text-end">PROJECT</p>
                <p className="uppercase font-work text-sm text-lm_icons font-light w-1/2">{project.project}</p>
              </div>

              <div className="flex gap-x-10 w-[300px]">
                <p className="uppercase font-work text-sm font-bold text-lm_icons w-1/2 text-end">CLIENT</p>
                <p className="uppercase font-work text-sm text-lm_icons font-light w-1/2">{project.client}</p>
              </div>

              <div className="flex gap-x-10 w-[300px]">
                <p className="uppercase font-work text-sm font-bold text-lm_icons w-1/2 text-end">YEAR</p>
                <p className="uppercase font-work text-sm text-lm_icons font-light w-1/2">{project.year}</p>
              </div>

              <div className="flex gap-x-10 w-[300px]">
                <p className="uppercase font-work text-sm font-bold text-lm_icons w-1/2 text-end">PROJECT TYPE</p>
                <p className="uppercase font-work text-sm text-lm_icons font-light w-1/2">{project.projectType}</p>
              </div>
            </div>
            <div className="w-1/2 hidden xl:flex justify-end">
              <Link href={PageLocation.Projects}>
                <div className="w-[85px] h-[85px] rounded-3xl shadow-relief-32 hover:shadow-relief-12 cursor-pointer flex justify-center items-center">
                  <Image src={'/icons/left-arrow.svg'} alt={'Vector'} width={50} height={50} style={{ maxWidth: '50px', maxHeight: '50px' }} />
                </div>
              </Link>
            </div>
            <div className="mt-11 pl-[170px] w-full">
              <p className="uppercase font-work text-sm text-lm_icons font-light w-1/2">{project.info[0]}</p>
              <p className="uppercase font-work text-sm text-lm_icons font-light w-1/2">{project.info[1]}</p>
              <p className="uppercase font-work text-sm text-lm_icons font-light w-1/2">{project.info[2]}</p>
              <p className="uppercase font-work text-sm text-lm_icons font-light w-1/2">{project.info[3]}</p>
            </div>
            <div className="flex justify-center xl:justify-end mt-10 xl:mt-[250px] w-full">
              <Image src={project.imgUrl[0]} alt={'image project 1'} width={818} height={480} />
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row w-full px-7 md:px-20 xl:px-56 mt-20 gap-y-10 justify-center xl:justify-between items-center">
          <div className="w-full xl:w-[700px] h-[500px] xl:h-[390px] relative">
            <Image src={project.imgUrl[1]} alt={'image project 2'} fill className="object-cover" />
          </div>
          <div className="w-full xl:w-[700px] h-[500px] xl:h-[390px] relative xl:ml-10">
            <Image src={project.imgUrl[2]} alt={'image project 3'} fill className="object-cover" />
          </div>
        </div>
        <div className="px-7 md:px-20 xl:px-56 mt-10">
          <div className="w-full h-[500px] xl:h-[814px]  relative">
            <Image src={project.imgUrl[3]} alt={'image project 4'} fill className="object-cover" />
          </div>
        </div>


        <div className="flex flex-col xl:flex-row w-full px-7 md:px-20 xl:px-56 mt-10 mb-20 md:mb-50 xl:mb-96">
          <div className="w-full xl:w-[60%] h-[500px] relative">
            <Image src={project.imgUrl[4]} alt={'image project 5'} fill className="object-cover" />
          </div>
          <div className="flex flex-wrap justify-center items-center w-full xl:w-[40%] xl:ml-10 mt-10">
            <div>
              <p className="font-neueExtended text-3xl sm:text-4xl text-lm_icons font-bold mt-5">
                RESULTS
              </p>
              <p className="font-light font-work text-sm text-lm_icons mt-5">
                {project.result}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}