import React, { Fragment, useState, useRef, useEffect } from "react";
import Footer from "../../../Component/Footer";
import Navbar from "../../../Component/Navbar";
import Head from "next/head";
import { useForm } from "react-hook-form";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { ErrorMessage } from "../../../Component/Error";


const AddPage = ({ employeeData }) => {
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
    // console.log( {offmail} , "from add pageeeeeeeeeeeee");
  });



  const onSubmit = async (data) => {
    // console.log(data);
    const mailid = {
      offmail,
      ...data,
    };
    console.log(mailid, "Hii");
    try {
      axios.post(`http://localhost:8000/add_visitors`, mailid);
      setModalOpen(!modalOpen);
      emailjs
        .sendForm(
          "service_ofpv41a",
          "template_ubzwbyh",
          form.current,
          "60VosfYPnlyyKxBMo"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } catch (error) {
      console.log(error);
    }
  };

  function closePopup() {
    reset();
    setModalOpen(!modalOpen);
  }

  return (
    <Fragment>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        ></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <title>Visitors MS</title>
      </Head>
      
      <Navbar />
      <div className="container">
        <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
          <div className=" modal-header">
            <h5 className=" modal-title" id="exampleModalLabel">
              Add Visitor
            </h5>
          </div>
          <ModalBody>Successfully Added</ModalBody>
          <ModalFooter>
            <Button className="submitbutton" type="button" onClick={() => closePopup()}>
              Ok
            </Button>
          </ModalFooter>
        </Modal>
        <form
          ref={form}
          className="formbucket"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="row form-outline mb-3 mt-4">
            <div className="col-sm-4">
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerName">
                  Name
                </label>
                <input
                  type="text"
                  id="registerName"
                  className="form-control"
                  aria-invalid={errors?.registerName ? true : false}
                  placeholder="Register Name"
                  {...register("registerName", {
                    required: true,
                    maxLength: 80,
                    pattern: /^[a-zA-Z ]*$/,
                  })}
                />
                <ErrorMessage
                  error={errors?.registerName}
                  messages={{
                    required: "Please enter name",
                    pattern: "Name should contain only alphabets and spaces",
                  }}
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="age">
                  Age
                </label>
                <input
                  type="number"
                  id="registerAge"
                  className="form-control"
                  placeholder="Register Age"
                  {...register("registerAge", {
                    required: true,
                    maxLength: 3,
                    pattern: /^(120|[1-9][0-9]?)$/,
                  })}
                />
                <ErrorMessage
                  error={errors?.registerAge}
                  messages={{
                    required: "Please enter age",
                    pattern: "Invalid Age",
                  }}
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerEmail">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                  })}
                />

                <ErrorMessage
                  error={errors?.email}
                  messages={{
                    required: "Please enter email id",
                    pattern: "Invalid email id",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerphone">
                  Phone Number
                </label>
                <input
                  type="number"
                  id="phoneNumber"
                  className="form-control"
                  placeholder="Phone Number"
                  {...register("phoneNumber", {
                    required: true,
                    pattern: /^[0-9]{10}$/,
                  })}
                />
                <ErrorMessage
                  error={errors?.phoneNumber}
                  messages={{
                    required: "Please enter phone number",
                    pattern: "Phone number should contain 10 numbers",
                  }}
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerPurpose">
                  Purpose of visit
                </label>
                <input
                  type="text"
                  id="registerPurpose"
                  className="form-control"
                  placeholder="Purpose of visit"
                  {...register("registerPurpose", {
                    required: true,
                    maxLength: 200,
                  })}
                />
                <ErrorMessage
                  error={errors?.registerPurpose}
                  messages={{
                    required: "Please enter name",
                    pattern: "Name should contain only alphabets and spaces",
                  }}
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerReferrel">
                  Referrel Name
                </label>
                <input
                  type="text"
                  id="registerReferrel"
                  className="form-control"
                  placeholder="Register Referrel"
                  {...register("registerReferrel", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                <ErrorMessage
                  error={errors?.registerReferrel}
                  messages={{
                    required: "Please enter name",
                    pattern: "Name should contain only alphabets and spaces",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4">
              <label className="form-label" htmlFor="referrelEmail">
                Referrel E-mail
              </label>
              <select
                className="form-select"
                id="referrelEmail"
                {...register("referrelEmail", {
                  required: true,
                })}
              >
                <option>select</option>;
                {employeeData.map(({ Email }, index) => {
                  return <option key={index}>{Email}</option>;
                })}
              </select>
              <ErrorMessage
                error={errors?.registerEmail}
                messages={{
                  required: "Please select an option",
                }}
              />
            </div>
            <div className="col-sm-8">
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerAddress">
                  Address
                </label>
                <textarea
                  type="text"
                  id="address"
                  className="form-control"
                  placeholder="Address"
                  {...register("address", {
                    required: true,
                    maxLength: 200,
                  })}
                />
                <ErrorMessage
                  error={errors?.address}
                  messages={{
                    required: "Please enter address",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end mb-24">
            <div className="float-right">
              <input
                type="reset"
                className="btn btn-dark btn-block  me-4"
              />
              <input type="submit" className="btn submitbutton text-white btn-block" />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </Fragment>
  );
};

export default AddPage;

export async function getServerSideProps(context) {
  const email = context.query.detail;
  const res = await fetch(`http://localhost:8000/${email}/show_employee`);
  const employeeData = await res.json();
  return { props: { employeeData } };
}
