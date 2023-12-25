import SkiText from "./SkiText";
import ImageEffect from "@/Components/Other/ImageEffect";

import imgAPI from "@/public/images/ImageApi";

const SkiComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mb-4 gap-6 lg:gap-14">
      {/* Left Part with Image */}
      <ImageEffect
        img={imgAPI.ser_img[5]}
        imgAlt={"Ski Image"}
        divClass={"relative w-full lg:max-w-[440px] h-72 lg:h-[437px]"}
        imgClass={"w-full h-full object-cover rounded-[10px]"}
        iconClass={"w-12 h-12"}
        iconDivClass={"absolute bottom-2 right-2"}
      />

      {/* Right Part with Meal Details */}
      <SkiText />
    </div>
  );
};

export default SkiComponent;
