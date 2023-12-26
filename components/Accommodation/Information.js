import { useTranslations } from "next-intl";

const Information = () => {
  const t = useTranslations("Accommodation");

  // Split the text into an array of words
  const text2 = t("informationNoticeDescription2").split(" ");

  return (
    <div className="container mt-10 py-8">
      <div className="text-center md:text-left text-2xl font-bold mb-6">
        {t("informationNoticeTitle")}
      </div>
      <div className="mb-4">
        {text2.map((word, index) => (
          <span
            key={index}
            className={word === "20Kč" ? "text-indigo-900 font-bold" : ""}
          >
            {word}{" "}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Information;
