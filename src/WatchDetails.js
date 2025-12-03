import { useParams } from "react-router-dom";
import { products } from "./products";
import { motion } from "framer-motion";

function WatchDetails() {
  const { id } = useParams();
  const item = products.find((p) => p.id === parseInt(id));

  return (
    <div className="p-10">
      <motion.h1 
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {item.name}
      </motion.h1>

      <motion.img
        src={item.img}
        className="w-1/2 rounded-xl shadow-xl mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      />

      <p className="text-2xl font-semibold mb-4">Price: ₹ {item.price}</p>

      <p className="text-gray-600 max-w-xl mb-6">
        This is a premium luxury watch, crafted with high precision 
        and an iconic design. Engineered for collectors who appreciate 
        craftsmanship, detail and elegance.
      </p>

      <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
        Buy Now
      </button>
    </div>
  );
}

export default WatchDetails;
