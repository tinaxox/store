"use client";

import { ArrowIcon } from "@/components/Icons";
import { ItemsInCart } from "@/components/ItemsInCart";
import {
  AddToCartContext,
  AddToCartProvider,
} from "@/context/AddToCartProvider";

export default function FavoritesPage() {
  return (
    <main className="flex min-h-screen flex-col  overflow-y-auto py-8 px-8 max-w-[400px]">
      <h1 className="text-2xl font-bold"> My cart</h1>
      <AddToCartProvider>
        <ItemsInCart />
      </AddToCartProvider>
    </main>
  );
}
