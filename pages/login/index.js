import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";


const Login = () => {
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");
  const [password, setPassword] = useState("");
  const route = useRouter();

  function handleSubmit(e) {
    try {
      console.log(process.env.BACKEND_URL,"backend");
      e.preventDefault();
      axios
        .post(`https://visitors-vue-backend.onrender.com/login-user`, { email, password })
        .then((data) => {
          setResponse(data.data.error);
          if (data.data.status == "changepassword") {
            alert("Change your password!");
            window.localStorage.setItem("email", email);
            route.push(`${email}/changepassword`);
          }
          if (data.data.status == "ok") {
            setResponse("");
            alert("Login successful");
            window.localStorage.setItem("email", email);
            window.localStorage.setItem("token", data.data.data);
            window.localStorage.setItem("loggedIn", true);
            window.location.href = `${email}`;
          }
        });
    } catch (error) {
      setResponse("");
      console.log(error.message);
    }
  }
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        ></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      </Head>
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
                <div className="auth-wrapper">
                  <div className="auth-inner">
                    <form onSubmit={handleSubmit}>
                      <h3>Sign In</h3>

                      <div className="mb-3">
                        <label>Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="nodata">{response}</div>
                      </div>

                      <div className="mb-3">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="d-grid">
                        <button type="submit" className="btn submitbutton ">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
