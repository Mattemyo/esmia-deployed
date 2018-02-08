import React from "react";
import "./Contact.css";
import InfoCard from "../InfoCard/InfoCard";

const Contact = ({ onRouteChange }) => (
  <div className="w-90 w-30-l center">
  <InfoCard>
    <div className="tc">
      <h1>Kontakt</h1>
      <p>Email: norberto@esmia.se</p>
      <p>Telefon: 070-1178451</p>
      <p>Gustafsvägen 1, Solna</p>
      <p>Öppettider: 08-7305081</p>
    </div>
  </InfoCard>
  </div>
);

export default Contact;
