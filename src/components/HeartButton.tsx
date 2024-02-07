"use client";

import { useContext, useState } from "react";
import { HeartIcon } from "./Icons";
import { Item } from "@/Types";
import { FavoritesContext } from "@/context/FavoritesProvider";

interface HeartButtonProps {
  onAdd: () => void;
  onRemove: () => void;
}

export function HeartButton({
  item,
  className,
}: {
  item: Item;
  className: string;
}) {
  const { addToFavorite, removeFromFavorite, favorites } =
    useContext(FavoritesContext);
  const heartActive = favorites.findIndex((i) => i.id == item.id) !== -1;
  const toggleHeartActive = () => {
    const newState = !heartActive;
    console.log(item.name);
    if (newState) {
      addToFavorite(item);
    } else {
      removeFromFavorite(item);
    }
  };
  return (
    <button
      onClick={toggleHeartActive}
      className={`flex ${className} p-1.5 justify-center bg-gray-50 items-center rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]`}
    >
      <HeartIcon
        className={`w-6 h-6 ${
          heartActive === true ? "fill-black" : "fill-white"
        }`}
      />
    </button>
  );
}
