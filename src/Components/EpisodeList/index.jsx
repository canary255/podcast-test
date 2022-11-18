export const EpisodeList = ({ list = [] }) => {
  return (
    <div className="shadow-lg w-full p-4">
      <table className="w-full text-sm text-left">
        <thead>
          <tr>
            <th scope="col" className="py-3 px-14">
              Title
            </th>
            <th scope="col" className="py-3">
              Date
            </th>
            <th scope="col" className="py-3 text-center">
              Duration
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr
              key={index}
              className="first:border-t-4 border-b-2 even:bg-white odd:bg-gray-100"
            >
              <td className="py-3 px-14">
                <a className=" text-blue-500" href="/">
                  {item.title}
                </a>
              </td>
              <td className="py-3 ">{item.date}</td>
              <td className="py-3  text-center">{item.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
