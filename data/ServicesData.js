import React from "react";
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

const ServicesData = () => {
  const sports = [
    {
      id: 1,
      icon: <SportsHallIcon className="w-8 h-9" />,
      text: "Sports Hall",
    },
    {
      id: 2,
      icon: <AthleticStadiumIcon className="w-8 h-9" />,
      text: "Athletic Stadium",
    },
    {
      id: 3,
      icon: <MultipurposeGymIcon className="w-8 h-9" />,
      text: "Multipurpose Gym",
    },
    {
      id: 4,
      icon: <MultipurposeCourtIcon className="w-8 h-9" />,
      text: "Multipurpose Court",
    },
    {
      id: 5,
      icon: <GymnasticHallIcon className="w-8 h-9" />,
      text: "Gymnastic Hall",
    },
    {
      id: 6,
      icon: <VolleyBallHallIcon className="w-8 h-9" />,
      text: "Beach Volleyball Court",
    },
    {
      id: 7,
      icon: <FitnessGymIcon className="w-8 h-9" />,
      text: "Fitness Gym",
    },
    {
      id: 8,
      icon: <AsphaltCircuitIcon className="w-8 h-9" />,
      text: "Asphalt Circuit",
    },
    {
      id: 9,
      icon: <ClimbingWallIcon className="w-8 h-9" />,
      text: "Climbing Wall",
    },
    {
      id: 10,
      icon: <SkiTrailsIcon className="w-8 h-9" />,
      text: "Cross-country Ski trails",
    },
  ];

  const ski = [
    {
      id: 1,
      icon: <SkiResortsIcon className="w-8 h-8" />,
      text: "Ski park Mladé Buky (8 km)",
    },
    {
      id: 2,
      icon: <SkiResortsIcon className="w-8 h-8" />,
      text: "Ski resort Černá Hora (14 km)",
    },
    {
      id: 3,
      icon: <SkiResortsIcon className="w-8 h-8" />,
      text: "Ski area Petříkovice (9 km)",
    },
    {
      id: 4,
      icon: <SkiResortsIcon className="w-8 h-8" />,
      text: "Ski area Žacléř (15 km)",
    },
  ];

  return {
    sports,
    ski,
  };
};

export default ServicesData;
