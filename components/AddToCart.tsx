"use client";

import { useCart } from "@/app/cartContext";
import toast from 'react-hot-toast';

interface AddToCartButtonProps {
  productId: number;
  productTitle: string;
  productPrice: number;
}

const AddToCartButton = ({ productId, productTitle, productPrice }: AddToCartButtonProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: productId,
      name: productTitle,
      price: productPrice,
      quantity: 1,
    });
    toast.success(`${productTitle} added to cart!`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-50 py-3 px-6 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
