"use client";
import { useState } from "react";
import { FilterIcon, SearchIcon } from "./Icons";
import { Item, ListItem } from "../Types";
import Image from "next/image";

interface ItemListProps {
  items: ListItem[];
}
export function ItemList({ items }: ItemListProps) {
  const [itemActive, setItemActive] = useState<ListItem[]>(items);

  const handleItemClick = (clickedItem: Item) => {
    const newState = items.map((item) => {
      if (item == clickedItem) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });
    setItemActive(items);
  };
  return (
    <div className="mt-5 py-4 overflow-x-auto px-7">
      <ul className="list-none flex justify-center items-center gap-2 min-w-max">
        {items.map((item, index) => {
          return (
            <li
              key={item.name + index}
              className={` ${
                itemActive[index].active === true
                  ? " bg-black text-white "
                  : "bg-white text-black"
              } flex justify-center items-center text-xs rounded-xl px-4 py-3 gap-2 `}
            >
              {item.image && (
                <img src={item.image} width={"18px"} height={"18px"} />
              )}
              <p>{item.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
