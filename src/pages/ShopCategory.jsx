import React, { useContext, useState } from "react";
import "./style/shopCategoty.css";
import { ShopContext } from "../context/ShopContext";
import { Col, Container, Row } from "react-bootstrap";
import Item from "../components/Item/Item";
import Dropdown from "react-bootstrap/Dropdown";

export default function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  const [sortBy, setSortBy] = useState("");

  let sortedArr = [];

  if (sortBy === "price_low") {
    sortedArr = all_product.sort((a, b) => a.new_price - b.new_price);
  } else if (sortBy === "price_high") {
    sortedArr = all_product.sort((a, b) => b.new_price - a.new_price);
  } else if (sortBy === "best_selling") {
    sortedArr = all_product.sort((a, b) => b.rating_count - a.rating_count);
  } else {
    sortedArr = all_product;
  }

  return (
    <section className="shop-category">
      <div className="banner">
        <h1>New Year Sale</h1>
        <p>
          On All <span className="category">{props.category}</span> Collection
        </p>
      </div>
      <Container>
        <div className="shop-category-indexSort">
          <p>
            <span>Showing 1-8</span> out of 8
          </p>
          <Dropdown>
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              Sort
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                className="menu-item"
                onClick={() => setSortBy("best_selling")}
              >
                Best Selling
              </Dropdown.Item>
              <Dropdown.Item
                className="menu-item"
                onClick={() => setSortBy("price_low")}
              >
                Price Low to High
              </Dropdown.Item>
              <Dropdown.Item
                className="menu-item"
                onClick={() => setSortBy("price_high")}
              >
                Price High to Low
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="shop-product">
          <Row>
            {sortedArr.map((item, index) => {
              if (props.category === item.category) {
                return (
                  <Col xs={6} md={3} key={index}>
                    <Item
                      key={index}
                      id={item.id}
                      name={item.name}
                      price={item.new_price}
                      old_price={item.old_price}
                      img={item.image}
                      rating={item.rating}
                      rating_count={item.rating_count}
                    />
                  </Col>
                );
              } else {
                return null;
              }
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
}
