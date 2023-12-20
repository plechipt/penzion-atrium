import MealsText from "./MealsText";
import ImageComponent from "../ImageComponent";

import imgAPI from "@/public/images/ImageApi";

const Meals = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mb-4 gap-6 lg:gap-14">
      {/* Left Part with Image */}
      <ImageComponent image={imgAPI.ser_img[3]} alt="Meeting Room" />

      {/* Right Part with Meal Details */}
      <MealsText />
    </div>
  );
};

export default Meals;
