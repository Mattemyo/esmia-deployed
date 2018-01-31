import React, { Component } from "react";
import Particles from "react-particles-js";
import Slideshow from "./components/Slideshow/Slideshow";
import Navigation from "./components/Navigation/Navigation";
import Contact from "./components/Contact/Contact";
import Info from "./components/Info/Info";
import Product from "./components/Product/Product";
import "./App.css";

const particlesOptions = {
  particles: {
    line_linked: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800
        }
      }
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
          return <Slideshow onRouteChange={this.onRouteChange} />;
          break;
        case "product":
          return <Product onRouteChange={this.onRouteChange} />;
          break;
        case "info":
          return <Info onRouteChange={this.onRouteChange} />;
          break;
        case "contact":
          return <Contact onRouteChange={this.onRouteChange} />;
          break;
        default:
          break;
      }
    };

    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        {route !== "landing" ? <Navigation /> : console.log('not landing')}
        {renderSwitch(route)}
      </div>
    );
  }
}

export default App;
