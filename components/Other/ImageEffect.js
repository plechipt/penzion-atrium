import Image from "next/image";
import { ImageIcon } from "@/public/images/getImages";

const ImageEffect = ({
  img,
  imgAlt,
  divClass,
  imgClass,
  iconClass,
  iconDivClass,
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
      <div className={iconDivClass}>
        <a href={img} target="_blank">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            src={ImageIcon}
            alt="Icon"
            className={iconClass}
          />
        </a>
      </div>
    </div>
  );
};

export default ImageEffect;
