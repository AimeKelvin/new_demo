"use client";
import Particles from "../components/Particles";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"

const Skills = () => {
  const marquee = [
    "/html.svg",
    "/js.svg",
    "/ts.svg",
    "/react.svg",
    "/tailwind.svg",
    "/next.svg",
    "/node.svg",
    "/mongo.svg",
    "/firebase.svg",
    "/php.svg",
    "/python.svg",
  ];

  return (
    <div className="container mx-auto overflow-hidden py-6 relative">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      
      {/* Glassmorphism Effect on both sides of the marquee */}
      <div className="absolute inset-y-0 left-0 w-1/12 bg-transparent backdrop-blur-lg z-10" />
      <div className="absolute inset-y-0 right-0 w-1/12 bg-transparent backdrop-blur-lg z-10" />

      <div className="flex relative">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 30, // Smoother and slower animation
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Marquee Items */}
          {marquee.map((image, index) => (
            <Image 
            src={image}
            key={index}
            alt="icon"
            width={96} 
            height={48}  
            className="object-contain"
            />
          ))}
          
          {/* Clone Items to create continuous loop */}
          {marquee.map((image, index) => (
            <Image 
            src={image} 
            key={index} 
            alt="icon" 
            width={96} 
            height={48} 
            className="object-contain" 
          />
          ))}

          {/* Add additional clones for a longer seamless effect */}
          {marquee.map((image, index) => (
            <Image 
            src={image}
            key={index}
            alt="icon"
            width={96} 
            height={48} 
            className="object-contain"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
