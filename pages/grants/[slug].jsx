import Layout from "components/layout/Layout";
import Link from "next/link";
import { getAllGrants, getGrantBySlug } from "lib/grants";
import { marked } from "marked";
import siteConfig from "config/site.config";
import classNames from "classnames";
import { getGrantBgColorByStatus } from "utils/grants";

export async function getStaticPaths() {
  const grants = getAllGrants();

  const paths = grants.map((g) => ({
    params: { slug: g.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const grant = getGrantBySlug(params.slug);

  return {
    props: {
      grant: {
        ...grant,
        html: marked(grant.content)
      },
      layoutProps: {
        metaTitle: grant.title,
        metaDescription: grant.description,
        ogImage: grant.ogImage || siteConfig.metaData.ogImage
      }
    }
  };
}

export default function GrantPage({ grant, layoutProps }) {

  const isFunded = grant.status === 'funded';

  return (
    <Layout {...layoutProps}>
      <div className="w-full mt-4 mx-8">
        <Link href="/grants">
          <a className="flex items-center text-[#17365d] hover:underline lg:text-lg font-semibold mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 mr-1 -ml-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg> Back to grants
          </a>
        </Link>
        <div className={`grid gap-8 ${isFunded ? "md:grid-cols-2" : ""}`}>
          <article className="grant">
            <h1 className="text-3xl font-bold mb-4">{grant.title}</h1>
            <p>
              <strong>Status:</strong>
              <span className={classNames('inline-block px-2 py-1 text-sm font-semibold ml-3 uppercase', getGrantBgColorByStatus(grant.status))}>{grant.status}</span>
            </p>
            <div
              className="prose mt-6"
              dangerouslySetInnerHTML={{ __html: grant.html }}
            />
          </article>
          {isFunded && (
            <aside className="border rounded-md p-6 bg-gray-50 h-fit">
              <h3 className="text-xl font-bold mb-4">Funded Project</h3>

              {/* You can add whatever fields you want here */}
              {grant.funded_amount && (
                <p className="mb-2">
                  <strong>Amount funded:</strong> ${grant.funded_amount}
                </p>
              )}

              {grant.project_summary && (
                <p className="mt-4 text-gray-700 whitespace-pre-line">
                  <strong>Project summary:</strong> {grant.project_summary}
                </p>
              )}
            </aside>
          )}
        </div>
      </div>
    </Layout>
  );
}
