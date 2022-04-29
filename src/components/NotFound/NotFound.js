import React from "react";
import error from "../../images/error.png";

const NotFound = () => {
  return (
    <div>
      <h3>Page Not Found!</h3>
      <p>We Couldn't found this page on our server</p>
      <img src={error} alt="" />
    </div>
  );
};

export default NotFound;
