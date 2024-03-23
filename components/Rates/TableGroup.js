import { useTranslations } from "next-intl";

const TableGroup = ({ type, typeOfStay, standard }) => {
  const tAcc = useTranslations("Accommodation");
  const tGeneral = useTranslations("General");

  const groupListBig = type.TOURIST["20+"];
  const groupListSmall = type.TOURIST["10-19"];

  return (
    <div className="md:mb-3 mb-10 w-full w-[55%] justify-center align-center m-auto relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              {typeOfStay}
            </th>
            <th scope="col" className="px-6 py-3">
              {tAcc("oneDay")}
            </th>
            <th scope="col" className="px-6 py-3">
              {tAcc("twoOrMoreDays")}
            </th>
          </tr>
        </thead>
        <tbody>
          <>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <td className="px-6 py-4">10-19 {tAcc("people")}</td>
              <td className="px-6 py-4">{groupListSmall[1]} Kč</td>
              <td className="px-6 py-4">{groupListSmall[0]} Kč</td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <td className="px-6 py-4">20+ {tAcc("people")}</td>
              <td className="px-6 py-4">{groupListBig[1]} Kč</td>
              <td className="px-6 py-4">{groupListBig[0]} Kč</td>
            </tr>
          </>
        </tbody>
      </table>
    </div>
  );
};

export default TableGroup;
