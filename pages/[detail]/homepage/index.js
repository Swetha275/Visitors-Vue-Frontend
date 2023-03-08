import React, { Fragment, useState, useEffect } from "react";
import HomeNav from "../../../Component/HomeNav";
import Footer from "../../../Component/Footer";
import Head from "next/head";

const Homepage = ({ userData }) => {
  const [offmail, setOffmail] = useState("");
  useEffect(() => {
    setOffmail(window.localStorage.getItem("email"));
  });
  return (
    <Fragment>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        ></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <title> Visitors MS</title>
      </Head>
      <HomeNav/>
      <div className="homebg">
        <div className="container-fluid py-5 hero-header mb-5">
          <div className="container-fluid my-5 py-5 px-lg-5">
            <div className="row g-5 py-5">
              <div className="col-lg-6 text-center text-lg-start">
                <h1 className="text-white mb-4 animated zoomIn">
                  Change the way you manage visitors in your organization
                </h1>
                <p className="text-white pb-3 animated zoomIn">
                  Tired of maintaining visitor check-ins on books & paper? Track
                  and manage your daily visitors with ease on Visitors-Vue
                </p>
              </div>
              <div className="col-lg-6 text-center text-lg-start">
                <img className="img-fluid" src="hero.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service start*/}
      <div className=" container py-5 aligncenter">
        <div className="fullcontainer container px-lg-5">
          <div
            className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h6 className="position-relative d-inline text-primary ps-4">
              Our Services
            </h6>
            <h2 className="mt-2">Features of this application</h2>
          </div>
          <div className="cardss row justify-content-center m-10 g-4">
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
              <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="80"
                    fill="currentColor"
                    className="bi bi-person-badge"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
                  </svg>
                </div>
                <h5 className="mb-3">Check-In</h5>
                <p>Add entry details of new visitors in your organization</p>
                <a
                  className="btn px-3 mt-auto mx-auto"
                  href={`${offmail}/addpage`}
                >
                  Click here
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="80"
                    fill="currentColor"
                    className="bi bi-person-check-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                    />
                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </div>
                <h5 className="mb-3">Check-Out</h5>
                <p>check-out the visitors as they leave your organization</p>
                <a
                  className="btn px-3 mt-auto mx-auto"
                  href={`${offmail}/updatepage`}
                >
                  Click here
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="80"
                    fill="currentColor"
                    className="bi bi-clock-history"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                  </svg>
                </div>
                <h5 className="mb-3">Visitors History</h5>
                <p>View the history of visitors so far</p>
                <a
                  className="btn px-3 mt-auto mx-auto"
                  href={`${offmail}/historypage`}
                >
                  Click here
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
              <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="80"
                    fill="currentColor"
                    className="bi bi-person-plus-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path
                      fill-rule="evenodd"
                      d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                    />
                  </svg>
                </div>
                <h5 className="mb-3">Add employees</h5>
                <p>Add entries for employees in your organization</p>
                <a
                  className="btn px-3 mt-auto mx-auto"
                  href={`${offmail}/employeepage`}
                >
                  Click here
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="80"
                    fill="currentColor"
                    className="bi bi-person-gear"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                  </svg>
                </div>
                <h5 className="mb-3">Update employee</h5>
                <p>Update the details of the employees as soon as they leave</p>
                <a
                  className="btn px-3 mt-auto mx-auto"
                  href={`${offmail}/updateemp`}
                >
                  Click here
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="80"
                    fill="currentColor"
                    className="bi bi-bar-chart-line-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z" />
                  </svg>
                </div>
                <h5 className="mb-3">Dashboard</h5>
                <p>View live status of visitors in the dashboard </p>
                <a
                  className="btn px-3 mt-auto mx-auto"
                  href={`${offmail}/dashboard`}
                >
                  Click here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service start*/}

      <Footer />
    </Fragment>
  );
};

export default Homepage;
