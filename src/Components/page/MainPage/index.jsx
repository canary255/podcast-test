import { Badge } from "../../atom/Badge/index";
import { InputFilter } from "../../atom/InputFilter/index";
import { CardWithAvatar } from "../../atom/CardWithAvatar/index";

export const MainPage = () => {
  const info = {
    title: "Elysium",
    author: "Stratovarius",
    src: "https://m.media-amazon.com/images/I/610ZK-2PFrL.jpg",
  };
  const data = [info, info, info, info, info];
  return (
    <>
      <div className="flex justify-end mb-16">
        <div className="flex flex-none w-1/8 mr-4">
          <Badge>{data.length}</Badge>
        </div>
        <div className="flex flex-initial w-1/4">
          <InputFilter />
        </div>
      </div>
      <div className="grid gap-4 grid-cols-2 grid-rows-3 md:grid-cols-4">
        {data.map((item, index) => (
          <CardWithAvatar key={index} author={item.author} src={item.src}>
            {item.title}
          </CardWithAvatar>
        ))}
      </div>
    </>
  );
};
