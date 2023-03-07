import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { ErrorMessage } from '../../../../Component/Error';
import Navbar from '../../../../Component/Navbar';

const Editemp = ({ Employee }) => {
  const [offmail, setOffmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setOffmail(window.localStorage.getItem('email'));
  }, [offmail]);

  const route = useRouter();

  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    try {
      setModalOpen(!modalOpen);
      axios.patch(`http://localhost:8000/${offmail}/update_emp/${Employee[0].id}`, data);
    } catch (error) {
      console.log(error);
    }
  };

  function closePopUp() {
    reset();
    setModalOpen(!modalOpen);
    route.push(`/${offmail}/UpdateEmp`);
  }

  return (
   
    <div>
       <Navbar/>
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            Employee Updated
          </h5>
        </div>
        <ModalBody>Detail Updated Successfully</ModalBody>
        <ModalFooter>
          <Button color="danger" type="button" onClick={() => closePopUp()}>
            Ok
          </Button>
        </ModalFooter>
      </Modal>
      {/* w-50 align-items-center justify-content-center shadow-lg p-8 bg-white rounded */}
      <div className='editdiv'>
      <p className='details'> Update {Employee[0].Name}'s details</p>
      <form ref={form} className="formbucket" onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex justify-content-center">
          <div className="p-3">
            <div className="form-outline p-3">
              <label className="form-label" htmlFor="Email">
                Email
              </label>
              <input
                type="text"
                id="Email"
                defaultValue={Employee[0].Email}
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
                defaultValue={Employee[0].phNum}
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
    </div>
  );
};

export default Editemp;
export async function getServerSideProps(context) {
  const id = context.query.id;
  const mail = context.query.detail;
  const res_emp = await fetch(`http://localhost:8000/${mail}/get_employee/${id}`);
  const Employee = await res_emp.json();
  return { props: { Employee } };
}
