const Table = () => {
  return (
    <div className="w-[55%] justify-center align-center m-auto relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Kratkodoby pobyt
            </th>
            <th scope="col" className="px-6 py-3">
              TURIST
            </th>
            <th scope="col" className="px-6 py-3">
              STANDARD
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <td className="px-6 py-4">1lůžkový pokoj</td>
            <td className="px-6 py-4">500 Kč</td>
            <td className="px-6 py-4">600 Kč</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
