import React, { useEffect, useState } from "react";
import "./newsLetter.css";
import { Container, Button, Form, InputGroup } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function NewsLetter() {
  const [inputEmail, setInputEmail] = useState("");
  const [isSubmit, setSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    setInputEmail("");
  };

  const hideToast = () => {
    setSubmit(false);
  };

  useEffect(() => {
    let time = setTimeout(hideToast, 3000);
    return () => {
      clearTimeout(time);
    };
  }, [isSubmit]);

  return (
    <section className="newsletter">
      <Container>
        <div className="box">
          <h1>Get Exclusive Offers On Your Email</h1>
          <p>Subscribe to our newsletter and stay updated</p>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <InputGroup>
              <InputGroup.Text id="btnGroupAddon">
                <MdOutlineMarkEmailRead />
              </InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Enter Your Email"
                aria-label="Enter Your Email"
                aria-describedby="btnGroupAddon"
                required
                onChange={(e) => setInputEmail(e.target.value)}
                value={inputEmail}
              />
            </InputGroup>
            <Button variant="outline-light" type="submit">
              Subscribe
            </Button>
          </Form>
        </div>
      </Container>

      <ToastContainer
        className="position-fixed"
        style={{
          top: "10px",
          transition: "0.29s",
          right: `${isSubmit ? "10px" : "-999px"}`,
        }}
      >
        <Toast>
          <Toast.Header style={{ position: "relative" }} closeButton={false}>
            <IoMdCheckmarkCircleOutline
              style={{ marginRight: "5px", color: "#66009a" }}
            />
            <strong className="me-auto">Newsletter</strong>
            <small className="text-muted">just now</small>
            <span
              className="bar"
              style={{
                width: `${isSubmit ? "100%" : "0px"}`,
              }}
            ></span>
          </Toast.Header>
          <Toast.Body style={{ color: "#595C5F" }}>
            Thank you! You Are Now Subscribed.
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </section>
  );
}
