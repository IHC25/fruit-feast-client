import React from "react";

const Contact = () => {
  return (
    <div className="container my-2">
      <h2>Contact Us</h2>
      <form className="d-flex flex-column align-items-center">
        <input
          className="w-50 m-2"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className="w-50 m-2"
          type="email"
          name="email"
          placeholder="User Email"
        />
        <textarea
          className="w-50 m-2"
          name="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
        ></textarea>
        <input className="btn btn-primary" type="submit" value="Contact" />
      </form>
    </div>
  );
};

export default Contact;
