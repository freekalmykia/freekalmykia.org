import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <Link href="/">
        <span className="p-4 hover:bg-blue-100 hover:cursor-pointer rounded-sm">
          <a className="hover:underline text-lg">Back to Home</a>
        </span>
      </Link>
      <article className="bg-white shadow-xl rounded-lg p-16 mt-4">
        <h1 className="text-4xl font-semibold mb-6">Privacy Policy</h1>

        <p className="mb-8 font-medium">
          <span className="font-semibold">Effective Date:</span> 07/31/2025
        </p>

        <p className="mb-6">
          Welcome to the Free Kalmykia Foundation website. We value your privacy and are committed to maintaining the trust and confidence of our visitors. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>

          <h3 className="text-xl font-semibold mb-2">a. Automatically Collected Data</h3>
          <p className="mb-2">
            When you visit our website, certain information is automatically collected through cookies and similar technologies. This data may include:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li><strong>Usage data:</strong> Such as pages visited, time spent on the site, and referring URLs.</li>
            <li><strong>Device information:</strong> Including browser type, operating system, and IP address.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">b. Google Analytics</h3>
          <p>
            We use Google Analytics to help us understand how visitors interact with our website. Google Analytics collects information such as the pages you visit, how long you stay, and the links you click. This information is used solely for improving our site and services. Data collected by Google Analytics is anonymized and does not personally identify you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Cookies and Similar Technologies</h2>
          <p className="mb-4">
            Cookies are small data files stored on your device to enhance your experience on our website. We use cookies to:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Improve website functionality and navigation.</li>
            <li>Analyze how the website is used through aggregated, non-personal information.</li>
            <li>Provide a better user experience by remembering preferences.</li>
          </ul>
          <p>
            You will see a cookie consent banner on your first visit, where you have the option to accept or decline non-essential cookies. Please be aware that essential cookies that ensure the proper functioning of the site may still be used.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">
            The information we collect is used to:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Improve the content and performance of our website.</li>
            <li>Analyze trends and user behavior to enhance our services.</li>
            <li>Ensure the security and integrity of our website.</li>
          </ul>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except when required by law or for the purpose of providing a service (such as processing online donations via secure third-party providers).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
          <p>
            Our website may contain links or integrations with third-party services, such as Google Analytics and donation processing platforms (e.g., PayPal). These services have their own privacy policies governing the use of your data. We encourage you to review those policies for more information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
          <p>
            We implement reasonable security measures to protect the information collected on our website. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal data, such as accessing, correcting, or deleting your information. If you have any questions about your data or would like to exercise these rights, please contact us using the information provided below.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will revise the “Effective Date” at the top of this page. We encourage you to periodically review this page for the latest information on our privacy practices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
          <p className="mb-2">
            If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Email:</strong> <Link href="mailto:board@freekalmykia.org">
                <a className="text-blue-600 no-underline hover:underline">
                  board@freekalmykia.org
                </a>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </div>
  )
}
