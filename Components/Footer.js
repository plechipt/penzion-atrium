"use client";

import {
  FooterLogoIcon,
  LocationIcon,
  PhoneIcon,
  SMSIcon,
} from "@/assets/icons";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-900 w-full text-white">
      <div className="container py-12 grid grid-cols-1 lg:grid-cols-3 place-content-center place-items-center lg:place-items-start gap-6">
        {/* Logo */}
        <div className="lg:space-y-6">
          <div className="flex flex-col items-center gap-2">
            <FooterLogoIcon className="w-[214px] h-[168px] lg:w-[168px] lg:h-[76px]" />
          </div>

          <div className="lg:flex hidden items-center gap-3">
            <Link
              className="w-9 h-9 rounded-full border border-stone-300 flex items-center justify-center text-stone-300 hover:bg-secondary-gradient hover:border-0 transition-all duration-300"
              href="#"
            >
              <FaFacebookF />
            </Link>
            <Link
              className="w-9 h-9 rounded-full border border-stone-300 flex items-center justify-center text-stone-300 hover:bg-secondary-gradient hover:border-0 transition-all duration-300"
              href="#"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-3 lg:text-start text-center flex items-center flex-col lg:items-start">
          <h3 className="text-base font-bold">Contact info</h3>

          <div className="flex items-center gap-2">
            <LocationIcon className="w-5 h-5 text-[#fff]" />
            <p className="text-white text-base font-normal leading-relaxed">
              541 01 - Trutnov, Žižkova 504
            </p>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="w-5 h-5 text-[#fff]" />
            <p className="text-white text-base font-normal leading-relaxed">
              tel.: (+420) 731 415 455
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="space-y-3 lg:text-start text-center flex items-center flex-col lg:items-start">
          <h3 className="text-base font-bold">Emails</h3>

          <div className="flex items-center gap-2">
            <SMSIcon className="w-5 h-5 text-[#fff]" />
            <p className="text-white text-base font-normal leading-relaxed">
              penzionatrium@seznam.cz
            </p>
          </div>
          <div className="flex items-center gap-2">
            <SMSIcon className="w-5 h-5 text-[#fff]" />
            <p className="text-white text-base font-normal leading-relaxed">
              plechac@zskomtu.cz
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex lg:hidden items-center gap-3">
          <Link
            className="w-9 h-9 rounded-full border border-stone-300 flex items-center justify-center text-stone-300 hover:bg-secondary-gradient hover:border-0 transition-all duration-300"
            href="#"
          >
            <FaFacebookF />
          </Link>
          <Link
            className="w-9 h-9 rounded-full border border-stone-300 flex items-center justify-center text-stone-300 hover:bg-secondary-gradient hover:border-0 transition-all duration-300"
            href="#"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
