import "./globals.css";

import { cookies } from "next/headers";
import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";
import { Urbanist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { locales } from "@/navigation";
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

export default function RootLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) {
    redirect("/");
  }

  return (
    <html lang={locale}>
      <body className={urbanist.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
