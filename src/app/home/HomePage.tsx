import { FavoritesProvider } from "@/context/FavoritesProvider";
import { Item, ListItem } from "../../Types";
import { Filter } from "../../components/Filter";
import { ItemList } from "../../components/ItemList";
import { ListedItems } from "../../components/ListedItems";
import { PopularItems } from "../../components/PopularItems";

interface HomeProps {
  items: Item[];
  listItems: ListItem[];
}

export function HomePage({ items, listItems }: HomeProps) {
  return (
    <div className="max-w-[400px]">
      <h1 className="font-bold text-3xl mt-10 ml-7">Best Player</h1>
      <Filter />
      <ItemList items={listItems} />
      <FavoritesProvider>
        <ListedItems items={items} />
        <div className="flex justify-between items-center mb-2 mt-4">
          <h2 className="text-xl text-neutral-500 font-bold ml-7 ">Popular</h2>
          <p className="text-l text-neutral-400  mr-7">See all</p>
        </div>
        <PopularItems items={items} />
      </FavoritesProvider>
    </div>
  );
}
