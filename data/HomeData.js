import {
  BedsIcon,
  BusIcon,
  FreeParkingIcon,
  FreeWifiIcon,
  GardenWithPlaygroundIcon,
  GroupDiscountsIcon,
  TVIcon,
  WheelchairIcon,
} from "@/public/vectors/getIcons";
import { useTranslations } from "next-intl";

const HomeData = () => {
  const t = useTranslations("Home");

  const amenities = [
    { icon: <FreeWifiIcon className="w-20 h-14" />, text: t("wifi") },
    {
      icon: <GardenWithPlaygroundIcon className="w-20 h-14" />,
      text: t("garden"),
    },
    {
      icon: <BedsIcon className="w-20 h-14" />,
      text: t("beds"),
    },
    {
      icon: <FreeParkingIcon className="w-20 h-14" />,
      text: t("parking"),
    },
    {
      icon: <WheelchairIcon className="w-20 h-14" />,
      text: t("wheelchair"),
    },
    {
      icon: <BusIcon className="w-20 h-14" />,
      text: t("bus"),
    },
    {
      icon: <GroupDiscountsIcon className="w-20 h-14" />,
      text: t("groups"),
    },
    {
      icon: <TVIcon className="w-20 h-14" />,
      text: t("tv"),
    },
  ];

  const images = [
    {
      image: "/images/gallery/1-home.png",
      alt: "4 Room Image",
    },
    {
      image: "/images/gallery/2-home.png",
      alt: "Terrace Image",
    },
    {
      image: "/images/gallery/3-home.png",
      alt: "Reception Image",
    },
    {
      image: "/images/gallery/4-home.png",
      alt: "2 Room Image",
    },
  ];

  return { amenities, images };
};

export default HomeData;
