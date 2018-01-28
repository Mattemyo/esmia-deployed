import React from "react";
import "./Slideshow.css";

const Slideshow = () => (
  <div>
    <div id="landing-header">
      <h1>Välkomen till Esmia</h1>
    </div>
    <ul className="slideshow">
      <li>
        <img
          src="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
          alt="food"
        />
      </li>
      <li>
        <img
          src="https://images.pexels.com/photos/660282/pexels-photo-660282.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
          alt="food"
        />
      </li>
      <li>
        <img
          src="https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
          alt="food"
        />
      </li>
      <li>
        <img
          src="https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
          alt="food"
        />
      </li>
      <li>
        <img
          src="https://images.pexels.com/photos/8500/food-dinner-pasta-spaghetti-8500.jpg?w=1260&h=750&auto=compress&cs=tinysrgb"
          alt="food"
        />
      </li>
    </ul>

    <button>Tryck Här!</button>
  </div>
);

export default Slideshow;
