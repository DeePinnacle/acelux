"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Scale } from "lucide-react";
const AboutSection = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <section className="w-full py-6 px-2 flex flex-col items-center justify-center bg-white" id="about">
      <div className="about-container">
        <div className="about-content lg:order-last">
          <h1 className="about-header">
            About <span>Acelux</span>{" "}
          </h1>
          <p id="p-subheader">Who we are</p>
          <motion.p
            initial={{
              opacity: 0,
              y: "120%",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.5,
            }}
            viewport={{
              once: true,
            }}
            className="p-content"
          >
            Ace Lux was born from a passion for redefining footwear. We believe
            shoes are more than just a necessity—they&apos;re a statement of who
            you are. Every pair of Ace Lux shoes is meticulously crafted using
            premium materials and innovative techniques, ensuring a perfect
            balance of style, durability, and comfort.
          </motion.p>
          <motion.p
            initial={{
              opacity: 0,
              y: "120%",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.5,
            }}
            viewport={{
              once: true,
            }}
            className="p-content"
          >
            From classic designs to modern trends, we aim to elevate your
            wardrobe with footwear that speaks luxury in every step. Whether
            you&apos;re stepping into a boardroom, walking down a city street,
            or attending a special occasion, Ace Lux is with you every step of
            the way.
            <br />
            <span className="text-2xl text-acetext font-dancingScript my-2 md:text-4xl lg:text-xl">
              Our Story: Crafted for Elegance, Built for Comfort
            </span>
            <br />
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
              y: "120%",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.7,
            }}
            viewport={{
              once: true,
            }}
          >
            <Link
              href={"wa.me/2348026043410"}
              className="btn-style group"
              onMouseEnter={() => {
                setIsHover(true);
              }}
              onMouseLeave={() => {
                setIsHover(false);
              }}
            >
              <motion.div
                animate={{
                  scale: isHover ? 100 : 1,
                  backgroundColor: isHover ? "#BF6C00" : "#0E0F21",
                  Color: "#000000",
                }}
                transition={{
                  ease: "easeIn",
                }}
                viewport={{
                  once: true,
                }}
                className="btn-hover-bg"
              ></motion.div>
              Contact us
            </Link>
          </motion.div>
        </div>
        <AnimatePresence>
          <motion.div
            initial={{
              opacity: 0,
              y: 200,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.7,
            }}
            viewport={{
              once: true,
            }}
            className="about-image"
          >
            <div className="image-wrapper">
              <div className="img-1-wrapper">
                <Image
                  src={"/pic.jpeg"}
                  alt="shoe-image"
                  fill
                  priority
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="img-2-wrapper grid grid-rows-2 gap-2">
                <div className="relative w-full overflow-hidden rounded-lg">
                  <Image
                    src={"/slide1.jpeg"}
                    alt="slide-shoe-image"
                    fill
                    priority
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>{" "}
                <div className="relative w-full overflow-hidden rounded-lg">
                  <Image
                    src={"/slide1.jpeg"}
                    alt="slide-shoe-image"
                    fill
                    priority
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutSection;
