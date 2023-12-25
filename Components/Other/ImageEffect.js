import Image from "next/image";
import { default as imgAPI } from "@/public/images/ImageApi";

const ImageEffect = ({
  img,
  imgAlt,
  divClass,
  imgClass,
  iconClass,
  iconCorner,
}) => {
  return (
    <div className={divClass}>
      <Image
        width="0"
        height="0"
        sizes="100vw"
        src={img}
        alt={imgAlt}
        className={imgClass}
      />

      {/* Icon at Bottom Left Corner */}
      <div className={`absolute bottom-${iconCorner} right-${iconCorner} `}>
        <a href={img} target="_blank">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            src={imgAPI.accom_vectors[9]}
            alt="Icon"
            className={iconClass}
          />
        </a>
      </div>
    </div>
  );
};

export default ImageEffect;
