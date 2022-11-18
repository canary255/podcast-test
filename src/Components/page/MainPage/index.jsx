import { Badge } from "../../atom/Badge/index";
import { InputFilter } from "../../atom/InputFilter/index";
import { CardWithAvatar } from "../../atom/CardWithAvatar/index";
import { Loading } from "../../atom/Loading/index";
import { useEffect, useState } from "react";
import { fetchData } from "./utils/fetchData";
import { filterInputData } from "./utils/filterInputData";

export const MainPage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  //useEffect re-rending twice because is in development and it's a feature
  //https://stackoverflow.com/questions/72238175/useeffect-is-running-twice-on-mount-in-react
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchData(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
      setData,
      setFilteredData,
      signal
    ).finally(() =>
      setLoading(() => {
        return false;
      })
    );
    return () => controller.abort();
  }, []);

  return (
    <>
      {loading ? <Loading /> : null}
      <div className="flex justify-end mb-16">
        <div className="flex flex-none w-1/8 mr-4">
          <Badge>{filteredData ? filteredData.length : 0}</Badge>
        </div>
        <div className="flex flex-initial w-1/4">
          <InputFilter
            onKeyUp={(e) =>
              setFilteredData(() => {
                return filterInputData(e, data);
              })
            }
          />
        </div>
      </div>
      <div className="grid gap-4 grid-cols-2 grid-rows-2 md:grid-cols-4">
        {filteredData.map((item, index) => (
          <CardWithAvatar
            key={index}
            author={item["im:artist"]?.label}
            src={item["im:image"][2]?.label}
          >
            {item["im:name"]?.label}
          </CardWithAvatar>
        ))}
      </div>
    </>
  );
};
