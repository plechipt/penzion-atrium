import ServicesData from "@/data/ServicesData";

const SportsElements = () => {
  const { sports } = ServicesData();

  return (
    <div className="w-full max-w-fit grid grid-cols-1 md:grid-cols-2 gap-3.5">
      {sports.map((item) => (
        <div key={item.id} className="flex gap-4 items-center">
          {item.icon}
          <p className="text-neutral-700 text-lg font-normal">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default SportsElements;
