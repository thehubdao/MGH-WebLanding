import Image from "next/image";

interface PersonProps {
  url: string,
  alt: string,
  name: string,
  role?: string | null,
  description?: string | null
}

export default function Person({ url, alt, name, role, description }: PersonProps) {
  return (
    <div className="relative w-[300px] 2xl:w-[380px] h-[320px] 2xl:h-[380px]">
      <div className="absolute inset-0 z-10 bg-hover_img text-center flex flex-col items-center justify-end opacity-0 hover:opacity-100 bg-opacity-60 duration-300 p-10">
        <h1 className="font-poppins text-[28px] text-lm_fill">{name}</h1>
        <p className="font-work text-[22px] text-lm_fill font-medium">{role}</p>
        <p className="font-work text-sm text-lm_fill font-normal hidden md:block">{description}</p>
      </div>
      <Image src={url} alt={alt} fill className='' />
    </div>
  )
}