import { useTranslations } from "next-intl";

const Title = () => {
  const tHome = useTranslations("Home");

  const title = tHome("heroTitle").split(" ");
  const blueFont =
    "bg-primary-gradient inline-block text-transparent bg-clip-text";

  return (
    <>
      <h2 className="lg:text-5xl text-center text-4xl lg:text-start font-bold mt-5 lg:mt-0">
        {title.map((word, index) => (
          <span
            key={index}
            className={
              word === "Trutnov" || word === "Trutnova" ? blueFont : ""
            }
          >
            {word}{" "}
          </span>
        ))}
      </h2>
      <p className="text-neutral-700 text-base text-center lg:text-start lg:text-xl font-light">
        {tHome("subtext")}
      </p>
    </>
  );
};

export default Title;
