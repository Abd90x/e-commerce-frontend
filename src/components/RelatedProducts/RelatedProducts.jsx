import React from "react";
import all_product from "../Data/all_product";
import { Col, Row } from "react-bootstrap";
import Item from "../Item/Item";

export default function RelatedProducts({ category, id }) {
  let relatedArr = all_product
    .filter((e) => {
      return e.category === category && e.id !== id;
    })
    .slice(0, 4);

  return (
    <section className="related-product">
      <h1 className="collectionTitle">You May Also Like</h1>
      <Row>
        {relatedArr.map((item) => {
          return (
            <Col key={item.id} xs={6} md={3}>
              <Item
                key={item.id}
                id={item.id}
                img={item.image}
                name={item.name}
                price={item.new_price}
                old_price={item.old_price}
                rating={item.rating}
                rating_count={item.rating_count}
              />
            </Col>
          );
        })}
      </Row>
    </section>
  );
}
