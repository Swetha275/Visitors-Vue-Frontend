import React, { useState, useRef, useEffect, Fragment } from 'react';
import Navbar from '../../../Component/Navbar';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { ErrorMessage } from '../../../Component/Error';

const Employeedata = () => {
  const [offmail, setOffmail] = useState('');
  const form = useRef();
  const [modalOpen, setModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    setOffmail(window.localStorage.getItem('email'));
  });

  const onSubmit = async data => {
    const mailid = {
      offmail,
      ...data,
    };
    try {
      axios.post(`${process.env.BACKEND_URL}/add_emp`, mailid);
      setModalOpen(!modalOpen);
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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <title>Visitors MS</title>
      </Head>
      <Navbar />
      <div className="container">
        <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
          <div className=" modal-header">
            <h5 className=" modal-title" id="exampleModalLabel">
              Add Employee
            </h5>
          </div>
          <ModalBody>Successfully Added</ModalBody>
          <ModalFooter>
            <Button className="submitbutton" type="button" onClick={() => closePopup()}>
              Ok
            </Button>
          </ModalFooter>
        </Modal>
        <h1 className="text-center p-3 fst-italic">Add Employee</h1>

        <form ref={form} className="formbucket" onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex justify-content-center">
            <div className="p-3">
              <div className="form-outline m-1">
                <label className="form-label" htmlFor="Name">
                  Name
                </label>
                <input
                  type="text"
                  id="Name"
                  className="form-control"
                  aria-invalid={errors?.Name ? true : false}
                  placeholder="Name"
                  {...register('Name', {
                    required: true,
                    maxLength: 80,
                    pattern: /^[a-zA-Z ]*$/,
                  })}
                />
                <ErrorMessage
                  error={errors?.Name}
                  messages={{
                    required: 'Please enter name',
                    pattern: 'Name should contain only alphabets and spaces',
                  }}
                />
              </div>
              <div className="form-outline p-3">
                <label className="form-label" htmlFor="Email">
                  Email
                </label>
                <input
                  type="text"
                  id="Email"
                  className="form-control"
                  placeholder="Email"
                  {...register('Email', {
                    required: true,
                    pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                  })}
                />

                <ErrorMessage
                  error={errors?.Email}
                  messages={{
                    required: 'Please enter email id',
                    pattern: 'Invalid email id',
                  }}
                />
              </div>
              <div className="form-outline p-3">
                <label className="form-label" htmlFor="phNum">
                  Phone Number
                </label>
                <input
                  type="number"
                  id="phNum"
                  className="form-control"
                  placeholder="Phone Number"
                  {...register('phNum', {
                    required: true,
                    pattern: /^[0-9]{10}$/,
                  })}
                />
                <ErrorMessage
                  error={errors?.phNum}
                  messages={{
                    required: 'Please enter phone number',
                    pattern: 'Phone number should contain 10 numbers',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="float-right">
              <input type="reset" className="btn btn-dark btn-block  me-4" />
              <input type="submit" className="btn submitbutton text-white btn-block" />
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Employeedata;
