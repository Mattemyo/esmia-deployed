import React from "react";
import "./Contact.css";
import InfoCard from "../InfoCard/InfoCard";

const Contact = ({ onRouteChange }) => (
  <InfoCard>
    <div className="tc">
      <h1>Kontakt</h1>
      <p>Email: norberto@esmia.se</p>
      <p>Telefon: 070-1178451</p>
      <p>Gustafsvägen 1, Solna</p>
      <p>Öppettider: 08-7305081</p>
    </div>
  </InfoCard>
);

export default Contact;
