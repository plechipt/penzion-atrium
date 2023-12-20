import AmenitiesData from "@/data/HomeData";

const Amenities = () => {
  const amenities = AmenitiesData();

  return (
    <div className="container max-w-fit mx-auto mb-16 mt-10 lg:my-16 text-center">
      <h1 className="text-center text-black text-4xl font-bold mb-16">
        Our Amenities
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 place-items-center place-content-center ">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 w-full max-w-[140px]"
          >
            {item.icon}
            <p className="text-base  text-center font-bold">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
