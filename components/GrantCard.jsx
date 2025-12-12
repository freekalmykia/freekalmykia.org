import Link from "next/link";
import { getGrantBgColorByStatus } from "utils/grants";

export default function GrantCard({ grant }) {
  const { title, description, slug, status } = grant;

  const statusColor = getGrantBgColorByStatus(status);

  return (
    <div className="border px-8 py-4 mb-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-medium">{title}</h2>

        <span
          className={`px-2 py-1 font-semibold text-sm ${statusColor}`}
        >
          {status.toUpperCase()}
        </span>
      </div>

      <p className="lg:text-lg my-4">{description}</p>

      <Link href={`/grants/${slug}`}>
        <a className="inline-block px-3 py-1.5 border border-[#17365d] text-[#17365d] rounded hover:bg-[#17365d] hover:text-white transition text-sm sm:text-base">
          View details
        </a>
      </Link>
    </div>
  );
}
