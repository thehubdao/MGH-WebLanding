import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { ExternalLink, IconForm, PageLocation } from '../enums/common.enum';
import ScrollTitleUI from './scrollTitle.component';
import SocialIcon from './socialIcon.component';
import LinkedButtonsUI from '../ui/menu/linkedButtons.ui';


export default function Menu() {
  const [isNavOpen, setIsNavOpen] = useState<Boolean>(false);
  const handleToggleClick = () => {
    setIsNavOpen((prev) => !prev);
  };

  const headerList = [
    {
      name: "METAVERSE EXPLORER",
      route: PageLocation.Home,
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
        <div className={`font-toggleIcons text-3xl pr-[50px] ${isNavOpen ? 'hidden' : ''}`} onClick={() => { handleToggleClick() }}>
          b
        </div>
      </div>
      {isNavOpen && (
        <>
          <div className="fixed flex flex-wrap  items-center bg-lm_fill w-full h-screen inset-0 z-10">
            <div className="relative bg-black/[.75] w-[35%] h-full hidden md:flex flex-wrap items-center justify-center overflow-hidden">
              <div className='w-[60%]'>
                <p className='text-xl my-4 text-black'>The all-in-one suite of tools for investing, building, and experiencing the Metaverse</p>
              </div>
              <ScrollTitleUI title={['INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE']} imageUrl='' />
            </div>
            <div className='w-full md:w-[65%] md:mt-20'>
              <LinkedButtonsUI headerList={headerList} handleToggleClick={()=>handleToggleClick()}/>
              <div className='flex justify-center'>
                <div className="w-full h-[2px] bg-lm_gray my-14 mx-8 lg:mx-20"></div>
              </div>
              <div className="flex flex-col xl:flex-row mb-0 xl:mb-48 gap-8">
                <div className=" w-full xl:w-1/2 pl-8 lg:pl-20">
                  <p className='font-work text-lm_icons text-sm  font-noraml'>
                    FIND US ON SOCIAL MEDIA:
                  </p>
                  <div className='flex justify-around w-full md:w-[80%] pr-8 md:pr-0'>
                    <SocialIcon iconForm={IconForm.Regular} iconRef='m' link='https://medium.com/@THEHUB_DAO' alt='medium link' />
                    <SocialIcon iconForm={IconForm.Regular} iconRef='i' link='https://www.instagram.com/thehub_dao/' alt='instagram link' />
                    <SocialIcon iconForm={IconForm.Regular} iconRef='l' link='https://www.linkedin.com/company/the-hub-dao/' alt='linkedin link' />
                    <SocialIcon iconForm={IconForm.Regular} iconRef='w' link='https://twitter.com/THE_HUB_DAO' alt='twitter link' />
                    <SocialIcon iconForm={IconForm.Regular} iconRef='t' link='https://t.me/thehub_dao' alt='telegram link' />
                    <SocialIcon iconForm={IconForm.Regular} iconRef='a' link='https://discord.gg/J35NGdPWgq' alt='discord link' />
                    <SocialIcon iconForm={IconForm.Regular} iconRef='M' link='mailto:info@thedac.info' alt='The Hub DAO email' />
                    <SocialIcon iconForm={IconForm.Regular} iconRef='e' link='https://etherscan.io/token/0x8765b1a0eb57ca49be7eacd35b24a574d0203656' alt='etherscan link' />
                  </div>
                  <div className='mt-9'>
                    <Link href={PageLocation.Home} className='flex' onClick={handleToggleClick}>
                      <p className='font-work text-xs text-lm_icons font-bold'>METAVERSE EXPLORER</p>
                      <div className='relative w-3 h-3'>
                        <Image src={'/icons/textIcon.png'} alt={'text logo'} fill className="cursor-pointer ml-2" />
                      </div>
                    </Link>
                    <Link href={PageLocation.Privacity} className='flex mt-3' onClick={handleToggleClick}>
                      <p className='font-work text-xs text-lm_icons font-bold'>PRIVACY POLICY</p>
                      <div className='relative w-3 h-3'>
                        <Image src={'/icons/textIcon.png'} alt={'text logo'} fill className="cursor-pointer ml-2" />
                      </div>
                    </Link>
                    <Link href={ExternalLink.Snapshot} target='_blank' className='flex mt-3'>
                      <p className='font-work text-xs text-lm_icons font-bold'>GOVERNACE</p>
                      <div className='relative w-3 h-3'>
                        <Image src={'/icons/textIcon.png'} alt={'text logo'} fill className="cursor-pointer ml-2" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="w-full xl:w-1/2 pr-8 lg:pr-20 text-end hidden md:block">
                  <h1 className="font-neue text-4xl text-lm_gray font-bold">THE HUB <br /> DAO</h1>
                  <p className="font-neue text-4xl text-lm_icons font-bold">ENTER THE <br /> HUB</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 pr-[50px] pt-9 font-toggleIcons text-xl" onClick={handleToggleClick}>
                x
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
