import { Item } from "../Types";
import { HeartButton } from "./HeartButton";
import {
  ArrowIcon,
  FilterIcon,
  HeartIcon,
  SearchIcon,
  StarIcon,
} from "./Icons";

interface ItemBoxProps {
  item: Item;
  className?: string;
}

export function ItemBoxHorizontal({ item, className }: ItemBoxProps) {
  return (
    <div
      className={`relative flex justify-center items-center mt-8  h-[100px] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl ${
        className ? className : "w-[250px]"
      }`}
    >
      <img
        src={item.image}
        width={"100px"}
        height={"100px"}
        className={`object-contain aspect-square ${
          !className && " absolute -top-6 -left-2"
        }`}
      />
      <div
        className={`flex flex-col gap-5 ml-4 w-full ${
          !className && "ml-10 items-center"
        }`}
      >
        <div className="flex flex-col">
          <h2 className="">{item.name}</h2>
          <p className="text-neutral-500 text-xs">{item.type}</p>
        </div>
        <div className="flex gap-3 ">
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
      <HeartButton
        item={item}
        className={`absolute ${
          !className ? "  right-1 top-1" : "right-0 top-1"
        }`}
      />
    </div>
  );
}
