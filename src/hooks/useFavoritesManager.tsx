"use client";

import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { Item } from "@/Types";

export function useFavoritesManager() {
  const { getValue, setValue } = useLocalStorage();
  const [favorites, setFavorites] = useState<Item[]>([]);

  useEffect(() => {
    if (typeof window == "undefined") return;
    const favJSON = getValue("favorites");
    if (!favJSON) return;
    console.log("LOCAL", favJSON);
    setFavorites(JSON.parse(favJSON) as Item[]);
  }, [typeof window]);

  const addToFavorite = (item: Item) => {
    const newFavorites = [...favorites, item];
    setFavorites(newFavorites);

    setValue("favorites", JSON.stringify(newFavorites));
  };

  const removeFromFavorite = (item: Item) => {
    const newFavorites = favorites.filter((favItem) => favItem.id != item.id);
    setFavorites(newFavorites);

    setValue("favorites", JSON.stringify(newFavorites));
  };

  return { favorites, addToFavorite, removeFromFavorite };
}
