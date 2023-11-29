import React from "react";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/images/logo.png";
import { Button, Image } from "react-bootstrap";
import { BsXCircle } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export default function NavBar() {
  const { getTotalCartItems } = useContext(ShopContext);

  const [show, setShow] = useState(false);

  const location = useLocation();

  const handleLink = () => {
    setShow(false);
  };

  return (
    <>
      <div className="anc-bar">Use Code ABD20 To Get a 20% Discount!</div>
      <Navbar expand="md" className="bg-body-tertiary mb-3" sticky="top">
        <Container style={{ flexWrap: "nowrap" }}>
          <Navbar.Brand className="brand-logo">
            <Image src={Logo} alt="Abdellatif Store" className="logo" />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-md`}
            onClick={() => setShow(true)}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="start"
            show={show}
          >
            <Offcanvas.Header>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <Image src={Logo} alt="Abdellatif Store" className="logo" />
              </Offcanvas.Title>
              <BsXCircle
                style={{ fontSize: "30px", cursor: "pointer" }}
                onClick={() => setShow(false)}
              />
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="justify-content-start flex-grow-1 pe-3"
                style={{ fontSize: "18px" }}
                variant="underline"
                activeKey={location.pathname}
              >
                <Nav.Item>
                  <LinkContainer to="/">
                    <Nav.Link onClick={() => handleLink("home")}>Home</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                  <LinkContainer to="/speakers">
                    <Nav.Link onClick={() => handleLink("speakers")}>
                      Speakers
                    </Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                  <LinkContainer to="/headsets">
                    <Nav.Link onClick={() => handleLink("headsets")}>
                      Headsets
                    </Nav.Link>
                  </LinkContainer>
                </Nav.Item>

                <Nav.Item>
                  <LinkContainer to="/keyboards">
                    <Nav.Link onClick={() => handleLink("keyboards")}>
                      Keyboards
                    </Nav.Link>
                  </LinkContainer>
                </Nav.Item>

                <Nav.Item>
                  <LinkContainer to="/mouses">
                    <Nav.Link onClick={() => handleLink("mouses")}>
                      Mouses
                    </Nav.Link>
                  </LinkContainer>
                </Nav.Item>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <div className="cart-wrapper">
            <div className="icon-btn">
              <Link to="/login">
                <Button className="mainBtn border-0 rounded-pill">Login</Button>
              </Link>
            </div>
            <LinkContainer to="/cart">
              <div className="icon-btn cart">
                <CiShoppingCart />
                <span className="cart-count">{getTotalCartItems()}</span>
              </div>
            </LinkContainer>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
