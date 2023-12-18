// components/SkiComponent.js
import imgAPI from "@/public/images/ImageApi";
import Image from "next/image";

import { ImageIcon, SkiResortsIcon } from "@/assets/icons";

const SkiComponent = () => {
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
  return (
    <div className="flex flex-col lg:flex-row items-center mb-4 gap-6 lg:gap-14">
      {/* Left Part with Image */}
      <div className="relative w-full lg:max-w-[440px] h-72 lg:h-[437px]">
        <a href={imgAPI.ser_img[5]} target="_blank">
          <div className="absolute bottom-2 right-2 w-12 h-12 rounded-lg flex items-center justify-center bg-white">
            <ImageIcon className="w-5 h-4" />
          </div>
        </a>
        <Image
          width={440}
          height={437}
          className="w-full h-full object-cover rounded-[10px]"
          src={imgAPI.ser_img[5]}
          alt="Meals"
        />
      </div>

      {/* Right Part with Meal Details */}
      <div className=" w-full space-y-6 max-w-[720px]">
        <h2 className="text-2xl font-bold mb-2 text-center md:text-start">
          Ski Resorts close to Trutnov
        </h2>
        <p className="text-gray-600">
          For group consisting of 20 people or more we offer free ski bus to
          these resorts (map):
        </p>

        <div className="space-y-5">
          {data.map((item) => (
            <div key={item.id} className="flex gap-4 items-center">
              {item.icon}
              <p className=" text-neutral-700 text-lg font-normal">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkiComponent;
