import React from "react";
import Logo from "./logo.png";
import "./Navigation.css";

// TODO: ADD TIMESTAMP

const imgStyle = {
  display: "inline-block",
  borderRadius: "100%",
  height: "50px",
  width: "auto",
  opacity: "0.75",
  float: "left",
  marginTop: "20px"
};

const headerStyle = {};

const Navigation = ({ onRouteChange }) => {
  return (
    <div>
      <header style={headerStyle} className="pt2 pl3 center w-80 h-20 mb0">
        <img
          onClick={() => onRouteChange("product")}
          style={imgStyle}
          className="shadow-5"
          src={Logo}
          alt="logo"
        />
        <h1 onClick={() => onRouteChange("product")} class="hidden">
          m
        </h1>

        <h1>Esmia HB</h1>
      </header>
      <nav
        className="center w-80-l mt0  pa0"
        style={{ display: "flex", justifyContent: "flex-end", height: "80px" }}
      >
        <li
          onClick={() => onRouteChange("product")}
          className="f3 link dim black underline ph3 pv0 pointer"
        >
          Produkter
        </li>
        <li
          onClick={() => onRouteChange("info")}
          className="f3 link dim black underline ph3 pv0 pointer"
        >
          Om
        </li>
        <li
          className="relative"
          onClick={() => onRouteChange("contact")}
          className="mr3 f3 link dim black underline ph3 pv0 pointer"
        >
          Kontakt
        </li>
      </nav>
    </div>
  );
};

export default Navigation;
