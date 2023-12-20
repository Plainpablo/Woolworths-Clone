import React from "react";
import CarouselComponentBottom from "./CarouselComponentBottom";

import saveIcon from "../../assets/images/icons/save-icon.svg";
import signUpIcon from "../../assets/images/icons/sign-up-icon.svg";

function CarouselComponent(props) {
  const container1 = {
    position: "relative",
    marginBottom: "0.875rem",
  };

  const saveImg = {
    position: "absolute",
    left: 8,
    top: 8,
    cursor: "pointer",
  };

  const signUpIconStyle = {
    position: "absolute",
    right: 8,
    bottom: 10,
    cursor: "pointer",
  };

  const item = {
    width: "100%",
  };

  return (
    <div className="mainContainer">
      <div style={container1} className="container1">
        <img style={item} src={props.itemImg} alt={props.alt} />
        <img style={saveImg} src={saveIcon} alt="save-icon" />
        <img style={signUpIconStyle} src={signUpIcon} alt="sign-up-icon" />
      </div>
      <div className="bottom">
        <CarouselComponentBottom
          nocolors={props.nocolors}
          brand={props.brand}
          itemTitle={props.itemTitle}
          sale={props.sale}
          price={props.price}
        />
      </div>
    </div>
  );
}

export default CarouselComponent;
