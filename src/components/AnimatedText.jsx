import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, className = "", size = "text-4xl md:text-5xl lg:text-6xl", hoverColor = "text-primary", delay = 0, simpleFade = false }) => {
  const letters = text.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: simpleFade ? 0 : 0.05,
        delayChildren: delay
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: simpleFade ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: simpleFade ? 0.6 : 0.3
      }
    }
  };

  return (
    <motion.div 
      className={`flex flex-wrap ${size} ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="inline-block cursor-default"
          whileHover={{
            scale: 1.2,
            y: -5,
            color: hoverColor === "text-primary" ? "#006BB3" : "#FFFFFF",
            transition: { duration: 0.2 }
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText; 