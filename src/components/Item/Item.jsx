import React from "react";
import "./item.css";
import { Image, Badge } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

export default function Item(props) {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="item-section">
      <Badge bg="dark">Sale</Badge>
      <Link to={`/product/${props.id}`} onClick={handleClick}>
        <div className="item-image">
          <Image src={props.img} alt={props.name} loading="lazy" />
        </div>
      </Link>
      <div className="rating">
        <Rating
          readonly
          initialValue={props.rating}
          style={{ fontSize: "10px" }}
          allowFraction
          fillColor="#66009a"
          size="18px"
        />

        <span className="rating-count">
          {props.rating}
          <sup> ({props.rating_count})</sup>
        </span>
      </div>
      <Link to={`/product/${props.id}`} onClick={handleClick}>
        <h3 className="item-title">{props.name}</h3>
      </Link>
      <div className="item-price">
        <span className="price">${props.price}</span>
        <span className="old">${props.old_price}</span>
      </div>
    </section>
  );
}
