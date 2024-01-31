import { FavoritesContext } from "@/context/FavoritesProvider";
import { useContext } from "react";

export function FavoritesItemList() {
  const { favorites } = useContext(FavoritesContext);
  return (
    <ul>
      {favorites.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
