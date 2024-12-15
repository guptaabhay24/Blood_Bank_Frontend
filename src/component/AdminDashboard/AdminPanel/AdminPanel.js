import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import BloodRequests from "../BloodRequests/BloodRequests";
import Donor from "../../Donor/Donor";
import Home from "../AdminHome/AdminHome";
import RequestHistory from "../RequestHistory/RequestHistory";
import "./AdminPanel.css";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import DonationRequests from "../DonationRequests/DonationRequests";

const AdminPanel = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="m-0">
      {/* Admin panel Heding start */}
      <div className=" head-line">
        <h4 className="blood-heading">
          {" "}
          <i className="fab fa-gratipay love"></i> Admin Dashboard
        </h4>
        <div className="noti">
          <button type="button" className=" position-relative noti-btn">
            <i className="fas fa-bell gonta mt-2"></i>
            <span className="position-absolute top-0 mt-2 start-100 translate-middle badge rounded-pill bg-dark">
              99+
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
      </div>
      {/* Admin panel Heding end */}
      <div className="row dashbord-fild ">
        <div className="col-lg-2 col-sm-12 dashbord-list">
          <div>
            <Link className="link-style" to={`${url}`}>
              <li className="list-item">
                <i className="fas fa-home list-icon"></i>Home
              </li>
            </Link>
            <Link className="link-style" to={`${url}/donor`}>
              <li className="list-item">
                <i className="fas fa-user-alt list-icon"></i>Donor
              </li>
            </Link>
            <Link className="link-style" to={`${url}/donationRequests`}>
              <li className="list-item">
                <i className="fas fa-user-alt list-icon"></i>Blood Donation
              </li>
            </Link>
            <Link className="link-style" to={`${url}/bloodRequests`}>
              <li className="list-item">
                <i className="fas fa-sync-alt  list-icon"></i>Blood Requests
              </li>
            </Link>
            <Link className="link-style" to={`${url}/requestHistory`}>
              <li className="list-item">
                <i className="fas fa-history list-icon"></i>Request History
              </li>
            </Link>
            <Link className="link-style" to={`${url}/make-admin`}>
              <li className="list-item">
                <i className="fas fa-users-cog list-icon"></i>Make Admin
              </li>
            </Link>
          </div>
        </div>

        <div className="col-lg-10 col-sm-12 p-3">
          <Switch>
            <Route exact path={`${path}`}>
              <Home></Home>
            </Route>
            <Route exact path={`${path}/donor`}>
              <Donor></Donor>
            </Route>
            <Route exact path={`${path}/donationRequests`}>
              <DonationRequests></DonationRequests>
            </Route>
            <Route exact path={`${path}/bloodRequests`}>
              <BloodRequests></BloodRequests>
            </Route>
            <Route exact path={`${path}/requestHistory`}>
              <RequestHistory></RequestHistory>
            </Route>
            <Route exact path={`${path}/make-admin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
