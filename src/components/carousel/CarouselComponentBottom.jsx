import React from "react";

import addIcon from "../../assets/images/icons/add-icon.svg";
import starIcon from "../../assets/images/icons/star-icon.svg";

function CarouselComponentBottom(props) {
  // STYLE
  const mainContainer = {
    marginBlockEnd: "1.5rem",
  };
  const colors = {
    color: "black",
    padding: "0.25rem 0.625rem",
    backgroundColor: " #ededed",
    borderRadius: "0.25rem",
    fontSize: "0.6875rem",
    lineHeight: "0.6875rem",
    fontWeight: "bold",
    display: "inline-block",
    marginTop: "0.875rem",
  };
  const colorsContainer = {
    height: "2.0625rem",
  };

  const brand = {
    color: "black",
    fontSize: "0.6875rem",
    lineHeight: "0.75rem",
    fontWeight: 600,
    marginTop: "1rem",
    cursor: "pointer",
  };

  const brandContainer = {
    height: "0.75rem",
  };

  const item = {
    color: "black",
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: "1.125rem",
    cursor: "pointer",
  };

  const itemContainer = {
    height: "2.25rem",
  };

  const rating = {
    marginBlock: "0.6875rem",
    display: "flex",
    alignItems: "center",
    height: "1.0625rem",
  };

  const starIconStyle = {
    width: "0.8125rem",
    height: "0.75rem",
  };

  const numberOfReviews = {
    fontSize: "0.75rem",
    color: " #777",
    marginLeft: "0.4375rem",
  };

  const sale = {
    color: "#EC2B21",
    fontWeight: 700,
    overflow: "hidden",
    fontSize: "0.8125rem",
    paddingTop: "0.5rem",
    marginBottom: "1rem",
    cursor: "pointer",
  };

  const saleContainer = {
    height: "0.9375rem",
  };

  const priceAdd = {
    marginTop: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "3.6133125rem",
  };

  const price = {
    color: "black",
    fontSize: "0.875rem",
    fontWeight: 600,
  };

  const addIconStyle = {
    width: "2.125rem",
    height: "2.125rem",
  };

  // Add to Cart Icon Source

  return (
    <div style={mainContainer} className="mainContainer">
      <div style={colorsContainer} className="colorsContainer">
        <p style={colors} className="colors">
          {props.nocolors}
        </p>
      </div>
      <div style={brandContainer} className="brandContainer">
        <p style={brand} className="brand">
          {props.brand}
        </p>
      </div>

      <div style={itemContainer} className="item">
        <p style={item} className="item-title">
          {props.itemTitle}
        </p>
      </div>

      <div style={rating} className="rating">
        <img style={starIconStyle} src={starIcon} alt="star-icon" />
        <img style={starIconStyle} src={starIcon} alt="star-icon" />
        <img style={starIconStyle} src={starIcon} alt="star-icon" />
        <img style={starIconStyle} src={starIcon} alt="star-icon" />
        <img style={starIconStyle} src={starIcon} alt="star-icon" />
        <p style={numberOfReviews}>(6)</p>
      </div>
      <div style={saleContainer} className="saleContainer">
        <p style={sale} className="sale">
          {props.sale}
        </p>
      </div>

      <div style={priceAdd} className="price-add">
        <p style={price} className="price">
          {props.price}
        </p>
        <img
          className="addToCartIcon"
          id="addToCartIcon"
          style={addIconStyle}
          src={addIcon}
          alt="add-icon"
        />
      </div>
    </div>
  );
}

export default CarouselComponentBottom;
