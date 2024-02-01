import { Item } from "@/Types";
import { ShoppingBagIcon } from "./Icons";
import { useAddToCartManager } from "@/hooks/useAddToCartManager";
import AnimatedLink from "./AnimatedLink";

interface AddToCartButtonProps {
  product: Item;
}
export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { productsInCart, addToCart } = useAddToCartManager();
  return (
    <button
      onClick={() => addToCart(product)}
      className="flex mt-3 bg-black text-white justify-between w-full p-3 rounded-xl items-center"
    >
      <div className="flex gap-2 justify-center items-center">
        <ShoppingBagIcon className="w-6 h-6" />
        <p> | </p>
        <p className="font-medium">Add to cart</p>
      </div>
      <p className="flex justify-center items-center">
        <span className="text-white text-xl">$</span>
        <span>{product.price}</span>
      </p>
    </button>
  );
}
