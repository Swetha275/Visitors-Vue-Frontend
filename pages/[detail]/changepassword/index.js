import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { ErrorMessage } from "../../../Component/Error";
import HomeNav from "../../../Component/HomeNav";

const ChangePassword = () => {
  const [offmail, setOffmail] = useState("");
  const form = useRef();
  const [modalOpen, setModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    setOffmail(window.localStorage.getItem("email"));
  }, [offmail]);
  const route = useRouter();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      if (data.newpassword === data.confirmpasword) {
        console.log(data);
        axios.post(`https://visitors-vue-backend.onrender.com/${offmail}/ChangePassword`, data);
        setModalOpen(!modalOpen);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function closePopup() {
    reset();
    setModalOpen(!modalOpen);
    route.push('/')
  }

  return (
    <div>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        ></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <title>Visitors MS</title>
      </Head>
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            Change Password
          </h5>
        </div>
        <ModalBody>Successfully Chnaged your password</ModalBody>
        <ModalFooter>
          <Button color="primary" type="button" onClick={() => closePopup()}>
            Ok
          </Button>
        </ModalFooter>
      </Modal>
      <HomeNav />
      <form
        ref={form}
        className="formbucket mt-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="d-flex justify-content-center mt-12">
          <div className="p-3">
            <div className="form-outline p-3">
              <label className="form-label" htmlFor="Pasword">
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                className="form-control"
                placeholder="pasword"
                {...register("CurrentPasword", {
                  required: true,
                  // pattern:
                  //   /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                })}
              />

              <ErrorMessage
                error={errors?.pasword}
                messages={{
                  required: "Please enter email id",
                  pattern: "Invalid email id",
                }}
              />
            </div>

            <div className="form-outline p-3">
              <label className="form-label" htmlFor="Pasword">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                className="form-control"
                placeholder="New Pasword"
                {...register("newpassword", {
                  required: true,
                  // pattern:
                  //   /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                })}
              />

              <ErrorMessage
                error={errors?.pasword}
                messages={{
                  required: "Please enter email id",
                  pattern: "Invalid email id",
                }}
              />
            </div>

            <div className="form-outline p-3">
              <label className="form-label" htmlFor="Pasword">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                placeholder="Confirm Pasword"
                {...register("confirmpasword", {
                  required: true,
                  // pattern:
                  //   /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                })}
              />

              <ErrorMessage
                error={errors?.pasword}
                messages={{
                  required: "Please enter email id",
                  pattern: "Invalid email id",
                }}
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="float-right">
            <input type="reset" className="btn btn-dark btn-block mb-4 me-4" />
            <input type="submit" className="btn btn-primary btn-block mb-4" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
