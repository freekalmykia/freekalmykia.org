import Layout from "components/layout/Layout";
import Link from "next/link";
import { getAllGrants, getGrantBySlug } from "utils/grants";
import { marked } from "marked";
import siteConfig from "config/site.config";

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
        <article className="grant">
          <h1 className="text-3xl font-bold mb-4">{grant.title}</h1>

          {/* Status, deadline, etc. */}
          <p><strong>Status:</strong> {grant.status}</p>

          {/* Markdown content */}
          <div
            className="prose mt-6"
            dangerouslySetInnerHTML={{ __html: grant.html }}
          />
        </article>
      </div>
    </Layout>
  );
}
