import Floor from "@/Components/Accomodation Section/Floor";
import Information from "@/Components/Accomodation Section/Information";
import Tables from "@/Components/Accomodation Section/Tables Section/Tables";
import ResponsiveFloor from "../../Components/Accomodation Section/ResponsiveFloor";

import text from "@/public/text.json";

export default function Page() {
  return (
    <main>
      <Tables />
      <div className="w-full space-y-8 mt-20">
        <Floor heading="Ground Floor" desc={text.first_floor} />
        <Floor heading="First Floor" desc={text.ground_floor} />

        <ResponsiveFloor heading="First Floor" desc={text.ground_floor} />
        <ResponsiveFloor heading="Ground Floor" desc={text.first_floor} />
      </div>
      <Information />
    </main>
  );
}
