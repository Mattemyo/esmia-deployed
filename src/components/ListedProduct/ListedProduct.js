import React, { Component } from "react";

export default class ListedProduct extends Component {
  
  render() {
    const { name, img, description, price } = this.props;
    return (
      <div
        key={name}
        className="pa3 mv4 flex flex-wrap br3 ba dark-gray b--black-10 shadow-5 center"
      >
        <div className="w-100 w-20-l">
          <h3 className="tc">{name}</h3>
          <img className="center br3" src={img} alt={name} />
        </div>
        <div className="w-100 w-80-l f3 pl4">
          <p>{description}</p>
          <h4 className="pl4">{price}</h4>
        </div>
      </div>
    );
  }
}
