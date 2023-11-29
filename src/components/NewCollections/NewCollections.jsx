import React from "react";
import "./newCollections.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import keyboardCol from "../assets/images/keyboardCol.png";
import mousesCol from "../assets/images/mousesCol.png";
import speakersCol from "../assets/images/speakersCol.png";
import headsetCol from "../assets/images/headsetCol.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function NewCollections() {
  return (
    <section className="newCollections">
      <h1 className="collectionTitle">Discover Our New Collections</h1>
      <Container>
        <Row>
          <Col xs={6} md={3}>
            <div className="collection-card">
              <Image src={speakersCol} alt="Speaker" />
              <h2 className="collectionTitle">Speakers</h2>
              <p>Discover our New High Quality Speakers</p>
              <Link to="/speakers">
                View All <IoIosArrowForward />
              </Link>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="collection-card">
              <Image src={headsetCol} alt="Headset" />
              <h2 className="collectionTitle">Headsets</h2>
              <p>Discover our New High Quality Headsets</p>
              <Link to="/headsets">
                View All <IoIosArrowForward />
              </Link>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="collection-card">
              <Image src={keyboardCol} alt="Keyboard" />
              <h2 className="collectionTitle">Keyboards</h2>
              <p>Discover our New High Quality Keyboards</p>
              <Link to="/keyboards">
                View All <IoIosArrowForward />
              </Link>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="collection-card">
              <Image src={mousesCol} alt="Mouse" />
              <h2 className="collectionTitle">Mouses</h2>
              <p>Discover our New High Quality Mouses</p>
              <Link to="/mouses">
                View All <IoIosArrowForward />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
