import { Item } from "../Types";
import AnimatedLink from "./AnimatedLink";
import { ArrowButton } from "./ArrowButton";
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
}

export function ItemBoxVertical({ item }: ItemBoxProps) {
  return (
    <div className="relative flex flex-col justify-center items-center mt-8 w-[170px] h-[240px] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl">
      <img
        src={item.image}
        width={"150px"}
        height={"150px"}
        className="object-contain aspect-square absolute -top-6 -left-2"
      />
      <div className="flex flex-col gap-5 mt-32 items-start  w-full ml-10">
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
      <HeartButton item={item} className="absolute right-1 top-1" />
      <AnimatedLink href="/product">
        <ArrowButton
          item={item}
          className="absolute right-1 bottom-1 bg-neutral-800 text-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)"
        />
      </AnimatedLink>
    </div>
  );
}
