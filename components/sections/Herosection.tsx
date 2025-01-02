"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { items } from "@/data/data";
import { AnimatedTooltip } from "../ui/animated-tooltips";
import Link from "next/link";
const Herosection = () => {
  return (
    <section className="hero-container" id="home">
      <div className="w-full mt-5 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-2">
        <div className="text-container">
          <motion.h1
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 2,
              ease: "easeIn",
            }}
            className="font-PoiretOne font-semibold text-7xl text-[#BF6C00] md:text-8xl lg:text-8xl lg:font-jost lg:font-semibold"
          >
            Luxury That Fits Your Every Step
          </motion.h1>
          <motion.p
            initial={{
              x: "-100%",
              opacity: 0,
              scale: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
            className="mt-6 text-gray-300 text-lg md:text-2xl md:leading-relaxed lg:text-base lg:leading-loose lg:my-10"
          >
            Discover footwear crafted for comfort and designed for elegance. At
            Ace Lux, every pair is a blend of timeless style and unmatched
            craftsmanship, perfect for every step you take. Whether you&pos;re
            dressing up for a special occasion or stepping out for everyday
            adventures, we&apos;ve got you covered.
          </motion.p>
          <p></p>
          <motion.div
            initial={{
              opacity: 0,
              y: "150%",
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 2.5,
              ease: "linear",
            }}
            className="my-8 flex flex-row items-center gap-6"
          >
            <Button asChild className="bg-transparent h-14 text-acetext text-lg border border-solid border-[#BF6C00] hover:bg-transparent md:h-16 md:text-2xl lg:text-base lg:h-14">
              <Link href={"wa.me/2348026043410"}>Contact us</Link>
            </Button>
            <Button className="bg-transparent h-14 text-acetext text-lg border border-solid border-[#BF6C00] hover:bg-transparent md:h-16 md:text-2xl lg:text-base lg:h-14">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: 200
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 2.2,
            ease: "easeIn"
          }}
          viewport={{
            once: true
          }}
          className="image-container"
          data-text="Acelux"
        >
          <div className="relative -top-40 w-full h-96 md:h-[37.5rem] lg:p-8 lg:h-[32rem]">
            <Image
              src={"/shoe1.png"}
              alt="shoe.png"
              fill
              priority
              objectFit="cover"
              objectPosition="center"
              className="-scale-x-100"
            />
          </div>
          <div className="flex flex-row items-center my-4 w-full lg:relative lg:-top-32 lg:left-8">
            <AnimatedTooltip items={items} />
          </div>
          <div className="flex flex-row items-center gap-4 lg:relative lg:-top-28 lg:left-8">
            <div className="h-32 bg-[#0E0F21] rounded-lg p-2">
              <p className="font-jost text-white text-6xl">150+</p>
              <p className="font-Sacramento text-white text-5xl">Customers</p>
            </div>{" "}
            <div className="w-36 h-32 bg-[#0E0F21] rounded-lg p-2">
              <p className="font-jost text-white text-6xl">1K+</p>
              <p className="font-Sacramento text-white text-5xl">Shoes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;
