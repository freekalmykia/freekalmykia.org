import Link from 'next/link';

export default function Footer() {
  return <footer className="flex justify-center items-center flex-col py-8 font-semibold">
    <p>501(c)(3) EIN: 92-1351359</p>
    <p>
      <Link href="mailto:board@freekalmykia.org">
        <a className="text-[#17365d] no-underline hover:underline">
          board@freekalmykia.org
        </a>
      </Link>
    </p>
    <p>
      <Link href="/privacy">
        <a className="hover:underline">Privacy Policy</a>
      </Link>
    </p>
    <p>© 2025 Free Kalmykia Foundation</p>
  </footer>
}