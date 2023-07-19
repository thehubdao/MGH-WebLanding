import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/footer.component";
import IconBox from "../../components/iconBox.component";
import PersonCarrousel from "../../components/personCarrousel.component";
import ScrollTitleUI from "../../components/scrollTitle.component";

const team = [
  {
    name: 'NICOLAS WEBER',
    role: 'Founder',
    description: "Early stage crypto investor, writer, philanthropist, podcast host and entrepreneur. He is part of the founding team at Amazing Blocks, Founder and CEO of DAC and Founding Initiator of THE HUB DAO. Additionally, he is the Co-Founder of the Tokenization Working Group at the European Blockchain Association. He previously worked for established companies such as Daimler, Dieffenbacher and Allianz Global Investors.",
    url: '/team/t-1.png',
    alt: 'NICOLAS WEBER'
  },
  {
    name: 'CAMILO ECHEVERRI',
    role: 'Co-founder, Operations',
    description: "+4 years of experience in tradfi industry. MetaFi, DAOs and Web3 degen. Using self-enforcing open source protocols to create infrastructure for new ways of human coordination.",
    url: '/team/t-2.png',
    alt: 'CAMILO ECHEVERRI'
  },
  {
    name: 'YOUSSEF GABSI',
    role: 'Co-founder Business Development',
    description: "Asset management and real estate consultant converted into Web3 front office specialist.",
    url: '/team/t-3.png',
    alt: 'YOUSSEF GABSI'
  },
  {
    name: 'SANTIAGO HERNANDEZ',
    role: 'Tech Lead',
    description: "Fullstack developer with focus on devops and web3 integration passionate about Fintech and high frequency trading. Background in algorithmic trading, cyber security and business development",
    url: '/team/t-4.png',
    alt: 'SANTIAGO HERNANDEZ'
  },
  {
    name: 'BONNIE SANDOVAL',
    role: 'Head Designer',
    description: "Media Artist and Virtual Reality enthusiast, I direct media development projects including Web Design, UI/UX, Virtual Reality, and Augmented Reality. Currently, I'm working on projects oriented towards the Development and acceleration of Web3 adoption and Decentralized Economies.",
    url: '/team/t-5.png',
    alt: 'BONNIE SANDOVAL'
  },
  {
    name: 'NAN MOLINA',
    role: 'Frotend Development Lead',
    description: "Graphic and interactive developer, enthusiastic in the field of immersive and interactive experiences unique in the real as virtual world. Combining design, programming and a deep affection for technology, Camilo has participated in numerous projects as a creative director, 3D modeler, animator, UX/UI designer, front-end developer, scripting and deadline motivator.",
    url: '/team/t-6.png',
    alt: 'NAN MOLINA'
  },
  {
    name: 'CAMILO ALAGUNA',
    role: 'AI & Data Science',
    description: "Computer Scientist with strong experience in AI and entrepreneur. Passionate of solving problems using computational tools.",
    url: '/team/t-7.png',
    alt: 'CAMILO ALAGUNA'
  },
  {
    name: 'OSWALDO MANTILLA',
    role: 'Backend Development Lead',
    description: "Full-Stack Developer, loves new technologies, new experiences and enjoying life. Pref language C#, all my info on my linkedin.",
    url: '/team/t-8.png',
    alt: 'OSWALDO MANTILLA'
  },
  {
    name: 'CHRISTIAN WERNER',
    role: 'Metaverse Development Lead',
    description: "Game Designer, Consultant and Lecturer in Game Design at the FH Aachen and HS Fresenius, Cologne.",
    url: '/team/t-9.png',
    alt: 'CHRISTIAN WERNER'
  },
  {
    name: 'JOHN SANDOVAL',
    role: '3D Modelling Lead',
    description: "Industrial and 3D designer integral professional in my area of knowledge. I have great skills in the conceptualization and coordination of projects as well as in diferent two-dimensional and three-dimensional representative communication tools, skills that I complement with the management and knowledge of multimedia tools and techniques (2D, 3D animation, mapping).",
    url: '/team/t-10.png',
    alt: 'JOHN SANDOVAL'
  },
  {
    name: 'DR. LOHA HASHIMY',
    role: 'Lead Product Manager',
    description: "Throughout my career, I've held numerous senior positions in innovation management, product management, business development, and strategy.I enjoy delving into market issues and using new technology to address them. I build, scale, and optimize meaningful business portfolios. To do so, I concentrate on achieving key objectives, forming fantastic teams, and fast responding to new information.",
    url: '/team/t-11.png',
    alt: 'DR. LOHA HASHIMY'
  },
];

