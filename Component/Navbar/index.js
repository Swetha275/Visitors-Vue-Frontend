import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const Navbar = () => {
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
        {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/> */}
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      </Head>

      <div className="nav-all">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <Link href={`/${offmail}`} className="nav-title navColor">
            <p>
              <Image src="/logo.png" alt="logo" width={50} height={50}></Image>
              <span
                className="mobileTitle"
                style={{ fontSize: 30, paddingLeft: 20 }}
              >
                Visitors-Vue
              </span>
            </p>
          </Link>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <Link className="navColor" href={`/${offmail}/addpage`}>
            Add Visitors
          </Link>
          <Link className="navColor" href={`/${offmail}/historypage`}>
            Visitors History
          </Link>
          <Link className="navColor" href={`/${offmail}/updatepage`}>
            Update Visitors
          </Link>
          <Link className="navColor" href={`/${offmail}/employeepage`}>
            Add Employee
          </Link>
          <Link className="navColor" href={`/${offmail}/updateemp`}>
            Update Employee
          </Link>
          <Link className="navColor" href={`/${offmail}/dashboard`}>
            Dashboard
          </Link>

          <button
            onClick={logOut}
            className="float-right btn btn-primary bg-white text-black"
          >
            LogOut
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
