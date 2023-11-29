import React, { useContext, useState } from "react";
import "./productDisplay.css";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import DescriptionBox from "../DescriptionBox/DescriptionBox";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import Accordion from "react-bootstrap/Accordion";
import { BsBox } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiInboxUnarchiveLine } from "react-icons/ri";
import { ShopContext } from "../../context/ShopContext";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

export default function ProductDisplay(props) {
  const { product } = props;

  const [qty, setQty] = useState(1);

  const { addToCart } = useContext(ShopContext);

  return (
    <Container>
      <Row>
        <Col xs={12} sm={7} style={{ marginBottom: "20px" }}>
          <div className="product-main-img">
            <Image src={product.image} alt={product.name} />
          </div>
        </Col>
        <Col xs={12} sm={5}>
          <div className="product-details">
            <div className="product-vendor">
              <span>Abdellatif Store</span>
            </div>
            <div className="product-rating">
              <Rating
                readonly
                initialValue={product.rating}
                allowFraction
                fillColor="#66009a"
                size="24px"
              />
              <span className="rating-count">
                {product.rating}
                <sup> ({product.rating_count})</sup>
              </span>
            </div>

            <h1 className="product-name">{product.name}</h1>

            <div className="product-price">
              <span className="price">${product.new_price}</span>
              <span className="old-price">${product.old_price}</span>
            </div>
            <div className="product-qty">
              <h5>Quantity:</h5>
              <div className="quantity-selector">
                <button
                  className="plus mainBtn"
                  onClick={() => setQty((prev) => prev + 1)}
                >
                  <FaPlus />
                </button>
                <div className="qty">{qty}</div>
                <button
                  disabled={qty < 1}
                  className="minus mainBtn"
                  onClick={() => setQty((prev) => prev - 1)}
                >
                  <FaMinus />
                </button>
              </div>
            </div>
            <Button
              className="mainBtn border-0"
              onClick={() => {
                addToCart(product.id, qty);
                setQty(1);
              }}
            >
              ADD TO CART
            </Button>
            <div className="product-description">
              <p>{product.description}</p>
            </div>
            <div className="product-variant"></div>

            <div className="product-acc-details">
              <h5>Product Details</h5>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="accordion-header">
                    <BsBox />
                    Box size
                  </Accordion.Header>
                  <Accordion.Body>50cm x 50cm (20"x 20")</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="accordion-header">
                    <LiaShippingFastSolid />
                    Ships From
                  </Accordion.Header>
                  <Accordion.Body>
                    All Products are Ships from our Warehouses Based on your
                    Location
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="accordion-header">
                    <RiInboxUnarchiveLine />
                    What Include
                  </Accordion.Header>
                  <Accordion.Body>
                    <li>{product.name}</li>
                    <li>User Manual</li>
                    <li>Cables</li>
                    <li>Warranty Card</li>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="product-category">
              Category: <span>{product.category}</span>
            </div>
            <div className="product-tags">
              Tags:
              {product.tags.map((tag, index) => {
                return (
                  <span className="tag" key={index}>
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </Col>
      </Row>
      <DescriptionBox />
      <RelatedProducts category={product.category} id={product.id} />
    </Container>
  );
}
