import { useTranslations } from "next-intl";
import { MotionH2, MotionP } from "@/components/Other/MotionComponents";

const Title = () => {
  const tHome = useTranslations("Home");

  const title = tHome("heroTitle").split(" ");
  const blueFont =
    "bg-primary-gradient inline-block text-transparent bg-clip-text";

  return (
    <>
      <MotionH2
        className="lg:text-5xl text-center text-4xl lg:text-start font-bold mt-5 lg:mt-0"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
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
      </MotionH2>
      <MotionP
        className="text-neutral-700 text-base text-center lg:text-start lg:text-xl font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {tHome("subtext")}
      </MotionP>
    </>
  );
};

export default Title;
