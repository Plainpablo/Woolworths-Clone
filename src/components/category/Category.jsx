import MediaQuery from "react-responsive";

import pic1 from "../../assets/images/category/pic-1.png";
import pic2 from "../../assets/images/category/pic-2.jpg";
import pic3 from "../../assets/images/category/pic-3.png";
import pic4 from "../../assets/images/category/pic-4.jpg";
import pic5 from "../../assets/images/category/pic-5.jpg";
import pic6 from "../../assets/images/category/pic-6.jpg";

function Category() {
  const mainContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBlockStart: "1.25rem",
    maxWidth: "87.5rem",
    marginInline: "auto",
    paddingInline: "1.25rem",
    paddingInline: "1.25rem",
    // gap: "1.25rem",
  };

  const categoryImg = {
    maxWidth: "15.66%",
    cursor: "pointer",
  };

  // STYLE FOR SMALLER SCREEN
  const mainContainer1 = {
    display: "flex",
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBlockStart: "1.25rem",
    maxWidth: "87.5rem",
    marginInline: "auto",
    paddingInline: "1.25rem",
    paddingInline: "1.25rem",
    gap: "1.25rem",
  };
  const mainContainer2 = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "1.25rem",
  };

  const categoryImg2 = {
    width: "100%",
    cursor: "pointer",
    marginBlockEnd: "1.25rem",
  };

  return (
    <>
      <MediaQuery minWidth={768}>
        <div style={mainContainer} className="mainContainer">
          <img style={categoryImg} src={pic1} alt="category-women-icon" />
          <img style={categoryImg} src={pic2} alt="category-men-icon" />
          <img style={categoryImg} src={pic3} alt="category-kids-icon" />
          <img style={categoryImg} src={pic4} alt="category-food-icon" />
          <img style={categoryImg} src={pic5} alt="category-home-icon" />
          <img style={categoryImg} src={pic6} alt="category-beauty-icon" />
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={767}>
        <div style={mainContainer1} className="mainContainer">
          <div style={mainContainer2} className="mainContainer2">
            <img style={categoryImg2} src={pic1} alt="category-women-icon" />
            <img style={categoryImg2} src={pic2} alt="category-men-icon" />
          </div>
          <div style={mainContainer2} className="mainContainer2">
            <img style={categoryImg2} src={pic3} alt="category-kids-icon" />
            <img style={categoryImg2} src={pic4} alt="category-food-icon" />
          </div>
          <div style={mainContainer2} className="mainContainer2">
            <img style={categoryImg2} src={pic5} alt="category-home-icon" />
            <img style={categoryImg2} src={pic6} alt="category-beauty-icon" />
          </div>
        </div>
      </MediaQuery>
    </>
  );
}

export default Category;
