"use client";

import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { Item } from "@/Types";

export function useAddToCartManager() {
  const { getValue, setValue } = useLocalStorage();
  const [productsInCart, setProductsInCart] = useState<Item[]>([]);

  useEffect(() => {
    if (typeof window == "undefined") return;
    const productsJSON = getValue("cart");
    if (!productsJSON) return;
    console.log("LOCAL", productsJSON);
    setProductsInCart(JSON.parse(productsJSON) as Item[]);
  }, [typeof window]);

  const addToCart = (item: Item) => {
    console.log("usaooo", item);
    for (let i = 0; i < productsInCart.length; i++) {
      if (productsInCart[i].id === item.id) return;
    }
    const newProducts = [...productsInCart, item];
    setProductsInCart(newProducts);

    setValue("cart", JSON.stringify(newProducts));
  };

  const removeFromCart = (item: Item) => {
    console.log("usao", item);
    const newProducts = productsInCart.filter(
      (itemInCart) => itemInCart.id != item.id
    );
    setProductsInCart(newProducts);

    setValue("cart", JSON.stringify(newProducts));
  };

  return { productsInCart, addToCart, removeFromCart };
}
