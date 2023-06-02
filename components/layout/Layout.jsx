import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import siteConfig from '../../config/site.config';
import Script from 'next/script';
import { getMetaTitle } from 'utils/meta';

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

      <Navbar />

      {children}

      <Footer />
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