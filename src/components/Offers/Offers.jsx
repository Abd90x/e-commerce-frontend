import React from "react";
import "./offers.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import offerImage from "../assets/images/offers.png";
import { Link } from "react-router-dom";
export default function Offers() {
  return (
    <section className="offers-section">
      <Container>
        <Row style={{ alignItems: "center" }}>
          <Col xs={12} sm={6} className="offer-txt">
            <h1>Exclusive</h1>
            <h2>Offers For You</h2>
            <p>Only on the best sellers products</p>
            <Link to="/headsets">
              <Button variant="dark">Check Now</Button>
            </Link>
          </Col>
          <Col xs={12} sm={6} className="offer-img">
            <Image src={offerImage} alt="4 Colored Headsets" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
