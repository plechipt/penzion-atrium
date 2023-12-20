import SportsText from "./SportsText";
import ImageComponent from "../ImageComponent";

import imgAPI from "@/public/images/ImageApi";

const Sports = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mb-4 gap-6 lg:gap-14">
      {/* Left Part with Image */}
      <ImageComponent image={imgAPI.ser_img[4]} alt="School Image" />

      {/* Right Part with Meal Details */}
      <SportsText />
    </div>
  );
};

export default Sports;
