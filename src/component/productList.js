import React from "react";
import Product from "./product.js";

export default function productList(props) {
  //   console.log(props );

  return props.productList.map((product, i) => {
    return <Product product={product} key={i} />;
  });
}

