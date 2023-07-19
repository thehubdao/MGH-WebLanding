import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/footer.component";
import Card from "../../components/card.component";

export default function Projects() {
  return (
    <>
      <div className="absolute w-12 h-12 top-8 left-8">
        <Link href="/">
          <Image src='/icons/mgh.svg' fill={true} alt="MetaGameHub logo" />
        </Link>
      </div>
      <main className=" pt-28 pb-20">

        <div className="flex flex-col xl:flex-row mb-0 gap-8">
          <div className=" w-full xl:w-1/4 pl-10 lg:pl-20 2xl:pl-36 ">
            <h1 className="font-neue text-4xl text-lm_text_gray font-bold mt-11">THE HUB<br />DAO</h1>
            <p className="font-neue text-4xl text-lm_icons font-bold">BUILD</p>
          </div>
          <div className=" w-full xl:w-3/4 pr-10 lg:pr-20 2xl:pr-40 text-end">
            <h1 className="font-neue text-7xl md:text-9xl lg:text-[170px] 2xl:text-[225px] text-lm_icons font-bold">PROJECTS</h1>
          </div>
        </div>

        <div className="px-10 lg:px-36 w-full text-end flex justify-end mt-16 ">
          <div className="row ">
            <p className="lg:w-[1060px] font-light font-work text-xl">As a leading provider of custom metaverse experiences, we have had the privilege of <br className="hidden lg:inline-block" /> co-creating with some of the most forward-thinking brands in the industry.<br className="hidden lg:inline-block" /> Our unique approach turns regular metaverse users into brand ambassadors, fostering a <br className="hidden lg:inline-block" />community that is as engaged as it is diverse. We believe in the power of co-creation, <br className="hidden lg:inline-block" /> and our projects reflect this commitment.</p>
          </div>
        </div>

        <div className='flex justify-center flex-wrap gap-y-10 gap-x-56 xl:gap-x-10 mt-32'>
          <Card imageUrl='/projects/project-1.png' floatImageUrl='' url='/soon' isProject={true}>
            <div className="flex px-5 h-full justify-between items-center">
              <div>
                <Image src='/projects/logos/decentraland.svg' width={100} height={100} alt="decentraland logo" className="rounded-full p-3 bg-lm_text_gray" />
              </div>
              <div className="text-end">
                <h1 className="font-neue text-sm text-lm_text_gray font-bold uppercase">headquarter</h1>
                <p className="font-neue text-4xl text-lm_icons font-bold uppercase">FITCHIN <br />HOUSE</p>
              </div>
            </div>
          </Card>
          <Card imageUrl='/projects/project-2.png' floatImageUrl='' url='/soon' isProject={true}>
            <div className="flex px-5 h-full justify-between items-center">
              <div>
                <Image src='/projects/logos/sandbox.svg' width={100} height={100} alt="sandbox logo" className="rounded-full p-3 bg-lm_text_gray" />
              </div>
              <div className="text-end">
                <h1 className="font-neue text-sm text-lm_text_gray font-bold uppercase">headquarter</h1>
                <p className="font-neue text-4xl text-lm_icons font-bold uppercase">cryptoticker</p>
              </div>
            </div>
          </Card>
          <Card imageUrl='/projects/project-3.png' floatImageUrl='' url='/soon' isProject={true}>
            <div className="flex px-5 h-full justify-between items-center">
              <div>
                <Image src='/projects/logos/decentraland.svg' width={100} height={100} alt="decentraland logo" className="rounded-full p-3 bg-lm_text_gray" />
              </div>
              <div className="text-end">
                <h1 className="font-neue text-sm text-lm_text_gray font-bold uppercase">gallery</h1>
                <p className="font-neue text-4xl text-lm_icons font-bold uppercase">espacio <br />creador</p>
              </div>
            </div>
          </Card>
          <Card imageUrl='/projects/project-4.png' floatImageUrl='' url='/soon' isProject={true}>
            <div className="flex px-5 h-full justify-between items-center">
              <div>
                <Image src='/projects/logos/logo-1.svg' width={100} height={100} alt="logo-1 logo" className="rounded-full p-3 bg-lm_text_gray" />
              </div>
              <div className="text-end">
                <h1 className="font-neue text-sm text-lm_text_gray font-bold uppercase">educational hub</h1>
                <p className="font-neue text-4xl text-lm_icons font-bold uppercase">ekolance</p>
              </div>
            </div>
          </Card>
          <Card imageUrl='/projects/project-5.png' floatImageUrl='' url='/soon' isProject={true}>
            <div className="flex px-5 h-full justify-between items-center">
              <div>
                <Image src='/projects/logos/somnium.svg' width={100} height={100} alt="somnium space logo" className="rounded-full p-3 bg-lm_text_gray" />
              </div>
              <div className="text-end">
                <h1 className="font-neue text-sm text-lm_text_gray font-bold uppercase">VR Experience</h1>
                <p className="font-neue text-4xl text-lm_icons font-bold uppercase">Competitive <br />Game Hub</p>
              </div>
            </div>
          </Card>
          <Card imageUrl='/projects/project-6.png' floatImageUrl='' url='/soon' isProject={true}>
            <div className="flex px-5 h-full justify-between items-center">
              <div>
                <Image src='/projects/logos/decentraland.svg' width={100} height={100} alt="decentraland logo" className="rounded-full p-3 bg-lm_text_gray" />
              </div>
              <div className="text-end">
                <h1 className="font-neue text-sm text-lm_text_gray font-bold uppercase">Metaverse Event</h1>
                <p className="font-neue text-4xl text-lm_icons font-bold uppercase">Menthol Protocol</p>
              </div>
            </div>
          </Card>
          <Card imageUrl='/projects/project-7.png' floatImageUrl='' url='/soon' isProject={true}>
            <div className="flex px-5 h-full justify-between items-center">
              <div>
                <Image src='/projects/logos/sandbox.svg' width={100} height={100} alt="sandbox logo" className="rounded-full p-3 bg-lm_text_gray" />
              </div>
              <div className="text-end">
                <h1 className="font-neue text-sm text-lm_text_gray font-bold uppercase">Music Experience</h1>
                <p className="font-neue text-4xl text-lm_icons font-bold uppercase">Ayo <br />& Teo</p>
              </div>
            </div>
          </Card>
          <Card imageUrl='/projects/project-8.png' floatImageUrl='' url='/soon' isProject={true}>
            <div className="flex px-5 h-full justify-between items-center">
              <div>
                <Image src='/projects/logos/logo-2.svg' width={100} height={100} alt="logo-2 logo" className="rounded-full p-3 bg-lm_text_gray" />
              </div>
              <div className="text-end">
                <h1 className="font-neue text-sm text-lm_text_gray font-bold uppercase">Mobile First Experience</h1>
                <p className="font-neue text-4xl text-lm_icons font-bold uppercase">METAGAMEHUB</p>
              </div>
            </div>
          </Card>
          <Card imageUrl='/projects/project-9.png' floatImageUrl='' url='/soon' isProject={true}>
            <div className="flex px-5 h-full justify-between items-center">
              <div>
                <Image src='/projects/logos/logo-1.svg' width={100} height={100} alt="logo-1 logo" className="rounded-full p-3 bg-lm_text_gray" />
              </div>
              <div className="text-end">
                <h1 className="font-neue text-sm text-lm_text_gray font-bold uppercase">HQ</h1>
                <p className="font-neue text-4xl text-lm_icons font-bold uppercase">THE HUB</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex justify-center my-28 md:my-52 xl:my-72 ">
          <Link href="/" rel="noopener noreferrer">
            <div className="w-52 sm:w-[333px] min-h-[85px] shadow-relief-32 hover:shadow-relief-12 rounded-3xl cursor-pointer flex justify-center items-center">
              <p className="font-work text-sm font-medium text-lm_icons text-center">BACK TO THE HUB</p>
            </div>
          </Link>
        </div>

        <Footer />
      </main>
    </>
  )
}