import { useTranslations } from "next-intl";

const TableComponent = ({ type, typeOfStay, standard }) => {
  const tAcc = useTranslations("Accommodation");
  const tGeneral = useTranslations("General");

  return (
    <div className="mb-3 w-full w-[55%] justify-center align-center m-auto relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              {typeOfStay}
            </th>
            <th scope="col" className="px-6 py-3">
              {tGeneral("tourist")}
            </th>
            <th scope="col" className="px-6 py-3">
              STANDARD
            </th>
          </tr>
        </thead>
        <tbody>
          {type.TOURIST.map((touristPrice, index) => (
            <tr
              key={index}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <td className="px-6 py-4">
                {index + 1}{" "}
                {index !== 0 ? tAcc("moreBedroom") : tAcc("bedroom")}
              </td>
              <td className="px-6 py-4">{touristPrice} Kč</td>
              {standard[index] !== undefined ? (
                <td className="px-6 py-4">{standard[index]} Kč</td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
