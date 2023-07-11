import Link from "next/link";
import Image from "next/image";
import Button from "../../components/button.component";
import Footer from "../../components/footer.component";
import ScrollTitleUI from "../../components/scrollTitle.component";

export default function AboutUs() {
  return (
    <>
      <div className="absolute w-12 h-12 top-8 left-8">
        <Link href="/">
          <Image src='/icons/mgh.svg' fill={true} alt="MetaGameHub logo" />
        </Link>
      </div>
      <main className=" pt-28 pb-20">

        <div className="flex flex-col xl:flex-row mb-0 xl:mb-16 gap-8">
          <div className=" w-full xl:w-1/4 pl-10 lg:pl-20 2xl:pl-36 ">
            <h1 className="font-neue text-4xl text-gray-hubdao font-bold mt-11">THE HUB<br />DAO</h1>
            <p className="font-neue text-4xl text-gray-normal font-bold">JOIN US!</p>
          </div>
          <div className=" w-full xl:w-3/4 pr-10 lg:pr-20 2xl:pr-40 text-end">
            <h1 className="font-neue text-7xl md:text-9xl lg:text-[170px] 2xl:text-[243px] text-gray-normal font-bold">THE HUB<br />DAO <br /> FAMILY</h1>
          </div>
        </div>

        <div className="px-10 lg:px-20 2xl:px-36 w-full flex relative">
          <div className="row xl:absolute xl:-top-[300px]">
            <div className="w-44 h-[2px] bg-gray-normal mb-7 mt-7 "></div>
              <p className="sm:w-[530px] font-light font-work text-xl">THE HUB DAO family consists of over <br className="hidden sm:inline-block"/> 40+ contributors from all over the <br className="hidden sm:inline-block"/> world, industry leading advisors, has <br className="hidden sm:inline-block"/> local hubs in Frankfurt, Cologne, <br className="hidden sm:inline-block"/> Bogota, Buenos Aires and Seoul</p>
          </div>
        </div>

        <div className="relative w-full py-24">
          <ScrollTitleUI title={['INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE']} imageUrl='/images/bunny-2.png'/>
        </div>
        <div>
          <h2 className='text-center text-2xl text-gray-normal font-medium py-32 tracking-[4.4px]'>JOIN US TO SHAPE THE FUTURE OF THE OPEN METAVERSE TOGETHER!</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-10 md:gap-y-20 py-28 md:px-20 mb-64">
          <Button url="https://www.linkedin.com/company/the-hub-dao/" extra newTab={true}>
            <p className="font-humane text-6xl md:text-8xl text-gray-normal">JOIN THE CORE TEAM</p>
          </Button>
          <Button url="https://discord.com/invite/J35NGdPWgq" extra newTab={true}>
            <p className="font-humane text-6xl md:text-8xl text-gray-normal">JOIN THE COMMUNITY</p>
          </Button>
          <Button url="https://snapshot.org/#/metagamehub.eth" extra newTab={true}>
            <p className="font-humane text-6xl md:text-8xl text-gray-normal">APPLY FOR GRANTS</p>
          </Button>
          <Button url="https://www.spatial.io/s/The-Metaverse-Seminars-62fbbb0dabce1e00010f75c8?share=2349173727968720925" extra newTab={true}>
            <p className="font-humane text-6xl md:text-8xl text-gray-normal">JOIN OUR METAVERSE SEMINARS</p>
          </Button>
        </div>
        <Footer />
      </main>
    </>
  )
}