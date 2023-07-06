import Image from 'next/future/image';
import Layout from "components/layout/Layout";
import siteConfig from 'config/site.config';
import Link from 'next/link';

export default function DonationCompleted() {
  return (
    <Layout metaTitle="Donation Completed">
      <div className="flex justify-center items-center max-w-screen-xl mx-auto lg:px-8">
      <div className="flex flex-col items-center mt-10">
          <div className="flex justify-center">
            <Image
              className="object-cover object-center transition duration-300 ease-in-out rounded-2xl group-hover:scale-110 w-3/4 md:w-full"
              src={siteConfig.logoFull}
              alt={siteConfig.logoText}
              width={487}
              height={618}
              loading='eager'
            />
          </div>
          <div className="mission mt-4 px-8 mb-6">
            <h1 className="text-3xl font-bold text-center mb-4">
              THANK YOU!
            </h1>
            <h2 className="text-xl font-semibold text-center mb-3">
              Your donation has been completed!
            </h2>
          </div>
          <div>
            <Link href="/"><a className="text-blue-600 no-underline hover:underline">Return back to Home Page</a></Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}