import Image from "next/image";
import { ImageIcon } from "@/assets/icons";
import imgAPI from "@/public/images/ImageApi";

const SportsImage = () => {
  return (
    <div className="relative w-full lg:max-w-[440px] h-72 lg:h-[437px]">
      <a href={imgAPI.ser_img[4]} target="_blank">
        <div className="absolute bottom-2 right-2 w-12 h-12 rounded-lg flex items-center justify-center bg-white">
          <ImageIcon className="w-5 h-4" />
        </div>
      </a>
      <Image
        width={440}
        height={437}
        className="w-full h-full object-cover rounded-[10px]"
        src={imgAPI.ser_img[4]}
        alt="Meals"
      />
    </div>
  );
};

export default SportsImage;
