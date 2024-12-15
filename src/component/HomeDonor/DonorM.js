import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const DonorM = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { name, gender, address, bloodGroup, age, mobile,lastDonateDate } = props.donar;

  return (
    <>
      <Button onClick={handleShow} className="btn-contact">
        Contact Me
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Donar Name: {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h6>Age: {age}</h6>
        <h6>Gender: {gender}</h6>
        <h6>Blood Group: {bloodGroup}</h6>
        <h6>Address: {address}</h6>
        <h6>Mobile: {mobile}</h6>
        <h6>The latest blood donation : {lastDonateDate}</h6>
        </Modal.Body>
        

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DonorM;