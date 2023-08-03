import Link from "next/link";
import Image from "next/image";
import IconBox from "../../components/iconBox.component";
import PersonCarrousel from "../../components/personCarrousel.component";
import ScrollTitleUI from "../../components/scrollTitle.component";
import { ExternalLink } from "../../enums/common.enum";
import { Advisors, Advisors2, Team, Team2 } from "../../data/people.data";
import { Investors, Partners } from "../../data/partnersAndInvestors.data";
import VideoComponent from "../../components/video.component";

export default function AboutUs() {

  return (
    <>
      <main className=" pt-4">
        <div className="flex flex-col xl:flex-row mb-0 xl:mb-48 gap-8">
          <div className=" w-full xl:w-3/4 pl-10 lg:pl-40">
            <h1 className="font-neue text-7xl md:text-9xl xl:text-[150px] 2xl:text-[210px] text-lm_icons font-bold">THE HUB<br />DAO</h1>
          </div>
          <div className=" w-full xl:w-1/4 pr-10 lg:pr-36 text-end">
            <h1 className="font-neue text-4xl text-lm_gray font-bold mt-11">THE HUB<br />DAO</h1>
            <p className="font-neue text-4xl text-lm_icons font-bold">ABOUT</p>
          </div>
        </div>

        <div className="px-10 lg:px-36 w-full text-end flex justify-end relative">
          <div className="row xl:absolute xl:-top-[320px]">
            <div className="w-full h-[2px] mb-7">
              <div className="w-44 h-[2px] bg-lm_icons float-right"></div>
            </div>
            <p className="w-auto xl:w-[500px] 2xl:w-[700px] font-light font-work text-xl">Welcome to THE HUB DAO, the ultimate platform for anyone looking to invest, build, and experience the metaverse. Our platform and resources have helped thousands of investors, builders, brands, and creators save money and time while navigate the ever-evolving metaverse. Whether you&apos;re a seasoned virtual worlds veteran or just getting started, THE HUB is the one-stop shop for everything you need to have a seamless metaverse journey. Join us and let&apos;s shape the future of the internet together!</p>
          </div>
        </div>

        <div className="relative w-full py-28 2xl:py-20">
          <ScrollTitleUI title={['INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE']} imageUrl='/images/bunny.png' />
        </div>

        <div className="flex justify-center xl:mt-32 ">
          <Link href={ExternalLink.TheHubDao} rel="noopener noreferrer" target='_blank'>
            <div className="w-auto md:w-[450px] min-h-[100px] shadow-button rounded-3xl cursor-pointer flex justify-center items-center">
              <p className="font-work text-xl font-medium text-lm_icons px-10 text-center tracking-[1.6px]">LEARN MORE ABOUT THE HUB</p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-36 items-end">
          <div className=" w-full md:w-2/4 pl-10 lg:pl-32">
            <h1 className="font-neue text-4xl text-lm_gray font-bold">THE HUB<br />DAO</h1>
            <p className="font-neue text-4xl text-lm_icons font-bold">CORE TEAM</p>
          </div>
          <div className=" w-full md:w-2/4 pr-10 lg:pr-32 text-end">
            <h1 className="font-neue text-4xl text-lm_gray font-bold">NEXT UP</h1>
            <h1 className="font-neue text-5xl md:text-7xl xl:text-[150px] text-lm_icons font-bold">MEET <br /> THE TEAM</h1>
          </div>
        </div>

        <div className="w-full mt-20">
          <PersonCarrousel members={Team} loop={true} />
          <PersonCarrousel members={Team2} loop={true} />
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-28 items-end">
          <div className=" w-full md:w-2/4 pl-10 lg:pl-24">
            <h1 className="font-neue text-4xl text-lm_gray font-bold">NEXT UP</h1>
            <h1 className="font-neue text-5xl md:text-7xl xl:text-[150px] text-lm_icons font-bold">OUR <br /> ADVISORS</h1>
          </div>
          <div className=" w-full md:w-2/4 pr-10 lg:pr-20 text-end mb-16">
            <h1 className="font-neue text-4xl text-lm_gray font-bold">THE HUB<br />DAO</h1>
            <p className="font-neue text-4xl text-lm_icons font-bold">CORE ADVISORS</p>
          </div>
        </div>

        <div className="w-full mt-20">
          <PersonCarrousel members={Advisors} loop={false} />
          <PersonCarrousel members={Advisors2} loop={false} />
        </div>

        <div className="flex justify-center mt-32 lg:mt-52">
          <h1 className="font-neue text-5xl md:text-7xl xl:text-[150px] text-lm_icons font-bold">PARTNERS</h1>
        </div>

        <div className='flex flex-wrap justify-center gap-x-5 gap-y-9 mt-32 mx-6 xl:mx-12 2xl:mx-20'>
          {
            Partners.map((partner, index) => (
              <div key={index}>
                <Link href={partner.url} target="_blank">
                  <IconBox big={false}>
                    <Image src={partner.urlImage} alt={partner.alt} width={144} height={33}/>
                  </IconBox>
                </Link>
              </div>
            ))
          }
        </div>

        <div className="flex justify-center mt-32 lg:mt-52">
          <h1 className="font-neue text-5xl md:text-7xl xl:text-[150px] text-lm_icons font-bold">INVESTORS</h1>
        </div>

        <div className='flex flex-wrap justify-center gap-x-4 gap-y-6 mt-32 mx-6 md:mx-20 lg:mx-40 2xl:mx-72'>
          {
            Investors.map((investor, index) => (
              <div key={index}>
                <Link href={investor.url} target="_blank">
                  <IconBox big={true}>
                    <Image src={investor.urlImage} alt={investor.alt} width={210} height={92}/>
                  </IconBox>
                </Link>
              </div>
            ))
          }
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-72 items-end">
          <div className=" w-full pr-10 lg:pr-32 text-end">
            <h1 className="font-neue text-4xl md:text-6xl xl:text-8xl text-lm_icons font-bold">WHAT <br /> LIES AHEAD?</h1>
          </div>
        </div>

        <div className="w-full mt-28 flex justify-center items-center mb-40 lg:mb-72">
          <VideoComponent url="https://www.youtube.com/embed/NKFRWvfdOqU"/>
        </div>
      </main>
    </>
  )
}