import createMiddleware from "next-intl/middleware";
import { locales, localePrefix, pathnames } from "@/navigation";

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  localePrefix,

  // Used when no locale matches
  defaultLocale: "cs",
  localeDetection: false,
  pathnames,
});

// Only applies this middleware to files in the app directory
export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
