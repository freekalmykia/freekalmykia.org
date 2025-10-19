import Layout from 'components/layout/Layout';

export default function Grants() {
  return (
    <Layout metaTitle="Grants">
        <div className="flex flex-col items-center">
          <div className="mt-4 px-8">
            <h2 className="text-3xl font-semibold mb-10">
              Grants
            </h2>
            <h3 className="text-xl font-semibold mb-4">
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
            <p className="mb-4 lg:text-lg">
              Grant application details will be published here once the program is finalized.
            </p>
          </div>
        </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {}
  }
}
