import React from "react";
import Subnav from "../Subnav/Subnav";
import "./Product.css";

class Product extends React.Component {

  render() {
    return (
      <div className="absolute products w-100">
        <Subnav />
      </div>
    );
  }
}


export default Product;
