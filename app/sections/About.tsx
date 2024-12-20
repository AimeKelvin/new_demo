"use client";
import Particles from "../components/Particles";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../components/Button";

export default function About() {
  const [expanded, setExpanded] = useState<boolean>(false); // Ensure the type is boolean

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-transparent relative px-4 sm:px-6 lg:px-8">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="max-w-4xl text-center space-y-6 w-full">
        
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-zinc-600 py-5 dark:text-zinc-300"
        >
          About Me
        </motion.h2>

        
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-zinc-500 leading-relaxed relative"
        >
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out relative ${
              expanded ? "max-h-[1000px]" : "max-h-[150px]"
            }`}
          >
           <p>
  My journey into web development began with <strong>FreeCodeCamp</strong>, where I dove into coding on my own, tackling challenges and building projects that laid the foundation for my career. After gaining confidence, I took my skills further by joining <strong>SOS Technical High School</strong>, where I met two amazing classmates who shared my passion for technology. Together, we <strong>founded Chroste Labs</strong> &mdash; a space where we could collaborate on innovative projects and make our mark in the tech world.
</p>

          </div>
        
          {!expanded && (
            <div className="absolute bottom-0 left-0 w-full h-17 bg-gradient-to-t from-transparent to-transparent pointer-events-none"></div>
          )}

          <Button 
            onClick={() => setExpanded(!expanded)}
            title={expanded ? "Read Less" : "Read More"}
            className="light:text-black light:border-black mt-4"
          />
        </motion.div>

      </div>
    </div>
  );
}
