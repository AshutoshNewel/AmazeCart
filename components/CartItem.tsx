'use client';

interface CartItemProps {
  product: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
  onRemove: () => void;
  onUpdateQuantity: (quantity: number) => void;
}

export default function CartItem({ product, onRemove, onUpdateQuantity }: CartItemProps) {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p>${product.price}</p>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="number"
          value={product.quantity}
          onChange={(e) => onUpdateQuantity(parseInt(e.target.value))}
          className="w-16 p-2 border rounded-lg"
          min="1"
        />
        <button
          onClick={onRemove}
          className="text-red-600 hover:text-red-800"
        >
          Remove
        </button>
      </div>
    </div>
  );
}