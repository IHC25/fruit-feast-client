import React from "react";
import google from "../../images/google.png";

const SocialLogin = () => {
  return (
    <div>
      <button className="btn btn-dark d-block mx-auto w-50 my-2">
        <img src={google} alt="" />
        <span className="px-2 fw-bold">Google Sign In</span>
      </button>
    </div>
  );
};

export default SocialLogin;
