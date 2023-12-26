import AccommodationData from "@/data/AccommodationData";

const Others = () => {
  const { others } = AccommodationData();

  return (
    <div className="p-6 w-full">
      <div className="space-y-3">
        {others.map((other, i) => (
          <div key={i} className="w-full flex items-center justify-between">
            <div className="flex items-center gap-4 even:ml-auto">
              {other.icon}
              <div className="space-y-1">
                <div className="text-base font-semibold leading-relaxed">
                  {other.title}
                </div>
                <p className=" text-neutral-700 text-sm font-normal">
                  {other.description}
                </p>
              </div>
            </div>
            <p className="text-right text-indigo-900 text-base font-bold leading-relaxed">
              {other.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Others;
