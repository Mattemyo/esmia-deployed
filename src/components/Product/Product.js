import React from "react";
import "./Product.css";

const allProducts = {
  Skinkor: [
    {
      name: "Serrano",
      imgUrl:
        "http://static.webshopapp.com/shops/001679/files/001855872/jamon-serrano-ursprunglig-spansk-lufttorkad-skinka.jpg"
    },
    {
      name: "Iberico",
      imgUrl:
        "https://thumbs.dreamstime.com/z/tapas-iberico-skinka-och-lomokorv-spanien-66456346.jpg"
    }
  ],
  Chorizo: [
    {
      name: "Korv",
      imgUrl:
        "http://static.webshopapp.com/shops/001679/files/001855872/jamon-serrano-ursprunglig-spansk-lufttorkad-skinka.jpg"
    },
    {
      name: "Mer korv",
      imgUrl:
        "https://thumbs.dreamstime.com/z/tapas-iberico-skinka-och-lomokorv-spanien-66456346.jpg"
    }
  ],
  Ostar: [
    {
      name: "Ostis",
      imgUrl:
        "http://static.webshopapp.com/shops/001679/files/001855872/jamon-serrano-ursprunglig-spansk-lufttorkad-skinka.jpg"
    },
    {
      name: "Mer ostis",
      imgUrl:
        "https://thumbs.dreamstime.com/z/tapas-iberico-skinka-och-lomokorv-spanien-66456346.jpg"
    }
  ],
  Kolonial: [
    {
      name: "kolonn",
      imgUrl:
        "http://static.webshopapp.com/shops/001679/files/001855872/jamon-serrano-ursprunglig-spansk-lufttorkad-skinka.jpg"
    },
    {
      name: "mer kolonn",
      imgUrl:
        "https://thumbs.dreamstime.com/z/tapas-iberico-skinka-och-lomokorv-spanien-66456346.jpg"
    }
  ]
};

const productTypes = ["Skinkor", "Chorizo", "Ostar", "Kolonial"];

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeList: "Skinkor"
    };
  }

  //Decide which list to show
  onListChange = list => {
    this.setState({
      activeList: list
    });
  };

  // Rendered on page
  render() {
    // Choose which type of product will be shown
    const subNav = productTypes.map(productType => {
      return (
        <p
          style={{ fontSize: "30px" }}
          onClick={() => this.onListChange(productType)}
          className="center f3 link dim black pa3 pointer ba b--black-10 br2 shadow-5"
        >
          {productType}
        </p>
      );
    });

    // Rendered list depends on the which list is active
    const listedProducts = allProducts[this.state.activeList].map(
      listedProduct => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end"
            }}
            className="br3 pl6 ba dark-gray b--black-10 mv4 w-80 w-80-m w-50-1 shadow-5 center"
          >
            <div className="br4 left w-20">
              <h3 className="tc">{listedProduct.name}</h3>
              <img
                className="br6"
                src={listedProduct.imgUrl}
                alt={listedProduct.name}
              />
            </div>
            <div className="right w-80 pa6">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique quisquam repellendus quam, incidunt assumenda
                exercitationem aperiam commodi necessitatibus dolorum
                consequatur numquam maxime esse laboriosam eos officia iure id
                voluptatum adipisci.
              </p>
            </div>
          </div>
        );
      }
    );

    return (
      <div className="products w-100">
        <div
          style={{ display: "flex", justifyContent: "flex-end" }}
          className="product-nav br3 pa2 ba dark-gray b--black-10 mv4 w-80 w-80-m w-50-1 shadow-5 center"
        >
          {subNav}
        </div>
        <div>{listedProducts}</div>
      </div>
    );
  }
}

export default Product;
