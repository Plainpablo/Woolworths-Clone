import MediaQuery from "react-responsive";

import pic1 from "../../assets/images/thisWeek/pic-1.jpg";
import pic2 from "../../assets/images/thisWeek/pic-2.jpg";
import pic3 from "../../assets/images/thisWeek/pic-3.jpg";
import pic4 from "../../assets/images/thisWeek/pic-4.jpg";
import pic5 from "../../assets/images/thisWeek/pic-5.jpg";
import pic6 from "../../assets/images/thisWeek/pic-6.jpg";
import pic7 from "../../assets/images/thisWeek/pic-7.jpg";
import pic8 from "../../assets/images/thisWeek/pic-8.jpg";
import pic9 from "../../assets/images/thisWeek/pic-9.jpg";
import pic10 from "../../assets/images/thisWeek/pic-10.png";
import pic11 from "../../assets/images/thisWeek/pic-11.jpg";

//Import shopByDepartment img
import sPic1 from "../../assets/images/thisWeek/shopByDepartment/pic-1.png";
import sPic2 from "../../assets/images/thisWeek/shopByDepartment/pic-2.png";
import sPic3 from "../../assets/images/thisWeek/shopByDepartment/pic-3.png";
import sPic4 from "../../assets/images/thisWeek/shopByDepartment/pic-4.png";
import sPic5 from "../../assets/images/thisWeek/shopByDepartment/pic-5.png";
import sPic6 from "../../assets/images/thisWeek/shopByDepartment/pic-6.png";
import sPic7 from "../../assets/images/thisWeek/shopByDepartment/pic-7.png";
import sPic8 from "../../assets/images/thisWeek/shopByDepartment/pic-8.png";
import sPic9 from "../../assets/images/thisWeek/shopByDepartment/pic-9.png";
import sPic10 from "../../assets/images/thisWeek/shopByDepartment/pic-10.png";
import sPic11 from "../../assets/images/thisWeek/shopByDepartment/pic-11.png";
import sPic12 from "../../assets/images/thisWeek/shopByDepartment/pic-12.png";
import sPic13 from "../../assets/images/thisWeek/shopByDepartment/pic-13.jpg";

