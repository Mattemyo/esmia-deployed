import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Subnav from "../Subnav/Subnav";
import "./Product.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
  }


  
  render() {
    return (
      <div className="absolute products w-100">
        <Subnav />
      </div>
    );
  }
}


export default Product;
