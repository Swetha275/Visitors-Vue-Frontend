import React , { useEffect, useState } from "react";
import Head from "next/head";

const Newnav = () => {
    const [offmail, setOffmail] = useState("");
  useEffect(() => {
    setOffmail(window.localStorage.getItem("email"));
  }, [offmail]);

  console.log(offmail, "from nav");
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "/";
  };
  return (
    <>
    <Head>
         <link rel="stylesheet" href="stylenav.scss"></link>
    </Head>
    <div>
      <section class="navigation">
        <div class="nav-container">
          <div class="brand">
            <a href="#!">Visitors Vue</a>
          </div>
          <nav>
            <div class="nav-mobile">
              <a id="nav-toggle" href="#!">
                <span></span>
              </a>
            </div>
            <ul class="nav-list">
              <li>
                <a className="navColor" href={`/${offmail}/AddPage`}>Home</a>
              </li>
              <li>
                <a className="navColor" href={`/${offmail}/HistoryPage`}>About</a>
              </li>
              <li>
                <a href="#!">Visitors</a>
                <ul class="nav-dropdown">
                  <li>
                    <a >Add visitors</a>
                  </li>
                  <li>
                    <a href="#!">Check-Out Visitors</a>
                  </li>
                  <li>
                    <a href="#!">Graphic Design</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#!">Dashboard</a>
              </li>
              <li>
                <a href="#!">Employees</a>
                <ul class="nav-dropdown">
                  <li>
                    <a href="#!">Add employee</a>
                  </li>
                  <li>
                    <a href="#!">Delete employee</a>
                  </li>
                  <li>
                    <a href="#!">Graphic Design</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#!">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
    </>
  );
};

export default Newnav;
