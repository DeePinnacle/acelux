"use client";
import React from "react";
// import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = () => {
  return (
    // <AnimatePresence>
    // </AnimatePresence>
    <motion.div
      // initial={{
      //   opacity: 1,
      //   x: "100vw"
      // }}
      exit={{
        scale: 0,
        y: "50%",
        transition: {
          duration: 0.4,
        },
      }}
      className="w-full min-h-screen bg-[#050505e3] bg-blend-darken flex flex-col items-center justify-center"
    >
      {/* <motion.div 
          initial={{
            opacity: 0,
            scale: 0,
            y: -400
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          transition={{
            delay: 0.5,
            duration: 3,
            ease: "easeIn"
          }}
          className="relative w-60 h-60 rounded-full -top-14">
          <Image
            src={"/file.png"}
            alt="ace-lux-logo"
            fill
            priority
            objectFit="center"
            objectPosition="center"
            className="scale-125"
          />
        </motion.div> */}
      <motion.p
        initial={{
          opacity: 0,
          scale: 0,
          y: -400,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          delay: 0.5,
          duration: 3,
          ease: "easeIn",
        }}
        className="ace-logo"
      >
        Acelux
      </motion.p>
      <motion.p
        initial={{
          opacity: 0,
          scale: 0,
          x: "100vw",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        transition={{
          delay: 1,
          duration: 3,
          ease: "easeIn",
        }}
        className="relative -top-14 text-[gray] mt-12 font-jost text-3xl font-extralight md:text-5xl"
      >
        Ace Your Look, Lux Your Life.
      </motion.p>
    </motion.div>
  );
};

export default SplashScreen;
