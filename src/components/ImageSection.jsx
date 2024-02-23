import MainImage from "../assets/login-for-skills.png";
import TryBtn from "./TryBtn";

const ImageSection = () => {
  return (
    <div className="image-section">
      <img src={MainImage} alt="" />
      <TryBtn />
    </div>
  );
};

export default ImageSection;
