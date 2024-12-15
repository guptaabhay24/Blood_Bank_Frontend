import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import "./UserBloodRequest.css";
const UserBloodRequest = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.email = user.email;
    data.status = `Pending`;
    console.log(data);
    axios
      .post("http://localhost:5000/bloodRequest", data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your request has been submitted",
            showConfirmButton: true,
          });

          reset();
        }
      });
  };
  return (
    <div className="request-blood-form-container ">
      <h2 className="m-3">Make a blood request</h2>
      <div className="request-blood-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Patient Name"
            {...register("name", { required: true, maxLength: 20 })}
          />

          <input
            placeholder="Patient Age"
            type="number"
            min="0"
            {...register("age")}
          />

          <select {...register("gender", { required: true })}>
            <option value="" disabled selected hidden>
              Gender
            </option>
            <option defaultValue="male">Male</option>
            <option defaultValue="female">Female</option>
            <option defaultValue="other">Other</option>
          </select>

          <select {...register("bloodGroup")}>
            <option defaultValue="" disabled selected hidden>
              Blood Group
            </option>
            <option defaultValue="a+">A+</option>
            <option defaultValue="b+">B+</option>
            <option defaultValue="o+">O+</option>
            <option defaultValue="ab+">AB+</option>
            <option defaultValue="a-">A-</option>
            <option defaultValue="b-">B-</option>
            <option defaultValue="o-">O-</option>
            <option defaultValue="ab-">AB-</option>
          </select>

          <input
            placeholder="Address"
            {...register("address", { required: true })}
          />
          <input
            placeholder="Mobile Number"
            {...register("mobile", { required: true })}
          />
          <input
            placeholder="Reason"
            {...register("reason", { required: false, maxLength: 20 })}
          />
          <input
            placeholder="Quantity (Bags)"
            type="number"
            min="1"
            {...register("quantity")}
          />
          <input
            placeholder="Doctor's Name"
            {...register("doctorName", { required: false, maxLength: 20 })}
          />
          <label> &nbsp; Blood Needed Date:</label>
          <input
            type="date"
            placeholder="Donating Date"
            {...register("requestDate", { required: true, maxLength: 20 })}
          />

          <button className="btn btn-danger mt-4" type="submit">
            Send Request <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserBloodRequest;
