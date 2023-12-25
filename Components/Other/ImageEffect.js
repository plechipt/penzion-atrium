import Image from "next/image";

const ImageEffect = ({ img, icon, divClass, imgClass, iconClass }) => {
  return (
    <div className={divClass}>
      <Image
        width="0"
        height="0"
        sizes="100vw"
        src={img}
        alt="Background"
        className={imgClass}
      />

      {/* Icon at Bottom Left Corner */}
      <div className="absolute bottom-2 right-2 ">
        <a href={img} target="_blank">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            src={icon}
            alt="Icon"
            className={iconClass}
          />
        </a>
      </div>
    </div>
  );
};

export default ImageEffect;
