import SkiText from "./SkiText";
import ImageComponent from "../ImageComponent";

import imgAPI from "@/public/images/ImageApi";

const SkiComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mb-4 gap-6 lg:gap-14">
      {/* Left Part with Image */}
      <ImageComponent image={imgAPI.ser_img[5]} alt="Ski Image" />

      {/* Right Part with Meal Details */}
      <SkiText />
    </div>
  );
};

export default SkiComponent;
