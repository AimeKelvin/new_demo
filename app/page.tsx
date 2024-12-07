"use client";
import Theme from "./components/Theme";
import Particles from "./components/Particles";
import { motion } from "framer-motion";
import { Navbar } from "./components/Navbar"

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/" },
  { label: "Projects", href: "/" },
  { label: "Contact", href: "/" }
];

export default function Home() {
  return (
    <div className="relative min-h-screen p-0 font-[family-name:var(--font-geist-sans)]">
     
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
    

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4 }}
        className="flex justify-center items-center min-h-screen"
      >
        <div className="text-center">
        <Navbar links={links} >
        <Theme />
      </Navbar>

          <h1 className="font-bold text-9xl">
            Aimé Kelvin
          </h1>
          <p className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
            Web developer & Solo entrepreneur
          </p>
        </div>
      </motion.div>
    </div>
  );
}
