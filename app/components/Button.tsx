import { motion } from "framer-motion";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ title, onClick, className = "" }: ButtonProps) {
  return (
    <motion.button
    className={`py-2 px-6 rounded-lg transition-transform duration-300 border-2 border-black text-black bg-transparent hover:border-gray-800 hover:text-gray-800  mt-4 dark:border-zinc-400 dark:text-zinc-400 ${className}`}
    whileHover={{ scale: 1.18 }}
    whileTap={{ scale: 0.95 }}
    initial={{ y: "100%" }} 
    animate={{ y: 0 }}      
    transition={{ duration: 0.7 }}
    onClick={onClick}
  >
    {title}
  </motion.button>
  


  );
}
