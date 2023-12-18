import MealsText from "./MealsText";
import MealsImage from "./MealsImage";

const Meals = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mb-4 gap-6 lg:gap-14">
      {/* Left Part with Image */}
      <MealsImage />

      {/* Right Part with Meal Details */}
      <MealsText />
    </div>
  );
};

export default Meals;
