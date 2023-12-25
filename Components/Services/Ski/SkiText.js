import Link from "next/link";
import { useTranslations } from "next-intl";
import ServicesData from "@/data/ServicesData";

const SkiText = () => {
  const { ski } = ServicesData();
  const t = useTranslations("Services");

  return (
    <div className=" w-full space-y-6 max-w-[720px]">
      <h2 className="text-2xl font-bold mb-2 text-center md:text-start">
        {t("skiTitle")}
      </h2>
      <p className="text-gray-600">{t("skiDescription")}</p>

      <div className="space-y-5">
        {ski.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            target="_blank"
            className="flex gap-4 items-center"
          >
            {item.icon}
            <p className=" text-neutral-700 text-lg font-normal">{item.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SkiText;
