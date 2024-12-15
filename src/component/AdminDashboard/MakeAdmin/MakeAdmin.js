import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Swal from "sweetalert2";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://blood-bank-backend-two.vercel.app/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Made Admin Successfull",
            showConfirmButton: true,
            timer: 1500,
          });
          setEmail("");
        }
        if (data.modifiedCount === 0 && data.matchedCount === 1) {
          Swal.fire({
            text: `This User Is Already Admin`,
          });
        }
        if (data.modifiedCount === 0 && data.matchedCount === 0) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `User Not Found`,
          });
        }
      });

    e.preventDefault();
  };
  return (
    <div className="make-admin-container">
      <div className=" make-admin-form">
        <h2>Make An Admin</h2>
        <form className="mb-5, pb-5" onSubmit={handleAdminSubmit}>
          <TextField
            sx={{ width: "100%" }}
            label="Email"
            type="email"
            onBlur={handleOnBlur}
            variant="standard"
          />{" "}
          <br />
          <Button className="mt-3" type="submit" variant="contained">
            Make Admin
          </Button>
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
