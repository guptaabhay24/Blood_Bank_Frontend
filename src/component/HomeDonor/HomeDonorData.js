import React from "react";
import { Card } from "react-bootstrap";
import DonorM from "./DonorM";

const HomeDonorData = (props) => {
  // console.log(props)
  const { name, gender, bloodGroup,address } = props.donordata;

  return (
    <div className="col-lg-4 col-sm-12 mt-3">
      <Card border="info">
        <Card.Header>
          {gender === "Male" ? (
            <i className="fas fa-user user-icon"></i>
          ) : (
            <i className="fas fa-female user-icon"></i>
          )}
          <small className="name-donar">{name}</small>
        </Card.Header>
        <Card.Body>
          <Card.Title className="card-taitels">
            Blood Group <strong className="blood-grp">{bloodGroup}</strong>
          </Card.Title>
          <p>Address : {address}</p>
          <Card.Text>
            <button className="concact-btn ">
              <DonorM donar={props.donordata}></DonorM>
            </button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeDonorData;
