// components/SportsElements.js

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
} from "@/assets/icons";

const data = [
  { id: 1, icon: <SportsHallIcon className="w-8 h-9" />, text: "Sports Hall" },
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
  { id: 7, icon: <FitnessGymIcon className="w-8 h-9" />, text: "Fitness Gym" },
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

const SportsElements = () => {
  return (
    <div className="w-full max-w-fit grid grid-cols-1 md:grid-cols-2 gap-3.5">
      {data.map((item) => (
        <div key={item.id} className="flex gap-4 items-center">
          {item.icon}
          <p className="text-neutral-700 text-lg font-normal">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default SportsElements;