const team2 = [
  {
    name: 'SUSANNE BATALOFF',
    role: 'Metaverse Development ',
    description: "Game Design & Management Student at HS Fresenius Cologne, Graphic designer & Social Media Lead at Fresenius Green Office, part of Metaverse DevGroup.",
    url: '/team/t-12.png',
    alt: 'SUSANNE BATALOFF'
  },
  {
    name: 'DOMINIK MRYKA',
    role: 'Game & Level Designer',
    description: 'Main Dev Lead in "Somnium Space VR" and continuously working on projects in "The Sandbox". Background as computer scientist and videogame enthusiast that is fascinated by architecture and design.',
    url: '/team/t-13.png',
    alt: 'DOMINIK MRYKA'
  },
  {
    name: 'JONATHAN LUBECK',
    role: 'Lead Dev Metaverse Development',
    description: "As the lead developer of DCL-Edit and expert for Decentraland development, Jonathan works as part of the Metaverse Development Team. He has more than 10 years of programming experience, and has studied Computer Science at the University of applied Science in Aachen",
    url: '/team/t-14.png',
    alt: 'JONATHAN LUBECK'
  },
  {
    name: 'CRISTINA VARGAS',
    role: 'Lead Graphic Designer + UX/UI',
    description: "Graphic Designer focused on Branding and Service Design with three-year experience in various industries growing Creative Strategic processes, Communication protocols, developing and creating human-centered methodologies and creative visuals.",
    url: '/team/t-15.png',
    alt: 'CRISTINA VARGAS'
  },
  {
    name: 'MAURCIO BELTRÁN',
    role: 'Media artist + 3D-2D Animator',
    description: "I have a deep interest in the image in your different aspects, such as video, photography, drawing and design in general. For this reason, in my profession I dedicate myself to work in its various modalities, in search of a symbiosis. The areas that I have developed professionally are video editing, animation, design, production and audiovisual direction.",
    url: '/team/t-16.png',
    alt: 'MAURCIO BELTRÁN'
  },
  {
    name: 'DIEGO SANTA',
    role: 'Media Artist',
    description: "Artist highly passionate about design, technology and the creative processes involved in digital experiences as metaverse, virtual reality, augmented reality, video games and digital art.",
    url: '/team/t-17.png',
    alt: 'DIEGO SANTA'
  },
  {
    name: 'PHIL THOMSEN',
    role: 'Blockchain Developer',
    description: "Blockchain Architect and Smart Contract Engineer with focus on EVM based systems.",
    url: '/team/t-18.png',
    alt: 'PHIL THOMSEN'
  },
  {
    name: 'GABRIEL CHAVES',
    role: 'Blockchain Developer',
    description: "Systems Engineer with a learning and project developing high capacity focused in encompass most of the things related to the projects ",
    url: '/team/t-19.png',
    alt: 'GABRIEL CHAVES'
  },
  {
    name: 'CAMILO GONZALEZ',
    role: 'Fronted Developer',
    description: "Web designer with focus on the UX/UI",
    url: '/team/t-20.png',
    alt: 'CAMILO GONZALEZ'
  },
  {
    name: 'JAIRO CRIOLLO',
    role: 'Backend Developer',
    description: "System engineer student focused on Web3 backend and Unity, developing task as objectives on MGH projects",
    url: '/team/t-21.png',
    alt: 'JAIRO CRIOLLO'
  },
];

