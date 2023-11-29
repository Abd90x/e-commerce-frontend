import React, { useState } from "react";
import "./descriptionBox.css";
import Nav from "react-bootstrap/Nav";

const Description = () => {
  return (
    <>
      <h3>
        Welcome to Abdellatif Store, your gateway to a world of innovation and
        convenience.
      </h3>
      <p>
        At Abdellatif, we're dedicated to bringing you an exceptional shopping
        experience, tailored to meet your diverse needs and desires.
      </p>
      <p>
        Discover a seamless and intuitive shopping journey as you navigate
        through our user-friendly interface. Find exactly what you're looking
        for with ease, whether you're browsing by category or searching for
        specific items.
      </p>
      <p>
        Join the community of savvy shoppers who trust Abdellatif Store for
        top-notch products and unparalleled service. Embrace convenience,
        sophistication, and reliability as you embark on an exciting shopping
        adventure with us. Welcome to Abdellatif Store, where your satisfaction
        is our mission.
      </p>
    </>
  );
};
const Shipping = () => {
  return (
    <>
      <h3>Shipping Policy</h3>

      <h4>Delivery Time:</h4>
      <p>
        Orders typically ship within 1-2 business days. Delivery times vary
        based on location and shipping method chosen during checkout.
      </p>

      <h4>Shipping Methods:</h4>
      <p>We offer standard and expedited shipping options.</p>

      <h4>Shipping Costs:</h4>
      <p>
        Shipping costs are calculated at checkout. Orders above $50 qualify for
        free standard shipping within the contiguous US.
      </p>

      <h4>International Shipping:</h4>
      <p>
        We do offer international shipping. Please note that international
        orders may be subject to customs fees and import duties.
      </p>

      <h4>Tracking Orders:</h4>
      <p>
        Customers will receive a tracking number via email once the order is
        shipped. You can track your order through our website.
      </p>
    </>
  );
};
const Return = () => {
  return (
    <>
      <h3>Return Policy</h3>

      <h4>Overview:</h4>
      <p>
        Explain the conditions under which customers can return purchased items.
      </p>

      <h4>Timeframe:</h4>
      <p>Define the period within which returns are accepted after purchase.</p>

      <h4>Condition of Returns:</h4>
      <p>
        Clarify the state in which products should be returned (unopened,
        undamaged, etc.).
      </p>

      <h4>Refund Process:</h4>
      <p>
        Detail how refunds are processed (store credit, original payment method,
        etc.).
      </p>

      <h4>Exceptions:</h4>
      <p>Highlight any specific items or conditions not eligible for return.</p>
    </>
  );
};

export default function DescriptionBox() {
  const [tab, setTab] = useState("description");
  const handleTap = () => {
    if (tab === "description") {
      return <Description />;
    } else if (tab === "shipping") {
      return <Shipping />;
    } else if (tab === "return") {
      return <Return />;
    } else return null;
  };
  return (
    <section className="description-section">
      <Nav fill variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link eventKey="/" onClick={() => setTab("description")}>
            Description
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => setTab("shipping")}>
            Shipping
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={() => setTab("return")}>
            Return
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="description-box">{handleTap()}</div>
    </section>
  );
}
