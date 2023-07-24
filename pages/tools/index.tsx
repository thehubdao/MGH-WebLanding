import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/footer.component";
import Button from "../../components/button.component";
import ScrollTitleUI from "../../components/scrollTitle.component";
import { PageLocation } from "../../enums/common.enum";

export default function Tools() {
  return (
    <>
      <div className="absolute w-12 h-12 top-8 left-8">
        <Link href={PageLocation.Home}>
          <Image src='/icons/mgh.svg' fill={true} alt="MetaGameHub logo" />
        </Link>
      </div>
      <main className=" pt-28 pb-20">

        <div className="flex flex-col xl:flex-row gap-8">
          <div className=" w-full xl:w-3/4 pl-10 lg:pl-40">
            <h1 className="font-neue text-5xl sm:text-7xl md:text-9xl xl:text-[150px] text-lm_icons font-bold">THE HUB<br />PLATFORM</h1>
          </div>
          <div className=" w-full xl:w-1/4 pr-10 lg:pr-36 text-end">
            <h1 className="font-neue text-4xl text-lm_text_gray font-bold mt-11">THE HUB<br />DAO</h1>
            <p className="font-neue text-4xl text-lm_icons font-bold">PLATFORM</p>
          </div>
        </div>

        <div className="px-10 lg:px-20 2xl:px-36 w-full flex relative">
          <div className="row">
            <div className="w-44 h-[2px] bg-lm_icons mb-7 mt-7 "></div>
              <p className="sm:w-[530px] font-light font-work text-xl">The all-in-one suite of tools <br className="hidden sm:inline-block"/> for investing, building, and <br className="hidden sm:inline-block"/> experiencing the Metaverse</p>
          </div>
        </div>

        <div className="relative w-full py-28">
          <ScrollTitleUI title={['INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE']} imageUrl='/tools/game-machine.png'/>
        </div>
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-10 md:gap-y-20 py-28 md:px-20 mb-72">
          <Button url={PageLocation.Invest} big>
            <p className="font-humane text-[135px] text-lm_icons">INVEST</p>
          </Button>
          <Button url={PageLocation.Build} big>
            <p className="font-humane text-[135px] text-lm_icons">BUILD</p>
          </Button>
          <Button url={PageLocation.Experience} big>
            <p className="font-humane text-[135px] text-lm_icons">EXPERIENCE</p>
          </Button>
        </div>
        <Footer />
      </main>
    </>
  )
}