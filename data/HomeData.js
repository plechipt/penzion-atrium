import {
  BedsIcon,
  BusIcon,
  FreeParkingIcon,
  FreeWifiIcon,
  GardenWithPlaygroundIcon,
  GroupDiscountsIcon,
  TVIcon,
  WheelchairIcon,
} from "@/assets/icons";
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

  return amenities;
};

export default HomeData;
