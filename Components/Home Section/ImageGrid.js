// components/ImageGrid.js
import React from "react";

import imgAPI from "@/public/images/ImageApi";
import Image from "next/image";

const ImageGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-1 grid-cols-2 lg:grid-cols-4 container py-4 lg:py-7">
      {imgAPI.home_img.map((image, index) => (
        <div key={index} className="w-full">
          <Image
            className="w-full h-50 rounded"
            width={800}
            height={600}
            src={image}
            alt={`Image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
