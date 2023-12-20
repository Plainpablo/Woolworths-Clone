function SocialWithWoolies() {
  // STYLE
  const mainContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginInline: "auto",
    paddingInline: "1.25rem",
    maxWidth: "82.5rem",
  };
  const mainContainer1 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginInline: "1.25rem",
    width: "100%",
    borderTop: "1px solid #dcdcdc",
    marginBottom: "5rem",
  };
  const h2Style = {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "22px",
    textAlign: "center",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    color: "black",
    marginBlock: "1.25rem",
  };
  const h2Style2 = {
    float: "none",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "23px",
    textDecorationLine: "underline",
    textTransform: "uppercase",
    color: "#000000",
  };

  const margin = {
    marginBlockStart: "1.875rem",
  };

  const p2Style = {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "22px",
    textAlign: "center",
    color: "#000000",
    marginBottom: "4px",
  };
  return (
    <div style={mainContainer} className="mainContainer">
      <div style={mainContainer1} className="container1">
        <h2 style={h2Style}>SOCIAL WITH WOOLIES</h2>
        <p style={p2Style}>What does Woolies look like in your world?</p>
        <p style={p2Style}>
          tag <span> </span>
          <a style={p2Style} href="">
            @woolworths_sa in your instagram pics
          </a>
          &nbsp;&nbsp;and get featured below.
        </p>
        <h2 style={margin}>
          <a style={h2Style2} href="">
            VIEW MORE
          </a>
        </h2>
      </div>
    </div>
  );
}

export default SocialWithWoolies;
