import React from "react";
import "./Slideshow.css";
// Import Slides
import buffe from "./images/buffe.jpg";
import cerdoToledo from "./images/cerdoToledo.jpg";
import GotebTapas from "./images/GotebTapas.jpg";
import GotebTapasQueso from "./images/GotebTapasQueso.jpg";
import GotebTapasQueso2 from "./images/GotebTapasQueso2.jpg";
import GotebTapasQuesoMembrillo from "./images/GotebTapasQuesoMembrillo.jpg";
import maricoPaella2 from "./images/maricoPaella2.jpg";
import mariscoPaella from "./images/mariscoPaella.JPG";
import norbertoGambas from "./images/norbertoGambas.jpg";
import norbertoPaellas from "./images/norbertoPaellas.JPG";
import paellaSmiley from "./images/paellaSmiley.jpg";
import tapasJamon from "./images/tapasJamon.jpg";

const Slideshow = () => {
  const images = [
    buffe,
    cerdoToledo,
    GotebTapas,
    GotebTapasQueso,
    GotebTapasQueso2,
    GotebTapasQuesoMembrillo,
    maricoPaella2,
    mariscoPaella,
    norbertoGambas,
    norbertoPaellas,
    paellaSmiley,
    tapasJamon
  ];

  const listedImages = images.map((image, i) => {
    const animationLength = 8;
    const liStyle = {
      animation: `imageAnimation ${animationLength *
        images.length}s linear infinite`,
      animationDelay: `${i * animationLength}s`
    };

    return (
      <li style={liStyle} key={image}>
        <img src={image} />
      </li>
    );
  });

  return (
    <div>
      <div id="landing-header">
        <h1>Välkomen till Esmia</h1>
      </div>
      <ul className="slideshow">{listedImages}</ul>
      <div className="w-20">
        <a
          className="w-20 grow f4 link ph3 pv2 dib white bg-light-purple"
          href="#0"
        >
          Tryck Här
        </a>
      </div>
    </div>
  );
};

export default Slideshow;
