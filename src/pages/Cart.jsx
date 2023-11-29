import React from "react";
import CartItems from "../components/CartItems/CartItems";
import { Container } from "react-bootstrap";

export default function Cart() {
  return (
    <section className="cart-section">
      <Container>
        <CartItems />
      </Container>
    </section>
  );
}
