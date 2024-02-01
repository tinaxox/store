"use client";

import { useContext, useState } from "react";
import { ArrowIcon, HeartIcon } from "./Icons";
import { Item } from "@/Types";
import { FavoritesContext } from "@/context/FavoritesProvider";
import { useProductManager } from "@/hooks/useProductManager";

interface ArrowButtonProps {
  item: Item;
  className: string;
}

export function ArrowButton({ item, className }: ArrowButtonProps) {
  const { product, setNewProduct } = useProductManager();
  return (
    <button
      onClick={() => setNewProduct(item)}
      className={`flex ${className} p-1.5 justify-center items-center rounded-full ]`}
    >
      <ArrowIcon className="w-6 h-6" />
    </button>
  );
}
