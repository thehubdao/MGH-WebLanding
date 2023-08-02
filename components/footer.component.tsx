import Link from 'next/link';
import SocialIcon from './socialIcon.component';
import { ExternalLink, IconForm, PageLocation } from '../enums/common.enum';

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
        {/* footer links */}
        <div className='w-5/6 xl:w-2/4 flex justify-around xl:items-center pt-20 xl:px-40 xl:pt-0 text-lm_icons'>
          <div>
            <Link href={PageLocation.Home}>
              <p className='text-xl my-3 block'>Home</p>
            </Link>
            <Link href={ExternalLink.GitHub} target='_blank'>
              <p className='text-xl my-3'>GitHub</p>
            </Link>
            <Link href={ExternalLink.TheHubDao} target='_blank'>
              <p className='text-xl my-3'>Learn more</p>
            </Link>
          </div>
          <div className='text-right xl:text-left'>
            <Link href={ExternalLink.Discord} target='_blank'>
              <p className='text-xl my-3'>Community</p>
            </Link>
            <Link href={PageLocation.Soon}>
              <p className='text-xl my-3'>THE HUB App</p>
            </Link>
            <Link href={ExternalLink.Snapshot} target='_blank'>
              <p className='text-xl my-3'>Governance</p>
            </Link>
          </div>
        </div>
      </div>
      {/* terms */}
      <div className='pt-24'>
        <p className='text-center text-[15px] text-lm_icons'>
          <Link href={PageLocation.Soon}>
            <span>Terms of Use </span>
          </Link>
          |
          <Link href={PageLocation.Privacity}>
            <span> Privacy Policy</span>
          </Link>
        </p>
      </div>
    </>
  )
}