import { SkiResortsIcon } from "@/assets/icons";

const data = [
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

const SkiText = () => {
  return (
    <div className=" w-full space-y-6 max-w-[720px]">
      <h2 className="text-2xl font-bold mb-2 text-center md:text-start">
        Ski Resorts close to Trutnov
      </h2>
      <p className="text-gray-600">
        For group consisting of 20 people or more we offer free ski bus to these
        resorts (map):
      </p>

      <div className="space-y-5">
        {data.map((item) => (
          <div key={item.id} className="flex gap-4 items-center">
            {item.icon}
            <p className=" text-neutral-700 text-lg font-normal">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkiText;
