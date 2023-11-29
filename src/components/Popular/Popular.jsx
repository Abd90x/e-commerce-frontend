import React from "react";
import "./popular.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "../Data/item_data";
import Item from "../Item/Item";

export default function Popular() {
  return (
    <section>
      <h1 className="collectionTitle">Popular in Headsets</h1>
      <Container>
        <Row>
          {data.map((item) => {
            return (
              <Col xs={6} md={3} key={item.id}>
                <Item
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  old_price={item.old_price}
                  rating={item.rating}
                  rating_count={item.rating_count}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
