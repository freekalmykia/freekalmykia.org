import Image from 'next/future/image';
import Layout from 'components/layout/Layout';
import siteConfig from '../config/site.config';

export default function Home() {
  return (
    <Layout metaTitle="Home">
      <div className="fixed flex items-center bg-kalmyk-yellow top-0 left-0 right-0 pt-1 pb-3 px-1 min-h-[40px]">
        <div className="flex flex-col max-screen-xl px-8 mx-auto">
          <p className="w-full mb-3">
            The website is under active development by FKF WebDev Club. If you are interested to join the development team, please let us know via email: <a className="no-underline hover:underline" href="email:board@freekalmykia.org">board@freekalmykia.org</a> 
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-center mb-2">
            <div className="mb-4 md:mb-0 md:mr-8">
              <a id="first-paypal-btn" href="https://www.paypal.com/donate/?hosted_button_id=NYS2YALUACACG" target="_self" className="text-white bg-[#0070ba] hover:brightness-95 focus:ring-4 focus:ring-[#F7BE38]/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50">
                <svg className="text-white mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>
                Donate with PayPal
              </a>
            </div>
            <div>
              <p>Or donate with <Image className="inline-block w-10 h-5" src="/images/zelle.png" alt="Zelle" width={2500} height={1078} /> at <span className="font-bold">donate@freekalmykia.org</span></p>
            </div>
          </div>
          <div className="md:text-center">
            <p>Include message with your donation:</p>
            <ul className="ml-4">
              <li>&quot;GP&quot; for General Purposes</li>
              <li>&quot;PIM&quot; for Printing Informational Materials</li>
              <li>&quot;KIDS&quot; for Math Class for Children</li>
            </ul>
          </div>
        </div>
        <div className="absolute top-0 right-0 flex mt-2 mr-2">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center max-w-screen-xl mx-auto pt-96 md:pt-48 lg:px-8">
        <div className="flex flex-col items-center mt-10">
          <div className="flex justify-center">
            <Image
              className="object-cover object-center transition duration-300 ease-in-out rounded-2xl group-hover:scale-110 w-2/4 md:w-3/4"
              src={siteConfig.logoFull}
              alt={siteConfig.logoText}
              width={487}
              height={618}
              loading='eager'
            />
          </div>
          <div className="mission mt-4 px-8">
            <h2 className="text-xl font-semibold text-center mb-3">
              Our mission
            </h2>
            <p className="indent-5 mb-4 lg:text-lg">
              The Free Kalmykia Foundation is a 501(c)3 registered nonprofit organization and investment fund which was established in November 2022. It is dedicated to addressing the needs and challenges faced by the growing Kalmyk community in the United States. The Kalmyks are a Buddhist people from the Republic of Kalmykia who have settled in various parts of the United States, particularly in SE Pennsylvania, New Jersey, New York and California.
            </p>
            <p className="indent-5 mb-4 lg:text-lg">
              The Kalmyk community faces numerous social and economic challenges, including language barriers, limited access to education and job opportunities and cultural isolation.
            </p>
            <p className="indent-5 mb-4 lg:text-lg">
              To address these challenges, the Foundation expects to provide financial and logistical support for various initiatives and programs aimed at improving the lives of the Kalmyk community in the United States. This includes supporting language and cultural programs, as well as providing continuing education and training to create better career opportunities for Kalmyk people. The Foundation also seeks to raise awareness of Kalmyk culture and history amongst the wider American public.
            </p>
            <p className="indent-5 mb-4 lg:text-lg">
              In order to achieve its goals, the Foundation needs to be a growing and self-sustaining organization, one that will become a lifelong endeavor providing support for the present and future needs of the Kalmyk diaspora.
            </p>
            <p className="indent-5 mb-4 lg:text-lg">
              The  Free Kalmykia Foundation relies on the generosity of donors and volunteers to carry out its mission. Donations to the foundation are tax-deductible and can be made online or by mail.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {}
  }
}
