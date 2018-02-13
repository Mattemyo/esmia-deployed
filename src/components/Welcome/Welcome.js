import React from "react";
import infoCard from "../InfoCard/InfoCard";

const Welcome = () => {
  return (
    <div className="w-90 w-80-l center mb3">
      <h1 className="tc pl3">Välkommen till Esmia!</h1>
      <p className="pa3 tl">
        Hos oss säljs spanska delikatesser. Efter 20 år i branschen kan vi
        bekräfta att det är kvalitet som säljer!
      </p>
      <p className="pa3 tl">
        Vi fixar paellor till events, födelsedagar, studentmottagningar och även
        det du som kund kan tänka dig.
      </p>
      <p className="pa3 tl">
        Utöver detta säljer vi importerade produkter från Spanien, såsom ost,
        skinka och olivolja.
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
