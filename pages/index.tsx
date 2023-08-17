import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/footer.component';
import IconBox from '../components/iconBox.component';
import Card from '../components/card.component';
import { CardForm } from '../enums/common.enum';
import { NavigationCards } from '../data/navigationCards.data';
import { BackedBy } from '../data/partnersAndInvestors.data';
import { Leva } from 'leva';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LandingLauncher from '../components/launcher/landingLauncher.component';

export default function Home() {
  const router = useRouter();
  const [showDebugger, setShowDebugger] = useState<boolean>(false);
  useEffect(() => {
    setShowDebugger(router.asPath.split('#')[1] != 'debug');
  }, [router])
  return (
    <>
      <Head>
        <title>THE HUB DAO</title>
        <meta name="description" content="The Hub DAO is your ultimate destination for all things metaverse. As a one stop shop for investing, building, and experiencing virtual worlds, we offer a wide range of tools and resources to help you get the most out of your metaverse journey. From price estimation tools and development editors to immersive experiences and community-driven decision-making, we have everything you need to take your virtual adventures to the next level. Join The Hub DAO community today and start exploring the infinite possibilities of the metaverse!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/thehub.svg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* landing */}
      <main className='font-work pb-20'>
        <div className='flex justify-center items-center bg-[#3f8550] w-full h-screen text-white relative'>
          <div className='absolute inset-0 w-full h-full bg-black'>
            <LandingLauncher />
          </div>
          {/* <div className='absolute w-12 h-12 top-8 left-8 lg:top-24 lg:left-24 border-t border-l border-white'></div>
          <div className='absolute w-12 h-12 top-8 right-8 lg:top-24 lg:right-24 border-t border-r border-white'></div>
          <div className='absolute w-12 h-12 bottom-8 right-8 lg:bottom-24 lg:right-24 border-b border-r border-white'></div>
          <div className='absolute w-12 h-12 bottom-8 left-8 lg:bottom-24 lg:left-24 border-b border-l border-white'></div>
          <div className='flex flex-col justify-center items-center relative h-fit'>
            <div className='hidden absolute xl:flex flex-col items-end top-12 right-[102%] cursor-pointer group'>
              <div className='w-6 h-[2px] bg-white mb-2 group-hover:w-4/5 transition-all duration-500'></div>
              <div className='leading-none text-right text-lg font-light group-hover:font-semibold group-hover:bg-white group-hover:text-lm_icons group-hover:p-4 transition-all duration-300'>
                <Link href={ExternalLink.MetaVerseExplorer} target='_blank' rel='noreferrer' className='block'>
                  FIND<br />UNDERVALUED<br />LANDS
                </Link>
              </div>
            </div>
            <div className='hidden absolute xl:flex flex-col bottom-2/5 left-[102%] cursor-pointer w-48 group'>
              <div className='w-6 h-[2px] bg-white mb-2 group-hover:w-4/5 transition-all duration-500'></div>
              <div className='leading-none text-lg font-light group-hover:font-semibold group-hover:bg-white group-hover:text-lm_icons group-hover:p-4 transition-all duration-300'>
                <Link href={ExternalLink.DclEdit} target='_blank' rel='noreferrer' className='block'>
                  BUILD ON ANY VIRTUAL WORLD
                </Link>
              </div>
            </div>
            <div className='hidden absolute xl:flex items-center top-full -translate-y-[46px] left-0 cursor-pointer group'>
              <div className='w-[3px] h-6 bg-white mr-2 group-hover:h-10 transition-all duration-300'></div>
              <div className='leading-none text-lg font-light group-hover:font-semibold group-hover:bg-white group-hover:text-lm_icons group-hover:p-4 transition-all duration-300'>
                <Link href={ExternalLink.MetagameHubExperience} target='_blank' rel='noreferrer' className='block'>
                  EXPERIENCE THE METAVERSE
                </Link>
              </div>
            </div>
            <h1 className='text-[8.5px] lg:text-[21px] font-medium tracking-[0.45em] leading-none'>THE ENGINE OF THE METAVERSE</h1>
            <Link href={PageLocation.TheHub} className='font-humane text-9xl lg:text-[320px] leading-none cursor-pointer'>ENTER THE HUB</Link>
            <a href={PageLocation.TheHub} className='font-humane text-9xl lg:text-[320px] leading-none cursor-pointer'>ENTER THE HUB</a>
          </div>
          <div className='absolute w-4/6 lg:w-1/4 h-10 lg:h-12 top-10 lg:top-14'>
            <Image src={'/thehub.svg'} fill={true} alt={'The Hub DAO logo'} />
          </div> */}
        </div>
        {/* card section */}
        <div id='hub'>
          <h2 className='text-center text-[35px] text-gray-dark font-light py-32 mt-32 tracking-[3.5px]'>THE HUB provides you with the picks and shovels <br className='hidden lg:inline-block' /> to have a seamless Metaverse journey</h2>
          <div className='flex justify-center flex-wrap gap-y-10 gap-x-56 xl:gap-x-10 2xl:gap-x-16'>
            {
              NavigationCards.map((card, index) => (
                <div key={index}>
                  <Card imageUrl={card.imageUrl} floatImageUrl={card.floatImageUrl} altImages={card.title} url={card.url} newTab={card.newTab} form={CardForm.Horizontal}>
                    <div className='text-lm_icons'>
                      <h2 className='font-poppins text-xl uppercase'>{card.title}</h2>
                      <p className='text-sm pt-1 font-semibold leading-none' dangerouslySetInnerHTML={{ __html: card.description }}></p>
                    </div>
                  </Card>
                </div>
              ))
            }
          </div>
        </div>
        {/* backed section */}
        <div className='pb-32 mb-32'>
          <h2 className='text-center text-5xl text-gray-dark font-light pb-32 pt-64'>Backed by</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-6 mt-20 sm:mt-32 mx-6 md:mx-12 xl:mx-32 2xl:mx-80 place-items-center'>
            {
              BackedBy.map((investor, index) => (
                <div key={index}>
                  <Link href={investor.url} target="_blank">
                    <IconBox big={true}>
                      <Image src={investor.urlImage} alt={investor.alt} width={210} height={92} />
                    </IconBox>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
        <Footer />
      </main>
      <Leva
        collapsed // default = false, when true the GUI is collpased
        hidden={showDebugger} // default = false, when true the GUI is hidden
      />
    </>
  )
}