function ThisWeekSection() {
  const mainContainer = {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    maxWidth: "87.5rem",
    marginInline: "auto",
    paddingInline: "1.25rem",
  };
  const heading = {
    fontWeight: 700,
    fontSize: "1.75rem",
    color: "black",
    paddingBlock: "2.25rem",
    marginInline: "auto",
  };
  const container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: ".9rem",
    marginInline: "1.25rem",
    maxWidth: "87.5rem",
  };
  const container2 = {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "87.5rem",
    marginTop: "1.25rem",
  };

  const containerImg = {
    maxWidth: "25%",
    cursor: "pointer",
  };

  const containerImg2 = {
    width: "100%",
    cursor: "pointer",
  };

  const containerImg3 = {
    maxWidth: "49.3%",
    cursor: "pointer",
  };

  const shopByDepartment = {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "87.5rem",
  };

  const shopByDepartmentImg = {
    maxWidth: "24.3%",
    marginBottom: "1.25rem",
    cursor: "pointer",
  };

  // STYLING FOR SMALLER SCREEN
  const container3 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // gap: ".9rem",
    // marginInline: "1.25rem",
    // maxWidth: "87.5rem",
  };

  const containerImg4 = {
    maxWidth: "48.5%",
    cursor: "pointer",
  };

  const container1TwoImg = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1.25rem",
  };

  const containerImg5 = {
    maxWidth: "100%",
    cursor: "pointer",
    marginBottom: "1.25rem",
  };

  return (
    <>
      <MediaQuery minWidth={768}>
        <div style={mainContainer} className="mainContainer">
          <p style={heading}>THIS WEEK IN WOOLIES FOOD</p>
          <div style={container} className="container1">
            <img style={containerImg} src={pic1} alt="food-sale-image-1" />
            <img style={containerImg} src={pic2} alt="food-sale-image-2" />
            <img style={containerImg} src={pic3} alt="food-sale-image-3" />
            <img style={containerImg} src={pic4} alt="food-sale-image-4" />
          </div>
          <p style={heading}>THIS WEEK IN FASHION, BEAUTY & HOMEWARE </p>
          <div style={container} className="container1">
            <img style={containerImg} src={pic5} alt="food-sale-image-1" />
            <img style={containerImg} src={pic6} alt="food-sale-image-2" />
            <img style={containerImg} src={pic7} alt="food-sale-image-3" />
            <img style={containerImg} src={pic8} alt="food-sale-image-4" />
          </div>
          <p style={heading}>THIS WEEK IN WOOLIES</p>
          <img style={containerImg2} src={pic9} alt="food-sale-image-4" />
          <div style={container2} className="container1">
            <img style={containerImg3} src={pic10} alt="food-sale-image-1" />
            <img style={containerImg3} src={pic11} alt="food-sale-image-2" />
          </div>
          <p style={heading}>SHOP BY DEPARTMENT</p>
          <div style={shopByDepartment} className="shopByDepartment">
            <img
              style={shopByDepartmentImg}
              src={sPic1}
              alt="shopping-department-1"
            />
            <img
              style={shopByDepartmentImg}
              src={sPic2}
              alt="shopping-department-2"
            />
            <img
              style={shopByDepartmentImg}
              src={sPic3}
              alt="shopping-department-3"
            />
            <img
              style={shopByDepartmentImg}
              src={sPic4}
              alt="shopping-department-4"
            />
          </div>
          <div style={shopByDepartment} className="shopByDepartment">
            <img
              style={shopByDepartmentImg}
              src={sPic5}
              alt="shopping-department-5"
            />
            <img
              style={shopByDepartmentImg}
              src={sPic6}
              alt="shopping-department-6"
            />
            <img
              style={shopByDepartmentImg}
              src={sPic7}
              alt="shopping-department-7"
            />
            <img
              style={shopByDepartmentImg}
              src={sPic8}
              alt="shopping-department-8"
            />
          </div>
          <div style={shopByDepartment} className="shopByDepartment">
            <img
              style={shopByDepartmentImg}
              src={sPic9}
              alt="shopping-department-9"
            />
            <img
              style={shopByDepartmentImg}
              src={sPic10}
              alt="shopping-department-10"
            />
            <img
              style={shopByDepartmentImg}
              src={sPic11}
              alt="shopping-department-11"
            />
            <img
              style={shopByDepartmentImg}
              src={sPic12}
              alt="shopping-department-12"
            />
          </div>
          <div style={shopByDepartment} className="shopByDepartment">
            <img
              style={shopByDepartmentImg}
              src={sPic13}
              alt="shopping-department-13"
            />
          </div>
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={767}>
        <div style={mainContainer} className="mainContainer">
          <p style={heading}>THIS WEEK IN WOOLIES FOOD</p>
          <div style={container3} className="container1">
            <div style={container1TwoImg} className="container1TwoImg">
              <img style={containerImg4} src={pic1} alt="food-sale-image-1" />
              <img style={containerImg4} src={pic2} alt="food-sale-image-2" />
            </div>
            <div style={container1TwoImg} className="container1TwoImg">
              <img style={containerImg4} src={pic3} alt="food-sale-image-3" />
              <img style={containerImg4} src={pic4} alt="food-sale-image-4" />
            </div>
          </div>
          <p style={heading}>THIS WEEK IN FASHION, BEAUTY & HOMEWARE </p>
          <div style={container3} className="container1">
            <div style={container1TwoImg} className="container1TwoImg">
              <img style={containerImg4} src={pic5} alt="food-sale-image-1" />
              <img style={containerImg4} src={pic6} alt="food-sale-image-2" />
            </div>
            <div style={container1TwoImg} className="container1TwoImg">
              <img style={containerImg4} src={pic7} alt="food-sale-image-3" />
              <img style={containerImg4} src={pic8} alt="food-sale-image-4" />
            </div>
          </div>
          <p style={heading}>THIS WEEK IN WOOLIES</p>
          <div style={container3} className="container1">
            <img style={containerImg5} src={pic10} alt="food-sale-image-1" />
            <img style={containerImg5} src={pic11} alt="food-sale-image-2" />
          </div>
          <p style={heading}>SHOP BY DEPARTMENT</p>
          <div style={container1TwoImg} className="container1TwoImg">
            <img
              style={containerImg4}
              src={sPic1}
              alt="shopping-department-1"
            />
            <img
              style={containerImg4}
              src={sPic2}
              alt="shopping-department-2"
            />
          </div>
          <div style={container1TwoImg} className="container1TwoImg">
            <img
              style={containerImg4}
              src={sPic3}
              alt="shopping-department-3"
            />
            <img
              style={containerImg4}
              src={sPic4}
              alt="shopping-department-4"
            />
          </div>
          <div style={container1TwoImg} className="container1TwoImg">
            <img
              style={containerImg4}
              src={sPic5}
              alt="shopping-department-5"
            />
            <img
              style={containerImg4}
              src={sPic6}
              alt="shopping-department-6"
            />
          </div>
          <div style={container1TwoImg} className="container1TwoImg">
            <img
              style={containerImg4}
              src={sPic7}
              alt="shopping-department-7"
            />
            <img
              style={containerImg4}
              src={sPic8}
              alt="shopping-department-8"
            />
          </div>
          <div style={container1TwoImg} className="container1TwoImg">
            <img
              style={containerImg4}
              src={sPic9}
              alt="shopping-department-9"
            />
            <img
              style={containerImg4}
              src={sPic10}
              alt="shopping-department-10"
            />
          </div>
          <div style={container1TwoImg} className="container1TwoImg">
            <img
              style={containerImg4}
              src={sPic11}
              alt="shopping-department-11"
            />
            <img
              style={containerImg4}
              src={sPic12}
              alt="shopping-department-12"
            />
          </div>
          <div style={container1TwoImg} className="container1TwoImg">
            <img
              style={containerImg4}
              src={sPic13}
              alt="shopping-department-13"
            />
          </div>
        </div>
      </MediaQuery>
    </>
  );
}

export default ThisWeekSection;
