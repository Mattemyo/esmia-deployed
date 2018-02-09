


import React, { Component } from "react";
import Particles from "react-particles-js";
import Welcome from "./components/Welcome/Welcome";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// import Slideshow from "./components/Slideshow/Slideshow";
import Navigation from "./components/Navigation/Navigation";
import Contact from "./components/Contact/Contact";
import Info from "./components/Info/Info";
import Product from "./components/Product/Product";
import Footer from "./components/Footer/Footer";

import "./App.css";


const particlesOptions = {
  particles: {
    number: {
      value: 20
    },
    line_linked: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800
        }
      }
    },
    size: {
      value: 12
    },
    move: {
      speed: 2
    }
  }
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "landing"
    };
  }

  onRouteChange = route => {
    console.log(route);
    this.setState({ route: route });
  };
  render() {
    const { route } = this.state;
    const renderSwitch = route => {
      switch (route) {
        case "landing":
          return <Product key={route} />;
          // break;
        case "product":
          return <Product key="product" onRouteChange={this.onRouteChange} />;
          // break;
        case "info":
          return <Info key={route} onRouteChange={this.onRouteChange} />;
          // break;
        case "contact":
          return <Contact key={route} onRouteChange={this.onRouteChange} />;
          // break;
        default:
          break;
      }
    };

    return (
      <div className="App w-100">
        <Particles className="particles" params={particlesOptions} />
        <Navigation onRouteChange={this.onRouteChange} />
        {route === "landing" ? <Welcome /> : console.log("not landing")}
        {/* Transition Routes */}
        <ReactCSSTransitionGroup
          className="route-transition absolute dt w-100"
          transitionName="ProductTransition"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          {renderSwitch(route)}
        </ReactCSSTransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default App;
