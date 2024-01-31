import { useTranslations } from "next-intl";

const Information = () => {
  const tAcc = useTranslations("Accommodation");

  // Split the text into an array of words
  const text2 = tAcc("informationNoticeDescription2").split(" ");

  return (
    <div className="container mt-14 mb-16">
      <div className="text-center md:text-left text-2xl font-bold mb-6">
        {tAcc("informationNoticeTitle")}
      </div>
      <div className="mb-4">
        {text2.map((word, index) => (
          <span
            key={index}
            className={word === "40Kč" ? "text-indigo-900 font-bold" : ""}
          >
            {word}{" "}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Information;
