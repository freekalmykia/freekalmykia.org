import Layout from "components/layout/Layout";
import Link from 'next/link';

export default function DonationCompleted() {
  return (
    <Layout metaTitle="Donation Canceled">
      <div className="flex justify-center items-center max-w-screen-xl mx-auto lg:px-8">
      <div className="flex flex-col items-center mt-10">
          <div className="mission mt-4 px-8 mb-6">
            <h1 className="text-xl font-semibold text-center mb-3">
              Your donation has been canceled!
            </h1>
          </div>
          <div>
            <Link href="/"><a className="text-blue-600 no-underline hover:underline">Go back to Home Page</a></Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}