import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeItem } = useCart();
  const total = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);
  console.log(cart);

  return (
    <div className="max-w-5xl mx-auto px-6 py-32">
      <h1 className="text-3xl font-display mb-8">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 flex justify-between"
            >
              <div className="flex gap-4 items-center">
  <img
    src={item.selectedImage}
    alt={item.name}
    className="w-24 h-24 object-cover rounded-lg"
  />

  <div>
    <h3 className="font-medium">{item.name}</h3>

    {item.selectedColor && (
      <p className="text-sm text-gray-500">
        Colour: {item.selectedColor}
      </p>
    )}

    <p className="font-semibold mt-1">
      ₹{item.price}
    </p>
    <div>
  <h3>{item.name}</h3>

  {item.selectedColor && (
    <p>Colour: {item.selectedColor}</p>
  )}

  <p>₹{item.price}</p>

  <div className="text-sm text-gray-500">
    Qty: {item.quantity}

    <div className="flex items-center gap-3 mt-2">
  <button
    onClick={() =>
      decreaseQuantity(item.name, item.selectedColor)
    }
    className="w-8 h-8 rounded-full border"
  >
    -
  </button>

  <span>{item.quantity}</span>

  <button
    onClick={() =>
      increaseQuantity(item.name, item.selectedColor)
    }
    className="w-8 h-8 rounded-full border"
  >
    +
  </button>
</div>
<button
  onClick={() =>
    removeItem(item.name, item.selectedColor)
  }
  className="mt-3 text-red-500 text-sm"
>
  Remove
</button>
  </div>
</div>
  </div>
</div>
            </div>
            
          ))}
          <div className="mt-8 border-t pt-6 flex justify-between items-center">
  <div>
    <p className="text-lg font-semibold">
      Total: ₹{total.toLocaleString("en-IN")}
    </p>
  </div>

  <Link
  to="/checkout"
  className="bg-charcoal text-white px-6 py-3 rounded-xl"
>
  Proceed to Checkout
</Link>
</div>
        </div>
      )}
    </div>
  );
}