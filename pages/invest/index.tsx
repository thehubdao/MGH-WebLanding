import Link from "next/link";
import Image from "next/image";
import Box from "../../components/box.component";
import { ExternalLink, PageLocation } from "../../enums/common.enum";

export default function Invest() {
  return (
    <>
      <main className="font-poppins pt-20 xl:pt-0">
        <div className="flex flex-col-reverse xl:flex-row gap-16 min-h-screen justify-center items-center">
          <div className="w-full relative  h-[500px]">
            <Image src={'/images/bg-circle.png'} alt={'bg-spaceship'} fill style={{maxWidth: '1046px', maxHeight:'566px'} } className='xl:rounded-r-3xl' />
            <div className="absolute w-full h-[200%] top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                <Image src={'/images/spaceship.png'} alt={'spaceship'} fill className='object-contain' />
            </div>
          </div>
          <div className=" w-full mt-14 xl:mt-0">
            <h1 className=" text-7xl md:text-9xl lg:text-[200px] text-lm_icons text-center xl:text-start">INVEST</h1>
            <p className="font-work font-light  text-lg md:text-[22px] text-center xl:text-start px-4 sm:px-0">Navigate through the Metaverse and find the most <br className="hidden sm:inline-block"/> valuable LANDs across virtual worlds</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 mt-12 mx-8 xl:mx-0 xl:mr-20'>
                <Box>
                    <div className='flex justify-between items-center min-h-[115px]'>
                        <div className='pl-6 mr-5'>
                            <h1 className='font-work text-sm font-bold text-lm_icons leading-5'>METAVERSE EXPLORER</h1>
                            <p className='font-work text-xs font-light text-lm_icons leading-4'>Save time by finding the LANDs <br className="hidden 2xl:inline-block"/> and assets you need in one app</p>
                        </div>
                        <div className='flex items-center justify-start mr-4' >
                          <Link href={ExternalLink.MetaVerseExplorer} target='_blank'>
                            <div className="rounded-full shadow-boxes bg-bg_vector flex items-center justify-center w-[80px] h-[80px] group">
                                <Image src={'/icons/Vector.svg'} alt={'Vector'}  width={50} height={50} style={{maxWidth: '50px', maxHeight: '50px'}} className="scale-50 rotate-45 group-hover:scale-100 group-hover:rotate-0 transition-all duration-300 "/>
                            </div>
                          </Link>
                        </div>
                    </div>
                </Box>
                <Box>
                    <div className='flex justify-between items-center min-h-[115px]'>
                        <div className='pl-6 mr-5'>
                            <h1 className='font-work text-sm font-bold text-lm_icons leading-5'>METAVERSE API</h1>
                            <p className='font-work text-xs font-light text-lm_icons leading-4'>Integrate our price estimation <br className="hidden 2xl:inline-block"/> data into your platform</p>
                        </div>
                        <div className='flex items-center justify-start mr-4' >
                            <Link href={PageLocation.Soon}>
                              <div className="rounded-full shadow-boxes bg-bg_vector flex items-center justify-center w-[80px] h-[80px] group">
                                  <Image src={'/icons/Vector.svg'} alt={'Vector'}  width={50} height={50} style={{maxWidth: '50px', maxHeight: '50px'}} className="scale-50 rotate-45 group-hover:scale-100 group-hover:rotate-0 transition-all duration-300 "/>
                              </div>
                            </Link>
                        </div>
                    </div>
                </Box>
                <Box>
                    <div className='flex justify-between items-center min-h-[115px]'>
                        <div className='pl-6 mr-5'>
                            <h1 className='font-work text-sm font-bold text-lm_icons leading-5'>METAVERSE DATASETS</h1>
                            <p className='font-work text-xs font-light text-lm_icons leading-4 '>Access curated metaverse datasets <br className="hidden 2xl:inline-block"/> to fuel your research in the <br className="hidden 2xl:inline-block"/> dynamic world of the Metaverse.</p>
                        </div>
                        <div className='flex items-center justify-start mr-4' >
                            <Link href={ExternalLink.MetaverseDataset} target='_blank'>
                              <div className="rounded-full shadow-boxes bg-bg_vector flex items-center justify-center w-[80px] h-[80px] group">
                                  <Image src={'/icons/Vector.svg'} alt={'Vector'}  width={50} height={50} style={{maxWidth: '50px', maxHeight: '50px'}} className="scale-50 rotate-45 group-hover:scale-100 group-hover:rotate-0 transition-all duration-300 "/>
                              </div>
                            </Link>
                        </div>
                    </div>
                </Box>
                <Box>
                    <div className='flex justify-between items-center min-h-[115px]'>
                        <div className='pl-6 mr-5'>
                            <h1 className='font-work text-sm font-bold text-lm_icons leading-5'>METAVERSE ORACLE</h1>
                            <p className='font-work text-xs font-light text-lm_icons leading-4'>Integrate our price estimation <br className="hidden 2xl:inline-block"/> data into your platform</p>
                        </div>
                        <div className='flex items-center justify-start mr-4' >
                            <Link href={ExternalLink.MetaverseOracle} target='_blank'>
                              <div className="rounded-full shadow-boxes bg-bg_vector flex items-center justify-center w-[80px] h-[80px] group">
                                  <Image src={'/icons/Vector.svg'} alt={'Vector'}  width={50} height={50} style={{maxWidth: '50px', maxHeight: '50px'}} className="scale-50 rotate-45 group-hover:scale-100 group-hover:rotate-0 transition-all duration-300 "/>
                              </div>
                            </Link>
                        </div>
                    </div>
                </Box>
            </div>
          </div>
        </div>
      </main>
      <div className="absolute w-12 h-12 top-8 left-8">
        <Link href={PageLocation.Home}>
          <Image src='/icons/mgh.svg' fill={true} alt="MetaGameHub logo" />
        </Link>
      </div>
    </>
  )
}