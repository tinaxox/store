import { Item, ListItem } from "../Types";
import { Filter } from "./Filter";
import { ArrowIcon, HeartIcon } from "./Icons";
import { ItemList } from "./ItemList";
import { ListedItems } from "./ListedItems";
import { PopularItems } from "./PopularItems";

interface ItemPageProps {
  item: Item;
}

export function ItemPage({ item }: ItemPageProps) {
  return (
    <div>
      <button
        // onClick={changeHeartActive}
        className="flex absolute right-1 top-1 p-1.5 justify-center bg-gray-50 items-center rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
      >
        <HeartIcon
          className={`w-6 h-6 "fill-black" : "fill-white"
          }`}
        />
      </button>
      <button className="flex absolute right-1 bottom-2 p-1.5 rounded-full text-white bg-neutral-800 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
        <ArrowIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
