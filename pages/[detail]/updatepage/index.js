import Head from 'next/head';
import React, { Fragment, useState, useEffect } from 'react';
import Navbar from '../../../Component/Navbar';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

const Updatepage = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const route = useRouter();

  const [offmail, setOffmail] = useState('');
  useEffect(() => {
    setOffmail(window.localStorage.getItem('email'));
  }, [offmail]);

  const deleteTodo = async id => {
    try {
      const data = { id };
      axios.patch(`https://visitors-vue-backend.onrender.com/delete_visitors`, data);
      setModalOpen(!modalOpen);
    } catch (error) {
      console.log(error);
    }
  };
  function closePopup() {
    route.push(`/${offmail}/historypage`);
    setModalOpen(!modalOpen);
  }

  return (
    <Fragment>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <title> Visitors MS</title>
      </Head>
      <Navbar />
      <div className="container">
        <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
          <div className=" modal-header">
            <h5 className=" modal-title" id="exampleModalLabel">
              Add Visitor
            </h5>
          </div>
          <ModalBody>Successfully Updated</ModalBody>
          <ModalFooter>
            <Button className="submitbutton" type="button" onClick={() => closePopup()}>
              Ok
            </Button>
          </ModalFooter>
        </Modal>
        <h1 className="text-center p-3 fst-italic">Update Visitors</h1>
        <div style={{ overflowX: 'auto' }}>
          <table className="table table-condensed table-hover">
            <thead>
              <tr>
                <th style={{ fontSize: 15 }}>Name</th>
                <th style={{ fontSize: 15 }}>Age</th>
                <th style={{ fontSize: 15 }}>Purpose</th>
                <th style={{ fontSize: 15 }}>Referrel</th>
                <th style={{ fontSize: 15 }}>Ph Number</th>
                <th style={{ fontSize: 15 }}>Mail ID</th>
                <th style={{ fontSize: 15 }}>Address</th>
                <th style={{ fontSize: 15 }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ id, registerName, registerAge, registerPurpose, registerReferrel, phoneNumber, email, address }, index) => {
                return (
                  <tr key={index}>
                    <td>{registerName}</td>
                    <td>{registerAge}</td>
                    <td>{registerPurpose}</td>
                    <td>{registerReferrel}</td>
                    <td>{phoneNumber}</td>
                    <td>{email}</td>
                    <td>{address}</td>
                    <td>
                      <button type="button" className="btn btn-outline-danger" onClick={() => deleteTodo(id)}>
                        Check out
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {data.length === 0 ? <p className="nodata">No Records Found</p> : <p></p>}
      </div>
    </Fragment>
  );
};

export default Updatepage;

export async function getServerSideProps(context) {
  const email = context.query.detail;
  const res = await fetch(`https://visitors-vue-backend.onrender.com/${email}/update_user`);
  const data = await res.json();
  return { props: { data } };
}
