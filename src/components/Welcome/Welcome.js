import React from "react";
import infoCard from "../InfoCard/InfoCard";

const Welcome = () => {
  return (
    <div className="w-90 w-80-l center mb3">
      <h1 className="tc pl3">Välkommen till Esmia!</h1>
      <p className="pa3 tl">
        Vi säljer spanska delikatesser. Efter 20 år i branschen kan vi bekräfta
        att det är kvalitet som säljer!
      </p>
      <p className="pa3 tl">
        Vårt lager består av kylvaror, såsom ibericoskinka, serranoskinka,
        chorizo, lagrad manchego, färsk getost, sherryvinäger, olivolja,
        pimentos piquillo, marconamandlar med mera.
      </p>
      <p className="pa3 tl">
        Våra priser sätts med låg marginal i förhållande till importpriset.
        Nedan hittar ni våra produkter.
      </p>
      <hr
        style={{
          border: "0",
          height: "1px",
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))"
        }}
      />
    </div>
  );
};

export default Welcome;
