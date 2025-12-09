import Link from "next/link";

export default function GrantCard({ grant }) {
  const { title, description, slug, status } = grant;

  const statusColor =
    status === "open"
      ? "bg-green-300"
      : status === "funded"
      ? "bg-blue-300"
      : status === "closed"
      ? "bg-gray-200"
      : "bg-gray-200";

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
        <a className="text-[#17365d] hover:underline text-sm sm:text-base mt-4">
          View details
        </a>
      </Link>
    </div>
  );
}
