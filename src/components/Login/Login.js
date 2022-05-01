import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="container py-3">
      <h2 className="pt-3">Please Login</h2>
      <div className="w-50 mx-auto py-5">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
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
    </div>
  );
};

export default Login;
