import React, { Component } from "react";

export default class Scroll extends Component {
  render() {
    return (
      <div
        className="mb4 list-container w-100 w-80-ns center"
        style={{ overflowY: "scroll", height: "800px" }}
      >
        {this.props.children}
      </div>
    );
  }
}
