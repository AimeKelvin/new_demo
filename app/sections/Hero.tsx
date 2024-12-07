"use client";

import Particles from "../components/Particles";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
    
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4 }}
        className="flex justify-center items-center min-h-screen pt-20" 
      >
        <div className="text-center">
          <h1 className="font-bold text-9xl">Aimé Kelvin</h1>
          <p className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
            Web developer & Solo entrepreneur
          </p>
        </div>
      </motion.div>
    </div>
  );
}
