"use client";
import React from "react";
import { whyChooseUsContent } from "@/data/data";
import { motion } from "framer-motion";
const ChooseUs = () => {
  const animationVariants = {
    initial: {
      y: 200,
      opacity: 0,
    },
    animate: (idx: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.05 * idx,
        duration: 2
      },
    }),
  };
  return (
    <section className="gen-container">
      <p className="font-jost text-xl my-2 md:text-3xl">Why choose us</p>
      <h1 className="font-jost text-4xl md:text-6xl lg:text-2xl">Experience Luxury, Redefind🥇</h1>
      <p className="my-1 text-xl font-Sofia md:text-4xl lg:text-base">
        Discover why Ace Lux is the perfect blend for style, comfort, and
        sustainability.
      </p>
      <div className="gen-wrapper">
        <div className="my-8 lg:grid lg:grid-cols-3 lg:gap-4">
          {whyChooseUsContent?.map((item, idx) => (
            <motion.div
              variants={animationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true
              }}
              custom={idx}
              key={item.id}
              className="perspective"
            >
              <div
                className={`
                      hover-effect
                      w-full px-2 py-10 my-6 bg-[#F7B806]/20 min-h-96 rounded-md shadow-2xl shadow-[#F7B806]/50
                      md:h-[35rem] md:my-8 lg:h-[25rem] lg:my-4
                      `}
              >
                <div className="w-20 h-20 bg-[#F7B806]/20 mx-auto mb-3 flex flex-col items-center justify-center rounded-2xl md:w-32 md:h-32 lg:w-20 lg:h-20">
                  {<item.icon size={50} className="md:w-32 lg:w-16" />}
                </div>
                <p className="text-center my-8 text-3xl font-jost md:text-5xl lg:text-xl">
                  {item.title}
                </p>
                <p className="text-center md:text-2xl lg:text-base">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
