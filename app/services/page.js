import Sports from "@/Components/Services Section/Sports/Sports";
import SkiComponent from "@/Components/Services Section/SkiComponent";
import MealsComponent from "@/Components/Services Section/Meals/Meals";

const page = () => {
  return (
    <main className="container py-8 lg:py-10">
      <h1 className="md:text-5xl text-4xl font-bold mb-8 lg:mb-12 text-center">
        Our Services
      </h1>
      <div className="space-y-14">
        <MealsComponent />
        <Sports />
        <SkiComponent />
      </div>
    </main>
  );
};
export default page;
