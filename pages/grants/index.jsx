import Layout from 'components/layout/Layout';
import Link from 'next/link';

export default function Grants({ layoutProps }) {
  return (
    <Layout {...layoutProps}>
        <div className="flex flex-col items-center">
          <div className="mt-4 px-8">
            <h2 className="text-3xl font-bold mb-10">
              Grants
            </h2>
            <h3 className="text-2xl font-semibold mb-4">
              Our First Grant
            </h3>
            <p className="mb-4 lg:text-lg">
              In 2026, the Free Kalmykia Foundation plans to award its first $500 pilot grant to support a project related to Oirat-Kalmyk language, culture, or research.
            </p>
            <p className="mb-4 lg:text-lg">
              Although small, this first grant begins our effort to build a lasting fund to support Oirat-Kalmyk initiatives over time.
            </p>
            <h3 className="text-xl font-semibold mb-4 mt-6">
              Eligibility
            </h3>
            <p className="mb-4 lg:text-lg">
              Projects and initiatives aligned with the Foundation’s mission are eligible, including:
            </p>
            <ul className="list-disc ml-8 lg:text-lg">
              <li>
                Cultural and educational programs
              </li>
              <li>
                Language preservation and teaching
              </li>
              <li>
                Academic or community research related to Oirat-Kalmyk history or contemporary issues
              </li>
            </ul>
            <h3 className="text-xl font-semibold mb-4 mt-6">
              Application process
            </h3>
            <p className="lg:text-lg">
              Grant application details will be published here once the program is finalized.
            </p>
            <p className="mt-6 border-b-2"></p>
            <h3 className="text-2xl font-semibold mb-4 mt-8">
              DNA Test Reimbursement Program
            </h3>
            <p className="mb-4 lg:text-lg">
              The Free Kalmykia Foundation offers partial reimbursements for DNA tests that support genealogical, historical, and cultural research related to Oirats and Kalmyks. This program is intended to make lineage testing more accessible while inviting participants to make their results publicly viewable to support independent research.
            </p>
            <h3 className="text-xl font-semibold mb-4 mt-6">
              Eligible Tests & Reimbursement Amounts
            </h3>
            <p className="mb-4 lg:text-lg">
              Only tests from 23andMe or FamilyTreeDNA qualify:
            </p>
            <ul className="list-disc ml-8 lg:text-lg">
              <li>
                23andMe — Ancestry or Ancestry + Health tests: $50 reimbursement
              </li>
              <li>
                FamilyTreeDNA Big Y-700 test only: $250 reimbursement
              </li>
            </ul>
            <p className="lg:text-lg">
              (Lower-level FamilyTreeDNA tests, such as Y-37 or Y-111, are not eligible.)
            </p>
            <p className="lg:text-lg">
              (Eligible haplogroups: C3, O, N3, R2a-M124)
            </p>
            <h3 className="text-xl font-semibold mb-4 mt-6">
              Requirements
            </h3>
            <ul className="list-disc ml-8 lg:text-lg">
              <li>
                Applicants must provide their ethnic group and house within the Oirat-Kalmyk people.
              </li>
              <li>
                Test results must be made publicly viewable on GEDMatch or FamilyTreeDNA.
              </li>
              <li>
                Applications must include proof of purchase and proof of public access.
              </li>
              <li>
                Send applications to: <Link href="mailto:board@freekalmykia.org">
                  <a className="text-[#17365d] no-underline hover:underline">
                    board@freekalmykia.org
                  </a>
                </Link>
              </li>
            </ul>
            <h3 className="text-xl font-semibold mb-4 mt-6">
              Funding Limit
            </h3>
            <p className="lg:text-lg">
              Funds for this program are limited. Applications will be processed in the order received and reimbursed only while funds are available. New funds will be allocated each year, allowing the program to continue on an annual basis.
            </p>
            <h3 className="text-xl font-semibold mb-4 mt-6">
              Purpose
            </h3>
            <p className="lg:text-lg">
              This program supports the long-term effort to improve the availability of open-source Oirat-Kalmyk lineage data for historical and anthropological research. It also reflects the Foundation’s broader mission to preserve and advance knowledge of Oirat-Kalmyk origins, language, and culture.
            </p>
            <h3 className="text-xl font-semibold mb-4 mt-6">
              Privacy and Data Use
            </h3>
            <p className="lg:text-lg">
              The Foundation does not collect, store, or analyze any genetic data from participants. The Foundation’s role is limited to reviewing eligibility and processing reimbursements.
            </p>
          </div>
        </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      layoutProps: {
        metaTitle: "Grants",
        metaDescription: "Grants and reimbursement programs supporting Oirat-Kalmyk language, culture, historical scholarship, and research initiatives."
      }
    }
  }
}
