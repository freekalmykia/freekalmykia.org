import { useEffect, useState } from 'react';
import Layout from 'components/layout/Layout';

export default function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch('https://s3fkf-public.s3.us-east-2.amazonaws.com/financial_reports/reports.json')
      .then((res) => res.json())
      .then((data) => setReports(data))
      .catch((error) => console.log('Failed to load reports: ', error))
  }, [])


  return (
    <Layout metaTitle="Reports">
      <div className="w-full mt-4 mx-8">
        <h2 className="text-3xl font-semibold mb-10">Reports</h2>
        <div className="">
          {reports.map((report, index) => (
            <div key={index} className="flex items-center justify-between border px-8 py-4">
              <div className="text-lg sm:text-xl font-medium">
                {report.name}
              </div>
              <a
                href={report.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm sm:text-base"
              >
                View PDF
              </a>
            </div>
          ))}
          {reports.length === 0 && (
            <p className="text-gray-500">No reports available yet.</p>
          )}
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
