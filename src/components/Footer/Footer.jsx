import React from "react";
import "./footer.css";
import Logo from "../assets/images/logo.png";
import { Container, Image } from "react-bootstrap";
import {
  FaSquareFacebook,
  FaLinkedin,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const date = new Date();
  return (
    <footer>
      <Container>
        <div className="footer-main">
          <Image src={Logo} alt="Logo" className="footer-logo" />
          <h4>Discover Your Unique Journey</h4>
          <ul className="links">
            <li>
              <Link to="/" onClick={handleClick}>
                <span className="footer-link">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/speakers" onClick={handleClick}>
                <span className="footer-link">Speakers</span>
              </Link>
            </li>
            <li>
              <Link to="/headsets" onClick={handleClick}>
                <span className="footer-link">Headsets</span>
              </Link>
            </li>
            <li>
              <Link to="/keyboards" onClick={handleClick}>
                <span className="footer-link">Keyboards</span>
              </Link>
            </li>
            <li>
              <Link to="/mouses" onClick={handleClick}>
                <span className="footer-link">Mouses</span>
              </Link>
            </li>
          </ul>
          <p>Follow Us on Social Media:</p>

          <div className="social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaSquareFacebook />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer">
              <FaPinterest />
            </a>
          </div>
        </div>
      </Container>
      <div className="copyright">
        Copyright&copy; {date.getFullYear()} | Code & Design By Abdellatif ❤️
      </div>
    </footer>
  );
}
