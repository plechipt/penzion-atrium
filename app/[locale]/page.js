import { useTranslations } from "next-intl";

import Hero from "@/Components/Home Section/Hero/Hero";
import ImageGrid from "@/Components/Home Section/ImageGrid";
import Amenities from "@/Components/Home Section/Amenities";

export default function Home() {
  const t = useTranslations("Index");

  console.log(t("title"));

  return (
    <main>
      <Hero />
      <ImageGrid />
      <Amenities />
    </main>
  );
}
