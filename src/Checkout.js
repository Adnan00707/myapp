import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Checkout() {
  const { cart, clearCart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <h1 className="text-3xl text-yellow-400 font-bold mb-6">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="p-4 bg-gray-900 border border-yellow-600 mb-3 rounded-lg">
              {item.name} — ₹ {item.price}

              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-4 px-3 py-1 bg-red-500 rounded text-black"
              >
                Remove
              </button>
            </div>
          ))}

          <h2 className="text-2xl text-yellow-400 mt-6">Total: ₹ {total}</h2>

          <button
            onClick={clearCart}
            className="mt-6 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600"
          >
            Complete Purchase
          </button>
        </div>
      )}
    </div>
  );
}
