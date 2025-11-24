import Layout from 'components/layout/Layout';

export default function Home({ layoutProps }) {
  return (
    <Layout {...layoutProps}>
        <div className="flex flex-col items-center">
          <div className="mt-4 px-8">
            <h2 className="text-3xl font-bold mb-10">
              Our Mission
            </h2>
            <p className="mb-4 lg:text-lg">
              The Free Kalmykia Foundation is a U.S.-based 501(c)(3) nonprofit foundation and investment fund that supports the preservation and promotion of the Oirat-Kalmyk language, culture, and historical scholarship.
            </p>
            <p className="mb-4 lg:text-lg">
              We also fund independent research and analysis related to issues affecting Kalmyks today and in the future. Our mission is to foster cultural continuity, education, and informed dialogue within the Kalmyk diaspora and beyond.
            </p>
            <p className="mb-4 lg:text-lg">
              Donations are tax-deductible and support our mission directly.
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
        metaTitle: "Home",
        metaDescription: "Nonprofit foundation and investment fund supporting the preservation and promotion of the Oirat-Kalmyk language, culture, and historical scholarship."
      }
    }
  }
}
