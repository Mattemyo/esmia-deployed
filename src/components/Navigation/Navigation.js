import React from "react";
import "./Navigation.css";

// TODO: ADD TIMESTAMP

const Navigation = ({ onRouteChange }) => {
  return (
    <nav
      className="center w-80-l"
      style={{ display: "flex", justifyContent: 'flex-end' }}
    >
      <p
        onClick={() => onRouteChange("product")}
        className="f3 link dim black underline pa3 pointer"
      >
        Produkter
      </p>
      <p
        onClick={() => onRouteChange("info")}
        className="f3 link dim black underline pa3 pointer"
      >
        Om
      </p>
      <p
        className="relative"
        onClick={() => onRouteChange("contact")}
        className="f3 link dim black underline pa3 pointer"
      >
        Kontakt
      </p>
    </nav>
  );
};

export default Navigation;
