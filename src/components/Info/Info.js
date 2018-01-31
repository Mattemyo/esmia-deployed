import React from "react";
import "./Info.css";

const Info = ({ onRouteChange }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <p className="f3 link dim black underline pa3 pointer">Produkter</p>
      <p className="f3 link dim black underline pa3 pointer">Info</p>
      <p className="f3 link dim black underline pa3 pointer mr5">Kontakt</p>
    </nav>
  );
};

export default Info;
