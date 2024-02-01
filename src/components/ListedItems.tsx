"use client";
import { useContext, useState } from "react";
import { Item } from "../Types";
import {
  ArrowIcon,
  FilterIcon,
  HeartIcon,
  SearchIcon,
  StarIcon,
} from "./Icons";
import { ItemBoxVertical } from "./ItemBoxVertical";
import { FavoritesContext } from "@/context/FavoritesProvider";

interface ListedItemsProps {
  items: Item[];
}

export function ListedItems({ items }: ListedItemsProps) {
  return (
    <div className="overflow-x-auto pb-7 px-7">
      <ul className="flex justify-center items-center gap-2 min-w-max">
        {items.map((item, index) => (
          <li key={item.name + index} className="">
            <ItemBoxVertical item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
