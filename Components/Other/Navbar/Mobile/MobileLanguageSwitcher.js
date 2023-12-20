import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select.jsx";
import { CzechRIcon, USFlagIcon } from "@/assets/icons";

import { useRouter } from "@/navigation";

const languagesMobile = [
  { code: "cs", name: "CZ", flag: <CzechRIcon className="w-6" /> },
  { code: "en", name: "EN", flag: <USFlagIcon className="w-6" /> },
];

const MobileLanguageSwitcher = () => {
  const router = useRouter();

  const handleLanguageChange = (value) => {
    router.push("/", { locale: value });
  };

  return (
    <Select onValueChange={handleLanguageChange} defaultValue="cs">
      <SelectTrigger className="w-full border-0 border-transparent bg-neutral-50 rounded-lg">
        <SelectValue
          className="w-full flex items-center gap-2 font-bold"
          placeholder="Select Language"
        />
      </SelectTrigger>
      <SelectContent>
        {languagesMobile.map((language, i) => (
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

export default MobileLanguageSwitcher;
