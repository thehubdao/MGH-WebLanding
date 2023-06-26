import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/footer.component";
import Button from "../../components/button.component";

export default function Tools() {
  return (
    <>
      <div className="absolute w-12 h-12 top-8 left-8">
        <Link href="/">
          <Image src='/icons/mgh.svg' fill={true} alt="MetaGameHub logo" />
        </Link>
      </div>
      <main className=" pt-28 pb-20">

        <div className="flex flex-col xl:flex-row gap-8">
          <div className=" w-full xl:w-3/4 pl-10 lg:pl-40">
            <h1 className="font-neue text-5xl sm:text-7xl md:text-9xl xl:text-[150px] text-gray-normal font-bold">THE HUB<br />PLATFORM</h1>
          </div>
          <div className=" w-full xl:w-1/4 pr-10 lg:pr-36 text-end">
            <h1 className="font-neue text-4xl text-gray-hubdao font-bold mt-11">THE HUB<br />DAO</h1>
            <p className="font-neue text-4xl text-gray-normal font-bold">PLATAFORM</p>
          </div>
        </div>

        <div className="px-10 lg:px-20 2xl:px-36 w-full flex relative">
          <div className="row">
            <div className="w-44 h-[2px] bg-gray-normal mb-7 mt-7 "></div>
              <p className="sm:w-[530px] font-light font-work text-xl">The all-in-one suite of tools <br className="hidden sm:inline-block"/> for investing, building, and <br className="hidden sm:inline-block"/> experiencing the Metaverse</p>
          </div>
        </div>

        <div className="relative w-full py-28">
          <div className="w-full overflow-hidden">
            <p className="font-humane text-8xl md:text-[200px] lg:text-[310px] text-gray-light whitespace-nowrap leading-[0.8] opacity-50 -translate-x-1/4">INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE</p>
            <p className="font-humane text-8xl md:text-[200px] lg:text-[310px] text-gray-light whitespace-nowrap leading-[0.8] opacity-50 -translate-x-2/5">INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE</p>
            <p className="font-humane text-8xl md:text-[200px] lg:text-[310px] text-gray-light whitespace-nowrap leading-[0.8] opacity-50 -translate-x-[15%]">INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE</p>
          </div>
          <Image src={'/tools/game-machine.png'} alt={'game machine'} width={1056} height={960} className='hidden lg:block absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-[52%]' />
          <Image src={'/tools/game-machine.png'} alt={'game machine'} width={678} height={616} className='hidden md:block lg:hidden absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-[52%]' />
          <Image src={'/tools/game-machine.png'} alt={'game machine'} width={340} height={309} className='md:hidden absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-[52%]' />
        </div>
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-10 md:gap-y-20 py-28 md:px-20 mb-72">
          <Button url="/invest" big>
            <p className="font-humane text-[135px] text-gray-normal">INVEST</p>
          </Button>
          <Button url="/build" big>
            <p className="font-humane text-[135px] text-gray-normal">BUILD</p>
          </Button>
          <Button url="/experience" big>
            <p className="font-humane text-[135px] text-gray-normal">EXPERIENCE</p>
          </Button>
        </div>
        {/* <div className="py-28">
          <p className="font-work font-light text-[32px] text-center px-10">&quot;Your home in the Metaverse&quot;</p>
          <div className="flex justify-center py-28 px-10">
            <Button url="https://app.metagamehub.io/" newTab>
              <p className="font-work text-gray-normal py-6 px-10 text-center uppercase">Navigate the metaverse with us</p>
            </Button>
          </div>
        </div> */}
        <Footer />
      </main>
    </>
  )
}