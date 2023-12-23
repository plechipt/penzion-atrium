import {
  createSharedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["cs", "en"];
export const localePrefix = "always"; // Default

export const pathnames = {
  "/": "/",

  "/accommodation": {
    cs: "/ubytovani",
    en: "/accommodation",
  },
  "/services": {
    cs: "/sluzby",
    en: "/services",
  },
  "/surroundings": {
    cs: "/okoli",
    en: "/surroundings",
  },
  "/contact": {
    cs: "/kontakt",
    en: "/contact",
  },
};

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createSharedPathnamesNavigation({ locales, localePrefix, pathnames });
