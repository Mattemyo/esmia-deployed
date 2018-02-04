import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Skinkor from "./Skinkor";
import Chorizos from "./Chorizos";
import Kolonial from "./Kolonial";
import Paellor from "./Paellor";
import Ostar from "./Ostar";
import "./Product.css";

// List of all products
const allProducts = {
  Skinkor,
  Chorizos,
  Kolonial,
  Paellor,
  Ostar
};

//Types of products
const productTypes = ["Skinkor", "Chorizos", "Ostar", "Kolonial", "Paellor"];

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeList: "Skinkor"
    };
  }

  //Decide which list to show
  onListChange = productType => {
    this.setState({
      activeList: productType
    });
  };

  // Rendered on page
  render() {
    // Choose which type of product will be shown
    const subNav = productTypes.map(productType => {
      return (
        <p
          style={{ fontSize: "2rem" }}
          onClick={() => this.onListChange(productType)}
          className="mv1 center tc w-40-m w-19 f3 link dim black pa2 pointer ba b--black-10 br2 shadow-5"
        >
          {productType}
        </p>
      );
    });

    // Rendered list depends on the  list that is active
    const listedProducts = allProducts[this.state.activeList].map(
      listedProduct => {
        return (
          <div
            key={listedProduct.name}
            className="flex flex-wrap br3 pa2 ba dark-gray b--black-10 mv4 shadow-5 center"
          >
            <div className="center w-100-m w-20">
              <h3 className="tc">{listedProduct.name}</h3>
              <img
                className="br6 w-100"
                src={listedProduct.imgUrl}
                alt={listedProduct.name}
              />
            </div>
            <div className="center w-100-m w-60 pa2">
              <p>{listedProduct.description}</p>
              <h2>Pris: {listedProduct.price}</h2>
            </div>
          </div>
        );
      }
    );

    return (
      <div className="absolute products w-100">
        <div className="flex flex-wrap product-nav br3 pa2 ba dark-gray b--black-10 mt2 mb4 w-80 w-80-m w-50-1 shadow-5 center">
          {subNav}
        </div>
        <div
          className="list-container w-80 w-100-m center"
          style={{ overflowY: "scroll", height: "400px" }}
        >
          <ReactCSSTransitionGroup
            transitionName="ListTransition"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            {listedProducts}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default Product;
