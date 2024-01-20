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
import {
  Room1Image,
  Room2Image,
  Room3Image,
  Room4Image,
  Room5Image,
  Room6Image,
  Room7Image,
  Room8Image,
} from "@/public/images/getImages";
import { useTranslations } from "next-intl";

const AccommodationData = () => {
  const tAcc = useTranslations("Accommodation");

  const tourists = [
    {
      icon: <BathtubIcon className="w-5 h-5" />,
      title: tAcc("shared"),
    },
    {
      icon: <TVSquareIcon className="w-5 h-5" />,
      title: tAcc("shared"),
    },
    {
      icon: <ToiletIcon className="w-5 h-5" />,
      title: tAcc("shared"),
    },
    {
      icon: <FridgeIcon className="w-5 h-5" />,
      title: tAcc("shared"),
    },
  ];

  const standards = [
    {
      icon: <BathtubIcon className="w-5 h-5" />,
      title: tAcc("private"),
    },
    {
      icon: <TVSquareIcon className="w-5 h-5" />,
      title: tAcc("private"),
    },
    {
      icon: <ToiletIcon className="w-5 h-5" />,
      title: tAcc("private"),
    },
    {
      icon: <FridgeIcon className="w-5 h-5" />,
      title: tAcc("shared"),
    },
  ];

  const meals = [
    {
      icon: <CupIcon className="w-5 h-5" />,
      title: tAcc("breakfast"),
      price: 90,
    },
    {
      icon: <SupperIcon className="w-5 h-5" />,
      title: tAcc("halfBoard"),
      price: 180,
    },
    {
      icon: <SupperIcon className="w-5 h-5" />,
      title: tAcc("fullBoard"),
      price: 270,
    },
  ];

  const others = [
    {
      icon: <TransportIcon className="w-5 h-5" />,
      title: tAcc("transportTitle"),
      description: tAcc("transportDescription"),
      price: "10 Kč/km",
    },
    {
      icon: <LaundryIcon className="w-5 h-5" />,
      title: tAcc("laundryTitle"),
      description: tAcc("laundryDescription"),
      price: "200 Kč",
    },
    {
      icon: <TVRoundedIcon className="w-5 h-5" />,
      title: tAcc("tvTitle"),
      description: tAcc("tvDescription"),
      price: tAcc("tvPrice"),
    },
  ];

  const rooms = [
    { tourist: Room1Image, standard: Room1Image },
    { tourist: Room2Image, standard: Room2Image },
    { tourist: Room3Image, standard: Room3Image },
    { tourist: Room4Image, standard: Room4Image },
    { tourist: Room5Image, standard: Room5Image },
    { tourist: Room6Image, standard: Room6Image },
    { tourist: Room7Image, standard: Room7Image },
    { tourist: Room8Image, standard: Room8Image },
  ];

  return {
    others,
    meals,
    tourists,
    standards,
    rooms,
  };
};

export default AccommodationData;
