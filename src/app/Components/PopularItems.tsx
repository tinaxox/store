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
import { ItemBoxHorizontal } from "./ItemBoxHorizontal";

interface PopularItemsProps {
  items: Item[];
}

export function PopularItems({ items }: PopularItemsProps) {
  const [hearts, setHearts] = useState<Item[]>(items);
  const changeHearts = (heartedItem: Item) => {
    const newHearts = hearts.map((heart) => {
      if (heartedItem.id === heart.id) {
        return { ...heart, active: !heart.active };
      } else return heart;
    });
    setHearts(newHearts);
  };
  return (
    <div className="overflow-x-auto pb-8 px-7">
      <ul className="flex justify-center items-center gap-2 min-w-max">
        {items.map((item, index) => (
          <li key={item.name + index} className="">
            <ItemBoxHorizontal
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
