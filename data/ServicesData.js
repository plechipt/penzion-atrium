import {
  AsphaltCircuitIcon,
  AthleticStadiumIcon,
  ClimbingWallIcon,
  FitnessGymIcon,
  GymnasticHallIcon,
  MultipurposeCourtIcon,
  MultipurposeGymIcon,
  SkiTrailsIcon,
  SportsHallIcon,
  VolleyBallHallIcon,
  SkiResortsIcon,
} from "@/assets/icons";
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
      icon: <FitnessGymIcon className="w-8 h-9" />,
      text: t("fitnessGym"),
    },
    {
      id: 8,
      icon: <AsphaltCircuitIcon className="w-8 h-9" />,
      text: t("asphaltCircuit"),
    },
    {
      id: 9,
      icon: <ClimbingWallIcon className="w-8 h-9" />,
      text: t("climbingWall"),
    },
    {
      id: 10,
      icon: <SkiTrailsIcon className="w-8 h-9" />,
      text: t("ski"),
    },
  ];

  const ski = [
    {
      id: 1,
      icon: <SkiResortsIcon className="w-8 h-8" />,
      text: t("mladeBuky"),
    },
    {
      id: 2,
      icon: <SkiResortsIcon className="w-8 h-8" />,
      text: t("cernaHora"),
    },
    {
      id: 3,
      icon: <SkiResortsIcon className="w-8 h-8" />,
      text: t("petrikovice"),
    },
    {
      id: 4,
      icon: <SkiResortsIcon className="w-8 h-8" />,
      text: t("zacler"),
    },
  ];

  return {
    sports,
    ski,
  };
};

export default ServicesData;
