import { async } from "@firebase/util";
import React from "react";
import { Button } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const ResetPassword = () => {
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const handleResetPassword = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    await sendPasswordResetEmail(email);
    toast.success("Password Reset Link Sent!");
    e.target.reset();
  };
  return (
    <div className="container" style={{ height: "500px" }}>
      <div className="my-5">
        <h2 className="mb-3">Reset Password</h2>
        <form onSubmit={handleResetPassword}>
          <input
            className="w-25"
            type="email"
            name="email"
            placeholder="Enter Email"
            required
          />
          <Button
            className="px-2 mx-2"
            variant="primary"
            type="submit"
            size="sm"
          >
            Reset Password
          </Button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ResetPassword;
