import AppDownload from "./components/appDownload/AppDownload";
import BlackFridayHero from "./components/blackFridayHero/BlackFridayHero";
import BorderLine from "./components/borderLine/BorderLine";
import Category from "./components/category/Category";
import FooterBottom from "./components/footer/FooterBottom";
import FooterTop from "./components/footer/FooterTop";
import HeaderBottom from "./components/header/HeaderBottom";
import HeaderBottom2 from "./components/header/HeaderBottom2";
import HeaderTop from "./components/header/HeaderTop";
import Recommended from "./components/recommended/Recommended";
import SocialWithWoolies from "./components/socialWithWoolies/SocialWithWoolies";
import ThisWeekSection from "./components/ThisWeekSection/ThisWeekSection";

function App() {
  return (
    <>
      <HeaderTop />
      <HeaderBottom />
      <HeaderBottom2 />
      <BlackFridayHero />
      <Category />
      <Recommended />
      <ThisWeekSection />
      <SocialWithWoolies />
      <AppDownload />
      <FooterTop />
      <BorderLine />
      <FooterBottom />
    </>
  );
}

export default App;
