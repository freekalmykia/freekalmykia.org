import Layout from 'components/layout/Layout';
import { trackEvent } from 'lib/ga';

export default function Reports({ layoutProps, reports }) {
  return (
    <Layout {...layoutProps}>
      <div className="w-full mt-4 mx-8">
        {reports.sort((a, b) => b.year - a.year).map((report) => (
          <div key={report.year}>
            <div className="">
              <h2 className="text-3xl font-bold mb-10">{`${report.year} Reports`}</h2>  
            </div>
            {report.annual_report &&
              <div className="flex items-center justify-between border px-8 py-4 mb-6 shadow-sm hover:shadow-md transition">
                <div className="text-lg sm:text-xl font-medium mr-4">
                  {report.annual_report.name}
                </div>
                <a
                  href={report.annual_report.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-1.5 border border-[#17365d] text-[#17365d] rounded hover:bg-[#17365d] hover:text-white transition text-sm sm:text-base"
                  onClick={() => trackEvent('report_click', {
                    report: report.annual_report.name
                  })}
                >
                  PDF
                </a>
              </div>
            }
            {
              Array.isArray(report.quarterly_reports)
              ? report.quarterly_reports
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((q) => (
                  <div key={q.name} className="flex items-center justify-between border px-8 py-4 mb-6 shadow-sm hover:shadow-md transition">
                    <div className="text-lg sm:text-xl font-medium mr-4">
                      {q.name}
                    </div>
                    <a
                      href={q.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-3 py-1.5 border border-[#17365d] text-[#17365d] rounded hover:bg-[#17365d] hover:text-white transition text-sm sm:text-base"
                      onClick={() => trackEvent('report_click', {
                        report: q.name
                      })}
                    >
                      PDF
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
  let reports = [];
  try {
    const response = await fetch('https://s3fkf-public.s3.us-east-2.amazonaws.com/financial_reports/reports.json');
    reports = await response.json();
    console.log(reports);
  } catch (error) {
    console.log('Failed to load reports: ', error);
  }
  
  return {
    props: {
      layoutProps: {
        metaTitle: "Reports",
        metaDescription: "Quarterly reports outlining the Free Kalmykia Foundation's finances, grants, and investment activity in support of Oirat-Kalmyk language, culture, and research."
      },
      reports
    }
  }
}
