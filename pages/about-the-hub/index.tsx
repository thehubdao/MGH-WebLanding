import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/footer.component";
import IconBox from "../../components/iconBox.component";
import PersonCarrousel from "../../components/personCarrousel.component";
import ScrollTitleUI from "../../components/scrollTitle.component";

const team = [
  {
    name: '',
    role: '',
    description: "",
    url: '/team/team-1.png',
    alt: ''
  },
  {
      name: 'ANA RINCÓN',
      role: 'Product Manager',
      description: "THE HUB is the engine for the Metaverse consisting of THE HUB Protocol and THE HUB Platform. THE HUB Protocol",
      url: '/team/team-2.png',
      alt: 'anita'
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/team/team-3.png',
      alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/team/team-4.png',
      alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/team/team-5.png',
      alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/team/team-6.png',
      alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/team/team-7.png',
      alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/team/team-8.png',
      alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/team/team-9.png',
      alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/team/team-10.png',
      alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/team/team-11.png',
      alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/team/team-12.png',
      alt: ''
  },
  {
    name: '',
    role: '',
    description: "",
    url: '/team/team-13.png',
    alt: ''
  },
  {
    name: '',
    role: '',
    description: "",
    url: '/team/team-14.png',
    alt: ''
  },
  {
    name: '',
    role: '',
    description: "",
    url: '/team/team-15.png',
    alt: ''
  },
];

const team2 = [
  {
    name: '',
    role: '',
    description: "",
    url: '/team/team-16.png',
    alt: ''
  },
  {
    name: '',
    role: '',
    description: "",
    url: '/team/team-17.png',
    alt: ''
},
  {
      name: '',
      role: '',
      description: "",
      url: '/team/team-18.png',
      alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/team/team-19.png',
      alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/team/team-20.png',
      alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/team/team-21.png',
      alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/team/team-22.png',
      alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/team/team-23.png',
      alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/team/team-24.png',
      alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/team/team-25.png',
      alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/team/team-26.png',
      alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/team/team-27.png',
      alt: ''
  },
  {
    name: '',
    role: '',
    description: "",
    url: '/team/team-28.png',
    alt: ''
  },
  {
    name: '',
    role: '',
    description: "",
    url: '/team/team-29.png',
    alt: ''
  },
];

const advisors = [
  {
    name: '',
    role: '',
    description: "",
    url: '/advisors/advisor-1.png',
    alt: ''
  },
  {
    name: '',
    role: '',
    description: "",
    url: '/advisors/advisor-2.png',
    alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/advisors/advisor-3.png',
      alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/advisors/advisor-4.png',
      alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/advisors/advisor-5.png',
      alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/advisors/advisor-6.png',
      alt: ''
  },
];

const advisors2 = [
  {
      name: '',
      role: '',
      description: "",
      url: '/advisors/advisor-7.png',
      alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/advisors/advisor-8.png',
      alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/advisors/advisor-9.png',
      alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/advisors/advisor-10.png',
      alt: ''
  },
  {
      name: '',
      role: '',
      description: "",
      url: '/advisors/advisor-11.png',
      alt: ''
  },
];

