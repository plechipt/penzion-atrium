import {
  AsphaltCircuitIcon,
  AthleticStadiumIcon,
  ClimbingWallIcon,
  GymnasticHallIcon,
  MultipurposeCourtIcon,
  MultipurposeGymIcon,
  SkiTrailsIcon,
  SportsHallIcon,
  VolleyBallHallIcon,
  SkiResortsIcon,
} from "@/public/vectors/getIcons";
import { useTranslations } from "next-intl";

const ServicesData = () => {
  const t = useTranslations("Services");

  const sports = [
    {
      id: 1,
      icon: <SportsHallIcon className="w-8 h-9" />,
      text: t("sportsHall"),
    },
    {
      id: 2,
      icon: <AthleticStadiumIcon className="w-8 h-9" />,
      text: t("athleticStadium"),
    },
    {
      id: 3,
      icon: <MultipurposeGymIcon className="w-8 h-9" />,
      text: t("multipurposeGym"),
    },
    {
      id: 4,
      icon: <MultipurposeCourtIcon className="w-8 h-9" />,
      text: t("multipurposeCourt"),
    },
    {
      id: 5,
      icon: <GymnasticHallIcon className="w-8 h-9" />,
      text: t("gymnasticHall"),
    },
    {
      id: 6,
      icon: <VolleyBallHallIcon className="w-8 h-9" />,
      text: t("beach"),
    },
    {
      id: 7,
      icon: <AsphaltCircuitIcon className="w-8 h-9" />,
      text: t("asphaltCircuit"),
    },
    {
      id: 8,
      icon: <ClimbingWallIcon className="w-8 h-9" />,
      text: t("climbingWall"),
    },
    {
      id: 9,
      icon: <SkiTrailsIcon className="w-8 h-9" />,
      text: t("ski"),
    },
  ];

  const ski = [
    {
      id: 1,
      icon: <SkiResortsIcon className="w-8 h-8" />,
      text: t("mladeBuky"),
      link: "https://www.areal-mladebuky.cz",
    },
    {
      id: 2,
      icon: <SkiResortsIcon className="w-8 h-8" />,
      text: t("cernaHora"),
      link: "https://www.skiresort.cz",
    },
    {
      id: 3,
      icon: <SkiResortsIcon className="w-8 h-8" />,
      text: t("petrikovice"),
      link: "https://www.skipetrikovice.cz",
    },
    {
      id: 4,
      icon: <SkiResortsIcon className="w-8 h-8" />,
      text: t("zacler"),
      link: "https://www.skizacler.com",
    },
  ];

  return {
    sports,
    ski,
  };
};

export default ServicesData;
