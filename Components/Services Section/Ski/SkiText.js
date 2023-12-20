import ServicesData from "@/data/ServicesData";

const SkiText = () => {
  const { ski } = ServicesData();

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
        {ski.map((item) => (
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
