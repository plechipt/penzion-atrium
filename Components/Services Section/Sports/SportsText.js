import SportsElements from "./SportsIcons";

const SportsText = () => {
  return (
    <div className=" w-full space-y-6 max-w-[720px]">
      <h2 className="text-2xl font-bold mb-2 text-center md:text-start">
        Sports Centre of Komensky School
      </h2>
      <p className="text-gray-600">
        In the sports centre of Komenský School, which is located in the very
        neighbourhood of our pension (map), we offer to our guests:
      </p>

      <SportsElements />
    </div>
  );
};

export default SportsText;
