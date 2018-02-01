import React from "react";
import "./Contact.css";

const Contact = ({ onRouteChange }) => {
  return (
    <div className="br3 ba mt2 dark-gray b--black-10 w-100 mw6 shadow-5 center tc">
      <h1>Kontakt</h1>
      <p>Email: norberto@esmia.se</p>
      <p>Telefon: 070-1178451</p>
      <p>Gustafsvägen 1, Solna</p>

      <p>Öppettider: 08-7305081</p>
    </div>
  );
};

export default Contact;
