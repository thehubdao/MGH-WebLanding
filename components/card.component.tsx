import Link from 'next/link'
import Image from 'next/image'

interface CardProps {
  imageUrl: string,
  floatImageUrl: string,
  children: string | JSX.Element,
  url: string,
  newTab?: boolean,
  isProject?: boolean
}

export default function Card({ imageUrl, floatImageUrl, children, url, newTab, isProject }: CardProps) {
  return (
    <Link href={url} rel="noopener noreferrer" target={newTab ? '_blank' : '_self'}>
      <div className={`${isProject ? 'w-[330px] sm:w-[550px] ' : 'w-[280px]'}  shadow rounded-[40px] border border-white cursor-pointer group`}>
        <div className={`relative  ${isProject ? 'h-[380px]' : 'h-[434px]'}`}>
          <Image src={imageUrl} fill={true} alt={'card'} priority={true} />
          {isProject ?
            <></> :
            <div className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-[45%] w-[320px] h-[320px]  group-hover:scale-105 transition-transform duration-200'>
              <Image src={floatImageUrl} fill={true} alt={'card'} priority={true} />
            </div>
          }
        </div>
        <div className={`${isProject ? 'h-[130px]' : 'h-[115px] flex justify-center items-center text-center'}`}>
          <div className={`${isProject && 'h-full'} leading-none group-hover:scale-105 transition-transform duration-200`}>
            {children}
          </div>
        </div>
      </div>
    </Link>
  )
}