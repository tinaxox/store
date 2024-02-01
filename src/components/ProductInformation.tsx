"use client";
import { Item } from "@/Types";
import { HeartButton } from "./HeartButton";
import { ArrowIcon, ShoppingBagIcon, StarIcon } from "./Icons";
import { items } from "@/dummy/items";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useProductManager } from "@/hooks/useProductManager";
import { AddToCartButton } from "./AddToCartButton";
import AnimatedLink from "./AnimatedLink";

export function ProductInformation() {
  const { product, setNewProduct } = useProductManager();
  console.log(product);
  return (
    product && (
      <div className="flex flex-col items-center w-full mt-4 px-8 h-screen">
        {/* <div className="w-full justify-start pl-10"> */}
        <div className="flex flex-col w-full items-center">
          <img
            src={product.image}
            width={"200px"}
            height={"200px"}
            className="object-contain aspect-square "
          />
          {/* </div> */}
          <div className="w-full justify-start mt-8 items-center">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <div className="flex justify-between">
              <p className="text-neutral-500 text">{product.type}</p>

              <div className="flex gap-1 justify-center">
                <StarIcon className="w-5 h-5 stroke-yellow-500 fill-yellow-500" />
                <p className="font-semibold text-sm">{product.review}</p>
              </div>
            </div>
          </div>
          <hr className="mt-3 w-full border-[0.5px]" />
        </div>
        <div className="flex flex-col mt-3">
          <div className="flex flex-col p-3 w-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl">
            <h2 className="font-semibold mb-1">Description</h2>
            <p className="text-xs">{product.description}</p>
          </div>
          <AnimatedLink href="/cart">
            <AddToCartButton product={product} />
          </AnimatedLink>
        </div>
      </div>
    )
  );
}
