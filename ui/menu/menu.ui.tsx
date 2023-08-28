import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { ExternalLink, IconForm, PageLocation } from '../../enums/common.enum';
import LinkedButtonsUI from './linkedButtons.ui';
import SocialIcon from '../../components/socialIcon.component';

export default function MenuUI (){
    const [isNavOpen, setIsNavOpen] = useState<Boolean>(false);
    const handleToggleClick = () => {
      setIsNavOpen((prev) => !prev);
    };
  
    const headerList = [
      {
        name: "METAVERSE EXPLORER",
        route: ExternalLink.MetaVerseExplorer,
        newTab: true,
      },
      {
        name: "THE HUB PLATFORM",
        route: PageLocation.Tools,
      },
      {
        name: "ABOUT THE HUB",
        route: PageLocation.AboutTheHub,
      },
      {
        name: "JOIN US",
        route: PageLocation.JoinUs,
      },
      {
        name: "BLOG",
        route: PageLocation.Soon,
      },
    ];
  
    return (
      <nav className="mt-7">
        <div className="flex justify-between items-center">
          <Link href={PageLocation.Home}>
            <Image
              src={'/icons/mgh.svg'}
              alt={'TheHub DAO logo'}
              width={45}
              height={43}
              className="cursor-pointer flex justify-start items-start ml-7"
            />
          </Link>
          <div className={`font-toggleIcons text-3xl pr-[50px] cursor-pointer ${isNavOpen ? 'hidden' : ''}`} onClick={() => { handleToggleClick() }}>
            b
          </div>
        </div>
        {isNavOpen && (
          <>
            <div className="fixed w-full h-screen inset-0 z-10">
              <div className='w-full h-full bg-black/[.75] absolute '>
              </div>
              <div className='absolute top-0 right-0 h-screen w-full md:w-[75%] bg-lm_fill flex flex-col justify-between  px-8 md:px-20 py-20'>
                {/* Menu options */}
                <LinkedButtonsUI headerList={headerList} handleToggleClick={()=>handleToggleClick()}/>
                {/* Line divider */}
                <div className='flex justify-center'>
                  <div className="w-full h-[2px] bg-lm_gray my-14"></div>
                </div>
                {/* Menu footer */}
                <div className="flex flex-col xl:flex-row mb-0 gap-8">
                  <div className=" w-full xl:w-1/2">
                    <p className='font-work text-lm_icons text-sm  font-noraml'>
                      FIND US ON SOCIAL MEDIA:
                    </p>
                    <div className='flex justify-around w-full md:w-[80%] pr-8 md:pr-0 gap-x-2'>
                      <SocialIcon iconForm={IconForm.Regular} iconRef='m' link={ExternalLink.Medium} alt='medium link' />
                      <SocialIcon iconForm={IconForm.Regular} iconRef='i' link={ExternalLink.Instagram} alt='instagram link' />
                      <SocialIcon iconForm={IconForm.Regular} iconRef='l' link={ExternalLink.Linkedin} alt='linkedin link' />
                      <SocialIcon iconForm={IconForm.Regular} iconRef='w' link={ExternalLink.Twitter} alt='twitter link' />
                      <SocialIcon iconForm={IconForm.Regular} iconRef='t' link={ExternalLink.Telegram} alt='telegram link' />
                      <SocialIcon iconForm={IconForm.Regular} iconRef='a' link={ExternalLink.Discord} alt='discord link' />
                      <SocialIcon iconForm={IconForm.Regular} iconRef='M' link={ExternalLink.MailTo} alt='The Hub DAO email' />
                      <SocialIcon iconForm={IconForm.Regular} iconRef='e' link={ExternalLink.ETherScan} alt='etherscan link' />
                    </div>
                    <div className='mt-9'>
                      <Link href={ExternalLink.MetaVerseExplorer} className='flex' onClick={handleToggleClick} target='_blank'>
                        <p className='font-work text-xs text-lm_icons font-bold'>METAVERSE EXPLORER</p>
                        <div className='relative w-3 h-3'>
                          <Image src={'/icons/textIcon.png'} alt={'text logo'} fill className="cursor-pointer ml-2" />
                        </div>
                      </Link>
                      <Link href={PageLocation.Privacy} className='flex mt-3' onClick={handleToggleClick}>
                        <p className='font-work text-xs text-lm_icons font-bold'>PRIVACY POLICY</p>
                        <div className='relative w-3 h-3'>
                          <Image src={'/icons/textIcon.png'} alt={'text logo'} fill className="cursor-pointer ml-2" />
                        </div>
                      </Link>
                      <Link href={ExternalLink.Snapshot} target='_blank' className='flex mt-3'>
                        <p className='font-work text-xs text-lm_icons font-bold'>GOVERNANCE</p>
                        <div className='relative w-3 h-3'>
                          <Image src={'/icons/textIcon.png'} alt={'text logo'} fill className="cursor-pointer ml-2" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full xl:w-1/2 text-end hidden md:block">
                    <h1 className="font-neue text-4xl text-lm_gray font-bold">THE HUB <br /> DAO</h1>
                    <p className="font-neue text-4xl text-lm_icons font-bold">ENTER THE <br /> HUB</p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 pr-[50px] pt-9 font-toggleIcons text-xl cursor-pointer" onClick={handleToggleClick}>
                  x
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    );
}