import HomeData from "@/data/HomeData";
import ImageEffect from "@/Components/Other/ImageEffect";

const ImageGrid = () => {
  const { images } = HomeData();

  return (
    <div className="grid grid-cols-1 grid-cols-2 lg:grid-cols-4 container py-4 lg:py-7">
      {images.map((item, index) => (
        <ImageEffect
          key={index}
          img={item.image}
          imgAlt={item.alt}
          divClass={"relative w-full h-full"}
          imgClass={"w-full h-50 rounded"}
          iconClass={"w-10 h-10"}
          iconCorner={"7"}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
