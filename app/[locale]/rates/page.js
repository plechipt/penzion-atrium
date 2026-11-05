import { useTranslations } from "next-intl";
import Table from "@/components/Rates/Table";
import { NextIntlClientProvider } from "next-intl";

export default function Page() {
  const tRates = useTranslations("Rates");

  return (
    <main className="lg:container container py-8 lg:py-10 ">
      <h1 className="md:text-5xl text-4xl font-bold mb-8 text-center">
        {tRates("title")}
      </h1>

      <NextIntlClientProvider>
        <Table />
      </NextIntlClientProvider>
    </main>
  );
}
