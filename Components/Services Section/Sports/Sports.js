import SportsText from "./SportsText";
import ImageEffect from "@/Components/Other/ImageEffect";

import imgAPI from "@/public/images/ImageApi";

const Sports = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mb-4 gap-6 lg:gap-14">
      {/* Left Part with Image */}
      <ImageEffect
        img={imgAPI.ser_img[4]}
        imgAlt={"School Image"}
        divClass={"relative w-full lg:max-w-[440px] h-72 lg:h-[437px]"}
        imgClass={"w-full h-full object-cover rounded-[10px]"}
        iconClass={"w-12 h-12"}
        iconCorner={"2"}
      />

      {/* Right Part with Meal Details */}
      <SportsText />
    </div>
  );
};

export default Sports;
