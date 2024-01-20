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
  const tSurr = useTranslations("Surroundings");
  const title = tSurr("title");

  const surrondings = [
    {
      heading: tSurr("trutnovTitle"),
      text: tSurr("trutnovDescription"),
      large_img: TrutnovCentrumImage,
      small_img: TrutnovCentrumResponsiveImage,
      reverse: false,
      link: "https://www.ictrutnov.cz/je-na-draka",
    },
    {
      heading: tSurr("krkonoseTitle"),
      text: tSurr("krkonoseDescription"),
      large_img: KrkonoseImage,
      small_img: KrkonoseResponsiveImage,
      reverse: true,
      link: "https://www.krnap.cz",
    },
    {
      heading: tSurr("adrspachTitle"),
      text: tSurr("adrspachDescription"),
      large_img: AdrspachImage,
      small_img: AdrspachResponsiveImage,
      reverse: false,
      link: "https://www.adrspasskeskaly.cz",
    },
    {
      heading: tSurr("kuksTitle"),
      text: tSurr("kuksDescription"),
      large_img: KuksImage,
      small_img: KuksResponsiveImage,
      reverse: true,
      link: "https://www.hospital-kuks.cz",
    },
    {
      heading: tSurr("zooTitle"),
      text: tSurr("zooDescription"),
      large_img: ZooImage,
      small_img: ZooResponsiveImage,
      reverse: false,
      link: "https://safaripark.cz",
    },
    {
      heading: tSurr("dolceTitle"),
      text: tSurr("dolceDescription"),
      large_img: DolceImage,
      small_img: DolceImage,
      reverse: true,
      link: "https://www.camp-dolce.cz",
    },
  ];

  return { title, surrondings };
};

export default SurrondingsData;
