import React, { Component } from "react";

export default class Scroll extends Component {
  render() {
    return (
      <div
        className="mb4 list-container w-90 w-80-ns center"
        style={{ overflowY: "scroll", height: "800px", borderTop: '1px solid rgba(0, 0, 0, 0.2)' }}
      >
        {this.props.children}
      </div>
    );
  }
}
