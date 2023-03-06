import React from 'react';
import Navbar from '../../../Component/Navbar';
import Head from 'next/head';
import { InnerLayout } from '../../../styles/layout.js';


const Dashboard = ({ compData, compEmployee }) => {
  const Total_visitors = compData.length;
  const Total_employee = compEmployee.length;

  let Today_visitors = 0;
  const today_date = new Date().toJSON().slice(0, 10);
  compData.map(({ in_time }) => {
    if (today_date.slice(0, 10) === in_time.slice(0, 10)) {
      Today_visitors++;
    }
  });

  let In_visitors = 0;
  compData.map(({ inOut }) => {
    if (inOut === true) {
      In_visitors += 1;
    }
  });

  return (
    <div>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <title>Visitors MS</title>
      </Head>
      <Navbar />

      <InnerLayout>
        <h1 className="text-center p-3 fst-italic">Visitors d</h1>
        <div classNameName="row">
          {/* <div classNameName="col-sm-6">
            <div classNameName="stats-con">
              <div classNameName="chart-con">
                <Chart userData={compData} />
              </div>
            </div>
          </div> */}

          <div classNameName="col-sm-12">
            <div classNameName="stats-con">
              <div classNameName="">
                <div className="row g-6 mb-12">
                  <div className="col-xl-6 col-sm-6 col-12">
                    <div className="card shadow border-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total Visitors</span>
                            <span className="h3 font-bold mb-0">{Total_visitors}</span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                              <i className="bi bi-people"></i>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                          <span className="text-nowrap text-xs text-muted">Since last month</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-sm-6 col-12">
                    <div className="card shadow border-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">Check-ins today</span>
                            <span className="h3 font-bold mb-0">{Today_visitors}</span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                            <i className="bi bi-check2-square"></i>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                          <span className="text-nowrap text-xs text-muted">so far</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row g-6 mb-12">
                  <div className="col-xl-6 col-sm-6 col-12">
                    <div className="card shadow border-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">Visitors In</span>
                            <span className="h3 font-bold mb-0">{In_visitors}</span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                            <i className="bi bi-person-bounding-box"></i>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                          <span className="text-nowrap text-xs text-muted">
                            Since last monthSince last monthSince last monthSince last month
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-sm-6 col-12">
                    <div className="card shadow border-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total employees</span>
                            <span className="h3 font-bold mb-0">{Total_employee}</span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-success text-white text-lg rounded-circle">
                            <i className="bi bi-person-badge-fill"></i>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                          <span className="text-nowrap text-xs text-muted">
                            Since last monthSince last monthSince last monthSince last month
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InnerLayout>
      <div className="fixed-bottom"></div>
    </div>
  );
};

export default Dashboard;

export async function getServerSideProps(context) {
  const email = context.query.Detail;
  const res_comp = await fetch(`${process.env.BACKEND_URL}/${email}/comp_details`);
  const res_emp =  await fetch(`${process.env.BACKEND_URL}/${email}/comp_employee`);
  const compData = await res_comp.json();
  const compEmployee = await res_emp.json();
  return { props: { compData, compEmployee }};
}
