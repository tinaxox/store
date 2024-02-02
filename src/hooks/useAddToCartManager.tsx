"use client";

import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { Item, OrderedItem } from "@/Types";

function updateCart(productsInCart: OrderedItem[], item: Item) {
  let newProduct = true;

  for (let i = 0; i < productsInCart.length; i++) {
    if (item.id === productsInCart[i].item.id) {
      productsInCart[i].numberOfWanted += 1;
      newProduct = false;
      break;
    }
  }
  if (newProduct) {
    productsInCart.push({ item: item, numberOfWanted: 1 });
  }
  return [...productsInCart];
}

function removeProduct(productsInCart: OrderedItem[], item: Item) {
  for (let i = 0; i < productsInCart.length; i++) {
    if (item.id === productsInCart[i].item.id) {
      productsInCart[i].numberOfWanted -= 1;
      if (productsInCart[i].numberOfWanted === 0) {
        productsInCart.splice(i, 1);
      }
      break;
    }
  }
  return [...productsInCart];
}

export function useAddToCartManager() {
  const { getValue, setValue } = useLocalStorage();
  const [productsInCart, setProductsInCart] = useState<OrderedItem[]>([]);

  useEffect(() => {
    if (typeof window == "undefined") return;
    const productsJSON = getValue("cart");
    if (!productsJSON) return;
    console.log("LOCAL", productsJSON);
    setProductsInCart(JSON.parse(productsJSON) as OrderedItem[]);
  }, [typeof window]);

  const addToCart = (item: Item) => {
    console.log("usaooo", item);

    const newProducts = updateCart(productsInCart, item);
    setProductsInCart(newProducts);
    setValue("cart", JSON.stringify(newProducts));
  };

  const removeFromCart = (item: Item) => {
    console.log("usao", item);
    const newProducts = removeProduct(productsInCart, item);
    setProductsInCart(newProducts);

    setValue("cart", JSON.stringify(newProducts));
  };

  return { productsInCart, addToCart, removeFromCart };
}
