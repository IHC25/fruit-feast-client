import axios from "axios";
import React from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/home";
  if (loading) {
    return (
      <div className="w-100 d-flex justify-content-center align-item-center">
        <Spinner animation="border" variant="primary"></Spinner>
      </div>
    );
  }

  if (user) {
    navigate(from, { replace: true });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    await signInWithEmailAndPassword(email, password);
    const {data} = await axios.post('https://aqueous-sierra-14452.herokuapp.com/get-token',{email});
    localStorage.setItem('accessToken',data.accessToken);
  };
  return (
    <div className="container py-3">
      <h2 className="pt-3">Please Login</h2>
      <div className="w-50 mx-auto py-5">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <div>
          Forgot Password?{" "}
          <Button
            onClick={() => {
              navigate("/reset");
            }}
            variant="link"
          >
            Reset
          </Button>
        </div>
        {error ? (
          <div className="py-2">
            <p className="text-danger">Error: {error.message}</p>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <p className="py-3">
        New to Fruit Feast?{" "}
        <Button
          onClick={() => {
            navigate("/register");
          }}
          variant="link"
        >
          Register
        </Button>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
