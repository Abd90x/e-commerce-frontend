import React from "react";
import ErrorImg from "../components/assets/images/page404.svg";
import { Button, Container, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function NoPage() {
  return (
    <Container style={{ textAlign: "center", marginBottom: "50px" }}>
      <Image
        loading="lazy"
        src={ErrorImg}
        alt="Error 404 Page Not found "
        style={{ maxHeight: "50vh", maxWidth: "100%" }}
      />
      <h1 style={{ fontSize: "4rem", textTransform: "uppercase" }}>
        Error 404
      </h1>
      <p>Page Not Found</p>
      <LinkContainer to="/">
        <Button className="mainBtn border-0 p-3">Back to Home</Button>
      </LinkContainer>
    </Container>
  );
}
