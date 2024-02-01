import { HeartButton } from "@/components/HeartButton";
import { ArrowIcon, TrashCanIcon } from "@/components/Icons";
import { AddToCartContext } from "@/context/AddToCartProvider";
import { useContext } from "react";

export function ItemsInCart() {
  const { productsInCart, addToCart, removeFromCart } =
    useContext(AddToCartContext);
  return (
    <ul className="w-full gap-5 flex flex-col mt-14">
      {productsInCart.map((item) => (
        <li
          className="relative flex flex-col justify-center items-center w-full h-[100px] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl"
          key={item.id}
        >
          <div className="flex justify-center items-center w-full">
            <img
              src={item.image}
              width={"100px"}
              height={"100px"}
              className="object-contain aspect-square absolute -top-6 -left-2"
            />
            <div className="flex justify-between w-full pl-28 pr-5">
              <div className="flex flex-col">
                <h2 className="text-lg">{item.name}</h2>
                <p className="text-neutral-500 text-sm">{item.type}</p>
              </div>
              <div className="flex gap-3 justify-center">
                <div className="flex justify-center items-center">
                  <p className="font-semibold  flex justify-center items-center">
                    <span className="text-yellow-500 text-xl font-semibold">
                      $
                    </span>
                    <span>{item.price}</span>
                  </p>
                </div>
              </div>
            </div>
            <button
              className="flex justify-center items-center pr-5"
              onClick={() => removeFromCart(item)}
            >
              <TrashCanIcon className="w-5 h-5" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
