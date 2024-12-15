import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import SingleDonation from "./SingleDonation/SingleDonation";
import "./UserDonationHistory.css";
const UserDonationHistory = () => {
  const { user } = useAuth();
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/${user.email}/bloods`)
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);

  // if (!donations.length) {
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
    <div className="donation-history-container">
      <h2>My Donation History</h2>
      <div className="donation-history">
        <Table striped bordered hover>
          <thead>
            <tr className="table-head">
              <th>Name</th>
              <th>Age</th>
              <th>Blood Group</th>
              <th>Disease (if any)</th>
              <th>Donate Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <SingleDonation
                key={donation._id}
                donation={donation}
              ></SingleDonation>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserDonationHistory;
