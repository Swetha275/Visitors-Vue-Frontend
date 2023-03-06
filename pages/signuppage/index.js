import React from "react";
import { useState } from "react";
import Head from "next/head";
import HomeNav from "../../Component/HomeNav";

const Signuppage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const route = useRouter();
    // const {
    //     register,
    //     handleSubmit,
    //     reset,
    //     formState: { errors },
    //   } = useForm();
    // const onSubmit = async (data) => {
    //     try {
    //         route.push("/HomePage");
    //     }
    //     catch{
    //         console.log("error");
    //     }
    // }
  return (
    <div>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        ></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      </Head>
      <HomeNav/>
      <div className="container w-25 p-5">
        <form>
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
          <div className="form-outline mb-4">
          <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
            {/* <ErrorMessage
              error={errors?.email}
              messages={{
                required: "Please enter email id",
                pattern: "Invalid email id",
              }}
            /> */}
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
            <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
            {/* <ErrorMessage
              error={errors?.password}
              messages={{
                required: "Please enter password",
              }}
            /> */}
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4">
            Sign up
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Signuppage;
