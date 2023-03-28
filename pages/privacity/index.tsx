import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/footer.component";

export default function Privacity() {
  return (
    <>
      <div className="absolute w-12 h-12 top-8 left-8">
        <Link href="/">
          <Image src='/icons/mgh.svg' fill={true} alt="MetaGameHub logo" />
        </Link>
      </div>
      <main className="px-10 lg:px-60 pt-28 lg:pt-60 pb-20 font-work">
        <h1 className="font-poppins font-bold text-7xl text-center text-gray-dark">Privacy Policy</h1>
        <p className="font-light text-base lg:text-2xl text-center leading-relaxed pt-16">
          At MetaGame Hub, accessible from https://www.metagamehub.io, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Meta Game Hub and how we use it.
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
          This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Meta Game Hub. This policy is not applicable to any information collected offline or via channels other than this website.
        </p>
        <h2 className="font-poppins font-medium text-[42px] pt-32">Consent</h2>
        <p className="font-light text-base lg:text-2xl leading-relaxed pt-11">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
        <h2 className="font-poppins font-medium text-[42px] pt-32">Information we collect</h2>
        <p className="font-light text-base lg:text-2xl leading-relaxed pt-11">
          The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
        </p>
        <h2 className="font-poppins font-medium text-[42px] pt-32">How we use your information</h2>
        <p className="font-light text-base lg:text-2xl leading-relaxed pt-11">
          We use the information we collect in various ways, including to:
        </p>
        <ul className="pt-4">
          <li className="font-light text-base lg:text-2xl leading-relaxed list-disc ml-8">Provide, operate, and maintain our website.</li>
          <li className="font-light text-base lg:text-2xl leading-relaxed list-disc ml-8">Improve, personalize, and expand our website.</li>
          <li className="font-light text-base lg:text-2xl leading-relaxed list-disc ml-8">Understand and analyze how you use our website.</li>
          <li className="font-light text-base lg:text-2xl leading-relaxed list-disc ml-8">Develop new products, services, features, and functionality.</li>
          <li className="font-light text-base lg:text-2xl leading-relaxed list-disc ml-8">Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
          <li className="font-light text-base lg:text-2xl leading-relaxed list-disc ml-8">Send you emails.</li>
          <li className="font-light text-base lg:text-2xl leading-relaxed list-disc ml-8">Find and prevent fraud.</li>
        </ul>
        <h2 className="font-poppins font-medium text-[42px] pt-32">Log Files</h2>
        <p className="font-light text-base lg:text-2xl leading-relaxed pt-11">
          Meta Game Hub follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and are a part of hosting services analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users movement on the website, and gathering demographic information.
        </p>
        <h2 className="font-poppins font-medium text-[42px] pt-32">Advertising Partners Privacy Policies</h2>
        <p className="font-light text-base lg:text-2xl leading-relaxed pt-11">
          You may consult this list to find the Privacy Policy for each of the advertising partners of Meta Game Hub.
          Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Meta Game Hub, which are sent directly to users browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
          Note that MetaGame Hub has no access to or control over these cookies that are used by third-party advertisers.
        </p>
        <h2 className="font-poppins font-medium text-[42px] pt-32">Third Party Privacy Policies</h2>
        <p className="font-light text-base lg:text-2xl leading-relaxed pt-11">
          Meta Game Hub&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt out of certain options.
          You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers respective websites.
          CCPA Privacy Rights (Do Not Sell My Personal Information)
          Under the CCPA, among other rights, California consumers have the right to:
        </p>
        <ul className="pt-4">
          <li className="font-light text-base lg:text-2xl leading-relaxed list-disc ml-8">Request that a business that collects a consumer&apos;s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
          <li className="font-light text-base lg:text-2xl leading-relaxed list-disc ml-8">Request that a business delete any personal data about the consumer that a business has collected.</li>
          <li className="font-light text-base lg:text-2xl leading-relaxed list-disc ml-8">Request that a business that sells a consumer&apos;s personal data, not sell the consumer&apos;s personal data.</li>
          <li className="font-light text-base lg:text-2xl leading-relaxed list-disc ml-8">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</li>
        </ul>
        <h2 className="font-poppins font-medium text-[42px] pt-32">GDPR Data Protection Rights</h2>
        <p className="font-light text-base lg:text-2xl leading-relaxed pt-11">
          We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
        </p>
        <ul className="pt-4">
          <li className="font-light text-base lg:text-2xl leading-relaxed list-disc ml-8">The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
          <li className="font-light text-base lg:text-2xl leading-relaxed list-disc ml-8">The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
          <li className="font-light text-base lg:text-2xl leading-relaxed list-disc ml-8">The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
          <li className="font-light text-base lg:text-2xl leading-relaxed list-disc ml-8">The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
          <li className="font-light text-base lg:text-2xl leading-relaxed list-disc ml-8">The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
          <li className="font-light text-base lg:text-2xl leading-relaxed list-disc ml-8">The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
          <li className="font-light text-base lg:text-2xl leading-relaxed list-disc ml-8">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</li>
        </ul>
        <h2 className="font-poppins font-medium text-[42px] pt-32">Children&apos;s Information</h2>
        <p className="font-light text-base lg:text-2xl leading-relaxed pt-11 pb-60">
          Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
          Meta Game Hub does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
        </p>
        <Footer />
      </main>
    </>
  )
}