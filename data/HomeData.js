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
import {
  HomeImage1,
  HomeImage2,
  HomeImage3,
  HomeImage4,
} from "@/public/images/getImages";
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
      image: HomeImage1,
      alt: "4 Room Image",
    },
    {
      image: HomeImage2,
      alt: "Terrace Image",
    },
    {
      image: HomeImage3,
      alt: "Reception Image",
    },
    {
      image: HomeImage4,
      alt: "2 Room Image",
    },
  ];

  return { amenities, images };
};

export default HomeData;
