import imgAPI from "@/public/images/ImageApi";
import { useTranslations } from "next-intl";

const SurrondingsData = () => {
  const t = useTranslations("Surroundings");

  const title = t("title");

  const surrondings = [
    {
      heading: t("trutnovTitle"),
      text: t("trutnovDescription"),
      large_img: imgAPI.surr_img[6],
      small_img: imgAPI.surr_img[0],
      reverse: false,
      link: "https://www.ictrutnov.cz/je-na-draka",
    },
    {
      heading: t("krkonoseTitle"),
      text: t("krkonoseDescription"),
      large_img: imgAPI.surr_img[7],
      small_img: imgAPI.surr_img[1],
      reverse: true,
      link: "https://www.krnap.cz",
    },
    {
      heading: t("adrspachTitle"),
      text: t("adrspachDescription"),
      large_img: imgAPI.surr_img[8],
      small_img: imgAPI.surr_img[2],
      reverse: false,
      link: "https://www.adrspasskeskaly.cz",
    },
    {
      heading: t("kuksTitle"),
      text: t("kuksDescription"),
      large_img: imgAPI.surr_img[9],
      small_img: imgAPI.surr_img[3],
      reverse: true,
      link: "https://www.hospital-kuks.cz",
    },
    {
      heading: t("zooTitle"),
      text: t("zooDescription"),
      large_img: imgAPI.surr_img[10],
      small_img: imgAPI.surr_img[4],
      reverse: false,
      link: "https://safaripark.cz",
    },
    {
      heading: t("dolceTitle"),
      text: t("dolceDescription"),
      large_img: imgAPI.surr_img[10],
      small_img: imgAPI.surr_img[5],
      reverse: true,
      link: "https://www.camp-dolce.cz",
    },
  ];

  return { title, surrondings };
};

export default SurrondingsData;
