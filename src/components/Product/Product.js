import React from "react";
import "./Product.css";

const Product = ({ onRouteChange }) => {
  return (
    <div className="br3 ba dark-gray b--black-10 mv4 w-80 w-80-m w-50-1 shadow-5 center">
      <div className="br4 left w-20">
        <img
          className="br6 pa3"
          src="http://static.webshopapp.com/shops/001679/files/001855872/jamon-serrano-ursprunglig-spansk-lufttorkad-skinka.jpg"
          alt="serrano"
        />
      </div>
      <div className="right w-80">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
        quisquam repellendus quam, incidunt assumenda exercitationem aperiam
        commodi necessitatibus dolorum consequatur numquam maxime esse
        laboriosam eos officia iure id voluptatum adipisci.
      </div>
    </div>
  );
};

export default Product;
