import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from "../../images/google.png";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="w-100 d-flex justify-content-center align-item-center">
        <Spinner animation="border" variant="primary"></Spinner>
      </div>
    );
  }

  if (user) {
    navigate("/home");
  }

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  return (
    <div>
      <Button onClick={handleGoogleLogin} variant="dark" size="lg">
        <img src={google} alt="" />
        <span className="px-2 fw-bold">Google Login</span>
      </Button>
      {error ? (
        <div>
          <p>Error: {error.message}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SocialLogin;
