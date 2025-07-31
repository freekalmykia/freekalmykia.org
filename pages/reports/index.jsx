import Layout from 'components/layout/Layout';

export default function Reports() {
  return (
    <Layout metaTitle="Reports">
        <div className="flex justify-between items-center">
          Coming soon...
        </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {}
  }
}
