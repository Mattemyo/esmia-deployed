import React, { Component } from "react";
import Scroll from "../Scroll/Scroll";
import ProductList from "../ProductList/ProductList";
import "./Subnav.css";
export default class Subnav extends Component {
  constructor(props) {
    super(props);
    this.state = { activeList: "Skinkor" };
  }

  render() {
    const { activeList } = this.state;
    //Decide which list to show
    const onListChange = productType => {
      this.setState({ activeList: productType });
    };

    const buttons = ["Skinkor", "Chorizos", "Ostar", "Kolonial", "Paella"].map(
      productType => {
        let activeStyle;
        if (activeList === productType) {
          activeStyle = { boxShadow: "2px 2px black" };
        }
        return (
          <p
            style={activeStyle}
            onClick={() => onListChange(productType)}
            className="f2 mv1 ph2 center tc w-40-m w-15 link dim black pa1 pointer ba b--black-10 br2 shadow-5"
          >
            {productType}
          </p>
        );
      }
    );

    return (
      <div>
        <div className="flex flex-wrap product-nav br3 pa2 ba dark-gray b--black-10 mt2 mb4 w-80 w-80-m w-50-1 shadow-5 center">
          {buttons}
        </div>

        <Scroll>
          
            <ProductList
              onListChange={() => onListChange}
              activeList={activeList}
            />
         
        </Scroll>
      </div>
    );
  }
}
