import { useState } from "react";
import { products } from "./products";
import { motion } from "framer-motion";
import GoldParticles from "./GoldParticles";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden p-6">

      <GoldParticles />

      <nav className="flex justify-between items-center mb-10 p-4 bg-gradient-to-r 
        from-yellow-600 to-yellow-400 text-black font-bold rounded-xl shadow-xl z-50">
        <h1 
          className="text-3xl font-extrabold drop-shadow-lg cursor-pointer"
          onClick={() => navigate("/")}
        >
          Adnaney’s Luxury Watches ⚜️
        </h1>
        <p 
          onClick={() => navigate("/checkout")}
          className="text-lg font-semibold cursor-pointer hover:text-yellow-800"
        >
          Cart: {cart.length}
        </p>
      </nav>

      <motion.h2
        className="text-2xl font-bold text-yellow-400 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Premium Watch Collection
      </motion.h2>

      {/* ⭐ FIXED PRODUCT CLICK */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 z-20">
        {products.map((item) => (
          <motion.div
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}  // ⭐ Add this line
            className="relative group p-5 bg-gray-900 border border-yellow-600 
              rounded-xl shadow-xl hover:shadow-yellow-500/40 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />

            <h3 className="text-lg font-semibold mt-3 text-yellow-300">
              {item.name}
            </h3>
            <p className="text-gray-300 mb-2">₹ {item.price}</p>

            <button
              onClick={(e) => {
                e.stopPropagation();  // Prevent navigation
                addToCart(item);
              }}
              className="mt-3 px-4 py-2 bg-yellow-500 text-black font-bold rounded-lg 
                hover:bg-yellow-600 transition"
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
