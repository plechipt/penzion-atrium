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
  const tServices = useTranslations("Services");

  const sports = [
    {
      id: 1,
      icon: <SportsHallIcon className="w-8 h-8 text-indigo-800" />,
      text: tServices("sportsHall"),
    },
    {
      id: 2,
      icon: <AthleticStadiumIcon className="w-8 h-8 text-indigo-900" />,
      text: tServices("athleticStadium"),
    },
    {
      id: 3,
      icon: <MultipurposeGymIcon className="w-8 h-8" />,
      text: tServices("multipurposeGym"),
    },
    {
      id: 4,
      icon: <MultipurposeCourtIcon className="w-8 h-8" />,
      text: tServices("multipurposeCourt"),
    },
    {
      id: 5,
      icon: <GymnasticHallIcon className="w-8 h-8" />,
      text: tServices("gymnasticHall"),
    },
    {
      id: 6,
      icon: <VolleyBallHallIcon className="w-8 h-8" />,
      text: tServices("beach"),
    },
    {
      id: 7,
      icon: <AsphaltCircuitIcon className="w-8 h-8" />,
      text: tServices("asphaltCircuit"),
    },
    {
      id: 8,
      icon: <ClimbingWallIcon className="w-8 h-8" />,
      text: tServices("climbingWall"),
    },
    {
      id: 9,
      icon: <SkiTrailsIcon className="w-8 h-8" />,
      text: tServices("ski"),
    },
  ];

  const ski = [
    {
      id: 1,
      icon: <SkiResortsIcon className="w-8 h-8" />,
      text: tServices("mladeBuky"),
      link: "https://www.areal-mladebuky.cz",
    },
    {
      id: 2,
      icon: <SkiResortsIcon className="w-8 h-8" />,
      text: tServices("cernaHora"),
      link: "https://www.skiresort.cz",
    },
    {
      id: 3,
      icon: <SkiResortsIcon className="w-8 h-8" />,
      text: tServices("petrikovice"),
      link: "https://www.skipetrikovice.cz",
    },
    {
      id: 4,
      icon: <SkiResortsIcon className="w-8 h-8" />,
      text: tServices("zacler"),
      link: "https://www.skizacler.com",
    },
  ];

  return {
    sports,
    ski,
  };
};

export default ServicesData;
