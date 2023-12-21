import { useTranslations } from "next-intl";

const Title = () => {
  const t = useTranslations("Home");

  return (
    <>
      <h2 className="lg:text-5xl text-center text-4xl lg:text-start font-bold">
        <span>{t("heroTitle1")} </span>
        <span className="bg-primary-gradient inline-block text-transparent bg-clip-text">
          {t("heroTitle2")}
        </span>
        <span>{t("heroTitle3")}</span>
      </h2>
      <p className="text-neutral-700 text-base text-center lg:text-start lg:text-xl font-light">
        {t("subtext")}
      </p>
    </>
  );
};

export default Title;
