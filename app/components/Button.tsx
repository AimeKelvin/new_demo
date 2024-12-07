import { motion } from "framer-motion";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ title, onClick, className = "" }: ButtonProps) {
  return (
    <motion.button
      className={`py-2 px-6 rounded-lg transition-transform duration-300 ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ y: "100%" }} // Start from the top (off-screen)
      animate={{ y: 0 }}      // Move to the center (its normal position)
      transition={{ duration: 3 }}
      onClick={onClick}
    >
      {title}
    </motion.button>
  );
}
