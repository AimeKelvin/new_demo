"use client";
import Theme from "./components/Theme";
import Particles from "./components/Particles";
import { motion } from "framer-motion";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="relative min-h-screen p-0 font-[family-name:var(--font-geist-sans)]">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <Theme />

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4 }}
        className="flex justify-center items-center min-h-screen"
      >
        <div className="text-center">
          <h1 className="font-bold text-9xl">
            Aimé Kelvin
          </h1>
          <p className="sm:text-2xl max-w-lg mx-auto text-gray-300 text-sm">
            Web developer & Solo entrepreneur
          </p>
        </div>
      </motion.div>
    </div>
  );
}
