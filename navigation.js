import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["cs", "en"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
