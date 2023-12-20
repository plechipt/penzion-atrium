import Image from "next/image";
import React from "react";

const ImageEffect = ({ img1, img2 }) => {
  return (
    <div className="relative w-full h-full">
      <Image
        width="0"
        height="0"
        sizes="100vw"
        src={img1}
        alt="Background"
        className=" w-full  h-auto"
      />

      {/* Icon at Bottom Left Corner */}
      <div className="absolute bottom-2 right-2 ">
        <a href={img1} target="_blank">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            src={img2}
            alt="Icon"
            className="w-12 h-110"
          />
        </a>
      </div>
    </div>
  );
};

export default ImageEffect;
