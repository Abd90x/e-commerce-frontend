import React from "react";
import { Container } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

export default function Breadcrumbs(props) {
  const { product } = props;

  return (
    <Container>
      <Breadcrumb style={{ fontSize: "14px" }}>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item style={{ textTransform: "capitalize" }}>
          <Link to={`/${product.category}`}>{product.category}</Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
}
