"use client";
import { Item, OrderedItem } from "@/Types";
import { useAddToCartManager } from "@/hooks/useAddToCartManager";
import { useFavoritesManager } from "@/hooks/useFavoritesManager";
import { ReactNode, createContext } from "react";

interface AddToCartContextProps {
  addToCart: (item: Item) => void;
  removeFromCart: (item: Item) => void;
  productsInCart: OrderedItem[];
}

export const AddToCartContext = createContext<AddToCartContextProps>({
  addToCart: () => {},
  removeFromCart: () => {},
  productsInCart: [],
});

export function AddToCartProvider({ children }: { children: ReactNode }) {
  const { productsInCart, addToCart, removeFromCart } = useAddToCartManager();

  return (
    <AddToCartContext.Provider
      value={{ addToCart, removeFromCart, productsInCart }}
    >
      {children}
    </AddToCartContext.Provider>
  );
}
