import React, { Component } from "react";
import ListedProduct from "../ListedProduct/ListedProduct";
import Skinkor from "./Skinkor";
import Chorizos from "./Chorizos";
import Kolonial from "./Kolonial";
import Paella from "./Paella";
import Ostar from "./Ostar";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // List of all products
    const allProducts = { Skinkor, Chorizos, Kolonial, Paella, Ostar };

    //    { onListChange, activeList }= this.props;
    // Rendered list depends on the  list that is active
    const products = allProducts[this.props.activeList].map(product => (
      <ListedProduct
        key={product.name}
        name={product.name}
        price={product.price}
        img={product.img}
        description={product.description}
      />
    ));
    return (
      <ReactCSSTransitionGroup
        transitionName="ListTransition"
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}
      >
        {products}
      </ReactCSSTransitionGroup>
    );
  }
}
