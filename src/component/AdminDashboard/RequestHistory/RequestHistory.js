import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./RequestHistory.css";

const RequestHistory = () => {
  const [bloodrequest, setBloodrequest] = useState([]);

  useEffect(() => {
    fetch("https://blood-bank-backend-two.vercel.app/bloodRequest")
      .then((res) => res.json())
      .then((data) => {
        setBloodrequest(data);
      });
  }, []);

  if (!bloodrequest?.length) {
    return (
      <button className="btn btn-primary spner-btn" type="button" disabled>
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    );
  }

  return (
    <div>
      <div>
        <h4 className="donor-details mt-3">Request History</h4>
        <div className="pt-3">
          <Table striped brequestblooded hover>
            <thead>
              <tr className="t-head">
                <th>Sl</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Blood Group</th>
                <th>Address</th>
                <th>Reason</th>
                <th>Doctor Name</th>
                <th>Mobile</th>
                <th>Date</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bloodrequest?.map((requestblood, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{requestblood?.name}</td>
                  <td>{requestblood?.age}</td>
                  <td>{requestblood?.gender}</td>
                  <td>{requestblood?.bloodGroup}</td>
                  <td>{requestblood?.address}</td>
                  <td>{requestblood?.reason}</td>
                  <td>{requestblood?.doctorName}</td>
                  <td>{requestblood?.mobile}</td>
                  <td>{requestblood?.requestDate}</td>
                  <td>{requestblood?.quantity}</td>
                  <td>{requestblood?.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default RequestHistory;
