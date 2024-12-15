import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import SingleRequest from "./SinggleRequest/SingleRequest";
import "./UserRequestHistory.css";
const UserRequestHistory = () => {
  const [requests, setRequests] = useState([]);
  const { user } = useAuth();

  // useEffect(() => {
  //   fetch(`http://localhost:5000/bloodRequest/${user.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setRequests(data));
  // }, [requests]);

  useEffect(() => {
    fetch(`http://localhost:5000/${user.email}/bloodRequest`)
      .then((res) => res.json())
      .then((data) => setRequests(data));
  }, [requests]);

  // if (!requests.length) {
  //   return (
  //     <button className="btn btn-primary spner-btn" type="button" disabled>
  //       <span
  //         className="spinner-border spinner-border-sm"
  //         role="status"
  //         aria-hidden="true"
  //       ></span>
  //       Loading...
  //     </button>
  //   );
  // }

  return (
    <div className="request-history-container">
      <h2>My Request History</h2>
      <div className="request-history">
        <Table striped bordered hover>
          <thead>
            <tr className="table-head">
              <th>Patient Name</th>
              <th>Patient Age</th>
              <th>Reason</th>
              <th>Quantity</th>
              <th>Doctor Name</th>
              <th>Date</th>
              <th>Blood Group</th>
              <th>Address</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <SingleRequest
                key={request._id}
                request={request}
              ></SingleRequest>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserRequestHistory;
