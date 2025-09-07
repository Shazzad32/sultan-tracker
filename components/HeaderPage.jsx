"use client";
import React from "react";
import { motion } from "framer-motion";
import GraphemeSplitter from "grapheme-splitter";

const HeaderPage = () => {
  const text = "গাড়ি চুরির ভয় SULTAN TRACKER থাকলে আর নয়!";

  const splitter = new GraphemeSplitter();
  const chars = splitter.splitGraphemes(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 p-4">
      <img
        src="https://sultantracker.com/static/media/logo.ffc7a59c.svg"
        alt="logo"
        className="h-[70px] w-[200px]"
      />
      <motion.div
        className="lg:text-4xl text-2xl font-extrabold text-center p-4 lg:w-[80%] w-[95%]"
        // variants={container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {chars.map((char, index) => (
          <motion.span
            key={index}
            animate={{ y: [0, -5, 0, 5, 0] }} // উপরে নিচে যাবে
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.05, // stagger effect
            }}
            className={
              char.trim() === ""
                ? "inline-block w-2"
                : "inline-block " +
                  ("SULTAN  TRACKER".includes(char)
                    ? "text-white"
                    : "text-[#fd781e]")
            }
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>

      <div className="lg:w-[80%] full  shadow-md text-[16px]  text-white rounded-b-md lg:text-2xl sm:text-xl font-extrabold p-4 text-center flex flex-col items-center justify-center">
        <h1>গাড়ি হারিয়ে গেলে আফসোস নয়, আগেই থাকুন নিরাপদ</h1>{" "}
        <h1>সুলতান ট্র্যাকার থাকলে চোরের খবর পেয়ে যাবেন এক ক্লিকেই!</h1>
      </div>
    </div>
  );
};

export default HeaderPage;
