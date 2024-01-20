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
  const tHome = useTranslations("Home");

  const amenities = [
    { icon: <FreeWifiIcon className="w-20 h-14" />, text: tHome("wifi") },
    {
      icon: <GardenWithPlaygroundIcon className="w-20 h-14" />,
      text: tHome("garden"),
    },
    {
      icon: <BedsIcon className="w-20 h-14" />,
      text: tHome("beds"),
    },
    {
      icon: <FreeParkingIcon className="w-20 h-14" />,
      text: tHome("parking"),
    },
    {
      icon: <WheelchairIcon className="w-20 h-14" />,
      text: tHome("wheelchair"),
    },
    {
      icon: <BusIcon className="w-20 h-14" />,
      text: tHome("bus"),
    },
    {
      icon: <GroupDiscountsIcon className="w-20 h-14" />,
      text: tHome("groups"),
    },
    {
      icon: <TVIcon className="w-20 h-14" />,
      text: tHome("tv"),
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
