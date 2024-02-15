import { useTranslations } from "next-intl";
import AmenitiesData from "@/data/HomeData";
import { MotionDiv, MotionH1 } from "../Other/MotionComponents";

const Amenities = () => {
  const tHome = useTranslations("Home");
  const { amenities } = AmenitiesData();

  return (
    <div className="container max-w-fit mx-auto mb-16 mt-16 lg:my-16 text-center">
      <MotionH1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          ease: "easeInOut",
        }}
        className="text-center text-black text-4xl font-bold mb-16"
      >
        {tHome("amenitiesTitle")}
      </MotionH1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 place-items-center place-content-center ">
        {amenities.map((item, index) => (
          <MotionDiv
            className="flex flex-col items-center gap-4 w-full max-w-[140px]"
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1 + index * 0.25,
              ease: "easeInOut",
            }}
          >
            <div className="w-20 h-14">{item.icon}</div>
            <p className="text-base  text-center font-bold">{item.text}</p>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
