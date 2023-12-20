import HeaderComponent2 from "./HeaderComponent2";
import ShopByDepartment from "../header/dropDown/ShopByDepartment";
import MediaQuery from "react-responsive";

import arrowDownIcon from "../../assets/images/icons/arrow-down-icon.svg";
import searchIcon from "../../assets/images/icons/search-icon.svg";
import xIcon from "../../assets/images/icons/x-icon.svg";

function HeaderBottom2() {
  // STYLE
  const mainContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "87.5rem",
    marginInline: "auto",
    paddingInline: "1.25rem",
    height: "4.5rem",
    position: "relative",
    borderBottom: " 0.0625rem #DCDCDC solid",
  };
  const leftSide = {
    display: "flex",
    alignItems: "center",
    paddingLeft: "1.25rem",
  };

  const pStyle = {
    color: "black",
    fontFamily: "WFutura, sans-serif",
    fontWeight: 600,
  };
  const pStyle2 = {
    color: "rgb(255, 0, 0)",
    fontFamily: "WFutura, sans-serif",
    fontWeight: 600,
  };
  const input = {
    backgroundColor: "transparent",
    border: "none",
  };

  const rightSide = {
    backgroundColor: "#EEE",
    height: "2.5rem",
    width: "18.25rem",
    borderRadius: "9.75rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: "1.25rem",
  };

  const rightSide1 = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: ".8rem",
  };

  const searchIconStyle = {
    width: "0.833125rem",
    height: "0.833125rem",
    marginInlineStart: ".8rem",
  };

  const xIconStyle = {
    width: "1rem",
    height: "1rem",
    marginInlineEnd: "2.25rem",
    display: "none",
  };

  // STYLING SMALLER SCREEN

  const mainContainer2 = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "87.5rem",
    marginInline: "auto",
    paddingInline: "1.25rem",
    height: "4.5rem",
    // position: "relative",
    marginTop: "3rem",
  };

  const searchIcon2 = {
    maxWidth: "1.5rem",
    maxHeight: "1.5rem",
    marginInlineStart: ".8rem",
  };

  const rightSide2 = {
    backgroundColor: "#EEE",
    height: "2.5rem",
    width: "18.25rem",
    borderRadius: "9.75rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  };

  // FUNCTION
  function inputToggle() {
    const xIcon2 = document.getElementById("x-icon");
    const leftSide = document.getElementById("left-side");
    const rightSide = document.getElementById("right-side");

    if (xIcon2.style.display === "none") {
      xIcon2.style.display = "flex";
      leftSide.style.display = "none";
      rightSide.style.width = "87.5rem";
    } else {
      xIcon2.style.display = "none";
      leftSide.style.display = "flex";
      rightSide.style.width = "18.25rem";
    }
  }

  // FUNCTION
  function dropDownMenu() {
    const ShopByDepartment = document.getElementById("ShopByDepartment");
    const arrowDrop1 = document.getElementById("arrowDrop1");

    ShopByDepartment.style.display = "flex";
    arrowDrop1.style.transform = "rotate(180deg)";
  }

  return (
    <>
      <MediaQuery minWidth={885}>
        <div style={mainContainer} className="main-container">
          <ShopByDepartment />

          <div style={leftSide} className="left-side" id="left-side">
            <HeaderComponent2
              onMouseOver={dropDownMenu}
              pStyle={pStyle}
              imgId="arrowDrop1"
              text="SHOP BY DEPARTMENT"
              src={arrowDownIcon}
              alt=""
            />
            <HeaderComponent2
              pStyle={pStyle2}
              text="CHRISTMAS"
              src={arrowDownIcon}
              alt=""
            />
            <p style={pStyle}>ORDER AGAIN</p>
          </div>

          <div style={rightSide} className="right-side" id="right-side">
            <div style={rightSide1} className="right-side-1">
              <img style={searchIconStyle} src={searchIcon} alt="search-icon" />
              <input
                className="search-product"
                style={input}
                type="text"
                placeholder="Search Products"
                onClick={inputToggle}
              />
            </div>
            <img
              id="x-icon"
              style={xIconStyle}
              src={xIcon}
              alt="search-icon"
              onClick={inputToggle}
            />
          </div>
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={884}>
        <div style={mainContainer2} className="main-container">
          <div style={rightSide2} className="right-side" id="right-side">
            <div style={rightSide1} className="right-side-1">
              <img style={searchIcon2} src={searchIcon} alt="search-icon" />
              <input
                className="search-product"
                style={input}
                type="text"
                placeholder="Search Products"
                onClick={inputToggle}
              />
            </div>
            <img
              id="x-icon"
              style={xIconStyle}
              src={xIcon}
              alt="search-icon"
              onClick={inputToggle}
            />
          </div>
        </div>
      </MediaQuery>
    </>
  );
}

export default HeaderBottom2;
