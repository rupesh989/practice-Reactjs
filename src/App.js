// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Navbar from "./component/navbar";
import ProductList from "./component/productList.js";
// import Footer from "./component/footer.js";
import product from "./component/product.js";

function App() {
  const productList = [
    {
      price: 99999,
      name: "Iphone 10S Max",
      qauntity: 0,
    },
    {
      price: 9999,
      name: "Redmi note 10S Max",
      qauntity: 10,
    },
  ];
  // let [productList, setProductList] = useState(products);

  return (
    <>
      <Navbar />
      <main className="container m-t5">
        <ProductList productList={productList} />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
