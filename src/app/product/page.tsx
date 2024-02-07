import { ProductHeader } from "@/components/ProductHeader";
import { ArrowIcon } from "@/components/Icons";
import { items } from "@/dummy/items";
import { ProductInformation } from "@/components/ProductInformation";
import { FavoritesProvider } from "@/context/FavoritesProvider";

export default function ProductPage() {
  return (
    <main className="flex flex-col min-h-screen items-center relative overflow-y-auto max-w-[400px]">
      <FavoritesProvider>
        <ProductHeader />
      </FavoritesProvider>
      <ProductInformation />
    </main>
  );
}
