import MediaQuery from "react-responsive";
import HeaderComponent1 from "./HeaderComponent1";

import woolworthsLogo from "../../assets/images/woolworths-logo.svg";
import userAccountIcon from "../../assets/images/icons/user-account-icon.svg";
import locationIcon from "../../assets/images/icons/location-icon.svg";
import shoppingCartIcon from "../../assets/images/icons/shopping-cart-icon.svg";

function HeaderBottom() {
  // STYLE
  const mainContainer = {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "87.5rem",
    marginInline: "auto",
    alignItems: "center",
    height: "5.375rem",
    paddingInline: "1.25rem",
    borderBottom: " 0.0625rem #DCDCDC solid",
  };

  const leftside = {
    display: "flex",
    gap: "1rem",
    position: "relative",
  };

  const textStyle = {
    color: "black",
    fontSize: "0.75rem",
  };

  const headerComponent1Style = {
    display: "flex",
    gap: "0.375rem",
    justifyContent: "center",
    alignItems: "center",
    whiteSpace: "nowrap",
    textDecoration: "none",
  };

  const logoStyle = {
    minHeight: "1.375rem",
    minWidth: "13.125rem",
  };

  const cartCount = {
    background: "#ec2b21",
    borderRadius: "50%",
    boxSizing: "content-box",
    color: "white",
    display: "inline-block",
    fontSize: "0.625rem",
    fontWeight: "bold",
    height: "0.875rem",
    lineHeight: "0.8125rem",
    position: "absolute",
    right: "-3px",
    top: "0",
    textAlign: "center",
    textDecoration: " none",
    verticalAlign: "middle",
    width: "0.875rem",
  };

  // FUNCTION - Hide drop down menu

  function hideDropMenu() {
    const ShopByDepartment = document.getElementById("ShopByDepartment");
    const arrowDrop1 = document.getElementById("arrowDrop1");

    ShopByDepartment.style.display = "none";
    arrowDrop1.style.transform = "rotate(0deg)";

    //HIDE SIDE MENUS
    const mainContainer2 = document.querySelector(".mainContainer2");
    const mainContainer3 = document.querySelector(".mainContainer3");

    mainContainer2.style.display = "none";
    mainContainer3.style.display = "none";
  }

  return (
    <MediaQuery minWidth={885}>
      <div
        onMouseOver={hideDropMenu}
        style={mainContainer}
        className="main-container"
      >
        <div className="logo">
          <img style={logoStyle} src={woolworthsLogo} alt="woolworths-logo" />
        </div>
        <div style={leftside} className="leftside">
          <HeaderComponent1
            HeaderComponent1Style={headerComponent1Style}
            src={userAccountIcon}
            alt="user-account-icon-icon"
            text="Sign In/Register"
            textStyle={textStyle}
          />
          <HeaderComponent1
            HeaderComponent1Style={headerComponent1Style}
            src={locationIcon}
            alt="locatin-icon"
            text="Delivery Address"
            textStyle={textStyle}
          />
          <img src={shoppingCartIcon} alt="shopping-cart-icon" />
          <p style={cartCount} className="cartCount">
            0
          </p>
        </div>
      </div>
    </MediaQuery>
  );
}

export default HeaderBottom;
