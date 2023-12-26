import Emails from "./Emails";
import ContactInfo from "./ContactInfo";
import MobileIcons from "./MobileIcons";
import LogoWithSocials from "./LogoWithSocials";

const Footer = () => {
  return (
    <footer className="bg-[#03122D] w-full text-white">
      <div className="container py-12 grid grid-cols-1 lg:grid-cols-3 place-content-center place-items-center lg:place-items-start gap-6">
        {/* Logo */}
        <LogoWithSocials />

        {/* Contact */}
        <ContactInfo />

        {/* Email */}
        <Emails />

        {/* Social icons on mobile */}
        <MobileIcons />
      </div>
    </footer>
  );
};

export default Footer;
