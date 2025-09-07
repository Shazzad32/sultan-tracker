"use client";
import React from "react";
import { dddd } from "../data";
import { motion } from "framer-motion";

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const WhyBuy = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      {/* Title with pulse animation */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="lg:text-4xl text-xl lg:w-[80%] w-[95%] rounded-md p-6 text-center font-extrabold text-white bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 shadow-lg"
      >
        আমাদের কাছ থেকেই কেন নিবেন ?
      </motion.div>

      {/* Card list with stagger effect */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-4 lg:w-[80%] w-[95%]"
      >
        {dddd.map((item, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 8px 25px rgba(0,0,0,0.2)",
            }}
            className="flex items-start p-4 rounded-xl bg-white shadow-md gap-3 border-l-4 border-orange-500"
          >
            {/* Bouncing arrow */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-red-500 mt-1 text-xl"
            >
              👉
            </motion.div>
            <div className="text-justify">{item.description}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WhyBuy;
