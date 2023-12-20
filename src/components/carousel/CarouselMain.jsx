import React, { useState } from "react";
import CarouselComponent from "./CarouselComponent";
import MediaQuery from "react-responsive";

//Import clothes imgs
import item1 from "../../assets/images/carousel/clothing/item1.jpg";
import item2 from "../../assets/images/carousel/clothing/item2.jpg";
import item3 from "../../assets/images/carousel/clothing/item3.jpg";
import item4 from "../../assets/images/carousel/clothing/item4.jpg";
import item5 from "../../assets/images/carousel/clothing/item5.jpg";
import item6 from "../../assets/images/carousel/clothing/item6.jpg";
import item7 from "../../assets/images/carousel/clothing/item7.jpg";
import item8 from "../../assets/images/carousel/clothing/item8.jpg";
import item9 from "../../assets/images/carousel/clothing/item9.jpg";
import item10 from "../../assets/images/carousel/clothing/item10.jpg";
import item11 from "../../assets/images/carousel/clothing/item11.jpg";

//Import beauty imgs
import bItem1 from "../../assets/images/carousel/beauty/item1.jpg";
import bItem2 from "../../assets/images/carousel/beauty/item2.jpg";
import bItem3 from "../../assets/images/carousel/beauty/item3.jpg";
import bItem4 from "../../assets/images/carousel/beauty/item4.jpg";
import bItem5 from "../../assets/images/carousel/beauty/item5.jpg";

//Import home imgs
import hItem1 from "../../assets/images/carousel/home/item1.jpg";
import hItem2 from "../../assets/images/carousel/home/item2.jpg";
import hItem3 from "../../assets/images/carousel/home/item3.jpg";
import hItem4 from "../../assets/images/carousel/home/item4.jpg";
import hItem5 from "../../assets/images/carousel/home/item5.jpg";

//Import food imgs
import fItem1 from "../../assets/images/carousel/food/item1.jpg";
import fItem2 from "../../assets/images/carousel/food/item2.jpg";
import fItem3 from "../../assets/images/carousel/food/item3.jpg";
import fItem4 from "../../assets/images/carousel/food/item4.jpg";
import fItem5 from "../../assets/images/carousel/food/item5.jpg";

//Import food imgs
import arrowIconLeft from "../../assets/images/carousel/Icons/arrowIconLeft.svg";
import arrowIconRight from "../../assets/images/carousel/Icons/arrowIconRight.svg";

