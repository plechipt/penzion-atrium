import Image from "next/image";
import { default as imgAPI } from "@/public/images/ImageApi";

const RoomImage = () => {
  return (
    <div className="relative w-60 h-3/4">
      <Image
        width={240}
        height={150}
        sizes="100vw"
        src={imgAPI.accom_img[0]}
        className="w-full max-w-[240px] h-[150px]"
        alt="Room Image"
      />

      {/* Icon at Bottom Left Corner */}
      <div className="absolute bottom-3 right-3 ">
        <a href={imgAPI.accom_img[0]} target="_blank">
          <Image
            width={12}
            height={12}
            sizes="100vw"
            src={imgAPI.accom_vectors[9]}
            alt="Icon Image"
            className="w-9 h-9"
          />
        </a>
      </div>
    </div>
  );
};

export default RoomImage;
