import Head from 'next/head'
import Image from 'next/image'
import Scene from '../components/scene.component';

interface CardProps {
  imageUrl: string,
  children: string | JSX.Element;
}

interface SocialProps {
  imageUrl: string,
  link: string,
  alt: string
}

function Card({imageUrl, children}: CardProps) {
  return (
    <div className='w-[292px] shadow rounded-[40px] border border-white cursor-pointer'>
      <div>
        <Image src={imageUrl} width={292} height={331} alt={'card'} priority={true}/>
      </div>
      <div className='h-[95px] flex justify-center items-center'>
        <div className='text-center text-[22px] text-[#a3afbd] font-semibold uppercase leading-none'>
          {children}
        </div>
      </div>
    </div>
  )
}

function Social({imageUrl, link, alt}: SocialProps) {
  return (
    <a href={link} target='_blank' rel='noreferrer'>
      <div className='flex justify-center items-center w-[38px] h-[38px] relative'>
        <Image src={imageUrl} fill={true} alt={alt} sizes="38px"/>
      </div>
    </a>
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
                <a href="https://app.metagamehub.io/valuation" target='_blank' rel='noreferrer' className='block'>FIND<br/>UNDERVALUED<br/>LANDS</a>
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
                EXPERIENCE THE METAVERSE
              </div>
            </div>
            <h1 className='text-[8.5px] lg:text-[21px] font-medium tracking-[0.45em] leading-none'>INVEST AND BUILD IN THE METAVERSE</h1>
            <a href="#hub" className='font-humane text-9xl lg:text-[320px] leading-none cursor-pointer'>ENTER THE HUB</a>
          </div>
          <div className='absolute w-4/6 lg:w-1/4 h-16 bottom-8 lg:bottom-24'>
            <Image src={'/mgh.svg'} fill={true} alt={'MetaGameHub DAO logo'}/>
          </div>
        </div>
        {/* card section */}
        <div className='pb-32' id='hub'>
          <h2 className='text-center text-5xl text-[#111111] font-light pb-16 pt-32'>Your Metaverse Home</h2>
          <div className='flex justify-center flex-wrap xl:flex-nowrap gap-10 lg:gap-36 xl:gap-5 2xl:gap-20'>
            <Card imageUrl='/2.png'>
              <div>enter the<br/>Metaverse</div>
            </Card>
            <Card imageUrl='/2.png'>
              <div>mgh<br/>for businesses</div>
            </Card>
            <Card imageUrl='/2.png'>
              <div>product<br/>catalogue</div>
            </Card>
            <Card imageUrl='/2.png'>
              join us
            </Card>
          </div>
        </div>
        {/* footer */}
        <div className='flex flex-col xl:flex-row justify-between items-center'>
          {/* footer contact */}
          <div className='xl:w-2/4 flex flex-col items-center'>
            <p className='text-[#54575c] text-lg text-center font-semibold mb-6 mx-8'>
              Stay up to date for the latest from MGH!
            </p>
            <div className='bg-white h-[76px] xl:w-2/4 flex justify-between rounded-3xl overflow-hidden shadow-inner'>
              <input type="text" placeholder='Email Address' className='w-3/4 px-4 bg-transparent'/>
              <button className='rounded-2xl bg-black mr-4 my-4 w-36 flex justify-center items-center'>
                <span className='text-[15px] text-white'>Let’s BUILD</span>
              </button>
            </div>
            <div className='flex justify-around xl:w-[57%] pt-12'>
              <Social imageUrl='/icons/medium.png' link='https://metagamehub.medium.com/' alt='medium link' />
              <Social imageUrl='/icons/instagram.png' link='https://www.instagram.com/metagamehub_dao/' alt='instagram link' />
              <Social imageUrl='/icons/linkedin.png' link='https://www.linkedin.com/company/metagamehub-dao/' alt='linkedin link' />
              <Social imageUrl='/icons/twitter.png' link='https://twitter.com/MGH_DAO' alt='twitter link' />
              <Social imageUrl='/icons/telegram.png' link='https://t.me/metagamehub_dao' alt='telegram link' />
              <Social imageUrl='/icons/discord.png' link='https://discord.com/invite/8WJVMDXZwH' alt='discord link' />
              <Social imageUrl='/icons/youtube.png' link='https://www.youtube.com/' alt='youtube link' />
              <Social imageUrl='/icons/ether.png' link='https://etherscan.io/token/0x8765b1a0eb57ca49be7eacd35b24a574d0203656' alt='etherscan link' />
            </div>
            <div className='pt-6'>
              <p className='text-[15px] text-[#54575C]'>Business & Partnership Proposals</p>
            </div>
          </div>
          {/* footer links */}
          <div className='w-5/6 xl:w-2/4 flex justify-around xl:items-center pt-20 xl:px-40 xl:pt-0'>
            <div>
              <a href="#" className='text-xl block'>Home</a>
              <p className='text-xl'>Treasury</p>
              <p className='text-xl'>Tools</p>
              <p className='text-xl'>Token</p>
              <p className='text-xl'>Contributors</p>
              <p className='text-xl'>Contribute</p>
            </div>
            <div className='text-right xl:text-left'>
              <a href="https://app.metagamehub.io/" target='_blank' rel='noreferrer' className='text-xl block'>MGH dApp</a>
              <a href="https://discord.com/invite/8WJVMDXZwH" target='_blank' rel='noreferrer' className='text-xl block'>Community</a>
              <a href="https://snapshot.org/#/metagamehub.eth" target='_blank' rel='noreferrer' className='text-xl block'>Voting</a>
              <a href="https://docs.metagamehub.io/" target='_blank' rel='noreferrer' className='text-xl block'>Learn more</a>
              <p className='text-xl block'>FAQ</p>
              <a href="https://github.com/metagamehub" target='_blank' rel='noreferrer' className='text-xl block'>GitHub</a>
            </div>
          </div>
        </div>
        {/* terms */}
        <div className='pt-24'>
          <p className='text-center text-[15px]'>
            Terms of Use | Privacy Policy
          </p>
        </div>
      </main>
    </>
  )
}
