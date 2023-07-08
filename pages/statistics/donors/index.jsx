import Image from "next/future/image";
import Link from "next/link";
import Layout from "components/layout/Layout";
import siteConfig from "config/site.config";

export default function Donors({ data }) {
  const { demographics, programs, lastUpdated } = data.data;
  return (
    <Layout metaTitle="Statistics - Donors">
      <div className="flex justify-content items-center max-w-screen-xl mx-auto px-8">
        <div className="w-full py-4">
          <div className="mb-6">
            <Link href="/"><a className="text-blue-600 no-underline hover:underline">Return back to Home Page</a></Link>
          </div>
          <div className="mb-4">
            <h1 className="text-3xl mb-4">Our donors</h1>
            <p className="text-sm mb-4">{`Last updated: ${lastUpdated}`}</p>
            <p className="text-xl mb-2">{ `Total: ${demographics.donors}` }</p>
            <p className="text-base">{ `Donating monthly: ${demographics.monthly_donors}` }</p>
            <p className="text-base">{ `Donating annually: ${demographics.annually_donors}` }</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl mb-2">Geography</h2>
            <ul>
              {
                Object.entries(demographics.countries).map(([country, number]) => {
                  return (
                    <li key={country} className="text-base">
                      { `${country}: ${number}` }
                      {
                        country === 'United States'
                        ? <ul className="ml-4 text-base">
                            {
                              Object.entries(demographics.states).map(([state, number]) => {
                                return (
                                  <li key={state}>
                                    { `${state}: ${number}` }
                                  </li>
                                )
                              })
                            }
                          </ul>
                        : null
                      }
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-xl mb-2">Programs <span className="text-sm font-semibold">(monthly average)</span></h2>
            <ul>
              <li className="text-base">
                { `General purposes: $${programs.GP.amount} receiving` }
              </li>
              <li className="text-bse">
                { `Math class for children (NYC): $${programs.KIDS.amount} receiving` }
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const hostname = process.env.NODE_ENV === 'development' ? 'localhost' : 'forms';
  const res = await fetch(`http://${hostname}:5401/donors/v1`);
  const data = await res.json();
  return { props: { data } };
}