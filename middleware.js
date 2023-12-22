import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "@/navigation";

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  localePrefix,

  // Used when no locale matches
  defaultLocale: "cs",
  localeDetection: false,
});

// Only applies this middleware to files in the app directory
export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
