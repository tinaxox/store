import { HeartButton } from "@/components/HeartButton";
import {
  ArrowIcon,
  MinusIcon,
  PlusIcon,
  TrashCanIcon,
} from "@/components/Icons";
import { AddToCartContext } from "@/context/AddToCartProvider";
import { useContext } from "react";

export function ItemsInCart() {
  const { productsInCart, addToCart, removeFromCart } =
    useContext(AddToCartContext);
  console.log("ovdee", productsInCart);
  return (
    <ul className="w-full gap-5 flex flex-col mt-8">
      {productsInCart.map((orderedtem) => (
        <li
          className="relative flex flex-col justify-center items-center w-full"
          key={orderedtem.item.id + orderedtem.numberOfWanted}
        >
          <div className="flex justify-between items-center w-full">
            <img
              src={orderedtem.item.image}
              width={"120px"}
              height={"120px"}
              className="object-contain aspect-square"
            />
            <div className="flex flex-col">
              <div className="flex gap-16">
                <div className="flex flex-col w-full gap-1 items-start">
                  <div className="flex flex-col">
                    <h2 className="text-lg text-neutral-800">
                      {orderedtem.item.name}
                    </h2>
                  </div>
                  <div className="flex gap-3 justify-center">
                    <div className="flex justify-center items-center ">
                      <p className="font-bold  flex justify-center items-center ">
                        <span className="text-xl font-bold">$</span>
                        <span>{orderedtem.item.price}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className="flex justify-center items-center"
                  onClick={() => removeFromCart(orderedtem.item)}
                >
                  <TrashCanIcon className="w-5 h-5" />
                </button>
              </div>
              <div className="flex gap-2 mt-5">
                <button
                  onClick={() => removeFromCart(orderedtem.item)}
                  className="p-1 border-2 border-neutral-600 border-solid rounded-lg"
                >
                  <MinusIcon className="w-4 h-4 stroke-2" />
                </button>
                <p className="font-semibold text-xl px-1">
                  {orderedtem.numberOfWanted}
                </p>
                <button
                  onClick={() => addToCart(orderedtem.item)}
                  className="p-1 border-2 border-neutral-600 border-solid rounded-lg"
                >
                  <PlusIcon className="w-4 h-4 stroke-2" />
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
