import HomeData from "@/data/HomeData";
import ImageEffect from "@/components/Other/ImageEffect";

const ImageGrid = () => {
  const { images } = HomeData();

  return (
    <div className="grid grid-cols-1 grid-cols-2 lg:grid-cols-4 container py-4 lg:py-7">
      {images.map((item, index) => (
        <ImageEffect
          key={index}
          img={item.image.src}
          imgAlt={item.alt}
          divClass={"relative w-full h-full"}
          imgClass={"w-full h-50 rounded"}
          iconClass={"w-7 h-7 sm:w-10 sm:h-10"}
          iconDivClass={
            "absolute bottom-4 right-4 sm:bottom-9 sm:right-9 md:bottom-8 md:right-8 lg:bottom-7 lg:right-7"
          }
        />
      ))}
    </div>
  );
};

export default ImageGrid;
