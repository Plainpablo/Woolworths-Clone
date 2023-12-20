import MediaQuery from "react-responsive";
import CarouselMain from "../carousel/CarouselMain";

function Recommended() {
  const mainContainer = {
    marginTop: "1.25rem",
    display: "flex",
    flexDirection: "column",
    background: "#f7f7f7",
    paddingBottom: "5rem",
  };

  const pStyle = {
    color: "black",
    fontSize: "1.25rem",
    fontWeight: 600,
    paddingBlock: "2.25rem",
    letterSpacing: ".125rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const container1 = {
    display: "flex",
    gap: "2.5rem",
    marginBottom: "3.5rem",
    justifyContent: "center",
    alignItems: "center",
  };

  const container1An1 = {
    padding: "0.1875rem 0 0.5rem",
    textAlign: "center",
    letterSpacing: "0.0338541875rem",
    // color: "#717171",
    color: "black",
    textTransform: "capitalize",
    cursor: "pointer",
    whiteSpace: "nowrap",
    textDecoration: "none",
    display: "block",
    borderBottom: "2px solid black",
  };

  const container1An2 = {
    padding: "0.1875rem 0 0.5rem",
    textAlign: "center",
    letterSpacing: "0.0338541875rem",
    color: "#717171",
    textTransform: "capitalize",
    cursor: "pointer",
    whiteSpace: "nowrap",
    textDecoration: "none",
    display: "block",
  };

  const container1An3 = {
    padding: "0.1875rem 0 0.5rem",
    textAlign: "center",
    letterSpacing: "0.0338541875rem",
    color: "#717171",
    textTransform: "capitalize",
    cursor: "pointer",
    whiteSpace: "nowrap",
    textDecoration: "none",
    display: "block",
  };

  const container1An4 = {
    padding: "0.1875rem 0 0.5rem",
    textAlign: "center",
    letterSpacing: "0.0338541875rem",
    color: "#717171",
    textTransform: "capitalize",
    cursor: "pointer",
    whiteSpace: "nowrap",
    textDecoration: "none",
    display: "block",
  };

  //STYLEING FOR SMALLER SCREENS

  const container2 = {
    display: "flex",
    gap: "1.5rem",
    marginBottom: "3.5rem",
    justifyContent: "center",
    alignItems: "center",
  };

  //   FUNCTION
  function addBorderLine(e) {
    e.preventDefault();
    const container1An = document.querySelector(".container1An");
    const container1An2 = document.querySelector(".container1An2");
    const container1An3 = document.querySelector(".container1An3");
    const container1An4 = document.querySelector(".container1An4");

    if ((container1An.style.color = "#717171")) {
      container1An.style.color = "black";
      container1An2.style.color = "#717171";
      container1An3.style.color = "#717171";
      container1An4.style.color = "#717171";

      container1An.style.borderBottom = "2px solid black";
      container1An2.style.borderBottom = "none";
      container1An3.style.borderBottom = "none";
      container1An4.style.borderBottom = "none";
    } else {
      container1An.style.color = "#717171";
      container1An.style.borderBottom = "none";
    }

    // DISPLAY CATEGORIES - CLOTHING, BEAUTY, HOME, FOOD
    const beauty = document.querySelector(".beauty");
    beauty.style.display = "none";

    const home = document.querySelector(".home");
    home.style.display = "none";

    const food = document.querySelector(".food");
    food.style.display = "none";

    const clothing = document.querySelector(".clothing");
    clothing.style.display = "flex";
  }
  function addBorderLine2(e) {
    e.preventDefault();
    const container1An = document.querySelector(".container1An");
    const container1An2 = document.querySelector(".container1An2");
    const container1An3 = document.querySelector(".container1An3");
    const container1An4 = document.querySelector(".container1An4");

    if ((container1An2.style.color = "#717171")) {
      container1An2.style.color = "black";
      container1An.style.color = "#717171";
      container1An3.style.color = "#717171";
      container1An4.style.color = "#717171";

      container1An2.style.borderBottom = "2px solid black";
      container1An.style.borderBottom = "none";
      container1An3.style.borderBottom = "none";
      container1An4.style.borderBottom = "none";

      // DISPLAY CATEGORIES - CLOTHING, BEAUTY, HOME, FOOD
      const clothing = document.querySelector(".clothing");
      clothing.style.display = "none";

      const home = document.querySelector(".home");
      home.style.display = "none";

      const food = document.querySelector(".food");
      food.style.display = "none";

      const beauty = document.querySelector(".beauty");
      beauty.style.display = "flex";
    } else {
      container1An2.style.color = "#717171";
      container1An2.style.borderBottom = "none";
    }
  }
  function addBorderLine3(e) {
    e.preventDefault();
    const container1An = document.querySelector(".container1An");
    const container1An2 = document.querySelector(".container1An2");
    const container1An3 = document.querySelector(".container1An3");
    const container1An4 = document.querySelector(".container1An4");

    if ((container1An3.style.color = "#717171")) {
      container1An3.style.color = "black";
      container1An2.style.color = "#717171";
      container1An.style.color = "#717171";
      container1An4.style.color = "#717171";

      container1An3.style.borderBottom = "2px solid black";
      container1An.style.borderBottom = "none";
      container1An2.style.borderBottom = "none";
      container1An4.style.borderBottom = "none";

      // DISPLAY CATEGORIES - CLOTHING, BEAUTY, HOME, FOOD
      const beauty = document.querySelector(".beauty");
      beauty.style.display = "none";

      const clothing = document.querySelector(".clothing");
      clothing.style.display = "none";

      const food = document.querySelector(".food");
      food.style.display = "none";

      const home = document.querySelector(".home");
      home.style.display = "flex";
    } else {
      container1An3.style.color = "#717171";
      container1An3.style.borderBottom = "none";
    }
  }
  function addBorderLine4(e) {
    e.preventDefault();
    const container1An = document.querySelector(".container1An");
    const container1An2 = document.querySelector(".container1An2");
    const container1An3 = document.querySelector(".container1An3");
    const container1An4 = document.querySelector(".container1An4");

    if ((container1An4.style.color = "#717171")) {
      container1An4.style.color = "black";
      container1An2.style.color = "#717171";
      container1An3.style.color = "#717171";
      container1An.style.color = "#717171";

      container1An4.style.borderBottom = "2px solid black";
      container1An.style.borderBottom = "none";
      container1An2.style.borderBottom = "none";
      container1An3.style.borderBottom = "none";

      // DISPLAY CATEGORIES - CLOTHING, BEAUTY, HOME, FOOD
      const beauty = document.querySelector(".beauty");
      beauty.style.display = "none";

      const home = document.querySelector(".home");
      home.style.display = "none";

      const clothing = document.querySelector(".clothing");
      clothing.style.display = "none";

      const food = document.querySelector(".food");
      food.style.display = "flex";
    } else {
      container1An4.style.color = "#717171";
      container1An4.style.borderBottom = "none";
    }
  }

  return (
    <>
      <MediaQuery minWidth={356}>
        <div style={mainContainer} className="mainContainer">
          <p style={pStyle}>RECOMMENDED FOR YOU</p>
          <div style={container1} className="container1">
            <a
              onClick={addBorderLine}
              style={container1An1}
              className="container1An"
              href=""
            >
              Clothing
            </a>
            <a
              onClick={addBorderLine2}
              style={container1An2}
              className="container1An2"
              href=""
            >
              Beauty
            </a>
            <a
              onClick={addBorderLine3}
              style={container1An3}
              className="container1An3"
              href=""
            >
              Home
            </a>
            <a
              onClick={addBorderLine4}
              style={container1An4}
              className="container1An4"
              href=""
            >
              Food
            </a>
          </div>
          <div className="container2">
            <CarouselMain />
          </div>
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={355}>
        <div style={mainContainer} className="mainContainer">
          <p style={pStyle}>RECOMMENDED FOR YOU</p>
          <div style={container2} className="container1">
            <a
              onClick={addBorderLine}
              style={container1An1}
              className="container1An"
              href=""
            >
              Clothing
            </a>
            <a
              onClick={addBorderLine2}
              style={container1An2}
              className="container1An2"
              href=""
            >
              Beauty
            </a>
            <a
              onClick={addBorderLine3}
              style={container1An3}
              className="container1An3"
              href=""
            >
              Home
            </a>
            <a
              onClick={addBorderLine4}
              style={container1An4}
              className="container1An4"
              href=""
            >
              Food
            </a>
          </div>
          <div className="container2">
            <CarouselMain />
          </div>
        </div>
      </MediaQuery>
    </>
  );
}

export default Recommended;
