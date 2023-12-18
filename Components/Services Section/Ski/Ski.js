import SkiText from "./SkiText";
import SkiImage from "./SkiImage";

const SkiComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mb-4 gap-6 lg:gap-14">
      {/* Left Part with Image */}
      <SkiImage />

      {/* Right Part with Meal Details */}
      <SkiText />
    </div>
  );
};

export default SkiComponent;
