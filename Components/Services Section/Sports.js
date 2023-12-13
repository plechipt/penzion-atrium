// components/Sports.js
import { ImageIcon } from "@/assets/icons";
import imgAPI from "@/public/images/ImageApi";
import Image from "next/image";
import SportsElements from "./SportsElements";

const Sports = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mb-4 gap-6 lg:gap-14">
      {/* Left Part with Image */}
      <div className="relative w-full lg:max-w-[440px] h-72 lg:h-[437px]">
        <div className="absolute bottom-2 right-2 w-12 h-12 rounded-lg flex items-center justify-center bg-white">
          <ImageIcon className="w-5 h-4" />
        </div>
        <Image
          width={440}
          height={437}
          className="w-full h-full object-cover rounded-[10px]"
          src={imgAPI.ser_img[4]}
          alt="Meals"
        />
      </div>

      {/* Right Part with Meal Details */}
      <div className=" w-full space-y-6 max-w-[720px]">
        <h2 className="text-2xl font-bold mb-2 text-center md:text-start">
          Sports Centre of Komensky School
        </h2>
        <p className="text-gray-600">
          In the sports centre of Komenský School, which is located in the very
          neighbourhood of our pension (map), we offer to our guests:
        </p>

        <SportsElements />
      </div>
    </div>
  );
};

export default Sports;
