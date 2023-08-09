import SocialIcon from "../../components/socialIcon.component";
import { ExternalLink, IconForm } from "../../enums/common.enum";

export default function Soon() {
  return (
    <div className='flex justify-center items-center w-full h-screen relative bg-[url("/bg.jpg")] bg-cover bg-center bg-no-repeat'>
      <div className='absolute w-12 h-12 top-8 left-8 lg:top-24 lg:left-24 border-t border-l border-lm_icons'></div>
      <div className='absolute w-12 h-12 top-8 right-8 lg:top-24 lg:right-24 border-t border-r border-lm_icons'></div>
      <div className='absolute w-12 h-12 bottom-8 right-8 lg:bottom-24 lg:right-24 border-b border-r border-lm_icons'></div>
      <div className='absolute w-12 h-12 bottom-8 left-8 lg:bottom-24 lg:left-24 border-b border-l border-lm_icons'></div>
      <div className='flex flex-col justify-center items-center relative h-fit text-lm_icons'>
        <h1 className='font-humane text-9xl lg:text-[320px] leading-[0.7]'>COMING SOON</h1>
        <p className="font-medium text-base lg:text-xl text-center">we are still buidling this view<br />in the meantime, PLEASE STAY IN TOUCH  :)</p>
        <div className='flex gap-2 lg:gap-8 pt-12'>
          <SocialIcon iconForm={IconForm.Regular} iconRef='m' link={ExternalLink.Medium} alt='medium link' />
          <SocialIcon iconForm={IconForm.Regular} iconRef='i' link={ExternalLink.Instagram} alt='instagram link' />
          <SocialIcon iconForm={IconForm.Regular} iconRef='l' link={ExternalLink.Linkedin} alt='linkedin link' />
          <SocialIcon iconForm={IconForm.Regular} iconRef='w' link={ExternalLink.Twitter} alt='twitter link' />
          <SocialIcon iconForm={IconForm.Regular} iconRef='t' link={ExternalLink.Telegram} alt='telegram link' />
          <SocialIcon iconForm={IconForm.Regular} iconRef='a' link={ExternalLink.Discord} alt='discord link' />
          <SocialIcon iconForm={IconForm.Regular} iconRef='M' link={ExternalLink.MailTo} alt='The Hub DAO email' />
          <SocialIcon iconForm={IconForm.Regular} iconRef='e' link={ExternalLink.ETherScan} alt='etherscan link' />
        </div>
      </div>
    </div>
  )
}