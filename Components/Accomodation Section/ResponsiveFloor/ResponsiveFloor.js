import imgAPI from "@/public/images/ImageApi";
import ImageEffect from "@/Components/Other/ImageEffect";

import PriceOfRooms from "./PriceOfRooms";
import NumberOfPeople from "./NumberOfPeople";
import DropdownButton from "./DropdownButton";

const ResponsiveFloor = ({ heading, desc }) => {
  return (
    <div className="block lg:hidden mb-4 mx-4">
      {/* Heading and Subtext */}
      <div className="mb-4">
        <h2 className="text-2xl text-center font-bold mb-6 mt-4">{heading}</h2>
        <p className="text-gray-500 text-center">{desc}</p>
      </div>

      <div className="flex-col items-center bg-floor  rounded">
        <div className="flex justify-between mb-4">
          {/* Element 1 */}
          <NumberOfPeople />

          {/* Element 2 */}
          <PriceOfRooms />
        </div>

        {/* Element 3 */}
        <ImageEffect
          img1={imgAPI.accom_img[1]}
          img2={imgAPI.accom_vectors[9]}
        />

        {/* Element 5 */}
        <DropdownButton />
      </div>
    </div>
  );
};

export default ResponsiveFloor;
