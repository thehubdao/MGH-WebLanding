import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/footer.component";
import IconBox from "../../components/iconBox.component";
import PersonCarrousel from "../../components/personCarrousel.component";
import ScrollTitleUI from "../../components/scrollTitle.component";
import { ExternalLink, PageLocation, PartnersAndInvestorsLink } from "../../enums/common.enum";
import { Advisors, Advisors2, Team, Team2 } from "../../data/people.data";

export default function AboutUs() {

  return (
    <>
      <div className="absolute w-12 h-12 top-8 left-8">
        <Link href={PageLocation.Home}>
          <Image src='/icons/mgh.svg' fill={true} alt="MetaGameHub logo" />
        </Link>
      </div>
      <main className=" pt-28 pb-20">

        <div className="flex flex-col xl:flex-row mb-0 xl:mb-48 gap-8">
          <div className=" w-full xl:w-3/4 pl-10 lg:pl-40">
            <h1 className="font-neue text-7xl md:text-9xl xl:text-[243px] text-lm_icons font-bold">THE HUB<br />DAO</h1>
          </div>
          <div className=" w-full xl:w-1/4 pr-10 lg:pr-36 text-end">
            <h1 className="font-neue text-4xl text-lm_text_gray font-bold mt-11">THE HUB<br />DAO</h1>
            <p className="font-neue text-4xl text-lm_icons font-bold">ABOUT</p>
          </div>
        </div>

        <div className="px-10 lg:px-36 w-full text-end flex justify-end relative">
          <div className="row xl:absolute xl:-top-[320px]">
            <div className="w-full h-[2px] mb-7">
              <div className="w-44 h-[2px] bg-lm_icons float-right"></div>
            </div>
            <p className="sm:w-[530px] font-light font-work text-xl">Welcome to THE HUB DAO, the ultimate platform <br className="hidden sm:inline-block" /> for anyone looking to invest, build, and experience <br className="hidden sm:inline-block" /> the metaverse. <br className="hidden sm:inline-block" /> Our platform and resources have helped <br className="hidden sm:inline-block" /> thousands of investors, builders, brands, and <br className="hidden sm:inline-block" /> creators save money and time while navigate the <br className="hidden sm:inline-block" /> ever-evolving metaverse. <br className="hidden sm:inline-block" /> Whether you&apos;re a seasoned virtual worlds veteran <br className="hidden sm:inline-block" /> or just getting started, THE HUB is the one-stop-<br className="hidden sm:inline-block" /> shop for everything you need to have a seamless <br className="hidden sm:inline-block" /> metaverse journey. Join us and let&apos;s shape the <br className="hidden sm:inline-block" /> future of the internet together!</p>
          </div>
        </div>

        <div className="relative w-full py-28">
          <ScrollTitleUI title={['INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE']} imageUrl='/images/bunny.png' />
        </div>

        <div className="flex justify-center xl:mt-48 ">
          <Link href={ExternalLink.TheHubDao} rel="noopener noreferrer" target='_blank'>
            <div className="w-auto md:w-[617px] min-h-[120px] md:min-h-[143px] shadow-button rounded-[40px] cursor-pointer flex justify-center items-center">
              <p className="font-work text-xl font-medium text-lm_icons px-10 text-center">LEARN MORE ABOUT THE HUB</p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-36 items-end">
          <div className=" w-full md:w-2/4 pl-10 lg:pl-32">
            <h1 className="font-neue text-4xl text-lm_text_gray font-bold">THE HUB<br />DAO</h1>
            <p className="font-neue text-4xl text-lm_icons font-bold">CORE TEAM</p>
          </div>
          <div className=" w-full md:w-2/4 pr-10 lg:pr-32 text-end">
            <h1 className="font-neue text-4xl text-lm_text_gray font-bold">NEXT UP</h1>
            <h1 className="font-neue text-5xl md:text-7xl xl:text-[150px] text-lm_icons font-bold">MEET <br /> THE TEAM</h1>
          </div>
        </div>

        <div className="w-full mt-20">
          <PersonCarrousel members={Team} loop={true} />
          <PersonCarrousel members={Team2} loop={true} />
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-28 items-end">
          <div className=" w-full md:w-2/4 pl-10 lg:pl-24">
            <h1 className="font-neue text-4xl text-lm_text_gray font-bold">NEXT UP</h1>
            <h1 className="font-neue text-5xl md:text-7xl xl:text-[150px] text-lm_icons font-bold">OUR <br /> ADVISORS</h1>
          </div>
          <div className=" w-full md:w-2/4 pr-10 lg:pr-20 text-end mb-16">
            <h1 className="font-neue text-4xl text-lm_text_gray font-bold">THE HUB<br />DAO</h1>
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

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-4 mt-32 mx-6 xl:mx-12 place-items-center'>
          <Link href={PartnersAndInvestorsLink.SandBox} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-183.png'} alt={'sandbox'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Decentraland} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-184.png'} alt={'decentraland'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.SomniumSpace} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-185.png'} alt={'somnium space'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.ChainLink} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-186.png'} alt={'chainlink'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Fitchin} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-187.png'} alt={'fitchin'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.BosonProtocol} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-188.png'} alt={'boson protocol'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Polygon} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-189.png'} alt={'polygon'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Aws} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-190.png'} alt={'aws'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Cryptoticker} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-191.png'} alt={'cryptoticker'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Sophos} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-192.png'} alt={'sophos'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Pwc} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-193.png'} alt={'pwc'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Pangea} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-194.png'} alt={'pangea'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Ey} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-195.png'} alt={'ey'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Ocean} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-196.png'} alt={'ocean'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Viio} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-197.png'} alt={'viio'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Revolve} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-198.png'} alt={'revolve'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.EtherumTower} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-199.png'} alt={'etherum tower'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.BlockchainFoudersGroup} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-200.png'} alt={'blockchain founders group'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.PaxWorld} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-201.png'} alt={'pax.world'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Venly} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-202.png'} alt={'venly'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Xone} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-203.png'} alt={'xone'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Zharta} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-204.png'} alt={'zharta'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Bonuz} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-205.png'} alt={'bonuz'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.MoonBash} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-206.png'} alt={'moon bash'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Nrverse} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-207.png'} alt={'nrverse'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.SportfFive} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-208.png'} alt={'sportfive'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.BlockchainGameAlliance} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-209.png'} alt={'blockchain game alliance'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Picipo} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-210.png'} alt={'picipo'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Adshares} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-211.png'} alt={'adshares'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Parcel} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-212.png'} alt={'parcel'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.FhAachen} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-213.png'} alt={'fh aachen'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Detecon} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-214.png'} alt={'detecon'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.FrankfurtSchool} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-215.png'} alt={'frankfurt school'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Unal} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-216.png'} alt={'unal'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Psu} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-217.png'} alt={'pennsylvania state university'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Weneta} target="_blank">
            <IconBox big={false}>
              <Image src={'/partners/Group-218.png'} alt={'wemeta'} width={144} height={33} className='' />
            </IconBox>
          </Link>

        </div>

        <div className="flex justify-center mt-32 lg:mt-52">
          <h1 className="font-neue text-5xl md:text-7xl xl:text-[150px] text-lm_icons font-bold">INVESTORS</h1>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-32 mx-6 xl:mx-12 place-items-center'>
          <Link href={PartnersAndInvestorsLink.Polygon} target="_blank">
            <IconBox big={true}>
              <Image src={'/investors/investors-1.png'} alt={'polygon'} width={210} height={92} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Ocean} target="_blank">
            <IconBox big={true}>
              <Image src={'/investors/investors-2.png'} alt={'ocean'} width={210} height={92} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Brinc} target="_blank">
            <IconBox big={true}>
              <Image src={'/investors/investors-3.png'} alt={'brinc'} width={210} height={92} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.SandBox} target="_blank">
            <IconBox big={true}>
              <Image src={'/investors/investors-4.png'} alt={'sandbox'} width={210} height={92} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Xventures} target="_blank">
            <IconBox big={true}>
              <Image src={'/investors/investors-5.png'} alt={'xventures'} width={210} height={92} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.BlockchainFoudersGroup} target="_blank">
            <IconBox big={true}>
              <Image src={'/investors/investors-6.png'} alt={'blockchain founders group'} width={210} height={92} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.Polaris} target="_blank">
            <IconBox big={true}>
              <Image src={'/investors/investors-7.png'} alt={'polaris'} width={210} height={92} className='' />
            </IconBox>
          </Link>
          <Link href={PartnersAndInvestorsLink.HasmeshLabs} target="_blank">
            <IconBox big={true}>
              <Image src={'/investors/investors-8.png'} alt={'hashmesh labs'} width={210} height={92} className='' />
            </IconBox>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-72 items-end">
          <div className=" w-full pr-10 lg:pr-32 text-end">
            <h1 className="font-neue text-4xl md:text-6xl xl:text-8xl text-lm_icons font-bold">WHAT <br /> LIES AHEAD?</h1>
          </div>
        </div>

        <div className="w-full mt-28 flex justify-center items-center mb-40 lg:mb-72">
          <Image src={'/images/img-video.png'} alt={'anita'} width={1471} height={885} className='' />
        </div>
        <Footer />
      </main>
    </>
  )
}