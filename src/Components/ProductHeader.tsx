"use client";
import { Item } from "@/Types";
import { HeartButton } from "./HeartButton";
import { ArrowIcon } from "./Icons";
import { items } from "@/dummy/items";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useProductManager } from "@/hooks/useProductManager";

export function ProductHeader() {
  const { product, setNewProduct } = useProductManager();
  return (
    <div className="flex justify-between w-full mt-7 px-6 items-center">
      <button className="flex rounded-full text-neutral-500 rotate-180">
        <ArrowIcon className="w-6 h-6 stroke-2" />
      </button>
      {/* <HeartButton item={product!} className={""} /> */}
    </div>
  );
}
