import {
  LaundryIcon,
  TVRoundedIcon,
  TransportIcon,
  CupIcon,
  SupperIcon,
  BathtubIcon,
  FridgeIcon,
  TVSquareIcon,
  ToiletIcon,
} from "@/public/vectors/getIcons";
import { useTranslations } from "next-intl";

const AccommodationData = () => {
  const t = useTranslations("Accommodation");

  const tourists = [
    {
      icon: <BathtubIcon className="w-5 h-5" />,
      title: t("shared"),
    },
    {
      icon: <TVSquareIcon className="w-5 h-5" />,
      title: t("shared"),
    },
    {
      icon: <ToiletIcon className="w-5 h-5" />,
      title: t("shared"),
    },
    {
      icon: <FridgeIcon className="w-5 h-5" />,
      title: t("shared"),
    },
  ];

  const standards = [
    {
      icon: <BathtubIcon className="w-5 h-5" />,
      title: t("private"),
    },
    {
      icon: <TVSquareIcon className="w-5 h-5" />,
      title: t("private"),
    },
    {
      icon: <ToiletIcon className="w-5 h-5" />,
      title: t("private"),
    },
    {
      icon: <FridgeIcon className="w-5 h-5" />,
      title: t("shared"),
    },
  ];

  const meals = [
    {
      icon: <CupIcon className="w-5 h-5" />,
      title: t("breakfast"),
      price: 80,
    },
    {
      icon: <SupperIcon className="w-5 h-5" />,
      title: t("halfBoard"),
      price: 160,
    },
    {
      icon: <SupperIcon className="w-5 h-5" />,
      title: t("fullBoard"),
      price: 240,
    },
  ];

  const others = [
    {
      icon: <TransportIcon className="w-5 h-5" />,
      title: t("transportTitle"),
      description: t("transportDescription"),
      price: "10 Kč/km",
    },
    {
      icon: <LaundryIcon className="w-5 h-5" />,
      title: t("laundryTitle"),
      description: t("laundryDescription"),
      price: "150 Kč",
    },
    {
      icon: <TVRoundedIcon className="w-5 h-5" />,
      title: t("tvTitle"),
      description: t("tvDescription"),
      price: t("tvPrice"),
    },
  ];

  return {
    others,
    meals,
    tourists,
    standards,
  };
};

export default AccommodationData;
