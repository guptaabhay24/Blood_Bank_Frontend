import React, { useEffect, useState } from "react";

const SingleDonation = (props) => {
  const { name, age, bloodGroup, disease, donateDate, status } = props.donation;

  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{bloodGroup}</td>
      <td>{disease}</td>
      <td>{donateDate}</td>
      <td>{status}</td>
    </tr>
  );
};

export default SingleDonation;
