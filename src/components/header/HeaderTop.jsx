import HeaderComponent1 from "./HeaderComponent1";
import MediaQuery from "react-responsive";

import creditCardIcon from "../../assets/images/icons/creadit-card-icon.svg";
import wrewardsIcon from "../../assets/images/icons/wrewards-icon.svg";
import storePinIcon from "../../assets/images/icons/store-pin-icon.svg";
import telephoneIcon from "../../assets/images/icons/telephone-icon.svg";
import lockIcon from "../../assets/images/icons/lock-icon.svg";
import doubleArrowIcon from "../../assets/images/icons/double-arrow-icon.svg";
import woolworthLogoWhite from "../../assets/images/woolworths-logo-white.svg";
import userIconWhite from "../../assets/images/user-icon-white.svg";
import cartIconWhite from "../../assets/images/cart-icon-white.svg";
import menuIconWhite from "../../assets/images/menu-icon-white.svg";

function HeaderTop() {
  // Style
  const headerComponent1Style = {
    display: "flex",
    gap: "0.34375rem",
    textDecoration: "none",
    marginInline: "0.34375rem",
    alignItems: "center",
  };

  const headerComponent1Style2 = {
    display: "flex",
    gap: "0.34375rem",
    textDecoration: "none",
    marginInlineEnd: "0.34375rem",
    alignItems: "center",
  };

  const containerWidthStyle = {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "87.5rem",
    marginInline: "auto",
    alignItems: "center",
    // height: "2.5rem",
    paddingInline: "1.25rem",
  };

  const containerLeft = {
    display: "flex",
  };

  const containerRight = {
    display: "flex",
  };

  const textStyle = {
    fontSize: "0.6875rem",
    whiteSpace: "nowrap",
  };
  //HEADER HEIGHT WITH PADDING
  const headerHeight = {
    paddingBlock: "0.75rem",
  };

  // STYLE FOR WHITE LOGO - SMALL SCREEN
  const logoWhite = {
    maxWidth: "8.125rem",
    maxHeight: "0.875rem",
    marginBlock: "1.15625rem",
  };

  // STYLE FOR ICONS ON THE LEFT SIDE OF HEADER
  const leftContainerIcons = {
    marginInlineStart: "1.125rem",
  };

  // STYLEING FOR SMALLER SCREENS

  const imgRelative = {
    position: "relative",
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
    right: "3.75rem",
    top: "0.4375rem",
    textAlign: "center",
    textDecoration: " none",
    verticalAlign: "middle",
    width: "0.875rem",
  };

  return (
    <>
      <MediaQuery minWidth={885}>
        <div
          style={{
            background: "#000",
          }}
          className="main-container"
        >
          <div style={containerWidthStyle} className="container-width">
            <div style={containerLeft} className="container-left">
              <HeaderComponent1
                HeaderComponent1Style={headerComponent1Style2}
                src={creditCardIcon}
                alt="credit-card-icon"
                text="FINANCIAL SERVICES"
                textStyle={textStyle}
              />

              <HeaderComponent1
                HeaderComponent1Style={headerComponent1Style}
                src={wrewardsIcon}
                alt="wrewards-icon"
                text="WREWARDS"
                textStyle={textStyle}
              />
              <HeaderComponent1
                HeaderComponent1Style={headerComponent1Style}
                src={storePinIcon}
                alt="store-pin-icon"
                text="STORES"
                textStyle={textStyle}
              />
              <HeaderComponent1
                HeaderComponent1Style={headerComponent1Style}
                src={telephoneIcon}
                alt="telephone-icon"
                text="CUSTOMER SUPPORT"
                textStyle={textStyle}
              />

              {/*
               */}
            </div>
            <div style={containerRight} className="container-right">
              <HeaderComponent1
                HeaderComponent1Style={headerComponent1Style}
                imgStyle={headerHeight}
                src={lockIcon}
                alt="lock-icon"
                text="SAFE & SECURE"
                textStyle={textStyle}
              />
              <HeaderComponent1
                HeaderComponent1Style={headerComponent1Style}
                imgStyle={headerHeight}
                src={doubleArrowIcon}
                alt="double-arrow-icon"
                text="EASY RETURNS"
                textStyle={textStyle}
              />
            </div>
          </div>
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={884}>
        <div
          style={{
            background: "#000",
            position: "fixed",
            width: "100%",
            zIndex: "11",
            top: "0",
          }}
          className="main-container"
        >
          <div style={containerWidthStyle} className="container-width">
            <div style={containerLeft} className="container-left">
              <HeaderComponent1
                HeaderComponent1Style={headerComponent1Style}
                imgStyle={logoWhite}
                src={woolworthLogoWhite}
                alt="woolworth-icon"
              />
            </div>
            <div style={containerRight} className="container-right">
              <HeaderComponent1
                src={userIconWhite}
                alt="user-white-icon"
                imgStyle={leftContainerIcons}
              />
              <HeaderComponent1
                src={cartIconWhite}
                alt="cart-white-icon"
                imgStyle={leftContainerIcons}
                imgRelative={imgRelative}
              />
              <p style={cartCount} className="cartCount">
                0
              </p>
              <HeaderComponent1
                src={menuIconWhite}
                alt="menu-white-icon"
                imgStyle={leftContainerIcons}
              />
            </div>
          </div>
        </div>
      </MediaQuery>
    </>
  );
}

export default HeaderTop;
