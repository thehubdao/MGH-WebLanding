import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/footer.component';
import Scene from '../components/scene.component';

interface CardProps {
  imageUrl: string,
  floatImageUrl: string,
  children: string | JSX.Element,
  url: string,
  newTab?: boolean
}

interface CardLogoProps {
  imageUrl: string,
  url: string,
  newTab?: boolean
}

function Card({ imageUrl, floatImageUrl, children, url, newTab = false }: CardProps) {
  return (
    <Link href={url} rel="noopener noreferrer" target={newTab?'_blank':'_self'}>
      <div className='w-[280px] shadow rounded-[40px] border border-white cursor-pointer group'>
        <div className='relative w-full h-[434px]'>
          <Image src={imageUrl} fill={true} alt={'card'} priority={true} />
          <div className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-[45%] w-[320px] h-[320px]  group-hover:scale-105 transition-transform duration-200'>
            <Image src={floatImageUrl} fill={true} alt={'card'} priority={true} />
          </div>
        </div>
        <div className='h-[115px] flex justify-center items-center'>
          <div className='text-center leading-none group-hover:scale-105 transition-transform duration-200'>
            {children}
          </div>
        </div>
      </div>
    </Link>
  )
}

function CardLogo({ imageUrl, url, newTab = false }: CardLogoProps) {
  return (
    <Link href={url} rel="noopener noreferrer" target={newTab?'_blank':'_self'}>
      <div className='w-[294px] h-[128px] shadow rounded-[40px] border border-white cursor-pointer flex justify-center items-center group'>
        <div className='w-[220px] h-[85px] saturate-0 group-hover:saturate-100 transition-all duration-200'>
          <Image src={imageUrl} width={220} height={85} alt={'card'} priority={true} />
        </div>
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>MetaGameHub DAO</title>
        <meta name="description" content="MetaGameHub DAO is your ultimate destination for all things metaverse. As a one stop shop for investing, building, and experiencing virtual worlds, we offer a wide range of tools and resources to help you get the most out of your metaverse journey. From price estimation tools and development editors to immersive experiences and community-driven decision-making, we have everything you need to take your virtual adventures to the next level. Join the MetaGameHub DAO community today and start exploring the infinite possibilities of the metaverse!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* landing */}
      <main className='font-work pb-20'>
        <div className='flex justify-center items-center bg-[#3f8550] w-full h-screen text-white relative'>
          <div className='absolute inset-0 w-full h-full bg-black'>
            <Scene />
          </div>
          <div className='absolute w-12 h-12 top-8 left-8 lg:top-24 lg:left-24 border-t border-l border-white'></div>
          <div className='absolute w-12 h-12 top-8 right-8 lg:top-24 lg:right-24 border-t border-r border-white'></div>
          <div className='absolute w-12 h-12 bottom-8 right-8 lg:bottom-24 lg:right-24 border-b border-r border-white'></div>
          <div className='absolute w-12 h-12 bottom-8 left-8 lg:bottom-24 lg:left-24 border-b border-l border-white'></div>
          <div className='flex flex-col justify-center items-center relative h-fit'>
            <div className='hidden absolute xl:flex flex-col items-end top-12 right-[102%] cursor-pointer group'>
              <div className='w-6 h-[2px] bg-white mb-2 group-hover:w-4/5 transition-all duration-500'></div>
              <div className='leading-none text-right text-lg font-light group-hover:font-semibold group-hover:bg-white group-hover:text-gray-normal group-hover:p-4 transition-all duration-300'>
                <a href="https://app.metagamehub.io/valuation" target='_blank' rel='noreferrer' className='block'>FIND<br />UNDERVALUED<br />LANDS</a>
              </div>
            </div>
            <div className='hidden absolute xl:flex flex-col bottom-2/5 left-[102%] cursor-pointer w-48 group'>
              <div className='w-6 h-[2px] bg-white mb-2 group-hover:w-4/5 transition-all duration-500'></div>
              <div className='leading-none text-lg font-light group-hover:font-semibold group-hover:bg-white group-hover:text-gray-normal group-hover:p-4 transition-all duration-300'>
                <a href="https://dcl-edit.com/" target='_blank' rel='noreferrer' className='block'>BUILD ON ANY VIRTUAL WORLD</a>
              </div>
            </div>
            <div className='hidden absolute xl:flex items-center top-full -translate-y-[46px] left-0 cursor-pointer group'>
              <div className='w-[3px] h-6 bg-white mr-2 group-hover:h-10 transition-all duration-300'></div>
              <div className='leading-none text-lg font-light group-hover:font-semibold group-hover:bg-white group-hover:text-gray-normal group-hover:p-4 transition-all duration-300'>
                <a href="https://linktr.ee/metagamehub.experiences" target='_blank' rel='noreferrer' className='block'>EXPERIENCE THE METAVERSE</a>
              </div>
            </div>
            <h1 className='text-[8.5px] lg:text-[21px] font-medium tracking-[0.45em] leading-none'>INVEST AND BUILD IN THE METAVERSE</h1>
            <a href="#hub" className='font-humane text-9xl lg:text-[320px] leading-none cursor-pointer'>ENTER THE HUB</a>
          </div>
          <div className='absolute w-4/6 lg:w-1/4 h-16 bottom-8 lg:bottom-24'>
            <Image src={'/mgh.svg'} fill={true} alt={'MetaGameHub DAO logo'} />
          </div>
        </div>
        {/* card section */}
        <div id='hub'>
          <h2 className='text-center text-[35px] text-gray-dark font-light py-32 mt-32 tracking-[.25em]'>Your METAVERSE Home</h2>
          <div className='flex justify-center flex-wrap gap-y-10 gap-x-56 xl:gap-x-10 2xl:gap-x-16'>
            <Card imageUrl='/cards/1.png' floatImageUrl='/cards/float/1.png' url='https://app.metagamehub.io/' newTab={true}>
              <div className='text-gray-normal'>
                <h2 className='font-poppins text-xl'>MGH APP</h2>
                <p className='text-sm pt-1 font-semibold leading-none'>Save time in the metaverse</p>
              </div>
            </Card>
            <Card imageUrl='/cards/2.png' floatImageUrl='/cards/float/2.png' url='/soon'>
              <div className='text-gray-normal'>
                <h2 className='font-poppins text-xl'>PRODUCT OFFERING</h2>
                <p className='text-sm pt-1 font-semibold leading-none'>For a simple Metaverse journey</p>
              </div>
            </Card>
            <Card imageUrl='/cards/3.png' floatImageUrl='/cards/float/3.png' url='https://docs.metagamehub.io/' newTab={true}>
              <div className='text-gray-normal'>
                <h2 className='font-poppins text-xl'>ABOUT MGH DAO</h2>
                <p className='text-sm pt-1 font-semibold leading-none'>The one-stop-shop for the<br/>Metaverse</p>
              </div>
            </Card>
            <Card imageUrl='/cards/4.png' floatImageUrl='/cards/float/4.png' url='https://linktr.ee/metagamehub.dao' newTab={true}>
              <div className='text-gray-normal'>
                <h2 className='font-poppins text-xl font-bold'>JOIN US!</h2>
                <p className='text-sm pt-1 font-semibold leading-none'>Help us shape the future<br/>of the Internet</p>
              </div>
            </Card>
          </div>
        </div>
        {/* backed section */}
        <div className='pb-32 mb-32'>
          <h2 className='text-center text-5xl text-gray-dark font-light pb-32 pt-64'>Backed by</h2>
          <div className='flex justify-center flex-wrap gap-6 xl:gap-20'>
            <CardLogo imageUrl='/logos/polygon.png' url='https://polygon.technology/' newTab={true} />
            <CardLogo imageUrl='/logos/sandbox.png' url='https://www.sandbox.game/en/' newTab={true} />
            <CardLogo imageUrl='/logos/decentraland.png' url='https://decentraland.org/' newTab={true} />
          </div>
          <div className='flex justify-center flex-wrap gap-6 xl:gap-20 mt-6 xl:mt-16'>
            <CardLogo imageUrl='/logos/brinc.png' url='https://www.brinc.io/' newTab={true} />
            <CardLogo imageUrl='/logos/ocean.png' url='https://oceanprotocol.com/' newTab={true} />
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
