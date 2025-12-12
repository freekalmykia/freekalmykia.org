import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import siteConfig from '../../config/site.config';
import Script from 'next/script';
import { getMetaTitle } from 'lib/meta';
import CookieConsent from 'react-cookie-consent';
import Link from 'next/link';

export default function Layout({
  metaTitle,
  metaDescription,
  metaAuthor,
  metaKeyword,
  ogImage,
  children,
}) {
  return (
    <>
      <Head>
        <title>{getMetaTitle(metaTitle)}</title>

        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="keyword" content={metaKeyword} />
        <meta name="author" content={metaAuthor} />
        <meta name="description" content={metaDescription} />

        <meta property="og:title" content={getMetaTitle(metaTitle)} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://freekalmykia.org" />
        <meta name="twitter:title" content={getMetaTitle(metaTitle)} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={metaDescription} />

        <link
          rel="shortcut icon"
          href={siteConfig.favicon}
          type="image/x-icon"
        />
      </Head>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-2J0SRY4K2B"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2J0SRY4K2B');
        `}
      </Script>

      <div className="min-h-screen flex flex-col max-w-screen-xl mx-auto lg:px-8">
        <Header />

        <main className="flex flex-1 justify-center mb-16">
          {children}
        </main>

        <Footer />
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="fkf_cookie_consent"
          style={{ background: "#1f2937", color: "#fff" }} // Tailwind: bg-gray-800
          buttonStyle={{
            color: "#1f2937", background: "#fff", fontSize: "0.875rem",
            borderRadius: "0.25rem", padding: "0.5rem 1rem"
          }}
        >
          This website uses cookies to improve your experience. By continuing, you agree to our use of cookies. Read our{" "}
          <Link href="/privacy"><a className="underline">Privacy Policy</a></Link>.
        </CookieConsent>
      </div>
    </>
  );
}

Layout.defaultProps = {
  metaTitle: siteConfig.metaData.title,
  metaDescription: siteConfig.metaData.description,
  metaAuthor: siteConfig.metaData.author,
  metaKeyword: siteConfig.metaData.keyword,
  ogImage: siteConfig.metaData.ogImage,
}