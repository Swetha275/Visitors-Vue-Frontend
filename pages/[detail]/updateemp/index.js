import React, { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import Navbar from '../../../Component/Navbar';
import axios from 'axios';
import Link from 'next/link';

const Updateemp = ({ compEmployee }) => {
  const [offmail, setOffmail] = useState('');
  const [deleteId, setDeleteId] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setOffmail(window.localStorage.getItem('email'));
  });

  const route = useRouter();

  const deleteTodo = async id => {
    try {
      setModalOpen(!modalOpen);
      const data = { id };
      axios.patch(`http://localhost:8000/delete_employee`, data);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };

  function openpopup(id) {
    setModalOpen(!modalOpen);
    setDeleteId(id);
  }

  function okPopup() {
    if (deleteId === '') {
      setModalOpen(!modalOpen);
      route.push(`/${offmail}/Updateemp`);
    } else deleteTodo(deleteId);
  }

  function cancelPopup() {
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
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            Delete Employee
          </h5>
        </div>
        <ModalBody>Are you sure?</ModalBody>
        <ModalFooter>
          <Button color="primary" type="button" onClick={() => okPopup()}>
            Ok
          </Button>
          <Button color="danger" type="button" onClick={() => cancelPopup()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <div className="container">
        <h1 className="text-center p-3 fst-italic">Update Employee</h1>
        <div style={{ overflowX: 'auto' }}>
          <table className="table table-condensed table-hover">
            <thead>
              <tr>
                <th style={{ fontSize: 20 }}>Name</th>
                <th style={{ fontSize: 20 }}>Ph Number</th>
                <th style={{ fontSize: 20 }}>Mail ID</th>
                <th style={{ fontSize: 20 }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {compEmployee.map(({ id, Name, phNum, Email }, index) => {
                return (
                  <tr key={index}>
                    <td style={{ fontSize: 15 }}>{Name}</td>
                    <td style={{ fontSize: 15 }}>{phNum}</td>
                    <td style={{ fontSize: 15 }}>{Email}</td>
                    <td className="p-2">
                      <button type="button" className="btn btn-outline-danger" onClick={() => openpopup(id)}>
                        Delete
                      </button>
                      <Link href={`/${offmail}/Updateemp/${id}`}>
                        <button type="button" className="btn btn-outline-danger">
                          Edit
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {compEmployee.length == 0 ? <p className="nodata">No employees added</p> : <p></p>}
      </div>
    </Fragment>
  );
};

export default Updateemp;

export async function getServerSideProps(context) {
  const email = context.query.detail;
  console.log(email,"heyheyheyheyheyheyhey");
  const res_emp = await fetch(`http://localhost:8000/${email}/comp_employee`);
  const compEmployee = await res_emp.json();
  return { props: { compEmployee } };
}
