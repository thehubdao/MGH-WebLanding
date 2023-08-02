import SocialIcon from "../../components/socialIcon.component";
import { IconForm } from "../../enums/common.enum";

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
          <SocialIcon iconForm={IconForm.Big} iconRef='m' link='https://medium.com/@THEHUB_DAO' alt='medium link' />
          <SocialIcon iconForm={IconForm.Big} iconRef='i' link='https://www.instagram.com/thehub_dao/' alt='instagram link' />
          <SocialIcon iconForm={IconForm.Big} iconRef='l' link='https://www.linkedin.com/company/the-hub-dao/' alt='linkedin link' />
          <SocialIcon iconForm={IconForm.Big} iconRef='w' link='https://twitter.com/THE_HUB_DAO' alt='twitter link' />
          <SocialIcon iconForm={IconForm.Big} iconRef='t' link='https://t.me/thehub_dao' alt='telegram link' />
          <SocialIcon iconForm={IconForm.Big} iconRef='a' link='https://discord.gg/J35NGdPWgq' alt='discord link' />
          <SocialIcon iconForm={IconForm.Big} iconRef='M' link='mailto:info@thedac.info' alt='The Hub DAO email' />
          <SocialIcon iconForm={IconForm.Big} iconRef='e' link='https://etherscan.io/token/0x8765b1a0eb57ca49be7eacd35b24a574d0203656' alt='etherscan link' />
        </div>
      </div>
    </div>
  )
}