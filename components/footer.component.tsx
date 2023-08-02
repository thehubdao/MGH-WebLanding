import Link from 'next/link'
import SocialIcon from './socialIcon.component'

export default function Footer() {
  return (
    <>
      {/* footer */}
      <div className='flex flex-col xl:flex-row justify-between items-center '>
        {/* footer contact */}
        <div className='xl:w-2/4 flex flex-col items-center'>
          <p className='text-lm_icons text-lg text-center font-semibold mb-6 mx-8'>
          Business & Partnership Proposals
          </p>
          <div className='flex justify-around xl:w-[57%] pt-4'>
            <SocialIcon imageUrl='/icons/medium.png' link='https://medium.com/@THEHUB_DAO' alt='medium link' />
            <SocialIcon imageUrl='/icons/instagram.png' link='https://www.instagram.com/thehub_dao/' alt='instagram link' />
            <SocialIcon imageUrl='/icons/linkedin.png' link='https://www.linkedin.com/company/the-hub-dao/' alt='linkedin link' />
            <SocialIcon imageUrl='/icons/twitter.png' link='https://twitter.com/thehub_dao' alt='twitter link' />
            <SocialIcon imageUrl='/icons/telegram.png' link='https://t.me/thehub_dao' alt='telegram link' />
            <SocialIcon imageUrl='/icons/discord.png' link='https://discord.gg/J35NGdPWgq' alt='discord link' />
            <SocialIcon imageUrl='/icons/email.png' link='mailto:info@thedac.info' alt='The Hub DAO email' />
          </div>
        </div>
        {/* footer links */}
        <div className='w-5/6 xl:w-2/4 flex justify-around xl:items-center pt-20 xl:px-40 xl:pt-0 text-lm_icons'>
          <div>
            <Link href='/'>
              <p className='text-xl my-3 block'>Home</p>
            </Link>
            <Link href='https://github.com/metagamehub' target='_blank'>
              <p className='text-xl my-3'>GitHub</p>
            </Link>
            <Link href='https://docs.thehubdao.xyz/' target='_blank'>
              <p className='text-xl my-3'>Learn more</p>
            </Link>
          </div>
          <div className='text-right xl:text-left'>
            <Link href='https://discord.gg/J35NGdPWgq' target='_blank'>
              <p className='text-xl my-3'>Community</p>
            </Link>
            <Link href='/soon'>
              <p className='text-xl my-3'>THE HUBB App</p>
            </Link>
            <Link href='https://snapshot.org/#/metagamehub.eth' target='_blank'>
              <p className='text-xl my-3'>Governance</p>
            </Link>
          </div>
        </div>
      </div>
      {/* terms */}
      <div className='pt-24'>
        <p className='text-center text-[15px] text-lm_icons'>
          <Link href='/soon'>
            <span>Terms of Use </span>
          </Link>
          |
          <Link href='/privacity'>
            <span> Privacy Policy</span>
          </Link>
        </p>
      </div>
    </>
  )
}