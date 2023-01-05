import Image from 'next/image'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

interface SocialProps {
  imageUrl: string,
  link: string,
  alt: string
}

function Social({ imageUrl, link, alt }: SocialProps) {
  return (
    <a href={link} target='_blank' rel='noreferrer'>
      <div className='flex justify-center items-center w-[38px] h-[38px] relative'>
        <Image src={imageUrl} fill={true} alt={alt} sizes="38px" />
      </div>
    </a>
  )
}

export default function Footer() {
  const form = useRef<HTMLFormElement>(null);
  const [btnLabel, setBtnLabel] = useState('Let’s BUILD')

  const sendEmail = (e: any) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    console.log("form: ", form.current);
    if(form.current) {
      emailjs.sendForm('service_8hzmvao', 'template_opwj61r', form.current, 'BCq4gKAN6cx6t2s-i')
      .then((result: any) => {
        setBtnLabel('subscribed!');
        setTimeout(() => {
          setBtnLabel('Let’s BUILD');
          form.current?.reset();
        }, 3000)
      }, (error: any) => {
        console.log(error);
        setBtnLabel('error!');
        setTimeout(() => {
          setBtnLabel('Let’s BUILD');
          form.current?.reset();
        }, 3000)
      });
    }
  };
  return (
    <>
      {/* footer */}
      <div className='flex flex-col xl:flex-row justify-between items-center'>
        {/* footer contact */}
        <div className='xl:w-2/4 flex flex-col items-center'>
          <p className='text-[#54575c] text-lg text-center font-semibold mb-6 mx-8'>
            Stay up to date for the latest from MGH!
          </p>
          <form ref={form} onSubmit={sendEmail} className='bg-white h-[76px] xl:w-2/4 flex justify-between rounded-3xl overflow-hidden shadow-inner'>
            <input type="email" placeholder='Email Address' className='w-3/4 px-4 bg-transparent' name="user_email" />
            <button className='rounded-2xl bg-black mr-4 my-4 w-36 flex justify-center items-center'>
              <span className='text-[15px] text-white'>{btnLabel}</span>
            </button>
          </form>
          <div className='flex justify-around xl:w-[57%] pt-12'>
            <Social imageUrl='/icons/medium.png' link='https://metagamehub.medium.com/' alt='medium link' />
            <Social imageUrl='/icons/instagram.png' link='https://www.instagram.com/metagamehub_dao/' alt='instagram link' />
            <Social imageUrl='/icons/linkedin.png' link='https://www.linkedin.com/company/metagamehub-dao/' alt='linkedin link' />
            <Social imageUrl='/icons/twitter.png' link='https://twitter.com/MGH_DAO' alt='twitter link' />
            <Social imageUrl='/icons/telegram.png' link='https://t.me/metagamehub_dao' alt='telegram link' />
            <Social imageUrl='/icons/discord.png' link='https://discord.com/invite/8WJVMDXZwH' alt='discord link' />
            <Social imageUrl='/icons/ether.png' link='https://etherscan.io/token/0x8765b1a0eb57ca49be7eacd35b24a574d0203656' alt='etherscan link' />
          </div>
          <div className='pt-6'>
            <p className='text-[15px] text-[#54575C]'>Business & Partnership Proposals</p>
          </div>
        </div>
        {/* footer links */}
        <div className='w-5/6 xl:w-2/4 flex justify-around xl:items-center pt-20 xl:px-40 xl:pt-0'>
          <div>
            <a href="#" className='text-xl block'>Home</a>
            <p className='text-xl'>Treasury</p>
            <p className='text-xl'>Tools</p>
            <p className='text-xl'>Token</p>
            <p className='text-xl'>Contributors</p>
            <p className='text-xl'>Contribute</p>
          </div>
          <div className='text-right xl:text-left'>
            <a href="https://app.metagamehub.io/" target='_blank' rel='noreferrer' className='text-xl block'>MGH dApp</a>
            <a href="https://discord.com/invite/8WJVMDXZwH" target='_blank' rel='noreferrer' className='text-xl block'>Community</a>
            <a href="https://snapshot.org/#/metagamehub.eth" target='_blank' rel='noreferrer' className='text-xl block'>Voting</a>
            <a href="https://docs.metagamehub.io/" target='_blank' rel='noreferrer' className='text-xl block'>Learn more</a>
            <p className='text-xl block'>FAQ</p>
            <a href="https://github.com/metagamehub" target='_blank' rel='noreferrer' className='text-xl block'>GitHub</a>
          </div>
        </div>
      </div>
      {/* terms */}
      <div className='pt-24'>
        <p className='text-center text-[15px]'>
          Terms of Use | Privacy Policy
        </p>
      </div>
    </>
  )
}