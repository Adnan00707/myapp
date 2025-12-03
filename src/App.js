import { useContext } from "react";
import { products } from "./products";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import GoldParticles from "./GoldParticles";
import { CartContext } from "./CartContext";

export default function App() {
  const navigate = useNavigate();
  const { cart, addToCart } = useContext(CartContext);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden p-6">

      <GoldParticles />

      {/* NAVBAR */}
      <nav className="flex justify-between items-center mb-10 p-4 bg-gradient-to-r 
        from-yellow-600 to-yellow-400 text-black font-bold rounded-xl shadow-xl z-50">
        
        <h1 className="text-3xl font-extrabold">Adnaney’s Luxury Watches ⚜️</h1>

        <div className="flex gap-4">
          <p className="text-lg">Cart: {cart.length}</p>

          <button
            onClick={() => navigate("/checkout")}
            className="px-4 py-2 bg-black text-yellow-400 border border-yellow-400 rounded-lg"
          >
            Checkout
          </button>
        </div>
      </nav>

      <h2 className="text-2xl font-bold text-yellow-400 mb-6">
        Premium Watch Collection
      </h2>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 z-20">
        
        {products.map((item) => (
          <motion.div
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
            className="relative group p-5 cursor-pointer bg-gray-900 border border-yellow-600 
            rounded-xl shadow-xl hover:shadow-yellow-500/40 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={item.img}
              className="w-full h-48 object-cover rounded-lg"
              whileHover={{ scale: 1.1 }}
            />

            <h3 className="text-lg font-semibold mt-3 text-yellow-300">
              {item.name}
            </h3>

            <p className="text-gray-300 mb-2">₹ {item.price}</p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(item);
              }}
              className="mt-3 px-4 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600"
            >
              Add to Cart
            </button>
          </motion.div>
        ))}

      </div>
    </div>
  );
}
