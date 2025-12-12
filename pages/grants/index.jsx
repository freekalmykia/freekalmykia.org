import Layout from 'components/layout/Layout';
import Link from 'next/link';
import { getAllGrants } from 'lib/grants';
import GrantCard from 'components/GrantCard';


export default function Grants({ grants, layoutProps }) {
  return (
    <Layout {...layoutProps}>
        <div className="w-full mt-4 mx-8">
          <h2 className="text-3xl font-bold mb-10">
            Grants
          </h2>
          {grants.map((grant) => (
            <GrantCard key={grant.slug} grant={grant} />
          ))}
        </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const grants = getAllGrants();
  return {
    props: {
      grants,
      layoutProps: {
        metaTitle: "Grants",
        metaDescription: "Grants and reimbursement programs supporting Oirat-Kalmyk language, culture, historical scholarship, and research initiatives."
      }
    }
  }
}