export default function AboutUs() {

  return (
    <>
      <div className="absolute w-12 h-12 top-8 left-8">
        <Link href="/">
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
            <p className="sm:w-[530px] font-light font-work text-xl">Welcome to THE HUB DAO, the ultimate platform <br className="hidden sm:inline-block"/> for anyone looking to invest, build, and experience <br className="hidden sm:inline-block"/> the metaverse. <br className="hidden sm:inline-block"/> Our platform and resources have helped <br className="hidden sm:inline-block"/> thousands of investors, builders, brands, and <br className="hidden sm:inline-block"/> creators save money and time while navigate the <br className="hidden sm:inline-block"/> ever-evolving metaverse. <br className="hidden sm:inline-block"/> Whether you&apos;re a seasoned virtual worlds veteran <br className="hidden sm:inline-block"/> or just getting started, THE HUB is the one-stop-<br className="hidden sm:inline-block"/> shop for everything you need to have a seamless <br className="hidden sm:inline-block"/> metaverse journey. Join us and let&apos;s shape the <br className="hidden sm:inline-block"/> future of the internet together!</p>
          </div>
        </div>

        <div className="relative w-full py-28">
          <ScrollTitleUI title={['INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE']} imageUrl='/images/bunny.png'/>
        </div>

        <div className="flex justify-center xl:mt-48 ">
          <Link href="https://docs.thehubdao.xyz/" rel="noopener noreferrer" target='_blank'>
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
          <PersonCarrousel members={team} loop={true}/>
          <PersonCarrousel members={team2} loop={true}/>
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
            <PersonCarrousel members={advisors} loop={false}/>
            <PersonCarrousel members={advisors2} loop={false}/>
        </div>
        
        <div className="flex justify-center mt-32 lg:mt-52">
          <h1 className="font-neue text-5xl md:text-7xl xl:text-[150px] text-lm_icons font-bold">PARTNERS</h1>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-4 mt-32 mx-6 xl:mx-12 place-items-center'>
          <Link href="https://www.sandbox.game/en/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-183.png'} alt={'sandbox'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://decentraland.org/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-184.png'} alt={'decentraland'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://www.somniumspace.com/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-185.png'} alt={'somnium space'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://chain.link/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-186.png'} alt={'chainlink'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://fitchin.gg/en" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-187.png'} alt={'fitchin'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://www.bosonprotocol.io/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-188.png'} alt={'boson protocol'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://polygonscan.com/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-189.png'} alt={'polygon'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://aws.amazon.com/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-190.png'} alt={'aws'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://cryptoticker.io/en/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-191.png'} alt={'cryptoticker'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://www.sophos.com/en-us" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-192.png'} alt={'sophos'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://www.pwc.com/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-193.png'} alt={'pwc'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="#" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-194.png'} alt={'pangea'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://www.ey.com/en_us" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-195.png'} alt={'ey'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="#" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-196.png'} alt={'ocean'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://www.viio.me/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-197.png'} alt={'viio'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://revolvegames.io/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-198.png'} alt={'revolve'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://whitepaper.ethereumtowers.com/ethereum-towers" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-199.png'} alt={'etherum tower'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://blockchain-founders.io/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-200.png'} alt={'blockchain founders group'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://pax.world/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-201.png'} alt={'pax.world'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://www.venly.io/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-202.png'} alt={'venly'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://xone.gg/#/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-203.png'} alt={'xone'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://www.zharta.io/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-204.png'} alt={'zharta'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://bonuz.market/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-205.png'} alt={'bonuz'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://www.moonbash.io/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-206.png'} alt={'moon bash'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://www.nrverse.io/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-207.png'} alt={'nrverse'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://sportfive.com/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-208.png'} alt={'sportfive'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://www.blockchaingamealliance.org/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-209.png'} alt={'blockchain game alliance'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://app.picipo.io/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-210.png'} alt={'picipo'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://adshares.net/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-211.png'} alt={'adshares'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="#" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-212.png'} alt={'parcel'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://www.fh-aachen.de/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-213.png'} alt={'fh aachen'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://www.detecon.com/en/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-214.png'} alt={'detecon'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://www.frankfurt-school.de/home" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-215.png'} alt={'frankfurt school'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://unal.edu.co/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-216.png'} alt={'unal'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://www.psu.edu/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-217.png'} alt={'pennsylvania state university'} width={144} height={33} className='' />
            </IconBox>
          </Link>
          <Link href="https://wemeta.world/" target="_blank">
            <IconBox big={false}>
                <Image src={'/partners/Group-218.png'} alt={'wemeta'} width={144} height={33} className='' />
            </IconBox>
          </Link>

        </div>

        <div className="flex justify-center mt-32 lg:mt-52">
          <h1 className="font-neue text-5xl md:text-7xl xl:text-[150px] text-lm_icons font-bold">INVESTORS</h1>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-32 mx-6 xl:mx-12 place-items-center'>
          <Link href="https://polygonscan.com/" target="_blank">
            <IconBox big={true}>
                <Image src={'/investors/investors-1.png'} alt={'polygon'} width={210} height={92} className='' />
            </IconBox>
          </Link>
          <Link href="#" target="_blank">
            <IconBox big={true}>
                <Image src={'/investors/investors-2.png'} alt={'ocean'} width={210} height={92} className='' />
            </IconBox>
          </Link>
          <Link href="https://www.brinc.io/" target="_blank">
            <IconBox big={true}>
                <Image src={'/investors/investors-3.png'} alt={'brinc'} width={210} height={92} className='' />
            </IconBox>
          </Link>
          <Link href="https://www.sandbox.game/en/" target="_blank">
            <IconBox big={true}>
                <Image src={'/investors/investors-4.png'} alt={'sandbox'} width={210} height={92} className='' />
            </IconBox>
          </Link>
          <Link href="#" target="_blank">
            <IconBox big={true}>
                <Image src={'/investors/investors-5.png'} alt={'xvetures'} width={210} height={92} className='' />
            </IconBox>
          </Link>
          <Link href="https://blockchain-founders.io/" target="_blank">
            <IconBox big={true}>
                <Image src={'/investors/investors-6.png'} alt={'blockchain founders group'} width={210} height={92} className='' />
              </IconBox>
          </Link>
          <Link href="#" target="_blank">
            <IconBox big={true}>
                <Image src={'/investors/investors-7.png'} alt={'polaris'} width={210} height={92} className='' />
            </IconBox>
          </Link>
          <Link href="#" target="_blank">
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