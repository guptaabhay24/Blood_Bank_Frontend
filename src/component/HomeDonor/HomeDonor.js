import React, { useEffect, useState } from "react";
import "./HomeDonor.css";
import HomeDonorData from "./HomeDonorData";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const HomeDonor = () => {
  const [donors, setDonor] = useState([]);
  const [uidonor, setUidonor] = useState([]);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const seacredonor = donors.filter(
      (donor) => donor?.bloodGroup === data.bloodGroup
    );
    setUidonor(seacredonor);
  };

  useEffect(() => {
    fetch("https://blood-bank-backend-two.vercel.app/donateBlood")
      .then((res) => res.json())
      .then((Donordata) => {
        console.log(Donordata);
        const AproveDonorData = Donordata.filter(
          (data) => data.status === "Approved"
        );
        setUidonor(AproveDonorData);
        setDonor(AproveDonorData);
      });
  }, []);

  if (!donors.length) {
    return (
      <button className="btn btn-primary spner-btn mb-5" type="button" disabled>
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
      <div className="Searce-Fild">
        <form onSubmit={handleSubmit(onSubmit)} className="search-option">
          <h3 className="Donor-src">
            Donor Search <i className="fas fa-arrow-right"></i>
          </h3>
          <div className="select-option">
            <small className="smaill-css">Blood Group</small>
            <select {...register("bloodGroup")} className="mb-3 select-options">
              <option value="A+">A+</option>
              <option value="O+">O+</option>
              <option value="AB+">AB+</option>
              <option value="B+">B+</option>
              <option value="A-">A-</option>
              <option value="O-">O-</option>
              <option value="AB-">AB-</option>
              <option value="B-">B-</option>
            </select>
            <input type="submit" value="Search" className="searce-btn" />
          </div>
        </form>
      </div>
      <div className="m-5 make-req">
        <h5>
          If you did't find a donar, please send blood request to the blood
          bank.
        </h5>
        <NavLink
          style={{ textDecoration: "none", color: "red" }}
          to="/user-blood-request"
        >
          <button className="btn btn-danger" color="inherit">
            {" "}
            Blood Request
          </button>
        </NavLink>
      </div>
      {!uidonor.length && (
        <div>
          <h4 className="no-fund">Opps ! No Donor Found</h4>
        </div>
      )}
      <div className="row mx-3 mb-5">
        {uidonor.map((donordata) => (
          <HomeDonorData
            donordata={donordata}
            key={donordata._id}
          ></HomeDonorData>
        ))}
      </div>
    </div>
  );
};

export default HomeDonor;
