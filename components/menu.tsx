import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image'
import { PageLocation } from '../enums/common.enum';
import ScrollTitleUI from './scrollTitle.component';
function linkedButtons(){
    const headerList = [
      {
        name: "METAVERSE EXPLORER",
        route: "",
      },
      {
        name: "THE HUB PLATFORM",
        route: "tools",
      },
      {
        name: "ABOUT THE HUB",
        route: "about-the-hub",
      },
      {
        name: "JOIN US",
        route: "join-us",
      },
      {
        name: "BLOG",
        route: "soon",
      },
    ];
    return(
      headerList.map(item => {
        return(
          <Link key={item.name} href={`/${item.route}`} >
            {/*Button */}
            <div className='px-8 py-2 flex items-center justify-center cursor-pointer '>
              <div className="pt-1 font-bold text-2xl text-lm_text_gray">
                {item.name}
              </div>
            </div>
          </Link>
        )
      })
    )
  }


  export default function Menu() {
    const [isNavOpen, setIsNavOpen] = useState(false);
  
    const handleToggleClick = () => {
      setIsNavOpen((prev) => !prev);
    };
  
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
          <div className={`font-toggleIcons text-3xl pr-[50px] ${isNavOpen ? 'hidden' : ''}`} onClick={handleToggleClick}>
            b
          </div>
        </div>
        {isNavOpen && (
          <>
            <div className="fixed flex  items-center bg-lm_fill w-full h-screen inset-0 z-10">
              <div className="relative bg-black/[.75] w-[35%] h-screen py-28 2xl:py-20">
                <ScrollTitleUI title={['INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE INVEST BUILD EXPERIENCE']} imageUrl='' />
              </div>
              <div className='w-[65%]'>
                {linkedButtons()}
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
  