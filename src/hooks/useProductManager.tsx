"use client";

import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { Item } from "@/Types";

export function useProductManager() {
  const { getValue, setValue } = useLocalStorage();
  const [product, setProduct] = useState<Item>();

  useEffect(() => {
    if (typeof window == "undefined") return;
    const productJSON = getValue("product");
    console.log("LOCAL", productJSON);
    if (!productJSON) return;
    setProduct(JSON.parse(productJSON) as Item);
  }, [typeof window]);

  const setNewProduct = (item: Item) => {
    console.log("usaoooo");
    setProduct(item);
    setValue("product", JSON.stringify(item));
    console.log(product, getValue);
  };

  return { product, setNewProduct };
}
