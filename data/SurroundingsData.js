import { useTranslations } from "next-intl";

import {
  TrutnovCentrumImage,
  TrutnovCentrumResponsiveImage,
  KrkonoseImage,
  KrkonoseResponsiveImage,
  AdrspachImage,
  AdrspachResponsiveImage,
  KuksImage,
  KuksResponsiveImage,
  ZooImage,
  ZooResponsiveImage,
  DolceImage,
} from "@/public/images/getImages";

const SurrondingsData = () => {
  const t = useTranslations("Surroundings");
  const title = t("title");

  const surrondings = [
    {
      heading: t("trutnovTitle"),
      text: t("trutnovDescription"),
      large_img: TrutnovCentrumImage,
      small_img: TrutnovCentrumResponsiveImage,
      reverse: false,
      link: "https://www.ictrutnov.cz/je-na-draka",
    },
    {
      heading: t("krkonoseTitle"),
      text: t("krkonoseDescription"),
      large_img: KrkonoseImage,
      small_img: KrkonoseResponsiveImage,
      reverse: true,
      link: "https://www.krnap.cz",
    },
    {
      heading: t("adrspachTitle"),
      text: t("adrspachDescription"),
      large_img: AdrspachImage,
      small_img: AdrspachResponsiveImage,
      reverse: false,
      link: "https://www.adrspasskeskaly.cz",
    },
    {
      heading: t("kuksTitle"),
      text: t("kuksDescription"),
      large_img: KuksImage,
      small_img: KuksResponsiveImage,
      reverse: true,
      link: "https://www.hospital-kuks.cz",
    },
    {
      heading: t("zooTitle"),
      text: t("zooDescription"),
      large_img: ZooImage,
      small_img: ZooResponsiveImage,
      reverse: false,
      link: "https://safaripark.cz",
    },
    {
      heading: t("dolceTitle"),
      text: t("dolceDescription"),
      large_img: DolceImage,
      small_img: DolceImage,
      reverse: true,
      link: "https://www.camp-dolce.cz",
    },
  ];

  return { title, surrondings };
};

export default SurrondingsData;
