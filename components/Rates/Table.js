import { prices } from "@/utils/prices";
import { useTranslations } from "next-intl";
import TableComponent from "./TableComponent";

const Table = () => {
  const tAcc = useTranslations("Accommodation");
  const { short, medium, long, group } = prices;

  const shortStandard = short.STANDARD;
  const mediumStandard = medium.STANDARD;
  const longStandard = long.STANDARD;

  return (
    <div className="md:columns-2 gap-10">
      <TableComponent
        type={short}
        typeOfStay={tAcc("shortTermStayWithDays")}
        standard={shortStandard}
      />
      <TableComponent
        type={medium}
        typeOfStay={tAcc("mediumTermStayWithDays")}
        standard={mediumStandard}
      />
      <TableComponent
        type={long}
        typeOfStay={tAcc("longTermStayWithDays")}
        standard={longStandard}
      />
    </div>
  );
};

export default Table;
