"use client";
import Particles from "../components/Particles";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-transparent relative">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="max-w-4xl text-center space-y-6">
        {/* Title Animation */}
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-zinc-300 hover:text-zinc-100"
        >
          About Me
        </motion.h2>

        {/* Paragraphs Animation */}
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-lg text-zinc-500 hover:text-zinc-300 leading-relaxed"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore qui officiis laboriosam fuga, architecto reiciendis autem nostrum mollitia earum necessitatibus similique voluptatibus facere ullam assumenda animi. Amet aliquam in commodi!
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8 }}
          viewport={{ once: true }}
          className="text-lg text-zinc-500 hover:text-zinc-300 leading-relaxed"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore qui officiis laboriosam fuga, architecto reiciendis autem nostrum mollitia earum necessitatibus similique voluptatibus facere ullam assumenda animi. Amet aliquam in commodi!
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-lg text-zinc-500 hover:text-zinc-300 leading-relaxed"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore qui officiis laboriosam fuga, architecto reiciendis autem nostrum mollitia earum necessitatibus similique voluptatibus facere ullam assumenda animi. Amet aliquam in commodi!
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.2 }}
          viewport={{ once: true }}
          className="text-lg text-zinc-500 hover:text-zinc-300 leading-relaxed"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore qui officiis laboriosam fuga, architecto reiciendis autem nostrum mollitia earum necessitatibus similique voluptatibus facere ullam assumenda animi. Amet aliquam in commodi!
        </motion.p>
      </div>
    </div>
  );
}
