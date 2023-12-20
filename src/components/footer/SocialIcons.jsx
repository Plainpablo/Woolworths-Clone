import facebook from "../../assets/images/footer/socials/facebook.svg";
import twitter from "../../assets/images/footer/socials/twitter.svg";
import pin from "../../assets/images/footer/socials/pin.svg";
import instagram from "../../assets/images/footer/socials/instagram.svg";
import youtube from "../../assets/images/footer/socials/youtube.svg";
import tiktok from "../../assets/images/footer/socials/tiktok.svg";
function SocialIcons() {
  const socialIcons = {
    // marginTop: "1.5rem",
    cursor: "pointer",
  };

  const socialIcon = {
    marginRight: "1.1875rem",
  };
  return (
    <div style={socialIcons} className="socialIcons">
      <img style={socialIcon} src={facebook} alt="facebook-icon" />
      <img style={socialIcon} src={twitter} alt="twitter-icon" />
      <img style={socialIcon} src={pin} alt="pinterest-icon" />
      <img style={socialIcon} src={instagram} alt="instagram-icon" />
      <img style={socialIcon} src={youtube} alt="youtube-icon" />
      <img style={socialIcon} src={tiktok} alt="tiktok-icon" />
    </div>
  );
}

export default SocialIcons;
