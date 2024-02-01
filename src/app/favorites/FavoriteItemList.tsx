import AnimatedLink from "@/components/AnimatedLink";
import { ArrowButton } from "@/components/ArrowButton";
import { HeartButton } from "@/components/HeartButton";
import { ArrowIcon } from "@/components/Icons";
import { FavoritesContext } from "@/context/FavoritesProvider";
import { useContext } from "react";

export function FavoritesItemList() {
  const { favorites } = useContext(FavoritesContext);
  return (
    <ul className="w-full gap-5 flex flex-col mt-14">
      {favorites.map((item) => (
        <li
          className="relative flex justify-center items-center w-full h-[100px] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl"
          key={item.id}
        >
          <img
            src={item.image}
            width={"100px"}
            height={"100px"}
            className="object-contain aspect-square absolute -top-6 -left-2"
          />
          <div className="flex justify-between w-full pl-28 pr-16">
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
          <HeartButton item={item} className="absolute right-1 top-1" />
          <AnimatedLink href="/product">
            <ArrowButton
              item={item}
              className="absolute right-1 bottom-1 text-neutral-800 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)"
            />
          </AnimatedLink>
        </li>
      ))}
    </ul>
  );
}
