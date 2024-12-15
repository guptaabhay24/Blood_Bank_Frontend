import React, { useEffect, useState } from "react";
import Charts from "../Charts/Charts";

import "./AdminHome.css";

const AdminHome = () => {
  const [donors, setDonors] = useState([]);
  const [approve, setApprove] = useState([]);
  const [pandingdata, setPandingdata] = useState([]);
  const [rejecteddata, setRejecteddata] = useState([]);

  const [bloodrequest, setBloodrequest] = useState([]);
  const [bloodAprove, setBloodAprove] = useState([]);
  const [panding, setBloodPanding] = useState([]);
  const [rejected, setBloodRejected] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/donateBlood")
      .then((res) => res.json())
      .then((data) => {
        const Aprove = data.filter((data) => data?.status === "Approved");
        const panding = data.filter((data) => data?.status === "Pending");
        const Rejected = data.filter((data) => data?.status === "Rejected");
        setApprove(Aprove);
        setPandingdata(panding);
        setRejecteddata(Rejected);
        setDonors(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/bloodRequest")
      .then((res) => res.json())
      .then((data) => {
        const AproveRequestData = data.filter(
          (data) => data?.status === "Approved"
        );
        const pandingData = data.filter((data) => data?.status === "Pending");
        const Rejected = data.filter((data) => data?.status === "Rejected");
        setBloodAprove(AproveRequestData);
        setBloodPanding(pandingData);
        setBloodRejected(Rejected);
        setBloodrequest(data);
      });
  }, []);

  return (
    <div className="p-3">
      <Charts></Charts>
      <div >
        <h3 className=" mb-3 mt-3 subro">Total Donor Data</h3>
        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-4">
          <div className="col">
            <div className="p-3 border total-css">
              <p className="donor-icon">
                <i className="fas fa-users"></i>
              </p>
              <p className="total">Total Donors</p>
              <p className="count">{donors.length}</p>
            </div>
          </div>

          <div className="col">
            <div className="p-3 border total-css">
              <p className="donor-icon">
                <i className="fas fa-users"></i>
              </p>
              <p className="total">Total Pending</p>
              <p className="count">{pandingdata.length}</p>
            </div>
          </div>

          <div className="col">
            <div className="p-3 border total-css">
              <p className="donor-icon">
                <i className="fas fa-users"></i>
              </p>
              <p className="total">Total Approved</p>
              <p className="count">{approve.length}</p>
            </div>
          </div>

          <div className="col">
            <div className="p-3 border total-css">
              <p className="donor-icon">
                <i className="fas fa-users"></i>
              </p>
              <p className="total">Total Rejected</p>
              <p className="count">{rejecteddata.length}</p>
            </div>
          </div>
        </div>

        {/************************************************************ */}
        <div>
          <h3 className=" mb-3 mt-5 subro">Total Blood Requests Data</h3>
          <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-4">
            <div className="col">
              <div className="p-3 border total-css">
                <p className="donor-icon">
                  <i className="fas fa-spinner"></i>
                </p>
                <p className="total">Total Requests</p>
                <p className="count">{bloodrequest.length}</p>
              </div>
            </div>
            <div className="col">
              <div className="p-3 border total-css">
                <p className="donor-icon">
                  <i className="far fa-check-circle"></i>
                </p>
                <p className="total">Pending Requests</p>
                <p className="count">{panding.length}</p>
              </div>
            </div>
            <div className="col">
              <div className="p-3 border total-css">
                <p className="donor-icon">
                  <i className="far fa-check-circle"></i>
                </p>
                <p className="total">Approved Requests</p>
                <p className="count">{bloodAprove?.length}</p>
              </div>
            </div>
            <div className="col">
              <div className="p-3 border total-css">
                <p className="donor-icon">
                  <i className="fas fa-burn "></i>
                </p>
                <p className="total">Total Rejected</p>
                <p className="count">{rejected.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
