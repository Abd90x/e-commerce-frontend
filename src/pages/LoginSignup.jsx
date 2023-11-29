import React from "react";
import { Container, Form, FloatingLabel, Button } from "react-bootstrap";
import { useState } from "react";
import { RiEyeFill } from "react-icons/ri";
import { RiEyeCloseLine } from "react-icons/ri";
import "./style/login-sign.css";

export default function LoginSignup() {
  const [showPass, setShowPass] = useState(false);
  const [haveAccount, setHaveAccount] = useState(false);

  const Login = () => {
    return (
      <div className="form-box">
        <h1 className="collectionTitle">Login</h1>
        <Form>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              required
              type="email"
              placeholder="name@example.com"
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="mb-3 password-input"
          >
            <Form.Control
              required
              type={showPass ? "text" : "password"}
              placeholder="Password"
            />
            <div className="password-icon">
              {showPass ? (
                <RiEyeCloseLine onClick={() => setShowPass(false)} />
              ) : (
                <RiEyeFill onClick={() => setShowPass(true)} />
              )}
            </div>
          </FloatingLabel>

          <Button className="mainBtn border-0 mb-2" type="submit">
            Login
          </Button>

          <p>
            Does not have an account?
            <Button variant="link" onClick={() => setHaveAccount(false)}>
              Create an account
            </Button>
          </p>
        </Form>
      </div>
    );
  };
  const SignUp = () => {
    return (
      <div className="form-box">
        <h1 className="collectionTitle">Sign Up</h1>
        <Form>
          <FloatingLabel controlId="name" label="Name" className="mb-3">
            <Form.Control required type="text" placeholder="Name" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              required
              type="email"
              placeholder="name@example.com"
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="mb-3 password-input"
          >
            <Form.Control
              required
              type={showPass ? "text" : "password"}
              placeholder="Password"
            />
            <div className="password-icon">
              {showPass ? (
                <RiEyeCloseLine onClick={() => setShowPass(false)} />
              ) : (
                <RiEyeFill onClick={() => setShowPass(true)} />
              )}
            </div>
          </FloatingLabel>

          <Form.Check
            type="checkbox"
            id="agree"
            label="I agree to the terms of use & privacy policy"
            className="mb-3"
            required
          />

          <Button className="mainBtn border-0 mb-2" type="submit">
            Sign Up
          </Button>

          <p>
            Already have an account?
            <Button variant="link" onClick={() => setHaveAccount(true)}>
              Login here
            </Button>
          </p>
        </Form>
      </div>
    );
  };

  return (
    <section className="login-section">
      <Container>{haveAccount ? <Login /> : <SignUp />}</Container>
    </section>
  );
}
