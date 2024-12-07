"use client";
import Particles from "../components/Particles";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../components/Button";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-transparent relative">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="max-w-4xl text-center space-y-6">
        
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-zinc-600 py-5 dark:text-zinc-300"
        >
          About Me
        </motion.h2>

        
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-lg text-zinc-500  leading-relaxed relative"
        >
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out relative ${
              expanded ? "max-h-[1000px]" : "max-h-[150px]"
            }`}
          >
            <p>
              In 2018, I embarked on my journey into software development, initially honing my skills through <strong>Free Code Camp</strong> before delving into a software training bootcamp known as <strong>ATLP</strong>, facilitated by <strong>Andela Rwanda</strong>.
            </p>
            <p>
              Fast forward to today, I boast over 5 years of immersive experience as a Web & Mobile Engineer. Throughout my career, I've collaborated with various engineering firms, contributing my expertise to diverse projects. Checkout my experience section.
            </p>
            <p>
              Among my notable achievements is the creation of <strong>Sinc</strong>, an innovative event ticketing platform, in collaboration with my Co-Founders. Sinc has significantly transformed and enhanced the events industry landscape in Rwanda.
            </p>
            <p>
              Beyond coding, I am passionate about expanding my knowledge in Cyber Security. During my leisure time, you can find me indulging in pool table, socializing with friends, or immersing myself in the vibrant events scene, often facilitated by Sinc.
            </p>
          </div>
        
          {!expanded && (
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-transparent to-transparent pointer-events-none"></div>
          )}

          
        <Button 
        onClick={() => setExpanded(!expanded)}
        title={expanded ? "Read Less" : "Read More"}
        className="light:text-black light:border-black"
        />
        </motion.div>

      </div>
    </div>
  );
}



