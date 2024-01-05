import Image from "next/image";

import Title from "./Title";
import DatePick from "./DatePick";

import { CardImage } from "@/public/images/getImages";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-between lg:flex-row container py-6 lg:py-3">
      {/* Left side */}
      <div className=" w-full max-w-[580px] space-y-6 lg:space-y-8">
        <Title />
        <DatePick />
      </div>

      {/* Right side */}
      <div className="w-full max-w-[609px] p-4">
        <Image
          src={CardImage}
          className="rounded h-full w-full "
          width={570}
          height={564}
          alt="City Image"
          priority={true}
        />
      </div>
    </div>
  );
};

export default Hero;
