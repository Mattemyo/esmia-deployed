import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Skinkor from "./Skinkor";
import Chorizos from "./Chorizos";
import Kolonial from "./Kolonial";
import Paella from "./Paella";
import Ostar from "./Ostar";
import "./Product.css";




// List of all products
const allProducts = {
  Skinkor,
  Chorizos,
  Kolonial,
  Paella,
  Ostar
};

//Types of products
const productTypes = ["Skinkor", "Chorizos", "Ostar", "Kolonial", "Paella"];

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
      let activeStyle;
      if (this.state.activeList === productType) {
        activeStyle = {
          boxShadow: "2px 2px black"
        };
      }

      return (
        <p
          style={activeStyle}
          onClick={() => this.onListChange(productType)}
          className="f2 mv1 ph2 center tc w-40-m w-15 link dim black pa1 pointer ba b--black-10 br2 shadow-5"
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
            className="pa3 mv4 flex flex-wrap br3 ba dark-gray b--black-10 shadow-5 center"
          >
            <div className="w-100 w-20-l">
              <h3 className="tc">{listedProduct.name}</h3>
              <img
                className="center br3"
                src={listedProduct.img}
                alt={listedProduct.name}
              />
            </div>
            <div className="w-100 w-80-l f3 pl4">
              <p>{listedProduct.description}</p>
              <h4
              className="pl4">{listedProduct.price}</h4>
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
          className="mb4 list-container w-100 w-80-ns center"
          style={{ overflowY: "scroll", height: "800px" }}
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
