import { useTranslations } from "next-intl";

import imgAPI from "@/public/images/ImageApi";
import SurroundingElement from "./SurroundingElement";

const Surroundings = () => {
  const t = useTranslations("Surroundings");

  return (
    <div className="container py-10 lg:py-10">
      <h1 className="md:text-5xl text-4xl font-bold mb-8 lg:mb-8 text-center">
        {t("title")}
      </h1>
      <SurroundingElement
        heading={t("trutnovTitle")}
        text={t("trutnovDescription")}
        large_img={imgAPI.surr_img[6]}
        small_img={imgAPI.surr_img[0]}
        reverse={false}
      />

      <SurroundingElement
        heading={t("krkonoseTitle")}
        text={t("krkonoseDescription")}
        large_img={imgAPI.surr_img[7]}
        small_img={imgAPI.surr_img[1]}
        reverse={true}
      />

      <SurroundingElement
        heading={t("adrspachTitle")}
        text={t("adrspachDescription")}
        large_img={imgAPI.surr_img[8]}
        small_img={imgAPI.surr_img[2]}
        reverse={false}
      />

      <SurroundingElement
        heading={t("kuksTitle")}
        text={t("kuksDescription")}
        large_img={imgAPI.surr_img[9]}
        small_img={imgAPI.surr_img[3]}
        reverse={true}
      />

      <SurroundingElement
        heading={t("zooTitle")}
        text={t("zooDescription")}
        large_img={imgAPI.surr_img[10]}
        small_img={imgAPI.surr_img[4]}
        reverse={false}
      />

      <SurroundingElement
        heading={t("dolceTitle")}
        text={t("dolceDescription")}
        large_img={imgAPI.surr_img[10]}
        small_img={imgAPI.surr_img[5]}
        reverse={true}
      />
    </div>
  );
};

export default Surroundings;
