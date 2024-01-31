"use client";
import { useState } from "react";
import { Item } from "../Types";
import {
  ArrowIcon,
  FilterIcon,
  HeartIcon,
  SearchIcon,
  StarIcon,
} from "./Icons";
import { ItemBoxVertical } from "./ItemBoxVertical";

interface ListedItemsProps {
  items: Item[];
}

export function ListedItems({ items }: ListedItemsProps) {
  const [hearts, setHearts] = useState<Item[]>(items);
  const changeHearts = (heartedItem: Item) => {
    console.log("usao", heartedItem.name);
    const newHearts = hearts.map((heart) => {
      if (heartedItem.id === heart.id) {
        return { ...heart, active: !heart.active };
      } else return heart;
    });
    setHearts(newHearts);
    console.log(hearts);
  };
  return (
    <div className="overflow-x-auto pb-7 px-7">
      <ul className="flex justify-center items-center gap-2 min-w-max">
        {items.map((item, index) => (
          <li key={item.name + index} className="">
            <ItemBoxVertical
              heartActive={hearts[index].active}
              updateHearts={changeHearts}
              item={item}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
