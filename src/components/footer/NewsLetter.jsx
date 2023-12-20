import MediaQuery from "react-responsive";
import SocialIcons from "./SocialIcons";

import buttonArrowIcon from "../../assets/images/footer/button-arrow-icon.svg";

function NewsLetter() {
  const mainContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "end",
  };
  const newsLetter = {
    padding: "1.5rem",
    background: "#f6f6f6",
    maxWidth: "26.8125rem",
    // maxWidth: "100%",
    marginBottom: "1.5rem",
  };
  const h2Title = {
    fontSize: "1.125rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "1.375rem",
    letterSpacing: "0px",
    textAlign: "left",
    color: "black",
    marginBottom: "0.25rem",
  };

  const pSubHeading = {
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.125rem",
    letterSpacing: "0em",
    textAlign: "left",
    marginBottom: "0.75rem",
    color: "#7f7474",
  };

  const nameLastName = {
    display: "flex",
  };

  const inputStyle = {
    padding: "0.75rem",
    background: "#ffffff",
    border: "0.0625rem solid #b2b2b2",
    boxSizing: "border-box",
    marginRight: "0.25rem",
    width: "100%",
  };

  const inputStyle1 = {
    padding: "0.75rem",
    background: "#ffffff",
    border: "0.0625rem solid #b2b2b2",
    boxSizing: "border-box",
    width: "100%",
  };

  const inputStyle2 = {
    background: "#ffffff",
    border: "0.0625rem solid #b2b2b2",
    boxSizing: "border-box",
    marginTop: "0.5rem",
    padding: "0.831625rem",
    marginBottom: "0.5rem",
    cursor: "pointer",
    width: "100%",
  };
  const email = {
    display: "flex",
    alignItems: "center",
  };

  const buttonArrow = {
    width: "2.75rem",
    height: "2.75rem",
  };

  const infoUse = {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "0.6875rem",
    lineHeight: "0.8125rem",
    color: "rgba(0,0,0,0.6)",
  };

  const policyStyle = {
    fontWeight: "bold",
    color: "black",
    textDecoration: "underline",
    fontSize: "0.6875rem",
  };

  // STYLE FOR SMALLER SCREEN

  const newsLetter2 = {
    padding: "1.5rem",
    background: "#f6f6f6",
    maxWidth: "100%",
  };

  return (
    <>
      <MediaQuery minWidth={885}>
        <div style={mainContainer} className="mainContainer">
          <div style={newsLetter} className="newsLetter">
            <h2 style={h2Title}>Be the first to know!</h2>
            <p style={pSubHeading}>
              Sign up for our newsletter to know about our latest deals and
              what’s new!
            </p>
            <div style={nameLastName} className="nameLastName">
              <input style={inputStyle} type="text" placeholder="First Name" />
              <input style={inputStyle1} type="text" placeholder="Last Name" />
            </div>
            <div style={email} className="email">
              <input
                style={inputStyle2}
                type="text"
                placeholder="Email address"
              />
              <img
                style={buttonArrow}
                src={buttonArrowIcon}
                alt="button-arrow-icon"
              />
            </div>
            <p style={infoUse}>
              How do we use your information?{" "}
              <a style={policyStyle} href="">
                Read our Privacy Policy
              </a>
            </p>
          </div>
          <SocialIcons />
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={884}>
        <div style={newsLetter2} className="newsLetter">
          <h2 style={h2Title}>Be the first to know!</h2>
          <p style={pSubHeading}>
            Sign up for our newsletter to know about our latest deals and what’s
            new!
          </p>
          <div style={nameLastName} className="nameLastName">
            <input style={inputStyle} type="text" placeholder="First Name" />
            <input style={inputStyle1} type="text" placeholder="Last Name" />
          </div>
          <div style={email} className="email">
            <input
              style={inputStyle2}
              type="text"
              placeholder="Email address"
            />
            <img
              style={buttonArrow}
              src={buttonArrowIcon}
              alt="button-arrow-icon"
            />
          </div>
          <p style={infoUse}>
            How do we use your information?{" "}
            <a style={policyStyle} href="">
              Read our Privacy Policy
            </a>
          </p>
        </div>
      </MediaQuery>
    </>
  );
}

export default NewsLetter;
