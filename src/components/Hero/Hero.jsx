import React from "react";
import "./Hero.css";
import Headset from "../assets/images/headset-herp.png";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section style={{ padding: "5px 20px" }}>
      <div className="hero-bg">
        <div className="hero-txt">
          <h1>Unveiling Endless Possibilities</h1>
          <p>
            Discover Your Perfect Find! Explore, Shop, and Elevate Your Style
            Today!
          </p>
          <Link to="/headsets">
            <Button variant="outline-dark" className="hero-btn">
              Shop Now
            </Button>
          </Link>
        </div>

        <Image className="hero-img" src={Headset} alt="Headset" />
      </div>
    </section>
  );
}