function CarouselMain() {
  // STYLE

  console.log(item1);
  const mainContainer = {
    display: "flex",
    gap: "1.5rem",
    maxWidth: "87.5rem",
    marginInline: "auto",
    paddingInline: "1.25rem",
    position: "relative",
    overflowX: "hidden",
  };

  const arrowIcon = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: " calc(50% - 136px)",
    left: "3.375rem",
    width: "48px",
    height: "48px",
    backgroundColor: "#fff",
    zIndex: "10",
    cursor: "pointer",
  };

  const arrowIcon2 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: " calc(50% - 136px)",
    right: "3.375rem",
    width: "48px",
    height: "48px",
    backgroundColor: "#fff",
    zIndex: "10",
    cursor: "pointer",
  };
  // ITEAMS

  const clothing = [
    {
      itemImg: `${item1}`,
      alt: "plain-sleepsuit-image",
      nocolors: "11 Colors",
      brand: "WOOLIESBABES",
      itemTitle: "Plain Sleepsuit",
      sale: "3 for 2 KIDS",
      price: "R129.00",
    },
    {
      itemImg: `${item2}`,
      alt: "denim-shorts-image",
      nocolors: "8 Colors",
      brand: "RE:",
      itemTitle: "Denim Shorts",
      sale: "3 for 2 WOMEN",
      price: "R349.00",
    },
    {
      itemImg: `${item3}`,
      alt: "chino-shorts-image",
      nocolors: "8 Colors",
      brand: "WOOLWORTHS",
      itemTitle: "Chino Shorts",
      sale: "3 for 2 WOMEN",
      price: "R349.00",
    },
    {
      itemImg: `${item4}`,
      alt: "plain-cotton-sleepsuit-image",
      nocolors: "3 Colors",
      brand: "WOOLIESBABES",
      itemTitle: "Plain Cotton Sleepsuit",
      sale: "3 for 2 KIDS",
      price: "R109.00",
    },
    {
      itemImg: `${item5}`,
      alt: "v-neck-cotton-tshirt-image",
      nocolors: "20 Colors",
      brand: "WOOLWORTHS",
      itemTitle: "StayMew Cotton T-shirt",
      sale: "3 for 2 MENS",
      price: "R159.00",
    },
    {
      itemImg: `${item6}`,
      alt: " Slim-Fit-Stretch-Cotton-Chinos-image",
      nocolors: "9 Colors",
      brand: "WOOLWORTHS",
      itemTitle: " Slim Fit Stretch Cotton Chinos",
      sale: "3 for 2 MENS",
      price: "R499.00",
    },
    {
      itemImg: `${item7}`,
      alt: " Stretch-Frill-Sleeve-Viscose-Shirtimage",
      nocolors: "2 Colors",
      brand: "WOOLWORTHS",
      itemTitle: " Stretch Frill Sleeve Viscose Shirt",
      sale: "3 for 2 WOMEN",
      price: "R399.00",
    },
    {
      itemImg: `${item8}`,
      alt: " Regular-Fit-Cotton-Chinos-image",
      nocolors: "4 Colors",
      brand: "WOOLWORTHS",
      itemTitle: " Regular Fit Cotton Chinos",
      sale: "3 for 2 WOMEN",
      price: "R499.00",
    },
    {
      itemImg: `${item9}`,
      alt: " Flat-Front-Slim-Fit-Chino-Shorts-image",
      nocolors: "8 Colors",
      brand: "WOOLIESBABES",
      itemTitle: " Flat Front Slim Fit Chino Shorts",
      sale: "3 for 2 MENS",
      price: "R499.00",
    },
    {
      itemImg: `${item10}`,
      alt: " Twill-Deck-Shorts-image",
      nocolors: "5 Colors",
      brand: "WOOLWORTHS",
      itemTitle: " Twill Deck Shorts",
      sale: "3 for 2 MENS",
      price: "R299.00",
    },
    {
      itemImg: `${item11}`,
      alt: "  Sherpa-Jumpsuit-image",
      nocolors: "7 Colors",
      brand: "WOOLIESBABES",
      itemTitle: "  Sherpa Jumpsuit",
      sale: "3 for 2 KIDS",
      price: "R199.00",
    },
  ];

  const beauty = [
    {
      itemImg: `${bItem1}`,
      alt: "  The-Daily-Set-image",
      nocolors: "3 Sizes",
      brand: "THE ORDINARY",
      itemTitle: "  The Daily Set",
      sale: "",
      price: "R420.00",
    },
    {
      itemImg: `${bItem2}`,
      alt: " ColorStay-Suede-Ink-Lipstick - No -image",
      nocolors: "16 Colors",
      brand: "REVLON",
      itemTitle: " ColorStay Suede Ink Lipstick - No ",
      sale: "",
      price: "R239.95",
    },
    {
      itemImg: `${bItem3}`,
      alt: "   Longwear-Max-Cover-Foundation-SPF-20-image",
      nocolors: "23 Colors",
      brand: "WBEAUTY",
      itemTitle: " Longwear-Max-Cover-Foundation-SPF-20",
      sale: "3 for 2 KIDS",
      price: "R249.00",
    },
    {
      itemImg: `${bItem4}`,
      alt: "    Rejuvenating-Cypress-Scented-Soap-image",
      nocolors: "3 Colors",
      brand: "NESTI DANTE",
      itemTitle: "  Rejuvenating Cypress Scented Soap",
      sale: "",
      price: "R79.95",
    },
    {
      itemImg: `${bItem5}`,
      alt: "   cucci-image",
      nocolors: "3 Size",
      brand: "Cucci",
      itemTitle: `Flora Gorgeous Magnolia Eau de Parfum for Women`,
      sale: "3 for 2 KIDS",
      price: "R249.00",
    },
    {
      itemImg: `${bItem1}`,
      alt: "  The-Daily-Set-image",
      nocolors: "3 Sizes",
      brand: "THE ORDINARY",
      itemTitle: "  The Daily Set",
      sale: "",
      price: "R420.00",
    },
    {
      itemImg: `${bItem2}`,
      alt: " ColorStay-Suede-Ink-Lipstick - No -image",
      nocolors: "16 Colors",
      brand: "REVLON",
      itemTitle: " ColorStay Suede Ink Lipstick - No ",
      sale: "",
      price: "R239.95",
    },
    {
      itemImg: `${bItem3}`,
      alt: "   Longwear-Max-Cover-Foundation-SPF-20-image",
      nocolors: "23 Colors",
      brand: "WBEAUTY",
      itemTitle: " Longwear-Max-Cover-Foundation-SPF-20",
      sale: "3 for 2 KIDS",
      price: "R249.00",
    },
    {
      itemImg: `${bItem4}`,
      alt: "    Rejuvenating-Cypress-Scented-Soap-image",
      nocolors: "3 Colors",
      brand: "NESTI DANTE",
      itemTitle: "  Rejuvenating Cypress Scented Soap",
      sale: "",
      price: "R79.95",
    },
    {
      itemImg: `${bItem5}`,
      alt: "   cucci-image",
      nocolors: "3 Size",
      brand: "Cucci",
      itemTitle: `Flora Gorgeous Magnolia Eau de Parfum for Women`,
      sale: "3 for 2 KIDS",
      price: "R249.00",
    },
    {
      itemImg: `${bItem5}`,
      alt: "   cucci-image",
      nocolors: "3 Size",
      brand: "Cucci",
      itemTitle: `Flora Gorgeous Magnolia Eau de Parfum for Women`,
      sale: "3 for 2 KIDS",
      price: "R249.00",
    },
  ];

  const home = [
    {
      itemImg: `${hItem1}`,
      alt: " Stripe-Coral-Fleece-Blanket-image",
      nocolors: "",
      brand: "WOOLIESBABES",
      itemTitle: " Stripe Coral Fleece Blanket",
      sale: "",
      price: "R229.00",
    },
    {
      itemImg: `${hItem2}`,
      alt: " Bunny-Coral-Fleece-Blanket-image",
      nocolors: "",
      brand: "WOOLIESBABES",
      itemTitle: "Bunny Coral Fleece Blanket",
      sale: "",
      price: "R189.00",
    },
    {
      itemImg: `${hItem3}`,
      alt: " Osaka-Porcelain-Dinner-Plate-image",
      nocolors: "",
      brand: "STUDIO. W",
      itemTitle: " Osaka Porcelain Dinner Plate",
      sale: "3 for 2 KIDS",
      price: "R129.00",
    },
    {
      itemImg: `${hItem4}`,
      alt: "Pippa-Australian-Cotton-Hand-Towel-image",
      nocolors: "4 Colors",
      brand: "COUNTRY ROAD",
      itemTitle: "Pippa Australian Cotton Hand Towel",
      sale: "",
      price: "R249.00",
    },
    {
      itemImg: `${hItem5}`,
      alt: " Clouds-Coral-Fleece-Blanket-image",
      nocolors: "",
      brand: "WOOLIESBABES",
      itemTitle: `Clouds Coral Fleece Blanket`,
      sale: "3 for 2 KIDS",
      price: "R189.00",
    },
    {
      itemImg: `${hItem1}`,
      alt: " Stripe-Coral-Fleece-Blanket-image",
      nocolors: "",
      brand: "WOOLIESBABES",
      itemTitle: " Stripe Coral Fleece Blanket",
      sale: "",
      price: "R229.00",
    },
    {
      itemImg: `${hItem2}`,
      alt: " Bunny-Coral-Fleece-Blanket-image",
      nocolors: "",
      brand: "WOOLIESBABES",
      itemTitle: "Bunny Coral Fleece Blanket",
      sale: "",
      price: "R189.00",
    },
    {
      itemImg: `${hItem3}`,
      alt: " Osaka-Porcelain-Dinner-Plate-image",
      nocolors: "",
      brand: "STUDIO. W",
      itemTitle: " Osaka Porcelain Dinner Plate",
      sale: "3 for 2 KIDS",
      price: "R129.00",
    },
    {
      itemImg: `${hItem4}`,
      alt: "Pippa-Australian-Cotton-Hand-Towel-image",
      nocolors: "4 Colors",
      brand: "COUNTRY ROAD",
      itemTitle: "Pippa Australian Cotton Hand Towel",
      sale: "",
      price: "R249.00",
    },
    {
      itemImg: `${hItem5}`,
      alt: " Clouds-Coral-Fleece-Blanket-image",
      nocolors: "",
      brand: "WOOLIESBABES",
      itemTitle: `Clouds Coral Fleece Blanket`,
      sale: "3 for 2 KIDS",
      price: "R189.00",
    },
    {
      itemImg: `${hItem1}`,
      alt: " Stripe-Coral-Fleece-Blanket-image",
      nocolors: "",
      brand: "WOOLIESBABES",
      itemTitle: " Stripe Coral Fleece Blanket",
      sale: "",
      price: "R229.00",
    },
  ];

  const food = [
    {
      itemImg: `${fItem1}`,
      alt: " Heat-&-Eat-Garlic-Butter-Filled-Ciabatta-360-g-image",
      nocolors: "",
      brand: "",
      itemTitle: " Heat & Eat Garlic Butter Filled Ciabatta 360 g",
      sale: "",
      price: "R59.99",
    },
    {
      itemImg: `${fItem2}`,
      alt: " Classic-Potato-Salad-1-kg-image",
      nocolors: "",
      brand: "",
      itemTitle: "Classic Potato Salad 1 kg",
      sale: "",
      price: "R77.99",
    },
    {
      itemImg: `${fItem3}`,
      alt: " All-Butter-Soetkoekie-Biscuits-in White-Tin-300-g-image",
      nocolors: "",
      brand: "",
      itemTitle: " All Butter Soetkoekie Biscuits in White Tin 300 g",
      sale: "",
      price: "R109.99",
    },
    {
      itemImg: `${fItem4}`,
      alt: " Extremely-Creamy-Belgian-Chocolate Dairy-Ice-Cream-1-L-image",
      nocolors: "",
      brand: "",
      itemTitle: " Extremely Creamy Belgian Chocolate Dairy Ice Cream 1 L",
      sale: "",
      price: "R103.99",
    },
    {
      itemImg: `${fItem5}`,
      alt: "Christmas-Oat-&-Choc-Chip-Crunchie Selection-in-Red-Tin-325-g-image",
      nocolors: "",
      brand: "",
      itemTitle: ` Christmas Oat & Choc Chip Crunchie Selection in Red Tin 325 g`,
      sale: "",
      price: "R99.99",
    },
    {
      itemImg: `${fItem1}`,
      alt: " Heat-&-Eat-Garlic-Butter-Filled-Ciabatta-360-g-image",
      nocolors: "",
      brand: "",
      itemTitle: " Heat & Eat Garlic Butter Filled Ciabatta 360 g",
      sale: "",
      price: "R59.99",
    },
    {
      itemImg: `${fItem2}`,
      alt: " Classic-Potato-Salad-1-kg-image",
      nocolors: "",
      brand: "",
      itemTitle: "Classic Potato Salad 1 kg",
      sale: "",
      price: "R77.99",
    },
    {
      itemImg: `${fItem3}`,
      alt: " All-Butter-Soetkoekie-Biscuits-in White-Tin-300-g-image",
      nocolors: "",
      brand: "",
      itemTitle: " All Butter Soetkoekie Biscuits in White Tin 300 g",
      sale: "",
      price: "R109.99",
    },
    {
      itemImg: `${fItem4}`,
      alt: " Extremely-Creamy-Belgian-Chocolate Dairy-Ice-Cream-1-L-image",
      nocolors: "",
      brand: "",
      itemTitle: " Extremely Creamy Belgian Chocolate Dairy Ice Cream 1 L",
      sale: "",
      price: "R103.99",
    },
    {
      itemImg: `${fItem5}`,
      alt: "Christmas-Oat-&-Choc-Chip-Crunchie Selection-in-Red-Tin-325-g-image",
      nocolors: "",
      brand: "",
      itemTitle: ` Christmas Oat & Choc Chip Crunchie Selection in Red Tin 325 g`,
      sale: "",
      price: "R99.99",
    },
    {
      itemImg: `${fItem5}`,
      alt: "Christmas-Oat-&-Choc-Chip-Crunchie Selection-in-Red-Tin-325-g-image",
      nocolors: "",
      brand: "",
      itemTitle: ` Christmas Oat & Choc Chip Crunchie Selection in Red Tin 325 g`,
      sale: "",
      price: "R99.99",
    },
  ];

  //
  // INDEX

  const [currentIndex, setCurrentIndex] = useState(0);

  function updateIndexDown() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    if (currentIndex <= 0) {
      setCurrentIndex(currentIndex - 0);
    }
  }

  function updateIndexUp() {
    if (currentIndex >= 0) {
      setCurrentIndex(currentIndex + 1);
    }
    if (currentIndex >= clothing.length - 5) {
      setCurrentIndex(currentIndex + 0);
    }
    if (currentIndex >= beauty.length - 5) {
      setCurrentIndex(currentIndex + 0);
    }
  }

  //RECOMMENDED

  const cardSlideStyle = {
    display: "flex",
    gap: "1.35rem",
  };

  const cardSlideStyle2 = {
    display: "none",
    gap: "1.35rem",
  };

  return (
    <>
      <MediaQuery minWidth={587}>
        <div style={mainContainer} className="mainContainerCarouselMain">
          <div onClick={updateIndexDown} style={arrowIcon}>
            <img src={arrowIconLeft} alt="" />
          </div>
          <div onClick={updateIndexUp} style={arrowIcon2}>
            <img src={arrowIconRight} alt="" />
          </div>
          {/* CLOTHING */}

          <div style={cardSlideStyle} className="clothing">
            {clothing.map((item, index) => {
              if (
                (index === currentIndex) |
                (index === currentIndex + 1) |
                (index === currentIndex + 2) |
                (index === currentIndex + 3) |
                (index === currentIndex + 4)
              ) {
                return (
                  <CarouselComponent
                    key={index}
                    itemImg={item.itemImg}
                    alt={item.alt}
                    nocolors={item.nocolors}
                    brand={item.brand}
                    itemTitle={item.itemTitle}
                    sale={item.sale}
                    price={item.price}
                  />
                );
              }
            })}
          </div>

          {/* BEAUTY */}

          <div style={cardSlideStyle2} className="beauty">
            {beauty.map((item, index) => {
              if (
                (index === currentIndex) |
                (index === currentIndex + 1) |
                (index === currentIndex + 2) |
                (index === currentIndex + 3) |
                (index === currentIndex + 4)
              ) {
                return (
                  <CarouselComponent
                    key={index}
                    itemImg={item.itemImg}
                    alt={item.alt}
                    nocolors={item.nocolors}
                    brand={item.brand}
                    itemTitle={item.itemTitle}
                    sale={item.sale}
                    price={item.price}
                  />
                );
              }
            })}
          </div>

          {/* HOME */}

          <div style={cardSlideStyle2} className="home">
            {home.map((item, index) => {
              if (
                (index === currentIndex) |
                (index === currentIndex + 1) |
                (index === currentIndex + 2) |
                (index === currentIndex + 3) |
                (index === currentIndex + 4)
              ) {
                return (
                  <CarouselComponent
                    key={index}
                    itemImg={item.itemImg}
                    alt={item.alt}
                    nocolors={item.nocolors}
                    brand={item.brand}
                    itemTitle={item.itemTitle}
                    sale={item.sale}
                    price={item.price}
                  />
                );
              }
            })}
          </div>

          {/* FOOD */}

          <div style={cardSlideStyle2} className="food">
            {food.map((item, index) => {
              if (
                (index === currentIndex) |
                (index === currentIndex + 1) |
                (index === currentIndex + 2) |
                (index === currentIndex + 3) |
                (index === currentIndex + 4)
              ) {
                return (
                  <CarouselComponent
                    key={index}
                    itemImg={item.itemImg}
                    alt={item.alt}
                    nocolors={item.nocolors}
                    brand={item.brand}
                    itemTitle={item.itemTitle}
                    sale={item.sale}
                    price={item.price}
                  />
                );
              }
            })}
          </div>
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={586}>
        <div style={mainContainer} className="mainContainerCarouselMain">
          <div onClick={updateIndexDown} style={arrowIcon}>
            <img src={arrowIconLeft} alt="" />
          </div>
          <div onClick={updateIndexUp} style={arrowIcon2}>
            <img src={arrowIconRight} alt="" />
          </div>
          {/* CLOTHING */}

          <div style={cardSlideStyle} className="clothing">
            {clothing.map((item, index) => {
              if ((index === currentIndex) | (index === currentIndex + 1)) {
                return (
                  <CarouselComponent
                    key={index}
                    itemImg={item.itemImg}
                    alt={item.alt}
                    nocolors={item.nocolors}
                    brand={item.brand}
                    itemTitle={item.itemTitle}
                    sale={item.sale}
                    price={item.price}
                  />
                );
              }
            })}
          </div>

          {/* BEAUTY */}

          <div style={cardSlideStyle2} className="beauty">
            {beauty.map((item, index) => {
              if ((index === currentIndex) | (index === currentIndex + 1)) {
                return (
                  <CarouselComponent
                    key={index}
                    itemImg={item.itemImg}
                    alt={item.alt}
                    nocolors={item.nocolors}
                    brand={item.brand}
                    itemTitle={item.itemTitle}
                    sale={item.sale}
                    price={item.price}
                  />
                );
              }
            })}
          </div>

          {/* HOME */}

          <div style={cardSlideStyle2} className="home">
            {home.map((item, index) => {
              if ((index === currentIndex) | (index === currentIndex + 1)) {
                return (
                  <CarouselComponent
                    key={index}
                    itemImg={item.itemImg}
                    alt={item.alt}
                    nocolors={item.nocolors}
                    brand={item.brand}
                    itemTitle={item.itemTitle}
                    sale={item.sale}
                    price={item.price}
                  />
                );
              }
            })}
          </div>

          {/* FOOD */}

          <div style={cardSlideStyle2} className="food">
            {food.map((item, index) => {
              if ((index === currentIndex) | (index === currentIndex + 1)) {
                return (
                  <CarouselComponent
                    key={index}
                    itemImg={item.itemImg}
                    alt={item.alt}
                    nocolors={item.nocolors}
                    brand={item.brand}
                    itemTitle={item.itemTitle}
                    sale={item.sale}
                    price={item.price}
                  />
                );
              }
            })}
          </div>
        </div>
      </MediaQuery>
    </>
  );
}

export default CarouselMain;
