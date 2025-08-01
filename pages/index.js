import Layout from 'components/layout/Layout';

export default function Home() {
  return (
    <Layout metaTitle="Home">
        <div className="flex flex-col items-center">
          <div className="mt-4 px-8">
            <h2 className="text-3xl font-semibold mb-10">
              Our mission
            </h2>
            <p className="mb-4 lg:text-lg">
              The Free Kalmykia Foundation is a 501(c)(3) nonprofit and investment fund supporting the Kalmyk community across the U.S., especially in Pennsylvania, New Jersey, and New York.
            </p>
            <p className="mb-4 lg:text-lg">
              We support language and cultural initiatives that build connection and preserve our heritage in the United States. Our goal is to create a sustainable foundation that serves current and future generations.
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
    props: {}
  }
}
