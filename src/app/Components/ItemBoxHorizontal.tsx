import { Item } from "../Types";
import {
  ArrowIcon,
  FilterIcon,
  HeartIcon,
  SearchIcon,
  StarIcon,
} from "./Icons";

interface ItemBoxProps {
  item: Item;
  heartActive: boolean;
  updateHearts: (item: Item) => void;
}

export function ItemBoxHorizontal({
  item,
  heartActive,
  updateHearts,
}: ItemBoxProps) {
  console.log(heartActive);
  const changeHeartActive = () => {
    updateHearts(item);
  };
  return (
    <div className="relative flex justify-center items-center mt-8 w-[250px] h-[100px] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl">
      <img
        src={item.image}
        width={"100px"}
        height={"100px"}
        className="object-contain aspect-square absolute -top-6 -left-2"
      />
      <div className="flex flex-col gap-5  items-center  w-full ml-10">
        <div className="flex flex-col">
          <h2 className="">{item.name}</h2>
          <p className="text-neutral-500 text-xs">{item.type}</p>
        </div>
        <div className="flex gap-3 justify-center">
          <div className="flex gap-4 justify-center items-center">
            <div className="flex gap-1 justify-center">
              <StarIcon className="w-5 h-5 stroke-yellow-500 fill-yellow-500" />
              <p className="font-semibold text-sm">{item.review}</p>
            </div>
            <p className="font-semibold text-sm flex justify-center items-center">
              <span className="text-yellow-500 text-lg font-semibold">$</span>
              <span>{item.price}</span>
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={changeHeartActive}
        className="flex absolute right-1 top-1 p-1.5 justify-center bg-gray-50 items-center rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
      >
        <HeartIcon
          className={`w-6 h-6 ${
            heartActive === true ? "fill-black" : "fill-white"
          }`}
        />
      </button>
    </div>
  );
}
