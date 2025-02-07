'use client';


import { useCart } from '@/app/cartContext';
import CartItem from '@/components/CartItem';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                product={item}
                onRemove={() => removeFromCart(item.id)}
                onUpdateQuantity={(quantity) => updateQuantity(item.id, quantity)}
              />
            ))}
          </div>
          <div className="mt-4 text-right">
            <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
            <button
              onClick={clearCart}
              className="bg-red-600 text-white p-2 rounded-lg mt-2 hover:bg-red-700"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}