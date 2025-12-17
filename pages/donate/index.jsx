import Layout from 'components/layout/Layout';
import { trackEvent } from 'lib/ga';

export default function Donate({ layoutProps }) {
  return (
    <Layout {...layoutProps}>
      <div className="w-full mt-4 px-8">
        <h2 className="text-3xl font-bold mb-10">
          Ways to donate
        </h2>
        <div id="intro" className="mb-8 ">
          <p className="lg:text-lg">
            The Free Kalmykia Foundation is building a lasting fund to support projects and independent research related to Oirat-Kalmyk culture, language, history, and contemporary issues. Contributions help grow long-term resources for grantmaking aligned with our mission.
          </p>
        </div>
        <div id="online-options" className="mb-8">
          <h3 className="text-2xl font-bold mb-4">
            Online donations
          </h3>
          <div id="paypal" className="mb-6">
            <h4 className="text-xl font-semibold mb-2">
              Paypal
            </h4>
            <p className="mb-4 lg:text-lg">
              You can make a one-time or recurring donation using PayPal. This option supports most major payment methods.
            </p>
            <a 
              id="paypal-btn"
              href="https://www.paypal.com/donate/?hosted_button_id=NYS2YALUACACG" target="_blank"
              rel="noreferrer"
              className="text-white bg-[#17365d] hover:bg-[#2b5fa0] font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center"
              onClick={() => trackEvent('donate_click', {
                method: 'paypal'
              })}
            >
              <svg className="text-white mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>
              Donate
            </a>
          </div>
          <div id="paypal-giving-fund" className="mb-6">
            <h4 className="text-xl font-semibold mb-2">
              Paypal Giving Fund
            </h4>
            <p className="mb-4 lg:text-lg">
              Donations made through PayPal Giving Fund may be eligible for reduced fees.
            </p>
            <a
              id="paypal-giving-fund-btn"
              href="https://www.paypal.com/US/fundraiser/charity/4897134"
              target="_blank"
              rel="noreferrer"
              className="text-white bg-[#17365d] hover:bg-[#2b5fa0] font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center"
              onClick={() => trackEvent('donate_click', {
                method: 'paypal_giving_fund'
              })}
            >
              <svg className="text-white mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>
              Donate via Paypal Giving Fund 
            </a>
          </div>
        </div>
        <div id="direct-options" className="mb-8">
          <h3 className="text-2xl font-bold mb-4">
            Direct donations
          </h3>
          <div id="zelle" className="mb-6">
            <h4 className="text-xl font-semibold mb-2">
              Zelle
            </h4>
            <p className="mb-4 lg:text-lg">
              Zelle allows direct, fee-free transfers within the United States. Use Zelle ID: {" "}
              <span className="font-mono px-2 py-0.5 rounded bg-gray-100">
                donate@freekalmykia.org
              </span>
            </p>
          </div>
          <div id="venmo" className="mb-6">
            <h4 className="text-xl font-semibold mb-2">
              Venmo
            </h4>
            <p className="mb-6 lg:text-lg">
              You can also donate via Venmo. Scan the QR code in the Venmo app or use the handle{" "}
              <span className="font-mono px-1.5 py-0.5 rounded bg-gray-100">
                @freekalmykia
              </span>
            </p>
            <div className="flex justify-center md:justify-start">
              <div className="border rounded-xl p-4">
                <img
                  src="/images/venmo_qrcode.svg"
                  alt="Venmo QR code for Free Kalmykia Foundation"
                  className="w-40 h-40"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      layoutProps: {
        metaTitle: "Ways to donate",
        metaDescription: "Help grow a lasting fund supporting Oirat-Kalmyk culture, language, history, and research."
      }
    }
  }
}
