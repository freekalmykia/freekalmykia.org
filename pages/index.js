import Image from 'next/future/image';
import Layout from 'components/layout/Layout';
import siteConfig from '../config/site.config';

export default function Home() {
  return (
    <Layout>
      <div className="flex justify-center items-center relative max-w-screen-xl py-12 mx-auto md:py-16 lg:py-20 lg:px-8">
        <div className="flex flex-col items-center mt-10">
          <div className="flex justify-center">
            <Image
              className="object-cover object-center transition duration-300 ease-in-out rounded-2xl group-hover:scale-110 w-4/5"
              src={siteConfig.logoFull}
              alt={siteConfig.logoText}
              width={487}
              height={618}
            />
          </div>
          <div class="mission mt-4 px-8">
            <h2 className="text-xl font-semibold text-center mb-3">
              Our mission
            </h2>
            <p className="indent-5 mb-4 lg:text-lg">
              The Free Kalmykia Foundation is a nonprofit organization and investment fund which was established in November 2022. It is dedicated to addressing the needs and challenges faced by the growing Kalmyk community in the United States. The Kalmyks are a Buddhist people from the Republic of Kalmykia who have settled in various parts of the United States, particularly in SE Pennsylvania, New Jersey, New York and California.
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
