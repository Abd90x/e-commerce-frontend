import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";

export default function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <section className="product-section">
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
    </section>
  );
}
