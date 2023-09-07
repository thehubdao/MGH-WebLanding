import Link from 'next/link';
import SocialIcon from '../../components/socialIcon.component';
import { ExternalLink, IconForm, PageLocation } from '../../enums/common.enum';

export default function FooterUI() {
  return (
    <>
      {/* footer */}
      <div className='flex flex-col xl:flex-row justify-between items-center font-work '>
        {/* footer contact */}
        <div className='xl:w-2/4 flex flex-col items-center'>
          <p className='text-lm_icons text-lg text-center font-semibold mb-6 mx-8'>
            Business & Partnership Proposals
          </p>
          <div className='flex justify-around w-full xl:w-[57%] pt-4'>
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
              <p className='text-xl my-3'>Learn More</p>
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
      <div className='pt-24 font-work'>
        <p className='text-center text-[15px] text-lm_icons'>
          <Link href={PageLocation.Privacy}>
            <span> Privacy Policy</span>
          </Link>
        </p>
      </div>
    </>
  )
}