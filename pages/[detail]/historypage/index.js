import React, { Fragment } from 'react';
import Navbar from '../../../Component/Navbar';
import Head from 'next/head';


const History = ({ data }) => {
  return (
    <Fragment>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <title>Visitors MS</title>
      </Head>

      <Navbar />
      <div className="container-fluid">
        <h1 className="text-center p-3 fst-italic">Visitor's History</h1>
        <div style={{ overflowX: 'auto' }}>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th style={{ fontSize: 19 }}>Name</th>
                <th style={{ fontSize: 19 }}>Referrel</th>
                <th style={{ fontSize: 19 }}>Purpose</th>
                <th style={{ fontSize: 19 }}>Ph Number</th>
                <th style={{ fontSize: 19 }}>Address</th>
                <th style={{ fontSize: 19 }}>In Date</th>
                <th style={{ fontSize: 19 }}>In Time</th>
                <th style={{ fontSize: 19 }}>Out Date</th>
                <th style={{ fontSize: 18 }}>Out Time</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ registerName, registerPurpose, registerReferrel, phoneNumber, address, in_time, out_time }, index) => {
                return (
                  <tr key={index}>
                    <td style={{ fontSize: 15 }}>{registerName}</td>
                    <td style={{ fontSize: 15 }}>{registerReferrel}</td>
                    <td style={{ fontSize: 15 }}>{registerPurpose}</td>
                    <td style={{ fontSize: 15 }}>{phoneNumber}</td>
                    <td style={{ fontSize: 15 }}>{address}</td>
                    {in_time
                      .slice(0, 19)
                      .split('T')
                      .map(ele => {
                        return <td style={{ fontSize: 15 }}>{ele}</td>;
                      })}

                    {out_time
                      .slice(0, 19)
                      .split('T')
                      .map(ele => {
                        return <td style={{ fontSize: 15 }}>{ele}</td>;
                      })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {data.length == 0 ? <p className="nodata">No visitors so far</p> : <p></p>}
        <br></br>
      </div>
    </Fragment>
  );
};

export default History;

export async function getServerSideProps(context) {
  const email = context.query.Detail;
  const res = await fetch(`${process.env.BACKEND_URL}/${email}/show_users`);
  const data = await res.json();
  return { props: { data } };
}
