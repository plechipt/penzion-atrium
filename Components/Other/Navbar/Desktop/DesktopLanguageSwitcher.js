import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select.jsx";
import Image from "next/image";

import { useRouter } from "@/navigation";

import USFlag from "@/assets/png/united-states-flag-icon.png";
import CzechFlag from "@/assets/png/czech-republic-flag-icon.png";

const languagesDesktop = [
  {
    code: "cs",
    name: "CZ",
    flag: (
      <div className="w-5 h-5 flex items-center justify-center rounded-full overflow-hidden">
        <Image className="w-full h-full" src={CzechFlag} alt="US Flag" />
      </div>
    ),
  },
  {
    code: "en",
    name: "EN",
    flag: (
      <div className="w-5 h-5 flex items-center justify-center rounded-full overflow-hidden">
        <Image className="w-full h-full" src={USFlag} alt="US Flag" />
      </div>
    ),
  },
];

const DesktopLanguageSwitcher = () => {
  const router = useRouter();

  const handleLanguageChange = (value) => {
    router.push("/", { locale: value });
  };

  return (
    <Select onValueChange={handleLanguageChange} defaultValue="cs">
      <SelectTrigger className="w-[101px] border-0 border-transparent bg-neutral-50 rounded-lg">
        <SelectValue
          className="w-full flex items-center gap-2 font-bold"
          placeholder="Select Language"
        />
      </SelectTrigger>
      <SelectContent>
        {languagesDesktop.map((language, i) => (
          <SelectItem
            className="flex items-center pl-2"
            key={i}
            value={language.code}
          >
            <div className="flex items-center font-bold text-neutral-700 gap-2">
              {language.flag}
              {language.name}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default DesktopLanguageSwitcher;
