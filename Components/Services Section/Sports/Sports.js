import SportsText from "./SportsText";
import SportsImage from "./SportsImage";

const Sports = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mb-4 gap-6 lg:gap-14">
      {/* Left Part with Image */}
      <SportsImage />

      {/* Right Part with Meal Details */}
      <SportsText />
    </div>
  );
};

export default Sports;
