import { IconForm } from "../enums/common.enum"

interface SocialProps {
  iconRef: string;
  link?: string;
  alt?: string;
  iconForm: IconForm;
}

export default function SocialIcon({ iconRef, link, alt, iconForm }: SocialProps) {
  return (
    <a href={link} target='_blank' rel='noreferrer'>
      <div className={` ${iconForm == IconForm.Big ? 'text-[38px]' : 'text-[28px] text-lm_icons'} font-icons flex justify-center items-center relative hover:text-lm_accent`}>
        {iconRef}
      </div>
    </a>
  )
}