const advisors = [
  {
    name: 'Jonathan Ayerbe',
    role: 'Partnerships, LATAM Working Group Lead, Strategy Advisor',
    description: "Founder, Investor & Advisor. CEO of a LATAM startup accelerator & collisioner. Working on decentralizing and disrupting health; travel and work and real estate. Metaverse builder.",
    url: '/advisors/advisor-1.png',
    alt: 'Jonathan Ayerbe'
  },
  {
    name: 'Hamzah Khan',
    role: '',
    description: "Head of DeFi at Polygon. Passionate about bringing open financial technology to the world.",
    url: '/advisors/advisor-2.png',
    alt: 'Hamzah Khan'
  },
  {
    name: 'Dr. Holger Sprengel',
    role: '',
    description: "Entrepreneur, business angel, innovator & advisor - building ventures since 1999. ",
    url: '/advisors/advisor-3.png',
    alt: 'Dr. Holger Sprengel'
  },
  {
    name: 'Sagar Barvaliya',
    role: '',
    description: "Sagar is an Investment Manager at Blockrocket, A leading investor for early-stage blockchain-based startups. He is in charge of Blockrocket’s startup sourcing as well as portfolio management. An ex-Engineer with several years of work experience in the automotive sector of leading OEMs in Germany decided to dedicate his attention to the blockchain space a few years ago.",
    url: '/advisors/advisor-4.png',
    alt: 'Sagar Barvaliya'
  },
  {
    name: 'Dr. Biyan Mienert',
    role: '',
    description: "Lawyer specialized in Blockchain and FinTech.",
    url: '/advisors/advisor-5.png',
    alt: 'Dr. Biyan Mienert'
  },
];

const advisors2 = [
  {
    name: 'Nova Lorraine',
    role: 'Creative & Branding Advisor',
    description: "Founder, Author, and Award Winning Fashion Designer creating luxe experiences for the Metaverse. DAO Branding Group Lead. Passionate about education and access to the crypto economy.",
    url: '/advisors/advisor-6.png',
    alt: 'Nova Lorraine'
  },
  {
    name: 'Peter Rafelson',
    role: 'Marketing Advisor',
    description: "Produced and written over thirty #1 hit records selling over 180,000,000 units. Working with all major studios and has developed a small entertainment empire in North Hollywood.",
    url: '/advisors/advisor-7.png',
    alt: 'Peter Rafelson'
  },
  {
    name: 'Sebastien Borget',
    role: '',
    description: "Co-Founder & COO of The Sandbox. President of the Blockchain Game Alliance, advocating for NFTs & blockchain in games.",
    url: '/advisors/advisor-8.png',
    alt: 'Sebastien Borget'
  },
  {
    name: 'Dr. Justin Goldston',
    role: '',
    description: "Professor, Founder, Author, and Five-Time TEDx speaker on blockchain looking to democratize education with the metaverse.",
    url: '/advisors/advisor-9.png',
    alt: 'Dr. Justin Goldston'
  },
  {
    name: 'Manan Patel',
    role: '',
    description: "Founder with 10+ years of experience in development and consulting services to Fortune 100 enterprises. Founding team member of Ocean Protocol. Blockchain Expert and Crypto thought leader.",
    url: '/advisors/advisor-10.png',
    alt: 'Manan Patel'
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
            <p className="sm:w-[530px] font-light font-work text-xl">Welcome to THE HUB DAO, the ultimate platform <br className="hidden sm:inline-block" /> for anyone looking to invest, build, and experience <br className="hidden sm:inline-block" /> the metaverse. <br className="hidden sm:inline-block" /> Our platform and resources have helped <br className="hidden sm:inline-block" /> thousands of investors, builders, brands, and <br className="hidden sm:inline-block" /> creators save money and time while navigate the <br className="hidden sm:inline-block" /> ever-evolving metaverse. <br className="hidden sm:inline-block" /> Whether you&apos;re a seasoned virtual worlds veteran <br className="hidden sm:inline-block" /> or just getting started, THE HUB is the one-stop-<br className="hidden sm:inline-block" /> shop for everything you need to have a seamless <br className="hidden sm:inline-block" /> metaverse journey. Join us and let&apos;s shape the <br className="hidden sm:inline-block" /> future of the internet together!</p>
          </div>
        </div>

        <div className="relative w-full py-28">
          <ScrollTitleUI title={['INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE']} imageUrl='/images/bunny.png' />
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
          <PersonCarrousel members={team} loop={true} />
          <PersonCarrousel members={team2} loop={true} />
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
          <PersonCarrousel members={advisors} loop={false} />
          <PersonCarrousel members={advisors2} loop={false} />
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