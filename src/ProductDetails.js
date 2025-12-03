import { useParams, useNavigate } from "react-router-dom";
import { products } from "./products";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import GoldParticles from "./GoldParticles";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="h-screen bg-black text-yellow-400 flex justify-center items-center">
        <h1 className="text-3xl">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black text-white p-6">
      <GoldParticles />

      <button
        onClick={() => navigate("/app")}
        className="px-5 py-2 bg-yellow-500 text-black font-bold rounded-lg mb-6 z-50"
      >
        ← Back
      </button>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12">

        <motion.img
          src={product.img}
          className="w-80 h-80 object-cover rounded-xl shadow-xl border-4 border-yellow-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        />

        <motion.div
          className="max-w-md bg-gray-900 p-6 rounded-xl border border-yellow-600 shadow-xl"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-3xl font-bold text-yellow-400">{product.name}</h1>

          <p className="text-lg mt-4 text-gray-300">₹ {product.price}</p>

          <p className="mt-4 text-gray-400">
            ★ A masterpiece crafted for luxury lovers. 100% authentic certified.
          </p>

          <button
            onClick={() => addToCart(product)}
            className="mt-6 px-5 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600"
          >
            Add to Cart
          </button>

        </motion.div>
      </div>
    </div>
  );
}

