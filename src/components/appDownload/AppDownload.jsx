import MediaQuery from "react-responsive";

import woolworthLogo2 from "../../assets/images/appDownload/woolworth-logo-2.svg";
import appleStoreApp from "../../assets/images/appDownload/apple-store-app.svg";
import googlePlayStore from "../../assets/images/appDownload/google-play-store.svg";
import appGalleryStore from "../../assets/images/appDownload/app-gallery-store.svg";

// import pic6 from "./assets/images/header/pic-6.jpg";

function AppDownload() {
  const mainContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // maxWidth: "87.5rem",
    marginInline: "auto",
    paddingInline: "1.25rem",
    paddingBottom: "1.875rem",
    marginBottom: "3.125rem",
  };
  const container1 = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginInline: "auto",
    // paddingInline: "1.25rem",
    paddingBottom: "1.875rem",
    marginBottom: "3.125rem",
    paddingTop: "2rem",
    borderTop: "1px solid #dcdcdc",
    borderBottom: "1px solid #dcdcdc",
  };

  const logo = {
    height: "1.375rem",
    width: "13.125rem",
    cursor: "pointer",
  };

  const stores = {
    marginRight: "0.3125rem",
    cursor: "pointer",
  };

  // SMALL SCREENS

  const mainContainer2 = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginInline: "auto",
    paddingInline: "1.25rem",
  };

  const container2 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginInline: "auto",
    paddingBottom: "1.875rem",
    marginBottom: "1rem",
    paddingTop: "2rem",
    borderTop: "1px solid #dcdcdc",
    borderBottom: "1px solid #dcdcdc",
  };

  const getWooliesApp = {
    marginTop: "2.071875rem",
    paddingBottom: "0.75rem",
    color: "black",
    textTransform: "uppercase",
    fontSize: "0.8125rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "0.875rem",
  };

  return (
    <>
      <MediaQuery minWidth={885}>
        <div style={mainContainer} className="mainContainer">
          <div style={container1} className="container1">
            <img style={logo} src={woolworthLogo2} alt="woolworth-logo" />
            <div className="leftSide">
              <img style={stores} src={appleStoreApp} alt="" />
              <img style={stores} src={googlePlayStore} alt="" />
              <img style={stores} src={appGalleryStore} alt="" />
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={884}>
        <div style={mainContainer2} className="mainContainer">
          <div style={container2} className="container1">
            <img style={logo} src={woolworthLogo2} alt="woolworth-logo" />
            <p style={getWooliesApp}>Get the new Woolies app</p>
            <div className="leftSide">
              <img style={stores} src={appleStoreApp} alt="" />
              <img style={stores} src={googlePlayStore} alt="" />
              <img style={stores} src={appGalleryStore} alt="" />
            </div>
          </div>
        </div>
      </MediaQuery>
    </>
  );
}

export default AppDownload;
