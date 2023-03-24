import Link from "next/link";
import { ReactNode } from "react";

interface CardLogoProps {
  url: string,
  newTab?: boolean,
  children: ReactNode,
  big?: boolean
}

export default function Button({url, newTab, children, big}: CardLogoProps) {
  return (
    <Link href={url} rel="noopener noreferrer" target={newTab ? '_blank' : '_self'}>
      <div className={`${big ? 'w-[320px] md:w-[403px] h-[200px] md:h-[260px]' : ''} shadow-inverse rounded-[24px] border border-white cursor-pointer flex justify-center items-center`}>
        <div className='flex justify-center items-center'>
          {children}
        </div>
      </div>
    </Link>
  )
}