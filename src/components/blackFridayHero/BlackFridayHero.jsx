import MediaQuery from "react-responsive";

import hero1 from "../../assets/images/black-friday-hero-1.jpg";
import hero2 from "../../assets/images/black-friday-hero-2.jpg";
import hero3 from "../../assets/images/black-friday-hero-3.jpg";
import hero4 from "../../assets/images/black-friday-hero-4.jpg";
import hero5 from "../../assets/images/black-friday-hero-5.jpg";
import hero6 from "../../assets/images/black-friday-hero-6.png";

function BlackFridayHero() {
  // STYLE
  const mainContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "87.5rem",
    marginInline: "auto",
    paddingInline: "1.25rem",
    position: "relative",
  };

  const blackFridayHero = {
    width: "100%",
    marginBlockStart: "1.25rem",
    cursor: "pointer",
  };

  const container2 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.25rem",
    marginInline: "1.25rem",
    maxWidth: "87.5rem",
    marginBlockStart: "1.25rem",
  };

  const container2Img = {
    maxWidth: "33.33%",
    cursor: "pointer",
  };

  //STYLEING FOR SMALLER SCREENS
  const mainContainer2 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "87.5rem",
    marginInline: "auto",
    paddingInline: "1.25rem",
    position: "relative",
  };

  const container2Img2 = {
    width: "100%",
    cursor: "pointer",
  };

  return (
    <>
      <MediaQuery minWidth={768}>
        <div style={mainContainer} className="mainContainer">
          <img
            style={blackFridayHero}
            src={hero1}
            alt="black-friday-hero-image-1"
          />
          <div style={container2} className="container2">
            <img
              style={container2Img}
              src={hero2}
              alt="black-friday-hero-image-2"
            />
            <img
              style={container2Img}
              src={hero3}
              alt="black-friday-hero-image-3"
            />
            <img
              style={container2Img}
              src={hero4}
              alt="black-friday-hero-image-4"
            />
          </div>
          <img
            style={blackFridayHero}
            src={hero5}
            alt="black-friday-hero-image-5"
          />
          <img
            style={blackFridayHero}
            src={hero6}
            alt="black-friday-hero-image-6"
          />
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <div style={mainContainer} className="mainContainer">
          <img
            style={container2Img2}
            src={hero2}
            alt="black-friday-hero-image-2"
          />
          <img
            style={container2Img2}
            src={hero3}
            alt="black-friday-hero-image-3"
          />
          <img
            style={container2Img2}
            src={hero4}
            alt="black-friday-hero-image-4"
          />
        </div>
      </MediaQuery>
    </>
  );
}

export default BlackFridayHero;
