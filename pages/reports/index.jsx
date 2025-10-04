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
        {reports.sort((a, b) => b.year - a.year).map((report) => (
          <div key={report.year}>
            <div className="">
              <h2 className="text-3xl font-semibold mb-10">{`${report.year} Reports`}</h2>  
            </div>
            {report.annual_report &&
              <div className="flex items-center justify-between border px-8 py-4 mb-6 shadow-sm hover:shadow-md transition">
                <div className="text-lg sm:text-xl font-medium">
                  {report.annual_report.name}
                </div>
                <a
                  href={report.annual_report.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm sm:text-base"
                >
                  View
                </a>
              </div>
            }
            {
              Array.isArray(report.quarterly_reports)
              ? report.quarterly_reports
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((q) => (
                  <div key={q.name} className="flex items-center justify-between border px-8 py-4 mb-6 shadow-sm hover:shadow-md transition">
                    <div className="text-lg sm:text-xl font-medium">
                      {q.name}
                    </div>
                    <a
                      href={q.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm sm:text-base"
                    >
                      View
                    </a>
                  </div>
                ))
              : null
            }
          </div>
        ))}
        {reports.length === 0 && (
          <p className="text-gray-500">No reports available yet.</p>
        )}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {}
  }
}
