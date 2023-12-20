import MediaQuery from "react-responsive";

import secure100 from "../../assets/images/footer/bottom/100-secure.png";
import payments from "../../assets/images/footer/bottom/payments.png";

function FooterBottom() {
  const mainContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // alignItems: "start",
    marginInline: "auto",
    paddingInline: "1.25rem",
    // maxWidth: "82.5rem",
    marginBottom: "6.0375rem",
  };

  const top = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const topLeftImg = {
    marginRight: "1.5rem",
    cursor: "pointer",
  };

  const bottom = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const bottomRight = {
    display: "flex",
    alignItems: "center",
  };

  const pStyle = {
    fontSize: "0.5625rem",
    textAlign: "right",
    color: "#7f7474",
    marginRight: "0.5em",
    paddingRight: "0.5em",
    borderRight: "1px solid rgb(220, 220, 220) ",
  };

  const pStyle2 = {
    fontSize: "0.5625rem",
    textAlign: "right",
    color: "#7f7474",
  };

  // SMALLER SCREEN

  const mainContainer2 = {
    display: "flex",
    flexDirection: "column",
    marginInline: "auto",
    paddingInline: "1.25rem",
    marginBottom: "6.0375rem",
  };

  const top2 = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1.25rem",
  };

  const bottom2 = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const pStyle3 = {
    fontSize: "0.5625rem",
    textAlign: "right",
    color: "#7f7474",
    marginRight: "0.5em",
    paddingRight: "0.5em",
    marginBlock: "0.8125rem",
  };

  const pStyle4 = {
    fontSize: "0.8125rem",
    color: "#7f7474",
    marginBottom: "0.40625rem",
  };

  const bottomRight2 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const deliveryAdd = {
    color: "black",
    fontSize: "0.75rem",
    lineHeight: "1.5em",
    fontWeight: 700,
  };

  const deliveryAddrContainer = {
    background: " #eee",
    bottom: 0,
    height: "56px",
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    zIndex: "11",
  };

  const locationIcon = {
    marginRight: "0.375rem",
  };

  return (
    <>
      <MediaQuery minWidth={885}>
        <div style={mainContainer} className="mainContainer">
          <div style={top} className="top">
            <div className="topLeft">
              <img
                style={topLeftImg}
                src={secure100}
                alt="secure-payment-logo"
              />
              <img src={payments} alt="payment-icons" />
            </div>
            <div className="topReft">
              <p style={pStyle2}>
                Woolworths Financial Services (Pty) Ltd (Reg. No 2000/009327/07)
                An authorised financial services (FSP15289) and registered
                credit provider (NCRCP49)
              </p>
            </div>
          </div>
          <div style={bottom} className="bottom">
            <div className="bottomLeft"></div>
            <div style={bottomRight} className="bottomRight">
              <p style={pStyle}>© 2023 Woolworths. All Rights Reserved.</p>
              <p className="footerPrivacyPolicy" style={pStyle2}>
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </MediaQuery>

      {/* SMALLER SCREENS */}
      <MediaQuery maxWidth={884}>
        <div style={mainContainer2} className="mainContainer">
          <div style={top2} className="top">
            <div className="topLeft">
              <img
                style={topLeftImg}
                src={secure100}
                alt="secure-payment-logo"
              />
              <img src={payments} alt="payment-icons" />
            </div>
            <div className="topReft">
              <p style={pStyle3}>
                Woolworths Financial Services (Pty) Ltd (Reg. No 2000/009327/07)
                An authorised financial services (FSP15289) and registered
                credit provider (NCRCP49)
              </p>
            </div>
          </div>
          <div style={bottomRight2} className="bottomRight">
            <p style={pStyle4}>© 2023 Woolworths. All Rights Reserved.</p>
            <p className="footerPrivacyPolicy" style={pStyle4}>
              Privacy Policy
            </p>
          </div>
        </div>

        <div style={deliveryAddrContainer} className="deliveryAddrContainer">
          <img
            style={locationIcon}
            src="/images/footer/address-icon.svg"
            alt=""
          />
          <p style={deliveryAdd}>Delivery Address</p>
        </div>
      </MediaQuery>
    </>
  );
}

export default FooterBottom;
