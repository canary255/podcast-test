import { Link } from "react-router-dom";

export const EpisodeList = ({ list = [], id }) => {
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
                <Link
                  className=" text-blue-500"
                  to={`/podcast/${id}/episode/${list.length - index}`}
                >
                  {item?.title}
                </Link>
              </td>
              <td className="py-3 ">{item?.date}</td>
              <td className="py-3  text-center">{item?.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
