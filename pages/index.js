import styles from '../styles/Home.module.css';
import Image from 'next/future/image';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen bg-kalmyk-yellow">
      <Head>
        <title>Free Kalmykia Foundation</title>
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="description"
          content="Free Kalmykia Foundation 501(c)(3) (Philadelpia, PA)"
          key="desc"
        />
        <meta property="og:title" content="Free Kalmykia Foundation 501(c)(3) (Philadelpia, PA)" />
        <meta
          property="og:description"
          content="Free Kalmykia Foundation 501(c)(3) (Philadelpia, PA)"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://freekalmykia.org" />
        <meta
          property="og:image"
          content="https://freekalmykia.org/icon.png"
        />
        <link rel="icon" type="image/png" href="./icon.png" />
      </Head>
      <div className="flex h-1/5">
        <h1 className="text-4xl md:text-6xl font-extrabold text-kalmyk-blue font-nunito-sans text-center m-auto">Free Kalmykia Foundation</h1>
      </div>
      <div className="h-3/5">
        <Image className="!relative" src="/icon.svg" fill/>
      </div>
      <div className="flex h-1/5">
        <h2 className="text-xl md:text-3xl text-bold text-kalmyk-red font-nunito-sans m-auto">The website is coming soon</h2>
      </div>
    </div>
  )
}
