import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const Donar = () => {
  const { user, logOut } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [bloods, setBloods] = useState([]);

  useEffect(() => {
    fetch("https://blood-bank-backend-two.vercel.app/bloods").then((res) =>
      res.json().then((data) => setBloods(data))
    );
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    data.status = `Pending`;
    data.email = user.email;
    // if (donars.map((donar) => donar.email === user.email)) {
    //   return Swal.fire({
    //     position: "center",
    //     icon: "error",
    //     title: "You are already registered as a donar",
    //     showConfirmButton: true,
    //   });
    // }
    axios
      .post("https://blood-bank-backend-two.vercel.app/bloods", data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank you for your kindness",
            showConfirmButton: true,
          });

          reset();
        }
      });
  };
  return (
    <div className="donate-blood-form-container ">
      <h2 className="m-3">Donate Blood Save Life !</h2>
      <div className="donate-blood-form">
        {/* <h5 className="mb-5">Please give your details to donate blood</h5> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Your Name"
            defaultValue={user.displayName}
            {...register("name", { required: true, maxLength: 20 })}
          />
          <input
            placeholder="Your Age (18-60 only)"
            type="number"
            min="18"
            max="60"
            {...register("age", { min: 18, required: true })}
          />
          <select {...register("gender", { required: true })}>
            <option value="" disabled selected hidden>
              Gender
            </option>
            <option defaultValue="male">Male</option>
            <option defaultValue="female">Female</option>
            <option defaultValue="other">Other</option>
          </select>

          <select {...register("bloodGroup", { required: true })}>
            <option defaultValue="" disabled selected hidden>
              Select Your Blood Group
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
            placeholder="Mobile Number"
            {...register("mobile", { required: true })}
          />
          <input
            placeholder="Address"
            {...register("address", { required: true })}
          />

          <input
            placeholder="Disease (if any, oterwise type 'no')"
            {...register("disease", { required: true })}
          />
          <label> &nbsp; Donate date:</label>
          <input
            type="date"
            placeholder="Last donate date"
            {...register("DonateDate", { required: true, maxLength: 20 })}
          />

          <button className="btn btn-danger mt-4" type="submit">
            Donate Blood <i className="fas fa-tint"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donar;
