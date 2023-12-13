import Floor from "@/Components/Floor";
import Information from "@/Components/Information";
import Tables from "@/Components/Tables Section/Tables";
import text from "../../public/text.json";
import ResponsiveFloor from "../../Components/ResponsiveFloor";

export default function Page() {
  return (
    <main>
      <Tables />
      <div className="w-full space-y-8 mt-8">
        <Floor heading="Ground Floor" desc={text.first_floor} />
        <Floor heading="First Floor" desc={text.ground_floor} />

        <ResponsiveFloor heading="First Floor" desc={text.ground_floor} />
        <ResponsiveFloor heading="Ground Floor" desc={text.first_floor} />
      </div>
      <Information />
    </main>
  );
}
