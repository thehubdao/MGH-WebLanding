import Button from "../../components/button.component";
import ScrollTitleUI from "../../components/scrollTitle.component";
import { PageLocation } from "../../enums/common.enum";

export default function Tools() {
  return (
    <>
      <main className=" pt-28 pb-20">
        <div className="flex flex-col xl:flex-row gap-8 font-neueExtended">
          <div className=" w-full xl:w-3/4 pl-10 lg:pl-40">
            <h1 className="text-5xl sm:text-7xl md:text-9xl xl:text-[150px] text-lm_icons font-bold">THE HUB<br />PLATFORM</h1>
          </div>
          <div className=" w-full xl:w-1/4 pr-10 lg:pr-36 text-end">
            <h1 className="text-4xl text-lm_gray font-bold mt-11">THE HUB</h1>
            <p className="text-4xl text-lm_icons font-bold">PLATFORM</p>
          </div>
        </div>

        <div className="px-10 lg:px-20 2xl:px-36 w-full flex relative">
          <div className="row">
            <div className="w-44 h-[2px] bg-lm_icons mb-7 mt-7 "></div>
              <p className="sm:w-[530px] font-light font-work text-xl">Providing the picks and shovels for creators in the 3D Internet </p>
          </div>
        </div>

        <div className="relative w-full py-28">
          <ScrollTitleUI title={['INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE']} imageUrl='/tools/game-machine.png'/>
        </div>
        <div>
        <h2 className='text-center text-2xl text-lm_icons font-medium font-work uppercase leading-[128%] tracking-[4.4px]'>Navigate the 3D Internet with us!</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-10 md:gap-y-20 py-28 md:px-20 mb-72">
          <Button url={PageLocation["Citizens-Portal"]} big>
            <p className="font-humane text-[100px] md:text-[135px] text-lm_icons">Citizens Portal</p>
          </Button>
          <Button url={PageLocation.Explorer} big>
            <p className="font-humane text-[100px] md:text-[135px] text-lm_icons">Explorer</p>
          </Button>
          <Button url={PageLocation.Projects} big>
            <p className="font-humane text-[100px] md:text-[135px] text-lm_icons">Our Experiences</p>
          </Button>
        </div>
      </main>
    </>
  )
}