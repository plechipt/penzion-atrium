import Image from "next/image";
import { ImageIcon } from "@/public/vectors/getIcons";

const ImageComponent = ({ image, alt }) => {
  return (
    <div className="relative w-full lg:max-w-[440px] h-72 lg:h-[437px]">
      <a href={image} target="_blank">
        <div className="absolute bottom-2 right-2 w-12 h-12 rounded-lg flex items-center justify-center bg-white">
          <ImageIcon className="w-5 h-4" />
        </div>
      </a>
      <Image
        width={440}
        height={437}
        className="w-full h-full object-cover rounded-[10px]"
        src={image}
        alt={alt}
      />
    </div>
  );
};

export default ImageComponent;
