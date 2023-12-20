import arrowDownIcon from "../../../assets/images/icons/arrow-down-icon.svg";
import promotionsIcon from "../../../assets/images/dropdown/promotions-icon.png";
import dailyDifferenceIcon from "../../../assets/images/dropdown/dailyDifference-icon.png";
import newInIcon from "../../../assets/images/dropdown/newIn-icon.png";
import giftCardsIcon from "../../../assets/images/dropdown/giftCards-icon.png";

function ShopByDepartment() {
  // STYLE
  const mainContainer = {
    position: "absolute",
    background: "white",
    top: "72px",
    width: "100%",
    borderTop: "1px solid #e5e5e5",
    zIndex: "10",
    display: "none",
  };

  const mainContainerBack = {
    paddingLeft: "1.25rem",

    display: "flex",
  };

  const mainContainerStyle = {
    paddingBlock: "2.5rem",
    paddingRight: "1.5rem",
    marginRight: "0.125rem",
    borderRight: "2px solid #e5e5e5",
  };

  const mainContainerStyle2 = {
    paddingBlock: "2.5rem",
    paddingRight: "1.5rem",
    marginRight: "0.125rem",
    borderRight: "2px solid #e5e5e5",
    paddingLeft: "1.5rem",
    display: "none",
  };

  const mainContainerStyle3 = {
    paddingBlock: "2.5rem",
    marginRight: "0.125rem",
    paddingLeft: "1.5rem",
  };

  const titleContainer = {
    padding: "0.75rem",
    height: "auto",
    borderBottom: "0.0625rem solid #eee",
    alignItems: "center",
    width: "7.9375rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const titleContainer2 = {
    padding: "0.75rem",
    height: "auto",
    alignItems: "center",
    maxWidth: "17.2711875rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "0.0625rem solid #eee",
  };

  const title = {
    fontWeight: 400,
    fontSize: "1rem",
    fontStyle: "normal",
    color: "#474747",
    marginRight: "1.5rem",
  };

  const title2 = {
    fontWeight: 400,
    fontSize: "1rem",
    fontStyle: "normal",
    color: "#474747",
    marginRight: "2.3125rem",
  };

  const top = {
    paddingBottom: "2.75rem",
  };
  const topInnerStyle = {
    display: "flex",
    marginBottom: "1.125rem",
    alignItems: "center",
  };

  const pTopStyle = {
    color: "black",
    fontWeight: "400",
  };

  const pTopStyleBottom = {
    color: "black",
    fontWeight: "400",
    marginBottom: "1.125rem",
  };

  const topInnerImg = {
    marginRight: "1.0625rem",
  };

  const topInnerImg2 = {
    marginRight: "1.0625rem",
    width: "1.4375rem",
    height: "1.4375rem",
  };

  const arrowIconRotate = {
    transform: "rotate(-90deg)",
  };
  //   TITLES Pantry

  const titles = [
    "Food",
    "WCeller",
    "Women",
    "Man",
    "kids",
    "Baby",
    "Home",
    "Beauty",
    "WConnect",
  ];
  const foodsub1 = [
    "Fruit, Vegetables & Salads",
    "Meat, Poultry & Fish",
    "Milk, Diary & Eggs",
    "Ready Meals",
    "Deli & Entertaining",
    "Food To Go",
    "Bakery",
    "Frozen Food",
    "Pantry",
    "Beverages & Juices",
    "Household",
    "Cleaning",
    "Toiletries & Health",
    "Flowers & Plants",
    "Kids",
    "Baby",
    "Pets",
    "Foodie Gifts",
  ];

  const foodsub2 = [
    "Fresh Vegetables",
    "Fresh Fruit",
    "Salads & Herbs",
    "Bulk Vegetables, Fruit & Salads",
  ];
  //EVENTLISTER

  function hideDropMenu() {
    const ShopByDepartment = document.getElementById("ShopByDepartment");
    const arrowDrop1 = document.getElementById("arrowDrop1");

    ShopByDepartment.style.display = "none";
    arrowDrop1.style.transform = "rotate(0deg)";

    //HIDE SIDE MENUS
    const mainContainer2 = document.querySelector(".mainContainer2");
    const mainContainer3 = document.querySelector(".mainContainer3");

    mainContainer2.style.display = "none";
    mainContainer3.style.display = "none";
  }

  function showDropMenu() {
    const ShopByDepartment = document.getElementById("ShopByDepartment");
    const arrowDrop1 = document.getElementById("arrowDrop1");

    ShopByDepartment.style.display = "flex";
    arrowDrop1.style.transform = "rotate(180deg)";
  }

  //SHOW SIDE MENUES
  function showSideMenu2() {
    const mainContainer2 = document.querySelector(".mainContainer2");
    mainContainer2.style.display = "block";
  }
  function showSideMenu3() {
    const mainContainer3 = document.querySelector(".mainContainer3");
    mainContainer3.style.display = "block";
  }

  return (
    <div
      onMouseOver={showDropMenu}
      onMouseLeave={hideDropMenu}
      style={mainContainer}
      className="mainContainer"
      id="ShopByDepartment"
    >
      <div style={mainContainerBack} className="container1">
        <div style={mainContainerStyle} className="mainContainer1">
          {titles.map((title1) => {
            return (
              <div
                onMouseOver={showSideMenu2}
                style={titleContainer}
                className="titleContainer"
              >
                <p style={title}>{title1}</p>
                <img style={arrowIconRotate} src={arrowDownIcon} alt="" />
              </div>
            );
          })}
        </div>
        <div style={mainContainerStyle2} className="mainContainer2">
          {foodsub1.map((foodsub) => {
            return (
              <div
                onMouseOver={showSideMenu3}
                style={titleContainer2}
                className="titleContainer"
              >
                <p style={title2}>{foodsub}</p>
                <img style={arrowIconRotate} src={arrowDownIcon} alt="" />
              </div>
            );
          })}
        </div>
        <div style={mainContainerStyle2} className="mainContainer3">
          {foodsub2.map((foodsub) => {
            return (
              <div style={titleContainer2} className="titleContainer">
                <p style={title}>{foodsub}</p>
                <img style={arrowIconRotate} src={arrowDownIcon} alt="" />
              </div>
            );
          })}
        </div>
        <div style={mainContainerStyle3} className="mainContainer4">
          <div style={top} className="top">
            <div style={topInnerStyle} className="promotions">
              <img style={topInnerImg} src={promotionsIcon} alt="" />
              <p style={pTopStyle}>Promotions</p>
            </div>
            <div style={topInnerStyle} className="dailyDiff">
              <img style={topInnerImg2} src={dailyDifferenceIcon} alt="" />
              <p style={pTopStyle}>Daily Difference</p>
            </div>
            <div style={topInnerStyle} className="newIn">
              <img style={topInnerImg} src={newInIcon} alt="" />
              <p style={pTopStyle}>New In</p>
            </div>
            <div style={topInnerStyle} className="giftCards">
              <img style={topInnerImg} src={giftCardsIcon} alt="" />
              <p style={pTopStyle}>Gift Cards</p>
            </div>
          </div>
          <div className="bottom">
            <p style={pTopStyleBottom}>Christmas</p>
            <p style={pTopStyleBottom}>Festive Braai Shop</p>
            <p style={pTopStyleBottom}>Wellbeing & Plant Based Shop</p>
            <p style={pTopStyleBottom}>Woolies Favourites Shop</p>
            <p style={pTopStyleBottom}>My Wine Match</p>
            <p style={pTopStyleBottom}>Recipes & Inspiration</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopByDepartment;
