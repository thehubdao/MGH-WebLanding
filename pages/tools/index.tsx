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
        <div className="px-10 lg:px-48">
          <h1 className="font-poppins text-5xl lg:text-9xl text-gray-normal">THE HUB<br />PLATFORM</h1>
          <div className="w-6 h-[2px] bg-gray-normal mb-7 mt-7 lg:mt-14"></div>
          <p className="sm:w-[530px] font-light text-2xl">METAGAMEHUB brings adoption to the Metaverse through an infrastructrue platform focusing on three main pillars: Investing, Building and Experiencing</p>
        </div>
        <div className="relative w-full py-28">
          <div className="w-full overflow-hidden">
            <p className="font-humane text-8xl md:text-[200px] lg:text-[310px] text-gray-light whitespace-nowrap leading-[0.8] opacity-50 -translate-x-1/4">INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE</p>
            <p className="font-humane text-8xl md:text-[200px] lg:text-[310px] text-gray-light whitespace-nowrap leading-[0.8] opacity-50 -translate-x-2/5">INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE</p>
            <p className="font-humane text-8xl md:text-[200px] lg:text-[310px] text-gray-light whitespace-nowrap leading-[0.8] opacity-50 -translate-x-[15%]">INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE</p>
          </div>
          <Image src={'/tools/avatar.png'} alt={'avatar'} width={1056} height={960} className='hidden lg:block absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-[52%]' />
          <Image src={'/tools/avatar.png'} alt={'avatar'} width={678} height={616} className='hidden md:block lg:hidden absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-[52%]' />
          <Image src={'/tools/avatar.png'} alt={'avatar'} width={340} height={309} className='md:hidden absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-[52%]' />
        </div>
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-10 md:gap-y-20 py-28 md:px-20">
          <Button url="/" big>
            <p className="font-humane text-[135px] text-gray-normal">INVEST</p>
          </Button>
          <Button url="/" big>
            <p className="font-humane text-[135px] text-gray-normal">BUILD</p>
          </Button>
          <Button url="/" big>
            <p className="font-humane text-[135px] text-gray-normal">EXPERIENCE</p>
          </Button>
        </div>
        <div className="py-28">
          <p className="font-work font-light text-[32px] text-center px-10">&quot;Unlock the potential of the metaverse for your business&quot;</p>
          <div className="flex justify-center py-28 px-10">
            <Button url="">
              <p className="font-work text-[22px] text-gray-normal py-12 px-10 text-center">Navigate the metaverse with us</p>
            </Button>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}