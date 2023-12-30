import Image from "next/image";

import Title from "./Title";
import DatePick from "./DatePick";

import { CardImage } from "@/public/images/getImages";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-between lg:flex-row container py-10 lg:py-3">
      {/* Left side */}
      <div className=" w-full max-w-[580px] space-y-6 lg:space-y-8">
        <Title />
        <DatePick />
      </div>

      {/* Right side */}
      <div className="w-full max-w-[609px] p-4">
        <Image
          alt="City Image"
          width={570}
          height={564}
          src={CardImage}
          className="rounded h-full w-full "
        />
      </div>
    </div>
  );
};

export default Hero;
