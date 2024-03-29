import SurroundingElement from "./SurroundingElement";
import SurroundingsData from "@/data/SurroundingsData";
import { MotionH1, MotionDiv } from "@/components/Other/MotionComponents";

const Surroundings = () => {
  const { title, surrondings } = SurroundingsData();

  return (
    <div className="container py-10 lg:py-10">
      <MotionH1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="md:text-5xl text-4xl font-bold mb-8 lg:mb-10 text-center"
      >
        {title}
      </MotionH1>
      {surrondings.map((item, index) => (
        <MotionDiv
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: index * 0.25 + 0.5,
            ease: "easeInOut",
          }}
        >
          <SurroundingElement
            heading={item.heading}
            text={item.text}
            large_img={item.large_img.src}
            small_img={item.small_img.src}
            reverse={item.reverse}
            link={item.link}
          />
        </MotionDiv>
      ))}
    </div>
  );
};

export default Surroundings;
