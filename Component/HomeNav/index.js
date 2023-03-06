import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

const HomeNav = ({ userData }) => {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "/";
  };
  return (
    <>
      <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <Link href="/" className="nav-title">
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
          <Link href="./"></Link>
        </div>
        <div class="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <div className="mr-auto p-3 text-white">{userData}</div>
          <div>
            {userData ? (
              <button
                onClick={logOut}
                className="float-right btn btn-primary bg-white text-black"
              >
                Logout
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNav;
