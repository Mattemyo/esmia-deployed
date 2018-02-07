import React, { Component } from "react";

export default class InfoCard extends Component {
  render() {
    return (
      <div className="mv6 br3 ba dark-gray b--black-10 shadow-5 center w-20-ns w-90">
        {this.props.children}
      </div>
    );
  }
}
