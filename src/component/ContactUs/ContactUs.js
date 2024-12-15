import emailjs from "emailjs-com";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import contact from "../../images/contact.svg";
import "./ContactUs.css";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uh89pp9",
        "template_4tewnlk",
        e.target,
        "user_WMqQQZ1MaZ7dIYmj3TGnB"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert(
            "Thanks for your e-mail.I will contact you as soon as possible"
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <Container className="section">
      <h2 className="text-center text-title mt-4 mb-2 py-1">Contact With Us</h2>
      <div className="form-container row">
        <div className="col-md-4 col-lg-4 col-12 contact-img container ">
          <img src={contact} className="img-fluid" alt="" />
        </div>
        <div className="col-md-7 col-lg-7 col-12 mt-5">
          <form onSubmit={sendEmail}>
            <div className="row pt-3 mx-auto">
              <div className="col-12 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="col-12 form-group pt-1 mx-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div className="col-12 form-group pt-1 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="Subject"
                />
              </div>
              <div className="col-12 form-group pt-1 mx-auto">
                <textarea
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Your message"
                  name="message"
                ></textarea>
              </div>
              <div className="col-12 pt-2 mx-auto mb-5">
                <input
                  type="submit"
                  className="btn btn-secondary"
                  value="Send Message"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
