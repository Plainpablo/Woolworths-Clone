import MediaQuery from "react-responsive";
import NewsLetter from "./NewsLetter";
import SocialIcons from "./SocialIcons";

import card1 from "../../assets/images/footer/card-1.svg";
import card2 from "../../assets/images/footer/card-2.svg";
import card3 from "../../assets/images/footer/card-3.svg";
import card4 from "../../assets/images/footer/card-4.svg";
import card5 from "../../assets/images/footer/card-5.svg";

import arrowDown from "../../assets/images/icons/arrow-down-icon.svg";
function FooterTop() {
  const mainContainer = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "start",
    marginInline: "auto",
    paddingInline: "1.25rem",
    // maxWidth: "82.5rem",
    marginBottom: "3.0375rem",
  };

  const heading = {
    color: "black",
    marginBottom: " 0",
    paddingBottom: "1.125rem",
    textTransform: "uppercase",
    fontSize: "0.8125rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "0.875rem",
    letterSpacing: "0px",
    textAlign: "left",
  };

  const heading2 = {
    color: "black",
    marginBottom: " 0",
    paddingBottom: "1.125rem",
    textTransform: "uppercase",
    fontSize: "0.8125rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "0.875rem",
    letterSpacing: "0px",
    textAlign: "left",
    marginTop: "3.503125rem",
  };

  const services = {
    color: "#7f7474",
    fontSize: "0.8125rem",
    lineHeight: "1.6em",
    marginBlock: "0.1625rem",
    paddingBottom: "0.875rem",
    cursor: "pointer",
  };

  const giftCardOpt = {
    color: "#7f7474",
    fontSize: "0.8125rem",
    lineHeight: "1.6em",
    cursor: "pointer",
    paddingInlineStart: "0.75rem",
  };

  const giftCard = {
    display: "flex",
    alignItems: "center",
    marginBottom: "0.375rem",
  };

  const cardStyle = {
    cursor: "pointer",
  };

  const container = {
    marginRight: "1.5rem",
    width: "13.5416875rem",
  };

  // STYLING FOR SMALLER SCREENS
  const mainContainer2 = {
    marginInline: "auto",
    paddingInline: "1.25rem",
    marginBottom: "3.0375rem",
    maxWidth: "100%",
  };

  const container2 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const giftCard2 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "0.375rem",
  };

  const footerTopHeadingContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "1.125rem",
    marginBlockStart: "2.071875rem",
    gap: ".2rem",
  };

  const heading3 = {
    color: "black",
    marginBottom: " 0",
    textTransform: "uppercase",
    fontSize: "0.8125rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "0.875rem",
    letterSpacing: "0px",
    textAlign: "left",
  };

  const dropLinks = {
    display: "none",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const giftCardsStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.625rem",
  };

  const cardStyle2 = {
    cursor: "pointer",
    width: "4.875rem",
    height: "3rem",
  };

  const container5 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBlock: "3rem",
  };

  const followUs = {
    color: "black",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: " 14px",
    paddingBottom: "1rem",
  };

  // DROP LINKS FUNCTION

  function showDropLinksMyAcc() {
    const dropLinks = document.getElementById("dropLinks");
    const arrowIcon = document.getElementById("arrowIcon");

    if (dropLinks.style.display === "none") {
      dropLinks.style.display = "flex";
      arrowIcon.style.transform = "rotate(180deg)";
    } else {
      dropLinks.style.display = "none";
      arrowIcon.style.transform = "rotate(0deg)";
    }
  }

  function showDropLinksCusServ() {
    const dropLinks = document.getElementById("dropLinks2");
    const arrowIcon = document.getElementById("arrowIcon2");

    if (dropLinks.style.display === "none") {
      dropLinks.style.display = "flex";
      arrowIcon.style.transform = "rotate(180deg)";
    } else {
      dropLinks.style.display = "none";
      arrowIcon.style.transform = "rotate(0deg)";
    }
  }

  function showDropLinksInstServ() {
    const dropLinks = document.getElementById("dropLinks3");
    const arrowIcon = document.getElementById("arrowIcon3");

    if (dropLinks.style.display === "none") {
      dropLinks.style.display = "flex";
      arrowIcon.style.transform = "rotate(180deg)";
    } else {
      dropLinks.style.display = "none";
      arrowIcon.style.transform = "rotate(0deg)";
    }
  }

  function showDropLinksAbouWool() {
    const dropLinks = document.getElementById("dropLinks4");
    const arrowIcon = document.getElementById("arrowIcon4");

    if (dropLinks.style.display === "none") {
      dropLinks.style.display = "flex";
      arrowIcon.style.transform = "rotate(180deg)";
    } else {
      dropLinks.style.display = "none";
      arrowIcon.style.transform = "rotate(0deg)";
    }
  }

  return (
    <>
      <MediaQuery minWidth={885}>
        <div style={mainContainer} className="mainContainer">
          <div style={container} className="container1">
            <p className="footerTopHeading" style={heading}>
              MY ACCOUNT
            </p>
            <p className="footerTopServices" style={services}>
              Sign in/Register
            </p>
            <p className="footerTopServices" style={services}>
              Orders
            </p>
            <p className="footerTopServices" style={services}>
              Shopping Lists
            </p>
            <p className="footerTopServices" style={services}>
              Account Details
            </p>
            <p className="footerTopServices" style={services}>
              Link a Card
            </p>
          </div>
          <div style={container} className="container2">
            <p className="footerTopHeading" style={heading}>
              CUSTOMER SERVICE
            </p>
            <p className="footerTopServices" style={services}>
              FAQs
            </p>
            <p className="footerTopServices" style={services}>
              Using Woolworths Online
            </p>
            <p className="footerTopServices" style={services}>
              Delivery Options
            </p>
            <p className="footerTopServices" style={services}>
              Returns and Exchanges
            </p>
            <p className="footerTopServices" style={services}>
              Terms and Conditions
            </p>
            <p className="footerTopServices" style={services}>
              Corporate Sales
            </p>
            <div className="container2Bottom">
              <p className="footerTopHeading" style={heading}>
                IN-STORE SERVICES
              </p>
              <p className="footerTopServices" style={services}>
                Connect
              </p>
              <p className="footerTopServices" style={services}>
                WCafe
              </p>
            </div>
          </div>
          <div style={container} className="container3">
            <p className="footerTopHeading" style={heading}>
              ABOUT WOOLWORTHS
            </p>
            <p className="footerTopServices" style={services}>
              Store Locator
            </p>
            <p className="footerTopServices" style={services}>
              Contact Us
            </p>
            <p className="footerTopServices" style={services}>
              About Us
            </p>
            <p className="footerTopServices" style={services}>
              Careers
            </p>
            <p className="footerTopServices" style={services}>
              Press and News
            </p>
            <p className="footerTopServices" style={services}>
              Sustainability
            </p>
          </div>
          <div style={container} className="container4">
            <p className="footerTopHeading" style={heading}>
              GET THE CARD
            </p>
            <div style={giftCard} className="giftCard">
              <img style={cardStyle} src={card1} alt="gift-card-image" />
              <p style={giftCardOpt}>Store Card</p>
            </div>
            <div style={giftCard} className="giftCard">
              <img style={cardStyle} src={card2} alt="gift-card-image" />
              <p style={giftCardOpt}>Credit Card</p>
            </div>
            <div style={giftCard} className="giftCard">
              <img style={cardStyle} src={card3} alt="gift-card-image" />
              <p style={giftCardOpt}>Personal Loan</p>
            </div>
            <p className="footerTopHeading" style={heading2}>
              GET REWARDED
            </p>
            <div style={giftCard} className="giftCard">
              <img style={cardStyle} src={card4} alt="gift-card-image" />
              <p className="footerTopServices" style={giftCardOpt}>
                WRewards
              </p>
            </div>
            <div style={giftCard} className="giftCard">
              <img style={cardStyle} src={card5} alt="gift-card-image" />
              <p className="footerTopServices" style={giftCardOpt}>
                MySchool
              </p>
            </div>
          </div>

          <div className="container5">
            <NewsLetter />
          </div>
        </div>
      </MediaQuery>

      {/* SMALLER SCREEN */}
      <MediaQuery maxWidth={884}>
        <div style={mainContainer2} className="mainContainer">
          <NewsLetter />
        </div>
        <div style={container2} className="container1">
          <div
            onClick={showDropLinksMyAcc}
            style={footerTopHeadingContainer}
            className="footerTopHeadingContainer"
          >
            <p className="footerTopHeading" style={heading3}>
              MY ACCOUNT
            </p>
            <img id="arrowIcon" src={arrowDown} alt="arrow-icon" />
          </div>
          <div style={dropLinks} className="dropLinks" id="dropLinks">
            <p className="footerTopServices" style={services}>
              Sign in/Register
            </p>
            <p className="footerTopServices" style={services}>
              Orders
            </p>
            <p className="footerTopServices" style={services}>
              Shopping Lists
            </p>
            <p className="footerTopServices" style={services}>
              Account Details
            </p>
            <p className="footerTopServices" style={services}>
              Link a Card
            </p>
          </div>
        </div>
        <div style={container2} className="container2">
          <div
            onClick={showDropLinksCusServ}
            style={footerTopHeadingContainer}
            className="footerTopHeadingContainer"
          >
            <p className="footerTopHeading" style={heading3}>
              CUSTOMER SERVICE
            </p>
            <img id="arrowIcon2" src={arrowDown} alt="arrow-icon" />
          </div>

          <div style={dropLinks} className="dropLinks2" id="dropLinks2">
            <p className="footerTopServices" style={services}>
              FAQs
            </p>
            <p className="footerTopServices" style={services}>
              Using Woolworths Online
            </p>
            <p className="footerTopServices" style={services}>
              Delivery Options
            </p>
            <p className="footerTopServices" style={services}>
              Returns and Exchanges
            </p>
            <p className="footerTopServices" style={services}>
              Terms and Conditions
            </p>
            <p className="footerTopServices" style={services}>
              Corporate Sales
            </p>
          </div>

          <div
            onClick={showDropLinksInstServ}
            style={footerTopHeadingContainer}
            className="footerTopHeadingContainer"
          >
            <p className="footerTopHeading" style={heading3}>
              IN-STORE SERVICES
            </p>
            <img id="arrowIcon3" src={arrowDown} alt="arrow-icon" />
          </div>
          <div style={dropLinks} className="dropLinks3" id="dropLinks3">
            <p className="footerTopServices" style={services}>
              Connect
            </p>
            <p className="footerTopServices" style={services}>
              WCafe
            </p>
          </div>
        </div>

        <div style={container2} className="container3">
          <div
            onClick={showDropLinksAbouWool}
            style={footerTopHeadingContainer}
            className="footerTopHeadingContainer"
          >
            <p className="footerTopHeading" style={heading3}>
              ABOUT WOOLWORTHS
            </p>
            <img id="arrowIcon4" src={arrowDown} alt="arrow-icon" />
          </div>
          <div style={dropLinks} className="dropLinks4" id="dropLinks4">
            <p className="footerTopServices" style={services}>
              Store Locator
            </p>
            <p className="footerTopServices" style={services}>
              Contact Us
            </p>
            <p className="footerTopServices" style={services}>
              About Us
            </p>
            <p className="footerTopServices" style={services}>
              Careers
            </p>
            <p className="footerTopServices" style={services}>
              Press and News
            </p>
            <p className="footerTopServices" style={services}>
              Sustainability
            </p>
          </div>
        </div>

        <div style={container2} className="container4">
          <div
            style={footerTopHeadingContainer}
            className="footerTopHeadingContainer"
          >
            <p className="footerTopHeading" style={heading3}>
              GET THE CARD
            </p>
          </div>
          <div style={giftCardsStyle} className="giftCards" id="giftCards">
            <img style={cardStyle2} src={card1} alt="gift-card-image" />
            <img style={cardStyle2} src={card2} alt="gift-card-image" />
            <img style={cardStyle2} src={card3} alt="gift-card-image" />
          </div>

          <div
            style={footerTopHeadingContainer}
            className="footerTopHeadingContainer"
          >
            <p className="footerTopHeading" style={heading3}>
              GET REWARDED
            </p>
          </div>
          <div style={giftCardsStyle} className="giftCards" id="giftCards">
            <img style={cardStyle2} src={card4} alt="gift-card-image" />
            <img style={cardStyle2} src={card5} alt="gift-card-image" />
          </div>
        </div>
        <div style={container5} className="container5">
          <p style={followUs}>FOLLOW US ON</p>
          <SocialIcons />
        </div>
      </MediaQuery>
    </>
  );
}

export default FooterTop;
