import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/footer.component";
import Box from "../../components/box.component";

export default function Build() {
  return (
    <>
      <main className="font-poppins pt-20 xl:pt-0">
        <div className="flex flex-col xl:flex-row gap-8 min-h-screen justify-center items-center">
          <div className=" w-full mt-14 xl:mt-0">
            <h1 className=" text-7xl md:text-9xl lg:text-[225px] text-gray-normal text-center">BUILD</h1>
            <p className="font-work font-light  text-lg md:text-[22px] text-center px-4 sm:px-0">Currently, building in the metaverse is not efficient. <br className="hidden sm:inline-block"/>It takes 300+ hours to develop a single experience</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 mx-6 2xl:mx-20'>
                <Box>
                    <div className='flex justify-between items-center min-h-[115px]'>
                        <div className='pl-6 mr-5'>
                            <h1 className='font-work text-sm font-bold text-gray-normal leading-5'>METAVERSE BUILDER</h1>
                            <p className='font-work text-xs font-light text-gray-normal leading-4'>Create your own experience on <br className="hidden 2xl:inline-block"/> any Metaverse</p>
                        </div>
                        <div className='flex items-center justify-start mr-4' >
                            <Link href="https://dcl-edit.com/" target='_blank'>
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
                            <h1 className='font-work text-sm font-bold text-gray-normal leading-5'>PROJECTS</h1>
                            <p className='font-work text-xs font-light text-gray-normal leading-4'>Co-create Metaverse Experiences <br className="hidden 2xl:inline-block"/> with us</p>
                        </div>
                        <div className='flex items-center justify-start mr-4' >
                            <Link href="/soon">
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
                            <h1 className='font-work text-sm font-bold text-gray-normal leading-5'>BUILDER MARKETPLACE</h1>
                            <p className='font-work text-xs font-light text-gray-normal leading-4'>Pl</p>
                        </div>
                        <div className='flex items-center justify-start mr-4' >
                            <Link href="https://www.metahub.shop/" target='_blank'>
                              <div className="rounded-full shadow-boxes bg-bg_vector flex items-center justify-center w-[80px] h-[80px] group">
                                  <Image src={'/icons/Vector.svg'} alt={'Vector'}  width={50} height={50} style={{maxWidth: '50px', maxHeight: '50px'}} className="scale-50 rotate-45 group-hover:scale-100 group-hover:rotate-0 transition-all duration-300 "/>
                              </div>
                            </Link>
                        </div>
                    </div>
                </Box>
            </div>
          </div>
          <div className="w-full relative h-[500px] mt-20 xl:mt-0">
            <Image src={'/images/bg-circle.png'} alt={'bg-home'} fill style={{maxWidth: '1046px', maxHeight:'566px'} } className='xl:rounded-l-3xl' />
            <div className="absolute w-full h-[140%]  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                <Image src={'/images/home-1.png'} alt={'home'} fill  className='object-contain' />
            </div>
          </div>
        </div>
      </main>
      <div className="absolute w-12 h-12 top-8 left-8">
        <Link href="/">
          <Image src='/icons/mgh.svg' fill={true} alt="MetaGameHub logo" />
        </Link>
      </div>
    </>
  )
}