import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import GoldParticles from "./GoldParticles";

export default function Landing() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const watches = [
    "/watches/float1.jpeg",
    "/watches/float2.webp",
    "/watches/float3.webp",
    "/watches/float4.jpeg",
    "/watches/float5.jpeg",
    "/watches/float6.jpeg",
  ];

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center bg-black text-white">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-4xl font-bold text-yellow-400"
        >
          Loading Adnaney’s Watch Shop...
        </motion.h1>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">

      <GoldParticles />

      {/* FIXED LOGIN BUTTON (z-50 added) */}
      <button
        onClick={() => navigate("/login")}
        className="absolute top-6 right-6 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 
        text-black font-bold rounded-lg shadow-lg transition-all z-50"
      >
        Login
      </button>

      {/* FLOATING WATCHES */}
      {watches.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          alt="floating watch"
          className="absolute w-40 opacity-30 pointer-events-none"
          style={{
            top: `${20 + i * 8}%`,
            left: `${10 + i * 12}%`,
          }}
          animate={{
            x: mousePos.x / 30,
            y: mousePos.y / 30,
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* CENTER TEXT */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 z-40">
        <motion.h1
          className="text-5xl font-bold text-yellow-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Adnaney’s Watch Shop
        </motion.h1>

        <motion.p
          className="mt-4 text-lg text-gray-300 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          Founded in 2004 by Adnan — a visionary collector with passion for luxury
          watches. Award-winning dealer in authentic timepieces.Established in 2004 by Adnan, whose
           lifelong devotion to horology shaped a legacy of excellence.Today
         we stand as an internationally acclaimed source for certified luxury and vintage timepieces.

        </motion.p>

        <motion.p
          className="mt-4 text-md text-yellow-300 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
        >
          "A luxury timepiece is not bought — it is earned."
        </motion.p>
      </div>
    </div>
  );
}
