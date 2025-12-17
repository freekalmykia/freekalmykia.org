import Image from 'next/future/image';
import Link from 'next/link';
import siteConfig from 'config/site.config';
import { useRouter } from 'next/router';
import classNames from 'classnames';

export default function Header() {
  const router = useRouter();
  const pathname = router.pathname;

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
          <Link href="/grants">
            <div className={classNames("px-3 py-1 hover:bg-gray-200 hover:cursor-pointer rounded-sm", { 'bg-gray-200': pathname.includes('/grants') })}>
              <a className="hover:underline text-lg">Grants</a>
            </div>
          </Link>
          <Link href="/donate">
            <div className={classNames("px-3 py-1 hover:bg-gray-200 hover:cursor-pointer rounded-sm", { 'bg-gray-200': pathname.includes('/donate') })}>
              <a className="hover:underline text-lg">Donate</a>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  </header>
}