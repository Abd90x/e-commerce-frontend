import React, { useContext, useState } from "react";
import "./cartItems.css";
import { ShopContext } from "../../context/ShopContext";
import {
  Button,
  Col,
  FloatingLabel,
  Form,
  Image,
  Row,
  Stack,
} from "react-bootstrap";
import { FaRegTrashCan } from "react-icons/fa6";
import EmptyCart from "../assets/images/emptyCart.svg";

export default function CartItems() {
  const { getTotalCartAmount, all_product, cartItem, removeFromCart } =
    useContext(ShopContext);

  const [promoCode, setPromoCode] = useState("");
  const [isAppledPromo, setApplied] = useState(false);
  const [isVaildPromo, setIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (promoCode === "ABD20" && isAppledPromo === false) {
      setApplied(true);
      setIsValid(false);
    } else {
      setPromoCode("");
      setApplied(false);
      setIsValid(true);
    }
  };

  return (
    <>
      {getTotalCartAmount() > 0 ? (
        <section className="cart-items">
          <div className="cart-top">
            <p>Product</p>
            <p className="cart-top-title">Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />

          {all_product.map((e, index) => {
            if (cartItem[e.id] > 0) {
              return (
                <div key={index}>
                  <div className="cart-items-format">
                    <Image
                      src={e.image}
                      alt={e.name}
                      className="cart-product-image"
                    />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <p className="cart-qty">{cartItem[e.id]}</p>
                    <p>${Number(e.new_price * cartItem[e.id]).toFixed(2)}</p>
                    <Button variant="link" onClick={() => removeFromCart(e.id)}>
                      <FaRegTrashCan />
                    </Button>
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          })}
          <Row className="cart-bottom" style={{ gap: "35px" }}>
            <Col xs={12} md={7}>
              <div className="cart-total">
                <h2>Cart Total</h2>
                <div>
                  <Stack direction="horizontal" className="cart-total-items">
                    <p>Suptotal:</p>
                    <p>${Number(getTotalCartAmount()).toFixed(2)}</p>
                  </Stack>
                  <hr />
                  <Stack direction="horizontal" className="cart-total-items">
                    <p>Shipping Fees: </p>
                    <p>$7.99</p>
                  </Stack>
                  <hr />
                  <Stack direction="horizontal" className="cart-total-items">
                    <p>Promo Code: </p>
                    <p>{promoCode}</p>
                  </Stack>
                  <hr />
                  <Stack direction="horizontal" className="cart-total-items">
                    <p>Total:</p>
                    <p>
                      $
                      {`${
                        isAppledPromo
                          ? Number(
                              getTotalCartAmount() +
                                7.99 -
                                (getTotalCartAmount() + 7.99) * 0.2
                            ).toFixed(2)
                          : Number(getTotalCartAmount() + 7.99).toFixed(2)
                      }`}
                    </p>
                  </Stack>
                </div>
                <Button className="mainBtn border-0 checkout-btn">
                  PROCEED TO CHECKOUT
                </Button>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="cart-promo">
                <p>If you have a promo code, Enter it Here</p>
                <Form onSubmit={(e) => handleSubmit(e)}>
                  <div className="promo-box">
                    <FloatingLabel controlId="floatingInput" label="Promo Code">
                      <Form.Control
                        type="text"
                        placeholder="ABD20"
                        onChange={(e) => {
                          setPromoCode(e.target.value.toUpperCase());
                          setIsValid(false);
                        }}
                        value={promoCode}
                        disabled={isAppledPromo}
                      />
                    </FloatingLabel>
                    <Button type="submit" className="mainBtn border-0">
                      {isAppledPromo ? "Remove" : "Apply"}
                    </Button>
                  </div>
                </Form>
                {isVaildPromo === true && (
                  <p className="valid-promo">
                    Please provide a valid Promo Code.
                  </p>
                )}
              </div>
            </Col>
          </Row>
        </section>
      ) : (
        <div className="cart-empty">
          <Image src={EmptyCart} alt="Empty Cart" />
          <h1>Your Cart is Empty</h1>
          <h4>Let's Add Some Products</h4>
          <Button href="/" className="mainBtn border-0 empty-cartBtn">
            Continue Shopping
          </Button>
        </div>
      )}
    </>
  );
}
