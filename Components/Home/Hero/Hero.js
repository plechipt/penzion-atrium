import Image from "next/image";
import { useTranslations } from "next-intl";

import Img from "@/public/images/ImageApi";

import Title from "./Title";
import DatePick from "./DatePick";

const Hero = () => {
  const t = useTranslations("Home");
  return (
    <div className="flex flex-col items-center justify-between lg:flex-row container py-10 lg:py-3">
      {/* Left side */}
      <div className=" w-full max-w-[580px] space-y-6 lg:space-y-8">
        <Title />
        <DatePick
          checkInTitle={t("checkInTitle")}
          checkInPlaceholder={t("checkInPlaceholder")}
          checkOutTitle={t("checkOutTitle")}
          checkOutPlaceholder={t("checkOutPlaceholder")}
          bookNow={t("bookNow")}
        />
      </div>

      {/* Right side */}
      <div className="w-full max-w-[609px] p-4">
        <Image
          alt="City Image"
          width={570}
          height={564}
          src={Img.home_vectors[3]}
          className="rounded h-full w-full "
        />
      </div>
    </div>
  );
};

export default Hero;
