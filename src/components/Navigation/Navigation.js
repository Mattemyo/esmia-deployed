import React from "react";
import "./Navigation.css";

// TODO: ADD TIMESTAMP

const Navigation = ({ onRouteChange }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
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
        Info
      </p>
      <p
        onClick={() => onRouteChange("contact")}
        className="f3 link dim black underline pa3 pointer mr5"
      >
        Kontakt
      </p>
    </nav>
  );
};

export default Navigation;
