import "./globals.css";


import { redirect } from "next/navigation";
import { Urbanist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import IconLanguageSwitcher from "@/components/Other/IconLanguageSwitcher";

import { routing } from "@/routing";
import { Providers } from "./providers";

import Navbar from "@/components/Other/Navbar/Navbar";
import Footer from "@/components/Other/Footer/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Penzion Atrium Trutnov",
  description:
    "Náš penzion poskytuje výhodné a cenově dostupné ubytování v blízkosti historického centra Trutnov. Zajišťujeme pohodlí a snadný přístup ke všem zajímavostem, které město nabízí.",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    redirect("/");
  }

  return (
    <html lang={locale}>
      <body className={urbanist.className}>
        <NextIntlClientProvider>
          <Providers>
            <Navbar />
            {children}
            <IconLanguageSwitcher />
            <Footer />
          </Providers>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}