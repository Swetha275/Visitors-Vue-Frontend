import React from "react";
import Navbar from "../../../Component/Navbar";
import Head from "next/head";
import { InnerLayout } from "../../../styles/layout.js";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = ({ compData, compEmployee }) => {
  const Total_visitors = compData.length;
  const Total_employee = compEmployee.length;

  let Today_visitors = 0;
  // let now = new Date();
  const today_date = new Date().toJSON().slice(0, 10);
  compData.map(({ in_time }) => {
    if (today_date.slice(0, 10) === in_time.slice(0, 10)) {
      Today_visitors++;
    }
  });
  // var yday_date = now - 1000 * 60 * 60 * 24 * 1;
  // yday_date = new Date(yday_date).toJSON().slice(0, 10);
  // console.log(yday_date, "ydayuyyyyyyyyyyy");
  // let yday_visitors = 0;
  // compData.map(({ in_time }) => {
  //   if (today_date.slice(0, 10) === in_time.slice(0, 10)) {
  //     yday_visitors++;
  //   }
  // })
  // console.log(Today_visitors,"Todayyyyy visitors");
  // console.log(yday_visitors,"yday visitorsssssssss");
  const bars = [];
  bars.push(Today_visitors);
  for (let i = 1; i < 7; i++) {
    var temp = 0;
    var noww = new Date();
    var prev_date = noww - i * (1000 * 60 * 60 * 24 * 1);
    prev_date = new Date(prev_date).toJSON().slice(0, 10);
    compData.map(({ in_time }) => {
      if (prev_date.slice(0, 10) === in_time.slice(0, 10)) {
        temp++;
      }
    });
    bars[i] = temp;
  }
  for (var i = 0; i < bars.length; i++) {
    console.log(bars[i], "Printinggggggg arayyyyyyyyyy");
  }

  let In_visitors = 0;
  compData.map(({ inOut }) => {
    if (inOut === true) {
      In_visitors += 1;
    }
  });

  // const bardata = [];
  const config = {
    data: {
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Sat",
        "Sun",
      ],
      datasets: [
        {
          data: [bars[0], bars[1], bars[2], bars[3], bars[4], bars[5], bars[6]],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(137, 212, 156, 0.2)",
            "rgba(223, 161, 231, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(137, 212, 156)",
            "rgb(223, 161, 231)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        ></link>
        {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <title>Visitors-Vue</title>
      </Head>
      <Navbar />

      <InnerLayout>
        <h1 className="text-center p-3 fst-italic">Visitors dashboard</h1>
          <div className="piechart">
            <div className="pie">
              <Bar {...config}></Bar>
            </div>
          </div>
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
                    <div className="card shadow border-0 ml-4">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                              Total Visitors
                            </span>
                            <span className="h3 font-bold mb-0">
                              {Total_visitors}
                            </span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                              <i className="bi bi-people"></i>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                          <span className="text-nowrap text-l text-muted">
                            Since last month
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
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                              Check-ins today
                            </span>
                            <span className="h3 font-bold mb-0">
                              {Today_visitors}
                            </span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                              <i className="bi bi-check2-square"></i>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                          <span className="text-nowrap text-l text-muted">
                            so far
                          </span>
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
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                              Visitors In
                            </span>
                            <span className="h3 font-bold mb-0">
                              {In_visitors}
                            </span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                              <i className="bi bi-person-bounding-box"></i>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                          <span className="text-l text-muted">
                            Since last monthSince last monthSince last
                            monthSince last month
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
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                              Total employees
                            </span>
                            <span className="h3 font-bold mb-0">
                              {Total_employee}
                            </span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-success text-white text-lg rounded-circle">
                              <i className="bi bi-person-badge-fill"></i>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                          <span className=" text-l text-muted">
                            Since last monthSince last monthSince last
                            monthSince last month
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
  const email = context.query.detail;
  const res_comp = await fetch(`https://visitors-vue-backend.onrender.com/${email}/comp_details`);
  const res_emp = await fetch(`https://visitors-vue-backend.onrender.com/${email}/comp_employee`);
  const compData = await res_comp.json();
  const compEmployee = await res_emp.json();
  return { props: { compData, compEmployee } };
}
