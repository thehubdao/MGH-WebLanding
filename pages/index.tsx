import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/footer.component';
import Scene from '../components/scene.component';

interface CardProps {
  imageUrl: string,
  children: string | JSX.Element,
  url: string,
  newTab?: boolean
}

function Card({ imageUrl, children, url, newTab = false }: CardProps) {
  return (
    <Link href={url} rel="noopener noreferrer" target={newTab?'_blank':'_self'}>
      <div className='w-[292px] shadow rounded-[40px] border border-white cursor-pointer'>
        <div>
          <Image src={imageUrl} width={292} height={331} alt={'card'} priority={true} />
        </div>
        <div className='h-[95px] flex justify-center items-center'>
          <div className='text-center text-[22px] text-gray-light font-semibold uppercase leading-none'>
            {children}
          </div>
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
          <div className='absolute inset-0 w-full h-full bg-slate-400'>
            <Scene />
          </div>
          <div className='absolute w-12 h-12 top-8 left-8 lg:top-24 lg:left-24 border-t border-l border-white'></div>
          <div className='absolute w-12 h-12 top-8 right-8 lg:top-24 lg:right-24 border-t border-r border-white'></div>
          <div className='absolute w-12 h-12 bottom-8 right-8 lg:bottom-24 lg:right-24 border-b border-r border-white'></div>
          <div className='absolute w-12 h-12 bottom-8 left-8 lg:bottom-24 lg:left-24 border-b border-l border-white'></div>
          <div className='flex flex-col justify-center items-center relative h-fit'>
            <div className='hidden absolute xl:flex flex-col items-end top-12 right-[102%] cursor-pointer'>
              <div className='w-6 h-[2px] bg-white mb-2'></div>
              <div className='leading-none text-right text-lg font-light'>
                <a href="https://app.metagamehub.io/valuation" target='_blank' rel='noreferrer' className='block'>FIND<br />UNDERVALUED<br />LANDS</a>
              </div>
            </div>
            <div className='hidden absolute xl:flex flex-col bottom-2/5 left-[102%] cursor-pointer w-36'>
              <div className='w-6 h-[2px] bg-white mb-2'></div>
              <div className='leading-none text-lg font-light'>
                <a href="https://dcl-edit.com/" target='_blank' rel='noreferrer' className='block'>BUILD ON ANY VIRTUAL WORLD</a>
              </div>
            </div>
            <div className='hidden absolute xl:flex items-center bottom-8 left-0 cursor-pointer'>
              <div className='w-[3px] h-6 bg-white mr-2'></div>
              <div className='leading-none text-lg font-light'>
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
        <div className='pb-32' id='hub'>
          <h2 className='text-center text-5xl text-gray-dark font-light pb-16 pt-32'>Your Metaverse Home</h2>
          <div className='flex justify-center flex-wrap xl:flex-nowrap gap-10 lg:gap-36 xl:gap-5 2xl:gap-20'>
            <Card imageUrl='/2.png' url='https://app.metagamehub.io/' newTab={true}>
              <div>MGH APP</div>
            </Card>
            <Card imageUrl='/2.png' url='/soon'>
              <div>PRODUCT OFFERING</div>
            </Card>
            <Card imageUrl='/2.png' url='https://docs.metagamehub.io/' newTab={true}>
              <div>ABOUT MGH DAO</div>
            </Card>
            <Card imageUrl='/2.png' url='https://linktr.ee/metagamehub.dao' newTab={true}>
              <div>JOIN US</div>
            </Card>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
