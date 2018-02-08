import React, { Component } from "react";

export default class InfoCard extends Component {
  render() {
    return (
      <div className="br3 ba dark-gray b--black-10 shadow-5 center">
        {this.props.children}
      </div>
    );
  }
}
