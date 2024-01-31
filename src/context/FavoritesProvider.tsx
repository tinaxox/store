"use client";
import { Item } from "@/Types";
import { useFavoritesManager } from "@/hooks/useFavoritesManager";
import { ReactNode, createContext } from "react";

interface FavoritesContextProps {
  addToFavorite: (item: Item) => void;
  removeFromFavorite: (item: Item) => void;
  favorites: Item[];
}

export const FavoritesContext = createContext<FavoritesContextProps>({
  addToFavorite: () => {},
  removeFromFavorite: () => {},
  favorites: [],
});

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const { favorites, addToFavorite, removeFromFavorite } =
    useFavoritesManager();

  return (
    <FavoritesContext.Provider
      value={{ addToFavorite, removeFromFavorite, favorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
