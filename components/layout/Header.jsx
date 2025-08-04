import Image from 'next/future/image';
import Link from 'next/link';
import siteConfig from 'config/site.config';
import { useRouter } from 'next/router';
import classNames from 'classnames';

export default function Header() {
  const router = useRouter();
  const pathname = router.pathname;
  console.log('pathname: ', pathname);

  return <header className="py-8">
    <div className="flex flex-col sm:flex-row items-center justify-between sm:justify-start px-8">
      <div className="flex items-center">
        <Image
          className="w-52 sm:hidden"
          src={siteConfig.logoFull}
          alt={siteConfig.logoText}
          width={487}
          height={618}
          loading='eager'
        />
        <Image
          className="h-28 w-28 hidden sm:block"
          src={siteConfig.logoDefault}
          alt={siteConfig.logoText}
          width={487}
          height={618}
          loading='eager'
        />
      </div>
      <div className="flex flex-col justify-between mt-8 sm:mt-0 sm:h-28 sm:pt-2 sm:pb-3 sm:ml-12">
        <h1 className="hidden sm:block text-4xl font-semibold tracking-tight uppercase font-libre">Free Kalmykia Foundation</h1>
        <nav className="flex flex-wrap items-center gap-6 text-sm font-medium">
          <Link href="/">
            <div className={classNames("px-3 py-1 hover:bg-gray-200 hover:cursor-pointer rounded-sm", { 'bg-gray-200': pathname === '/' })}>
              <a className="hover:underline text-lg">Home</a>
            </div>
          </Link>
          <Link href="/reports">
            <div className={classNames("px-3 py-1 hover:bg-gray-200 hover:cursor-pointer rounded-sm", { 'bg-gray-200': pathname === '/reports' })}>
              <a className="hover:underline text-lg">Reports</a>
            </div>
          </Link>
          {/* <Link href="/grants">
            <a className="hover:underline">Grants</a>
          </Link> */}
          <a id="first-paypal-btn" href="paypal.com/us/fundraiser/charity/4897134" target="_self" className="text-white bg-[#0070ba] hover:brightness-95 focus:ring-4 focus:ring-[#F7BE38]/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50">
            <svg className="text-white mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>
            Donate with PayPal Giving Fund
          </a>
        </nav>
      </div>
    </div>
  </header>
}