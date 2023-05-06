import React from "react";
import Button from "./Button";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <Button className="secondary-button" text="Submit" />
      </div>
    </div>
  );
};

export default Contact;
